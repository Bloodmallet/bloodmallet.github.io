var loaded = false;
var loaded_done = 0;
var loaded_expectation = 0;


var simulated_data = {};
var simulated_ilevels = [];
var last_simulation = "PLACEHOLDER Date - SimC Build (If you can read this, the JSON import might've not worked or is slow.)";

var wow_classes_specs = [
  [
    "death_knight", [
      "blood",
      "frost",
      "unholy",
    ],
    "#C41F3B"
  ],
  [
    "demon_hunter", [
      "havoc",
    ],
    "#A330C9"
  ],
  [
    "druid", [
      "balance",
      "feral",
      "guardian",
    ],
    "#FF7D0A"
  ],
  [
    "hunter", [
      "beast_mastery",
      "marksmanship",
      "survival",
    ],
    "#ABD473"
  ],
  [
    "mage", [
      "arcane",
      "fire",
      "frost",
    ],
    "#69CCF0"
  ],
  [
    "monk", [
      "brewmaster",
      "windwalker",
    ],
    "#00FF96"
  ],
  [
    "paladin", [
      "protection",
      "retribution",
    ],
    "#F58CBA"
  ],
  [
    "priest", [
      "shadow",
    ],
    "#FFFFFF"
  ],
  [
    "rogue", [
      "assassination",
      "outlaw",
      "subtlety",
    ],
    "#FFF569"
  ],
  [
    "shaman", [
      "elemental",
      "enhancement",
    ],
    "#0070DE"
  ],
  [
    "warlock", [
      "affliction",
      "demonology",
      "destruction",
    ],
    "#9482C9"
  ],
  [
    "warrior", [
      "arms",
      "fury",
    ],
    "#C79C6E"
  ],
];

var fight_styles = [
  "patchwerk",
  "beastlord",
];

var chart;


// add listener after document finished loading
document.addEventListener("DOMContentLoaded",
  function () {
    //console.log("Page was loaded.");
    document.getElementById("load_data_button").addEventListener("click", trigger_loading);
  }
);

/**
 * Triggers loading animation and load of all json data.
 */
function trigger_loading() {
  document.getElementById("load_data_button").removeEventListener("click", trigger_loading);
  loading("Loading...");

  // Load all data of all fight styles and specs
  for (var i = 0; i < fight_styles.length; i++) {
    simulated_data[fight_styles[i]] = {};
    for (var j = 0; j < wow_classes_specs.length; j++) {
      for (var k = 0; k < wow_classes_specs[j][1].length; k++) {
        //data is saved in load_JSON using the simulated_data variable
        load_JSON(fight_styles[i], wow_classes_specs[j][0], wow_classes_specs[j][1][k]);
        loaded_expectation++;
      }
    }
  }
  wait_for_load();
}

/**
 * Replace Load Data button text with argument, if loaded isn't done yet.
 *
 * @param      {string}  argument  "Loading..."
 */
function loading(argument) {

  if (!loaded) {
    document.getElementById("load_data_button").innerHTML = argument;
    document.getElementById("load_data_status").innerHTML = loaded_done + "&nbsp;/&nbsp;" + loaded_expectation;
    if (argument == "Loading...") {
      setTimeout(function () { loading("Loading..|"); }, 750);

    } else if (argument == "Loading|..") {
      setTimeout(function () { loading("Loading..."); }, 750);

    } else if (argument == "Loading.|.") {
      setTimeout(function () { loading("Loading|.."); }, 750);

    } else if (argument == "Loading..|") {
      setTimeout(function () { loading("Loading.|."); }, 750);

    } else {
      console.log("Somehow the loop for the \"Loading...\" button broke.");
    }
  }
}

/**
 * Load and add the data of a json.
 *
 * @param      {string}  fight_style  The fight style
 * @param      {string}  wow_class    The wow class
 * @param      {string}  wow_spec     The wow specifier
 */
function load_JSON(fight_style, wow_class, wow_spec) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");

  xobj.open('GET', "json/" + wow_class + "_" + wow_spec + "_" + fight_style + ".json", true);

  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      var parsed_response = JSON.parse(xobj.responseText);
      //console.log(JSON.parse(xobj.responseText));
      simulated_data[fight_style][wow_class + "_" + wow_spec] = parsed_response.trinkets;
      //console.log(simulated_data);
      simulated_ilevels = parsed_response["Simulated itemlevels"];
      //console.log(simulated_ilevels);
      if (parsed_response["subtitle"]) {
        last_simulation = parsed_response["subtitle"];
      }
      //console.log(last_simulation);
      loaded_done++;
    }
  };
  xobj.send(null);
}


/**
 * Wait for the data load to finish, start menu.
 */
function wait_for_load() {
  if (loaded_done != loaded_expectation) {
    //if (loaded_done < 36 ) {
    setTimeout(wait_for_load, 250);
  } else {
    loaded = true;
    document.getElementById("load_data_button").style.display = "none";
    document.getElementById("load_data_status").style.display = "none";
    fill_menu();
  }
}


/**
 * Populate select forms with data. Create base chart.
 */
function fill_menu() {
  // create an array of all trinket names except for "baseline"
  var trinket_list = [];
  for (spec in simulated_data["patchwerk"]) {
    //console.log(spec);
    for (trinket in simulated_data["patchwerk"][spec]) {
      //console.log(trinket);
      if (trinket_list.indexOf(trinket) == -1 && trinket != "baseline") {
        trinket_list.push(trinket);
      }
    }
  }
  // sort trinket name array
  trinket_list.sort();
  //console.log(trinket_list);

  // fill trinket options with trinket array
  var trinket_choice = document.getElementById("trinket_choice");
  for (trinket in trinket_list) {
    var option = document.createElement("option");
    option.innerHTML = trinket_list[trinket];
    option.value = trinket_list[trinket];
    trinket_choice.appendChild(option);
  }

  // add change event to the trinket options
  trinket_choice.addEventListener("change", function () {
    reload_chart();
  });

  // fill fight_style options
  var fight_style_choice = document.getElementById("fight_style_choice");
  for (fight_style in fight_styles) {
    var option = document.createElement("option");
    option.innerHTML = fight_styles[fight_style][0].toUpperCase() + fight_styles[fight_style].substring(1, fight_styles[fight_style].length);
    option.value = fight_styles[fight_style];
    fight_style_choice.appendChild(option);
  }

  // add change event to the fight_style options
  fight_style_choice.addEventListener("change", function () {
    reload_chart();
  });

  // add all simulated itemlevels
  var itemlevel_choice = document.getElementById("itemlevel_choice");
  for (itemlevel in simulated_ilevels) {
    var option = document.createElement("option");
    option.innerHTML = simulated_ilevels[itemlevel];
    option.value = simulated_ilevels[itemlevel];
    //console.log(option.value);
    itemlevel_choice.appendChild(option);
  }

  // add change event to itemlevels
  itemlevel_choice.addEventListener("change", function () {
    reload_chart();
  });

  // make all three elements visible
  trinket_choice.style.display = "block";
  fight_style_choice.style.display = "block";
  itemlevel_choice.style.display = "block";

  // create chart with deault values
  chart = Highcharts.chart('performance_root',
    {
      chart: {
        type: "bar"
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: false
          },
          point: {
            events: {
              click: function (event) { var chart = this.series.yAxis; chart.removePlotLine('helperLine'); chart.addPlotLine({ value: this.stackY, color: '#000', width: 2, id: 'helperLine', zIndex: 5, label: { text: this.series.name, align: 'left', verticalAlign: 'bottom', rotation: 0, y: -5 } }); }
            }
          },
          stacking: "normal"
        },
        series: {
          borderColor: "#151515",
        }
      },
      series: [
        {
          color: "#343434",
          data: [
            1,
          ],
          name: 1,
          showInLegend: false
        },
      ],
      subtitle: {
        text: last_simulation,
        useHTML: true,
      },
      title: {
        text: "Placeholder TRINKET",
      },
      tooltip: {
        enabled: false,
      },
      xAxis: {
        categories: [
          "Placeholder",
        ]
      },
      yAxis: {
        labels: {
          enabled: false
        },
        min: 0,
        stackLabels: {
          enabled: true,
          style: {
            textOutline: false,
          }
        },
        title: {
          text: "\u0394 Damage per second"
        }
      }
    });

  // trigger update function for chart
  reload_chart();
}


/**
 * Update all data of the chart according to current selection.
 */
function reload_chart() {
  // if the chart isn't visible, make it visible
  var chart_div = document.getElementById("performance_root");
  if (chart_div.style.display == "none") {
    chart_div.style.display = "block";
  }

  // get selected values for trinket, fight_style and itemlevel
  var trinket_field = document.getElementById("trinket_choice");
  var fight_style_field = document.getElementById("fight_style_choice");
  var itemlevel_field = document.getElementById("itemlevel_choice");
  var selected_trinket = trinket_field.options[trinket_field.selectedIndex].value;
  var selected_fight_style = fight_style_field.options[fight_style_field.selectedIndex].value;


  // prune itemlevels
  var trinket_found = false;
  var need_new_start_itemlevel = false;
  for (spec in simulated_data[selected_fight_style]) {
    if (!trinket_found && selected_trinket in simulated_data[selected_fight_style][spec]) {
      // deactivate all itemlevels that have a dps value of zero
      for (var i = 0; i < itemlevel_field.children.length; i++) {
        if (simulated_data[selected_fight_style][spec][selected_trinket][itemlevel_field.children[i].getAttribute("value")] == 0) {
          itemlevel_field.children[i].disabled = true;
          // special case if the previously selected itemlevel was deactivated
          if (i == itemlevel_field.selectedIndex) {
            //console.log("Selected itemlevel was disabled.");
            need_new_start_itemlevel = true;
          }
        } else {
          itemlevel_field.children[i].disabled = false;
        }
      }

      // change which itemlevel is selected to the first nondisabled one if the previous selected was disabled
      if (need_new_start_itemlevel) {
        for (var i = 0; i < itemlevel_field.children.length && need_new_start_itemlevel; i++) {
          if (!itemlevel_field.children[i].disabled) {
            itemlevel_field.children[i].selected = true;
            need_new_start_itemlevel = false;
          }
        }
      }

      // variable to scan trinket only in the first found spec that does have the trinket
      trinket_found = true;
    }
  }


  var selected_itemlevel = itemlevel_field.options[itemlevel_field.selectedIndex].value;

  // set title to the currently selected "trinket - Fight_style"
  chart.setTitle({ text: selected_itemlevel + " " + selected_trinket + " - " + selected_fight_style[0].toUpperCase() + selected_fight_style.substring(1, selected_fight_style.length) });

  // collect necessary trinket data
  var valid_specs = [];
  var trinket_data = {};  // { specname: normalized damage, }
  for (spec in simulated_data[selected_fight_style]) {
    if (selected_trinket in simulated_data[selected_fight_style][spec] && selected_itemlevel in simulated_data[selected_fight_style][spec][selected_trinket]) {
      valid_specs.push(spec);
      trinket_data[spec] = parseInt(simulated_data[selected_fight_style][spec][selected_trinket][selected_itemlevel]) - parseInt(simulated_data[selected_fight_style][spec]["baseline"][simulated_ilevels[simulated_ilevels.length - 1]]);
    }
  }
  valid_specs.sort();

  // update categories (spec names) without redrawing the chart
  chart.xAxis[0].setCategories(valid_specs, false);

  // delete all previous series
  while (chart.series.length > 0) {
    chart.series[0].remove(true);
  }

  for (spec in trinket_data) {
    var spec_colour = "";
    var class_name = "";
    var spec_data = [];

    // save colour and name of the wow_class
    for (wow_class in wow_classes_specs) {
      if (spec.startsWith(wow_classes_specs[wow_class][0])) {
        spec_colour = wow_classes_specs[wow_class][2];
        class_name = spec;
      }
    }

    // create series data (zero unless own specs value)
    for (var i = 0; i < valid_specs.length; i++) {
      if (i == valid_specs.indexOf(spec)) {
        spec_data.push(trinket_data[spec]);
      } else {
        spec_data.push(0);
      }
    }
    //console.log(spec_data);

    var series = {
      color: spec_colour,
      name: class_name,
      showInLegend: false,
      data: spec_data,
    };

    // add generated series data to chart without redrawing the chart
    chart.addSeries(series, false);
  }

  var new_height = 25 * valid_specs.length;
  if (new_height < 400) {
    new_height = 400;
  }
  chart_div.style.height = new_height + "px";
  chart.height = new_height;

  // resize and redraw with new values
  chart.setSize(chart.width, new_height);
}
