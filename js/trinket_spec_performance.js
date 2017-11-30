var loaded = false;
var loaded_done = 0;
var loaded_expectation = 0;


var simulated_data = {};
var simulated_ilevels = [];
var last_simulation = "PLACEHOLDER Date - SimC Build";

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
  function() {
    //console.log("Page was loaded.");
    document.getElementById("load_data_button").addEventListener("click", trigger_loading );
  }
);

function trigger_loading() {
  document.getElementById("load_data_button").removeEventListener("click", trigger_loading );
  loading("Loading...");

  // Load all data of all fight styles and specs
  for (var i = 0; i < fight_styles.length; i++) {
    simulated_data[fight_styles[i]] = {};
    for (var j = 0; j < wow_classes_specs.length; j++) {
      for (var k = 0; k < wow_classes_specs[j][1].length; k++) {
        //data is saved in load_JSON using the simulated_data variable
        load_JSON(fight_styles[i], wow_classes_specs[j][0], wow_classes_specs[j][1][k] );
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
      setTimeout(function() { loading("Loading..|"); }, 750);

    } else if (argument == "Loading|..") {
      setTimeout(function() { loading("Loading..."); }, 750);

    } else if (argument == "Loading.|.") {
      setTimeout(function() { loading("Loading|.."); }, 750);

    } else if (argument == "Loading..|") {
      setTimeout(function() { loading("Loading.|."); }, 750);

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
  var trinket_list = [];
  for (spec in simulated_data["patchwerk"]) {
    //console.log(spec);
    for (trinket in simulated_data["patchwerk"][spec]) {
      //console.log(trinket);
      if ( trinket_list.indexOf(trinket) == -1 && trinket != "baseline") {
        trinket_list.push(trinket);
      }
    }
  }
  trinket_list.sort();
  //console.log(trinket_list);
  var trinket_choice = document.getElementById("trinket_choice");
  for (trinket in trinket_list) {
    var option = document.createElement("option");
    option.innerHTML = trinket_list[trinket];
    option.value = trinket_list[trinket];
    trinket_choice.appendChild(option);
  }

  // add select event for both selects
  trinket_choice.addEventListener("change", function() {
    reload_chart();
  });

  var fight_style_choice = document.getElementById("fight_style_choice");
  for (fight_style in fight_styles) {
    var option = document.createElement("option");
    option.innerHTML = fight_styles[fight_style][0].toUpperCase() + fight_styles[fight_style].substring(1, fight_styles[fight_style].length);
    option.value = fight_styles[fight_style];
    fight_style_choice.appendChild(option);
  }

  fight_style_choice.addEventListener("change", function() {
    reload_chart();
  });

  var itemlevel_choice = document.getElementById("itemlevel_choice");
  for (itemelvel in simulated_ilevels) {
    var option = document.createElement("option");
    option.innerHTML = simulated_ilevels[itemelvel];
    option.value = simulated_ilevels[itemelvel];
    itemlevel_choice.appendChild(option);
  }

  itemlevel_choice.addEventListener("change", function() {
    reload_chart();
  });

  trinket_choice.style.display = "block";
  fight_style_choice.style.display = "block";
  itemlevel_choice.style.display = "block";

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
                      click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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

}


/**
 * Update all data of the chart according to current selection.
 */
function reload_chart() {
  var chart_div = document.getElementById("performance_root");
  if (chart_div.style.display == "none") {
    chart_div.style.display = "block";
  }

  var trinket_field = document.getElementById("trinket_choice");
  var fight_style_field = document.getElementById("fight_style_choice");
  var itemlevel_field = document.getElementById("itemlevel_choice");
  var selected_trinket = trinket_field.options[trinket_field.selectedIndex].value;
  var selected_fight_style = fight_style_field.options[fight_style_field.selectedIndex].value;
  var selected_itemlevel = itemlevel_field.options[itemlevel_field.selectedIndex].value;
  //console.log(selected_trinket);
  //console.log(selected_fight_style);

  // set title to the currently selected "trinket - Fight_style"
  chart.setTitle({ text: selected_itemlevel + " " + selected_trinket + " - " + selected_fight_style[0].toUpperCase() + selected_fight_style.substring(1, selected_fight_style.length) });

  // collect necessary trinket data
  // { specname: normalized damage, }
  var valid_specs = [];
  var trinket_data = {};

  for (spec in simulated_data[selected_fight_style]) {
    //console.log(spec);
    if (selected_trinket in simulated_data[selected_fight_style][spec] && selected_itemlevel in simulated_data[selected_fight_style][spec][selected_trinket]) {
      valid_specs.push(spec);
      //console.log(spec);
      //console.log(simulated_data[selected_fight_style][spec][selected_trinket][selected_itemlevel]);
      //console.log(simulated_ilevels[simulated_ilevels.length - 1]);
      //console.log(simulated_data[selected_fight_style][spec]["baseline"][simulated_ilevels[simulated_ilevels.length - 1]]);
      trinket_data[spec] = parseInt(simulated_data[selected_fight_style][spec][selected_trinket][selected_itemlevel]) - parseInt(simulated_data[selected_fight_style][spec]["baseline"][simulated_ilevels[simulated_ilevels.length - 1]]);
    }
  }
  valid_specs.sort();
  //console.log(trinket_data);
  //console.log(valid_specs);

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
      //console.log(spec);
      //console.log(wow_classes_specs[wow_class]);
      if (spec.startsWith(wow_classes_specs[wow_class][0])) {
        spec_colour = wow_classes_specs[wow_class][2];
        class_name = spec;
        //console.log(spec_colour);
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

    // add generated series data to chart
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

  ga('send', 'event', 'trinket_performance', selected_trinket);
}
