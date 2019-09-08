/*---------------------------------------------------------
//
//  Page states
//
---------------------------------------------------------*/

/* Variable intended for dev mode specific output/markings */
const debug = false;

/** visual modes
 *   hidden: hides these general elements
 *   shown: unhides these general elements */
const modes = {
  "welcome": {
    "hidden": [
      "data_container",
      "chart",
      "tc_resources",
      "copy_link",
      "copy_azerite_weights",
      "copy_azerite_forge"
    ],
    "shown": [
      "welcome_container",
      "spec_table"
    ]
  },
  "data": {
    "hidden": [
      "welcome_container",
      "spec_table",
    ],
    "shown": [
      "data_container",
      "tc_resources",
      "chart",
      "copy_link",
      "copy_azerite_weights",
      "copy_azerite_forge"
    ]
  }
};

let loaded_data = {};

let chosen_value_style = "absolute_gain";
let chosen_class = "";
let chosen_spec = "";
let chosen_talent_combination = "";
let chosen_azerite_list_type = "trait_stacking";
let chosen_step_list = []; // array to store the to-be-shown steps
let chosen_source_list = []; // array to store the to-be-shown sources
/**
 * Filter for trinkets by whether they are on Use (active) or not (passive).
 */
let chosen_activity = {
  "active": true,
  "passive": true
};
/**
 * Filter for essences
 */
let chosen_type = {
  "combined": true,
  "minor": true
};

let mode = "welcome";
let fight_style = "patchwerk";
let data_view = "trinkets";

let chosen_azerite_tier = 3;

let dark_mode = true;
let bloodyfiller = "mallet";

let language = "EN";
let loaded_languages = {};

/** translate defined IDs based on data */
const translation_IDs = [
  "translate_main_paragraph",
  "navbarSettingsMenu",
  "translate_dark_mode",
  "translate_faq",
  "translate_report_an_error",
  "translate_language"
];

/**
 * If content is used multiple times like class names or spec names, add a translation class to the class list.
 */
const translation_classes = [
  "translate_death_knight",
  "translate_demon_hunter",
  "translate_druid",
  "translate_hunter",
  "translate_mage",
  "translate_monk",
  "translate_paladin",
  "translate_priest",
  "translate_rogue",
  "translate_shaman",
  "translate_warlock",
  "translate_warrior",
  "translate_blood",
  "translate_frost",
  "translate_unholy",
  "translate_havoc",
  "translate_vengeance",
  "translate_balance",
  "translate_feral",
  "translate_guardian",
  "translate_beast_mastery",
  "translate_marksmanship",
  "translate_survival",
  "translate_arcane",
  "translate_fire", // frost is already further up, due to death knights
  "translate_brewmaster",
  "translate_windwalker",
  "translate_protection",
  "translate_retribution",
  "translate_shadow",
  "translate_assassination",
  "translate_outlaw",
  "translate_subtlety",
  "translate_elemental",
  "translate_enhancement",
  "translate_restoration",
  "translate_affliction",
  "translate_demonology",
  "translate_destruction",
  "translate_arms",
  "translate_fury",
  "translate_trinkets",
  "translate_azerite_traits",
  "translate_races",
  "translate_secondary_distributions",
  "translate_patchwerk",
  "translate_hecticaddcleave",
  "translate_itemlevel",
  "translate_trait_stacking",
  "translate_head",
  "translate_shoulders",
  "translate_chest",
  "translate_link_to_chart",
  "translate_link_was_copied_to_clipboard",
  "translate_dps_only_warning"
];

const data_view_IDs = [
  "show_trinkets_data", // => trinkets
  "show_essences_data", // => essences
  "show_azerite_traits_data", // => azerite_traits
  "show_races_data", // => races
  "show_secondary_distributions_data",
  "talent_combination_selector",
  "chart_type_essences",
  "chart_type_essence_combinations",
  "chart_type_itemlevel",
  "chart_type_trait_stacking",
  "chart_type_head",
  "chart_type_shoulders",
  "chart_type_chest",
  "advanced_chart_options_button"
];
const fight_style_IDs = [
  "fight_style_patchwerk",
  // "fight_style_beastlord",
  "fight_style_hecticaddcleave",
];
const azerite_trait_view_type_IDs = [
  "chart_type_head",
  "chart_type_shoulders",
  "chart_type_chest",
  "chart_type_itemlevel",
  "chart_type_trait_stacking",
];

const azerite_trait_tier_IDs = [
  "azerite_traits_tier_3",
  "azerite_traits_tier_2"
];

const chart_value_mode = {
  "relative_gain": {
    "axis": "% Damage per second"
  },
  "absolute_gain": {
    "axis": "\u0394 Damage per second"
  },
  "absolute_value": {
    "axis": "|x| Damage per second"
  }
}

const light_color = "#eeeeee";
const medium_color = "#999999";
const dark_color = "#343a40";

const font_size = "1.1rem";

const empty_chart = {
  chart: {
    type: "bar",
    backgroundColor: null,
    style: {
      fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\""
    }
    //borderColor: medium_color,
    //borderWidth: 1
  },
  colors: [
    "#7cb5ec",
    "#d9d9df",
    "#90ed7d",
    "#f7a35c",
    "#8085e9",
    "#f15c80",
    "#e4d354",
    "#2b908f",
    "#f45b5b",
    "#91e8e1"
  ],
  legend: {
    align: "right",
    backgroundColor: "",
    borderColor: medium_color,
    borderWidth: 1,
    floating: false,
    itemMarginBottom: 3,
    itemMarginTop: 0,
    layout: 'vertical',
    reversed: true,
    shadow: false,
    verticalAlign: "middle",
    x: 0,
    y: 0,
    itemStyle: {
      color: light_color,
      fontSize: font_size,
      fontWeight: "normal"
    },
    itemHoverStyle: {
      color: light_color,
    },
    title: {
      text: " ",
      style: {
        color: light_color,
        fontSize: font_size,
        fontWeight: "normal"
      }
    },
    symbolRadius: 0
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false,
      },
      point: {
        events: {
          click: function (event) {
            var chart = this.series.yAxis;
            chart.removePlotLine('helperLine');
            chart.addPlotLine({
              value: this.stackY,
              color: light_color,
              width: 2,
              id: 'helperLine',
              zIndex: 5,
              label: {
                text: this.series.name + ' ' + this.category,
                style: {
                  color: light_color,
                  fontSize: font_size,
                },
                align: 'left',
                verticalAlign: 'bottom',
                rotation: 0,
                y: -5
              }
            });
          }
        }
      },
    },
    series: {
      stacking: "normal",
      borderColor: dark_color,
      events: {
        legendItemClick: function () {
          return false;
        }
      },
      style: {
        textOutline: false,
        fontSize: font_size,
      }
    }
  },
  series: [
    {
      color: light_color,
      data: [
        1,
        1,
        3,
        1,
        3
      ],
      name: "b main",
      showInLegend: false
    },
    {
      color: dark_color,
      data: [
        0,
        0,
        0,
        1,
        0
      ],
      name: "b's emptiness",
      showInLegend: false
    }, {
      color: light_color,
      data: [
        0,
        0,
        0,
        1,
        0
      ],
      name: "b's finishing touch",
      showInLegend: false
    }
  ],
  subtitle: {
    text: "",
    useHTML: true,
    style: {
      color: light_color,
      fontSize: font_size
    }
  },
  title: {
    text: "", //"Title placeholder",
    useHTML: true,
    style: {
      color: light_color,
      fontSize: "1.2rem"
    }
  },
  tooltip: {
    formatter: function () {
      var s = '<div style="margin: -4px -6px -11px -7px; padding: 3px 3px 6px 3px; background-color:';
      if (dark_mode) {
        s += dark_color;
      } else {
        s += light_color;
      }
      s += '"><div class=\"anti-icon-space\" style=\"margin-left: 9px;margin-bottom: 6px; font-weight: 700;\">' + this.x + '</div>'
      var cumulative_amount = 0;
      let previous_step_amount = 0;
      let not_first_value = false;
      for (var i = this.points.length - 1; i >= 0; i--) {
        cumulative_amount += this.points[i].y;
        if (this.points[i].y !== 0) {
          s += '<div><span style=\"margin-left: 9px; border-left: 9px solid ' +
            this.points[i].series.color + ';' +
            ' padding-left: 4px;' +
            //' color: ' + this.points[i].series.color + ';' +
            //' font-weight: bold;' +
            //' text-shadow: 0px 0px 2px black;' +
            '\">' +
            this.points[i].series.name +
            '</span>:&nbsp;&nbsp;' +
            Intl.NumberFormat().format(cumulative_amount);

          if (chosen_value_style === "absolute_gain" || data_view === "races" || chosen_value_style === "absolute_value") {
            s += " dps";
          } else if (chosen_value_style === "relative_gain") {
            s += "%";
          }

          // add dmg increase compared to previous step
          if (previous_step_amount < cumulative_amount && not_first_value) {
            s += " (+";
            s += Intl.NumberFormat().format(cumulative_amount - previous_step_amount);
            if (chosen_value_style === "absolute_gain" || data_view === "races" || chosen_value_style === "absolute_value") {
              s += " dps";
            } else if (chosen_value_style === "relative_gain") {
              s += "%";
            }
            s += ")";
          }

          s += "</div>";
          not_first_value = true;
        }
        previous_step_amount += this.points[i].y;
      }
      s += '</div>';
      return s;
    },
    headerFormat: "<b>{point.x}</b>",
    shared: true,
    backgroundColor: dark_color,
    borderColor: medium_color,
    style: {
      color: light_color,
      fontSize: font_size,
    },
    useHTML: true,
    positioner: function (labelWidth, labelHeight, point) {
      // console.log(labelWidth, labelHeight, point);
      // console.log(standard_chart.plotLeft, standard_chart.plotTop);
      let y = point.plotY - labelHeight / 2 - 22;
      if (y < 0) {
        y = point.plotY + labelHeight / 2 + 18;
      }
      return { x: standard_chart.plotLeft, y: y };
    }
  },
  xAxis: {
    categories: [
      "b",
      "b",
      "b",
      "b",
      "b",
    ],
    labels: {
      useHTML: true,
      style: {
        color: light_color,
        fontSize: font_size,
      }
    },
    gridLineWidth: 0,
    gridLineColor: medium_color,
    lineColor: medium_color,
    tickColor: medium_color
  },
  yAxis: [{
    labels: {
      //enabled: true,
      style: {
        color: medium_color
      },
    },
    min: 0,
    //tickInterval: 1000,
    stackLabels: {
      enabled: true,
      formatter: function () {
        if (chosen_value_style === "absolute_gain" || data_view === "races") {
          return Intl.NumberFormat().format(this.total) + "";
        } else if (chosen_value_style === "relative_gain") {
          return Intl.NumberFormat().format(this.total) + "%";
        } else if (chosen_value_style === "absolute_value") {
          let data_name = data_view;
          if (data_view == "azerite_traits" && ["head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
            data_name += "_" + chosen_azerite_list_type;
          }
          let addition = "";
          try {
            let base_dps = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"]["baseline"][loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"][loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"].length - 1]];
            addition = "<br><span style=\"font-size: 0.7rem\">(+" + Intl.NumberFormat().format(this.total - base_dps) + " | +" + Intl.NumberFormat().format((this.total - base_dps) * 100 / this.total) + "%)</span>";
          } catch (error) {

          }
          return Intl.NumberFormat().format(this.total) + addition;
        }
      },
      style: {
        color: light_color,
        textOutline: false,
        fontSize: font_size,
        //fontWeight: "normal"
      }
    },
    title: {
      text: "\u0394 Damage per second",
      style: {
        color: medium_color
      }
    },
    gridLineWidth: 1,
    gridLineColor: medium_color
  }, {
    linkedTo: 0,
    labels: {
      //enabled: true,
      style: {
        color: medium_color
      },
    },
    min: 0,
    stackLabels: {
      enabled: true,
      formatter: function () {
        return Intl.NumberFormat().format(this.total);
      },
      style: {
        color: light_color,
        textOutline: false,
        fontSize: font_size,
        //fontWeight: "normal"
      }
    },
    title: {
      text: "\u0394 Damage per second",
      style: {
        color: medium_color
      }
    },
    gridLineWidth: 1,
    gridLineColor: medium_color,
    opposite: true
  }]
};

const standard_chart = Highcharts.chart('chart', empty_chart);

// invalid ilevels to use highcharts base colours but keep the old ones
const ilevel_color_table = {
  "445": "#7cb5ec",
  "430": "#d9d9df",
  "415": "#90ed7d",
  "400": "#f7a35c",
  "380": "#8085e9",
  "50": "#f15c80",
  "60": "#e4d354",
  "70": "#2b908f",
  "80": "#91e8e1"
};

const class_colors = {
  "death_knight": "#C41F3B",
  "demon_hunter": "#A330C9",
  "druid": "#FF7D0A",
  "hunter": "#ABD473",
  "mage": "#69CCF0",
  "monk": "#00FF96",
  "paladin": "#F58CBA",
  "priest": "#FFFFFF",
  "rogue": "#FFF569",
  "shaman": "#0070DE",
  "warlock": "#9482C9",
  "warrior": "#C79C6E",
};

const item_and_trait_equilizer = {
  "Battlefield Focus": "Battlefield Precision",
  // "Battlefield Precision": "Battlefield Focus",
  "Sylvanas' Resolve": "Anduin's Dedication",
  // "Anduin's Dedication": "Sylvanas' Resolve",
  "Glory in Battle": "Liberator's Might",
  // "Liberator's Might": "Glory in Battle",
  "Retaliatory Fury": "Last Gift",
  // "Last Gift": "Retaliatory Fury",
  "Collective Will": "Stand As One",
  // "Stand As One": "Collective Will",
  "Combined Might": "Stronger Together",
  // "Stronger Together": "Combined Might",
  "Doom's Hatred": "Lion's Grace",
  //"Lion's Grace": "Doom's Hatred",
  "Doom's Wake": "Lion's Guile",
  //"Lion's Guile": "Doom's Wake",
  "Doom's Fury": "Lion's Strength",
  //"Lion's Strength": "Doom's Fury"
}

var relative_azerite_forge_traits_stacking_import = false;
/*---------------------------------------------------------
//
//  Dark Mode
//
---------------------------------------------------------*/


/** add listener to the dark mode checkbox */
document.addEventListener("DOMContentLoaded", function () {
  if (debug) {
    console.log("addEventListener darkModeCheckbox");
  }
  document.getElementById("darkModeCheckbox").addEventListener("change", function (e) {
    dark_mode = e.target.checked;
    update_dark_mode();
    set_dark_mode_cookie();
  });
  if (debug) {
    console.log("addEventListener inconized_charts_checkbox");
  }
  document.getElementById("iconized_charts_checkbox").addEventListener("change", function (e) {
    whTooltips.iconizeLinks = e.target.checked;
    set_iconized_chart_cookie();
    $WowheadPower.refreshLinks();
  });

  document.getElementById("relative_azerite_forge").addEventListener("change", function (e) {
    relative_azerite_forge_traits_stacking_import = e.target.checked;
    set_relative_azerite_forge_import_cookie();
  });

});

/** Updates dark mode based on dark mode check box. */
function update_dark_mode() {
  if (debug)
    console.log("update_dark_mode");
  let primary_color;
  let secondary_color;
  if (dark_mode) {
    document.getElementsByTagName("body")[0].classList.remove("bg-light");
    document.getElementsByTagName("body")[0].classList.remove("text-dark");
    document.getElementsByTagName("body")[0].classList.add("bg-dark");
    document.getElementsByTagName("body")[0].classList.add("text-light");
    primary_color = light_color;
    secondary_color = dark_color;
  } else {
    document.getElementsByTagName("body")[0].classList.add("bg-light");
    document.getElementsByTagName("body")[0].classList.add("text-dark");
    document.getElementsByTagName("body")[0].classList.remove("bg-dark");
    document.getElementsByTagName("body")[0].classList.remove("text-light");
    primary_color = dark_color;
    secondary_color = light_color;
  }
  // update chart base colors
  standard_chart.update({
    legend: {
      backgroundColor: "",
      itemStyle: {
        color: primary_color,
      },
      itemHoverStyle: {
        color: primary_color,
        cursor: "auto"
      },
      title: {
        style: {
          color: primary_color
        }
      }
    },
    title: {
      style: {
        color: primary_color
      }
    },
    tooltip: {
      backgroundColor: secondary_color,
      style: {
        color: primary_color,
      },
    },
    subtitle: {
      style: {
        color: primary_color
      }
    },
    xAxis: {
      labels: {
        style: {
          color: primary_color
        }
      }
    },
    yAxis: [{
      stackLabels: {
        style: {
          color: primary_color
        }
      }
    }, {
      stackLabels: {
        style: {
          color: primary_color
        }
      }
    }]
  });

  scatter_chart.update({
    legend: {
      itemStyle: {
        color: primary_color,
      },
      itemHoverStyle: {
        color: primary_color,
      }
    },
    title: {
      style: {
        color: primary_color
      }
    },
    subtitle: {
      style: {
        color: primary_color
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          style: {
            color: primary_color
          }
        }
      }
    }
  });
}

/** save the current dark_mode value in a cookie */
function set_dark_mode_cookie() {
  if (debug) {
    console.log("set_dark_mode_cookie");
  }
  Cookies.set('bloodmallet_dark_mode', dark_mode, { expires: 31, path: '' });
}

/** searches for the dark mode cookie and updates the page if necessary */
function search_dark_mode_cookie() {
  if (debug) {
    console.log("search_dark_mode_cookie");
  }
  if (Cookies.get('bloodmallet_dark_mode')) {
    dark_mode = ('true' === Cookies.get('bloodmallet_dark_mode'));
  }
  document.getElementById("darkModeCheckbox").checked = dark_mode;
  update_dark_mode();
  set_dark_mode_cookie();
}


/*---------------------------------------------------------
 //
 //  How to present numbers in the charts
 //
---------------------------------------------------------*/
/** add listener to the dark mode checkbox */
document.addEventListener("DOMContentLoaded", function () {
  if (debug) {
    console.log("addEventListener value_style_selector");
  }
  document.getElementById("value_style_selector").addEventListener("change", function (e) {
    chosen_value_style = this.options[this.selectedIndex].value;
    set_value_style_cookie();
    //set_value_style();
    update_chart();
  });
  search_value_style_cookie();
});

/**
 * Adjusts axis titles of the standard chart. Called by update_chart(), too.
 */
function set_value_style() {
  if (debug) {
    console.log("set_value_style");
  }
  // get the translation options
  var html_elements = document.getElementById("value_style_selector").options;
  // de-select whatever language option was chosen
  html_elements[document.getElementById("value_style_selector").selectedIndex].selected = false;

  // select the new language in the settings based on data
  for (let index = 0; index < html_elements.length; index++) {

    const element = html_elements[index];
    if (element.value === chosen_value_style) {
      element.selected = true;
    }
  }

  if (mode === "data") {
    if (data_view !== "races") {
      standard_chart.update({
        yAxis: [
          { title: { text: chart_value_mode[chosen_value_style]["axis"] } },
          { title: { text: chart_value_mode[chosen_value_style]["axis"] } }
        ]
      });
    } else {
      standard_chart.update({
        yAxis: [
          { title: { text: chart_value_mode["absolute_gain"]["axis"] } },
          { title: { text: chart_value_mode["absolute_gain"]["axis"] } }
        ]
      });
    }
  } else {
    empty_chart.yAxis[0].title.text = chart_value_mode[chosen_value_style]["axis"];
    empty_chart.yAxis[1].title.text = chart_value_mode[chosen_value_style]["axis"];
  }
}

/**
 * save the current chosen_value_style value in a cookie
 */
function set_value_style_cookie() {
  if (debug) {
    console.log("set_value_style_cookie");
  }
  Cookies.set('bloodmallet_value_style', chosen_value_style, { expires: 31, path: '' });
}

/**
 * searches for the value_style cookie and updates the page if necessary
 */
function search_value_style_cookie() {
  if (debug) {
    console.log("search_value_style_cookie");
  }
  if (Cookies.get('bloodmallet_value_style')) {
    chosen_value_style = Cookies.get('bloodmallet_value_style');
  }
  set_value_style();
  update_chart();
  set_value_style_cookie();
}


/*---------------------------------------------------------
//
//  Reroll the patron defined message of the headline
//
---------------------------------------------------------*/
const patrons_epic = [
  {
    "name": "Tumi",
    "text": "Tumi"
  },
  {
    "name": "Xss",
    "text": "Xss"
  },
  {
    "name": "Djriff",
    "text": "DJ"
  }
];
const patrons_rare = [
  {
    "name": "Hekili",
    "text": "⚡"
  },
];
const patrons_uncommon = [
  {
    "name": "Fred",
    "text": "👻"
  },
  {
    "name": "Barokoshama",
    "text": "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"
  },
  {
    "name": "kaymancutoff",
    "text": "Keg Smash"
  },
  {
    "name": "tmb",
    "text": "HotS > LoL"
  }
];
const patrons = patrons_uncommon.concat(
  patrons_uncommon,
  patrons_rare,
  patrons_rare,
  patrons_rare,
  patrons_rare,
  patrons_rare,
  patrons_epic,
  patrons_epic,
  patrons_epic,
  patrons_epic,
  patrons_epic,
  patrons_epic,
  patrons_epic,
  patrons_epic,
  patrons_epic,
  patrons_epic
);

document.addEventListener("DOMContentLoaded", function () {
  if (debug)
    console.log("addEventListener bloodyfiller");
  // document.getElementById("bloodyfiller").addEventListener("click", randomize_bloodyfiller);
  document.getElementById("bloodyheadline").addEventListener("click", randomize_bloodypatrons);
  if (Math.floor(Math.random() * 2) > 0) {
    randomize_bloodypatrons();
  } else {
    document.getElementById("bloodyheadline").innerHTML = "bloodmallet";
  }
});

/**
 * Way to return the kindness of patrons.
 * Shows the patron defined message in the title.
 * And adds a tooltip with their wanted name.
 * bloody( message )
 *            T
 *         Tooltip
 */
function randomize_bloodypatrons() {
  if (debug) {
    console.log("randomize_bloodypatrons");
  }

  // if no element 'bloodypatrons' is present, update bloodyheadline
  let html_element = document.getElementById("bloodypatrons");

  if (html_element === null) {
    let helper = document.getElementById("bloodyheadline");
    helper.innerHTML = "bloody(&nbsp;<span id=\"bloodypatrons\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"Chosen by patron \"></span>&nbsp;)";
    html_element = document.getElementById("bloodypatrons");
  }

  // roll new patron message and name
  let old_content = html_element.innerHTML;
  let new_content = old_content;
  let roll = 0;
  while (new_content === old_content) {
    roll = Math.floor(Math.random() * patrons.length);
    new_content = patrons[roll]["text"];
  }

  // apply new name to tooltip
  try {
    $(function () {
      $('#bloodypatrons').tooltip('hide')
        .attr('data-original-title', 'Chosen by patron ' + patrons[roll]['name'])
        .tooltip('show');
    });
  } catch (error) {
    if (debug) {
      console.log(error);
    }
  }

  // apply new message
  html_element.innerHTML = new_content;

}


/*---------------------------------------------------------
//
//  Switch language
//
---------------------------------------------------------*/


document.addEventListener("DOMContentLoaded", function () {
  if (debug)
    console.log("addEventListener languageSelector");
  document.getElementById("languageSelector").addEventListener("change", function () {
    switch_language(this.options[this.selectedIndex].value);
  });
});

/**
 * Switches the language and calls translate_page and translate_chart to do the actual translation.
 */
async function switch_language(new_language) {
  debug && console.log("switch_language");

  if (language === new_language) {
    debug && console.log(`switch_language early exit. new_language: ${new_language}, current language: ${language}`);
    return;
  } else {
    debug && console.log("new language: " + new_language);
  }

  // if new language is different to already active language and if it wasn't already loaded
  if (!loaded_languages[new_language]) {
    let response = await fetch(`./translations/${new_language.toLowerCase()}.json`, { cache: "no-cache" });
    loaded_languages[new_language] = await response.json();
  }
  language = new_language;
  set_language_cookie();
  push_state();
  translate_page();
}


/**
 * translate all translation_IDs and translation_classes. Does NOT translate charts. Use load_data() or update_chart() for that.
 */
function translate_page() {
  if (debug)
    console.log("translate_page");

  if (typeof loaded_languages[language] === 'undefined') {
    debug && console.log("translate_page abort, due to missing data");
    return;
  }

  // get the translation options
  var language_html_elements = document.getElementById("languageSelector").options;
  // de-select whatever language option was chosen
  language_html_elements[document.getElementById("languageSelector").selectedIndex].selected = false;

  // select the new language in the settings based on data
  for (let index = 0; index < language_html_elements.length; index++) {

    const element = language_html_elements[index];
    if (element.value === language) {
      element.selected = true;
    }
  }

  // translate content of IDs
  translation_IDs.forEach(element => {
    translate_element(element);
  });

  // translate content of classes
  translation_classes.forEach(element => {
    translate_element(element);
  });
}

function translate_element(element) {
  if (!loaded_languages[language]) {
    if (debug) {
      console.log(`Language package ${language} wasn't loaded`);
    }
    return;
  }
  const translated_element = loaded_languages[language][element];

  if (!translated_element) {
    console.log("Language package '" + language + "' doesn't have '" + element + "' added to it or the ID is missing in the page. Help improve the page by submitting a bug report. Or even better: clone the repo, fix the problem, and create a pull request. Any help is greatly appreciated!");
    if (debug) {
      html_element.style.border = "1px solid red";
    }
    return;
  }

  if (translated_element === "") {
    console.log("No translation for '" + element + "' available. Help improve the page by submitting a bug report. Or even better: clone the repo, fix the problem, and create a pull request. Any help is greatly appreciated!");
    if (debug) {
      html_element.style.border = "1px solid red";
    }
    return;
  }

  // translate translation IDs
  try {
    document.getElementById(element).innerHTML = translated_element;
  } catch (error) {
  }

  // translate translation classes
  [].forEach.call(document.getElementsByClassName(element), function (html_element) {
    html_element.innerHTML = translated_element;
  });
}

/** Save the current language in a cookie. */
function set_language_cookie() {
  if (debug)
    console.log("set_language_cookie");
  Cookies.set('bloodmallet_language_selection', language, { expires: 31, path: '' });
}

/** Searches for the dark mode cookie and updates the page if necessary. */
async function search_language_cookie() {
  if (debug)
    console.log("search_language_cookie");
  await switch_language(Cookies.get("bloodmallet_language_selection") || "EN");
}


/*---------------------------------------------------------
//
//  Switch to data mode
//
---------------------------------------------------------*/

/**
 * Apply click events for data manipulation.
 */
function addDataViewClickEvent(elementId, new_data_view) {
  document.getElementById(elementId).addEventListener("click", function () {
    data_view = new_data_view;
    push_state();
  });
}

function addAzeriteViewClickEvent(elementId, new_azerite_list_type) {

  document.getElementById(elementId).addEventListener("click", function () {
    chosen_azerite_list_type = new_azerite_list_type;
    push_state();
  });
}

function addAzeriteTierClickEvent(elementId, new_azerite_tier) {

  document.getElementById(elementId).addEventListener("click", function () {
    chosen_azerite_tier = new_azerite_tier;
    push_state();
  });
}

function addFightStyleClickEvent(elementId, new_fight_style) {
  document.getElementById(elementId).addEventListener("click", function () {
    fight_style = new_fight_style;
    push_state();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  try {
    addDataViewClickEvent("show_trinkets_data", "trinkets");
    addDataViewClickEvent("show_essences_data", "essences");
    addDataViewClickEvent("chart_type_essences", "essences");
    addDataViewClickEvent("chart_type_essence_combinations", "essence_combinations");
    addDataViewClickEvent("show_azerite_traits_data", "azerite_traits");
    addDataViewClickEvent("show_races_data", "races");
    addDataViewClickEvent("show_secondary_distributions_data", "secondary_distributions");
    addAzeriteViewClickEvent("chart_type_head", "head");
    addAzeriteViewClickEvent("chart_type_shoulders", "shoulders");
    addAzeriteViewClickEvent("chart_type_chest", "chest");
    addAzeriteViewClickEvent("chart_type_itemlevel", "itemlevel");
    addAzeriteViewClickEvent("chart_type_trait_stacking", "trait_stacking");
    addAzeriteTierClickEvent("azerite_traits_tier_3", 3);
    addAzeriteTierClickEvent("azerite_traits_tier_2", 2);
    addFightStyleClickEvent("fight_style_patchwerk", "patchwerk");
    addFightStyleClickEvent("fight_style_hecticaddcleave", "hecticaddcleave");

    document.getElementById("copy_link").addEventListener("click", function () {
      copy_link();
    });
    document.getElementById("copy_azerite_weights").addEventListener("click", function () {
      copy_azerite_weights();
    });
    document.getElementById("copy_azerite_forge").addEventListener("click", function () {
      copy_azerite_forge();
    });

  } catch (err) {
    console.log("Couldn't bind click events");
    debug && console.log(err);
  }
});

/**
 *
 */
window.onhashchange = function () {
  if (debug)
    console.log("window.onhashchange");
  get_data_from_link();
  switch_mode();
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("talent_combination_selector").addEventListener("change", function (e) {
    if (debug) {
      console.log("talent_combination_selector was changed.");
      console.log(e.target.value);
    }
    chosen_talent_combination = e.target.value;
    push_state();
  });
});

window.addEventListener('popstate', function (event) {
  if (history.state) {
    get_data_from_link();
    switch_to_data();
  }
}, false);

/**
 * Update the global class and spec variables from the current url.
 */
async function get_data_from_link() {
  if (debug)
    console.log("get_data_from_link");
  let hash = window.location.hash;

  if (!hash) {
    // early exit, we got no data, so what shall we do anyway?
    return;
  }

  let combined_class_spec = "";

  if (hash.indexOf("?") > -1) {
    combined_class_spec = hash.slice(1, hash.indexOf("?"));
  } else {
    combined_class_spec = hash.slice(1);
  }
  if (combined_class_spec) {
    if (combined_class_spec.indexOf("death_knight") > -1 || combined_class_spec.indexOf("demon_hunter") > -1) {
      chosen_class = combined_class_spec.slice(0, combined_class_spec.lastIndexOf("_"));
      chosen_spec = combined_class_spec.slice(combined_class_spec.lastIndexOf("_") + 1);
    } else {
      chosen_class = combined_class_spec.slice(0, combined_class_spec.indexOf("_"));
      chosen_spec = combined_class_spec.slice(combined_class_spec.indexOf("_") + 1);
    }
  }

  if (hash.indexOf("?") === -1) {
    // rather early exit if no params were provided
    return;
  }

  const params = hash.split("?")[1].split("&");

  for (const param of params) {
    const key = param.split("=")[0];
    const value = param.split("=")[1];
    if (key === "data_view") {
      data_view = value;
    } else if (key === "fight_style") {
      fight_style = value;
    } else if (key === "type") {
      chosen_azerite_list_type = value;
    } else if (key === "tier") {
      chosen_azerite_tier = value;
      if (chosen_azerite_tier === "1") {
        // needed for old links
        chosen_azerite_tier = "3";
      }
    } else if (key === "lang") {
      await switch_language(value);
    }
  }

}

/*
 * Loads spec data (json) according to the already applied settings. Triggers update_chart.
 */
async function load_data() {
  if (debug)
    console.log("load_data");


  if (chosen_class === "" || chosen_spec === "") {
    debug && console.log("load_data aborted. No chosen_class or spec found.")
    return;
  }

  // necessary to be able to save traits, head, shoulders and chest separately
  var data_name = data_view;
  if (data_view === "azerite_traits" && ["head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
    data_name += "_" + chosen_azerite_list_type;
  }
  if (!loaded_data[chosen_class]) {
    loaded_data[chosen_class] = {};
  }
  if (!loaded_data[chosen_class][chosen_spec]) {
    loaded_data[chosen_class][chosen_spec] = {};
  }
  if (!loaded_data[chosen_class][chosen_spec][data_name]) {
    loaded_data[chosen_class][chosen_spec][data_name] = {};
  }
  if (!loaded_data[chosen_class][chosen_spec][data_name][fight_style]) {
    var file_name = chosen_class + "_" + chosen_spec;

    if ((data_view === "azerite_traits") && (["head", "shoulders", "chest"].includes(chosen_azerite_list_type))) {
      file_name += "_" + chosen_azerite_list_type;
    }

    file_name += "_" + fight_style + ".json";
    let response = await fetch(`./json/${data_view}/${file_name}`, { cache: "no-cache" });
    try {
      loaded_data[chosen_class][chosen_spec][data_name][fight_style] = await response.json();
    } catch (error) {
      let warner = document.getElementById("data_introduction");
      warner.style.color = "red";
      warner.appendChild(document.createTextNode("WARNING! No data was found for your link! Please click here: "));
      let link = document.createElement("a");
      link.href = "https://bloodmallet.com";
      link.appendChild(document.createTextNode("bloodmallet.com"));
      warner.appendChild(link);
      return;
    }
  }
  empty_charts();
  update_talent_selector();

  update_advanced_chart_options();

  update_chart();
}

function update_advanced_chart_options() {
  if (debug) {
    console.log("update_advanced_chart_options");
  }
  var data_name = data_view;
  if (data_view === "azerite_traits" && ["head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
    data_name += "_" + chosen_azerite_list_type;
  }

  let chart_options = document.getElementById("advanced_chart_options");
  chart_options.innerHTML = "";
  let area = document.createElement("div");
  area.className = "row";
  chart_options.appendChild(area);


  let itemlevels = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"];

  // add itemlevel filtering
  if (itemlevels && (data_view === "trinkets" || data_view === "essences" || data_view === "azerite_traits" && ["head", "shoulders", "chest", "itemlevel"].includes(chosen_azerite_list_type))) {

    // update chosen_step_list to the new max list (create a copy)
    // update only if nothing was selected or if the current values aren't present in the actual new data view (trinket -> azerite itemlevel)
    if (chosen_step_list.length === 0 || !itemlevels.includes(chosen_step_list[0])) {
      chosen_step_list = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"].slice();
    }

    let ilevel_filtering = document.createElement("div");
    ilevel_filtering.className = "col-md-4";
    area.appendChild(ilevel_filtering);

    ilevel_filtering.innerHTML = "Itemlevels:<br/>";
    if (data_view === "essences") {
      ilevel_filtering.innerHTML = "Ranks:<br/>";
    }
    for (const step of itemlevels) {
      let form_check = document.createElement("div");
      form_check.className = "form-check";
      ilevel_filtering.appendChild(form_check);
      let input = document.createElement("input");
      input.className = "form-check-input";
      input.type = "checkbox";
      input.value = step;
      input.id = "step_" + step;
      // update checked based on user input
      if (chosen_step_list.includes(step)) {
        input.checked = true;
      }
      input.addEventListener("change", function (e) {
        update_step_list(e.target.value, e.target.checked);
      });
      form_check.appendChild(input);

      let label = document.createElement("label");
      label.className = "form-check-label";
      label.htmlFor = input.id;
      let cleansed_input_label = step;
      if (typeof cleansed_input_label === "string") {
        if (cleansed_input_label.indexOf("_") > -1) {
          cleansed_input_label = cleansed_input_label.split("_")[1];
        }
      }
      label.innerHTML = cleansed_input_label;
      label.style = "padding-left: 5px; border-left: 9px solid " + ilevel_color_table[cleansed_input_label];
      form_check.appendChild(label);

    }
  }

  // add source filtering
  if (data_view === "trinkets") {

    // reset and refill source list
    let source_list = [];
    for (let item in loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data_sources"]) {
      if (!source_list.includes(loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data_sources"][item])) {
        source_list.push(loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data_sources"][item]);
      }
    }
    if (chosen_source_list.length === 0) {
      chosen_source_list = source_list.slice();
    }
    // sort to have almost the exact same list for everything
    chosen_source_list.sort();
    source_list.sort();

    let source_filtering = document.createElement("div");
    source_filtering.className = "col-md-4";
    area.appendChild(source_filtering);

    source_filtering.innerHTML = "Sources:<br/>";

    for (let source of source_list) {
      let form_check = document.createElement("div");
      form_check.className = "form-check";
      source_filtering.appendChild(form_check);
      let input = document.createElement("input");
      input.className = "form-check-input";
      input.type = "checkbox";
      input.value = source;
      input.id = "source_" + source;
      // update checked based on user input
      if (chosen_source_list.includes(source)) {
        input.checked = true;
      }
      input.addEventListener("change", function (e) {
        update_source_list(e.target.value, e.target.checked);
      });
      form_check.appendChild(input);

      let label = document.createElement("label");
      label.className = "form-check-label";
      label.htmlFor = input.id;
      label.innerHTML = source;
      form_check.appendChild(label);

    }
  }

  if (data_view === "trinkets") {
    let activity_filter = document.createElement("div");
    activity_filter.className = "col-md-4";
    area.appendChild(activity_filter);

    activity_filter.innerHTML = "Show:<br/>";

    let option1 = document.createElement("div");
    option1.className = "form-check";
    activity_filter.appendChild(option1);
    let on_use = document.createElement("input");
    on_use.className = "form-check-input";
    on_use.type = "checkbox";
    on_use.value = "active";
    on_use.id = "active_true";
    // update checked based on user input
    if (chosen_activity["active"]) {
      on_use.checked = true;
    }
    on_use.addEventListener("change", function (e) {
      update_activity_list(e.target.value, e.target.checked);
    });
    option1.appendChild(on_use);

    let label1 = document.createElement("label");
    label1.className = "form-check-label";
    label1.htmlFor = on_use.id;
    label1.innerHTML = "On Use";
    option1.appendChild(label1);


    let option2 = document.createElement("div");
    option2.className = "form-check";
    activity_filter.appendChild(option2);
    let passive = document.createElement("input");
    passive.className = "form-check-input";
    passive.type = "checkbox";
    passive.value = "passive";
    passive.id = "active_false";
    // update checked based on user input
    if (chosen_activity["passive"]) {
      passive.checked = true;
    }
    passive.addEventListener("change", function (e) {
      update_activity_list(e.target.value, e.target.checked);
    });
    option2.appendChild(passive);

    let label2 = document.createElement("label");
    label2.className = "form-check-label";
    label2.htmlFor = passive.id;
    label2.innerHTML = "Passive";
    option2.appendChild(label2);

  }

  if (data_view === "essences") {
    let type_filter = document.createElement("div");
    type_filter.className = "col-md-4";
    area.appendChild(type_filter);

    type_filter.innerHTML = "Show:<br/>";

    let option1 = document.createElement("div");
    option1.className = "form-check";
    type_filter.appendChild(option1);
    let combined = document.createElement("input");
    combined.className = "form-check-input";
    combined.type = "checkbox";
    combined.value = "combined";
    combined.id = "combined_true";
    // update checked based on user input
    if (chosen_type["combined"]) {
      combined.checked = true;
    }
    combined.addEventListener("change", function (e) {
      update_type_list(e.target.value, e.target.checked);
    });
    option1.appendChild(combined);

    let label1 = document.createElement("label");
    label1.className = "form-check-label";
    label1.htmlFor = combined.id;
    label1.innerHTML = "Combined (major and minor)";
    option1.appendChild(label1);


    let option2 = document.createElement("div");
    option2.className = "form-check";
    type_filter.appendChild(option2);
    let minor = document.createElement("input");
    minor.className = "form-check-input";
    minor.type = "checkbox";
    minor.value = "minor";
    minor.id = "minor_true";
    // update checked based on user input
    if (chosen_type["minor"]) {
      minor.checked = true;
    }
    minor.addEventListener("change", function (e) {
      update_type_list(e.target.value, e.target.checked);
    });
    option2.appendChild(minor);

    let label2 = document.createElement("label");
    label2.className = "form-check-label";
    label2.htmlFor = minor.id;
    label2.innerHTML = "Minor";
    option2.appendChild(label2);
  }

  // add more chart settings or chart filter here

  // add apply button
  let apply_area = document.createElement("div");
  apply_area.className = "row";
  chart_options.appendChild(apply_area);

  let button = document.createElement("div");
  button.className = "col-md-4";
  apply_area.appendChild(button);

  let apply_changes_button = document.createElement("button");
  button.appendChild(apply_changes_button);
  apply_changes_button.className = "btn-data " + chosen_class + "-button";
  apply_changes_button.type = "button";
  apply_changes_button.setAttribute("data-toggle", "collapse");
  apply_changes_button.setAttribute("data-target", "#advanced_chart_options_area");
  apply_changes_button.setAttribute("aria-expanded", "false");
  apply_changes_button.setAttribute("aria-controls", "advanced_chart_options_area");
  apply_changes_button.style = "margin-top: 0.6rem;";
  apply_changes_button.innerHTML = "Apply changes";

  apply_changes_button.addEventListener("click", function () {
    update_chart();
  });

}

/**
 * Update global chosen_activity "active" and "passive".
 * @param {string} key
 * @param {bool} value
 */
function update_activity_list(key, value) {
  if (debug) {
    console.log("update_activity_list", key, value);
  }
  chosen_activity[key] = value;

}

/**
 * Update global chosen_activity "active" and "passive".
 * @param {string} key
 * @param {bool} value
 */
function update_type_list(key, value) {
  if (debug) {
    console.log("update_type_list", key, value);
  }
  chosen_type[key] = value;

}

/**
 * Updates global chosen_step_list
 * @param {string} step itemlevel step or trait step
 * @param {bool} push is the step pushed to the list or removed
 */
function update_step_list(step, push) {
  if (debug) {
    console.log("update_step_list", step, push);
  }

  if (push) {
    if (step.indexOf("_") > -1) {
      chosen_step_list.push(step);
    } else {
      chosen_step_list.push(parseInt(step));
    }
    try {
      chosen_step_list.sort(function (a, b) {
        if (typeof a === "string" && typeof b === "string") {
          return b > a; // 1_385
        } else {
          return b - a; // 385
        }
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    let index = -1;
    if (chosen_step_list.indexOf(step) > -1) {
      index = chosen_step_list.indexOf(step); // "3_385"
    } else {
      index = chosen_step_list.indexOf(parseInt(step)) // 385
    }
    chosen_step_list.splice(index, 1);
  }

  if (debug) {
    console.log("new chosen_step_list", chosen_step_list);
  }

}


/**
 * Updates global chosen_source_list
 * @param {string} source item source
 * @param {bool} push is the step pushed to the list or removed
 */
function update_source_list(source, push) {
  if (debug) {
    console.log("update_source_list", source, push);
  }

  if (push) {
    chosen_source_list.push(source);
    chosen_source_list.sort();
  } else {
    chosen_source_list.splice(chosen_source_list.indexOf(source), 1);
  }

  if (debug) {
    console.log("new chosen_source_list", chosen_source_list);
  }

}

/**
 * Acivates the data mode.
 * Prepares global chosen_class and chosen_spec variables.
 * Loads necessary chart data, renders chart, translates page and chart.
 * Hides welcome-area and shows data area if necessary.
 */
function switch_mode() {
  if (debug)
    console.log("switch_mode");

  // hide, unhide stuff
  if (mode == "welcome") {
    mode = "data";
    $(function () {
      $('#bloodypatrons').tooltip('hide');
    });
    make_invisible(modes[mode]["hidden"]);
    make_visible(modes[mode]["shown"]);
  }

  // push new state to history
  push_state();
}

/**
 * Function to change the url. url change triggers state application, load, and chart updates according to state (class + spec + fight_style + ...).
 */
function push_state() {
  if (debug) {
    console.log("push_state");
    console.log(`${chosen_spec} ${chosen_class} ${data_view} ${fight_style}`);
  }
  if (chosen_spec && chosen_class && data_view && fight_style) {
    history.pushState({ id: 'data_view' }, chosen_spec + " " + chosen_class + " | " + data_view + " | " + fight_style, create_link());
    switch_to_data();
  } else {
    if (debug) {
      console.log("Abort push_state because data is missing.");
    }
  }
}

/**
 * Function to trigger all possible updates and loads.
 */
function switch_to_data() {
  if (debug) {
    console.log("switch_to_data");
  }
  update_nav();
  update_page_content();
  update_data_buttons();
  update_fight_style_buttons();
  update_essence_buttons();
  update_azerite_buttons();
  load_data();
  translate_page();
}

/**
 * Update which data button has the class color background.
 */
function update_data_buttons() {
  if (debug)
    console.log("update_data_buttons");

  if (chosen_class === "" || chosen_spec === "") {
    debug && console.log("update_data_buttons aborted. No chosen_class or spec found.")
    return;
  }

  // reset buttons to standard visual
  data_view_IDs.forEach(element => {
    try {
      document.getElementById(element).className = "btn-data " + chosen_class + "-button";
      if (element === "advanced_chart_options_button") {
        document.getElementById(element).className += " dropdown-toggle";
      }
    } catch (err) {
      console.log(element + " was not found in page.");
    }
  });
  // set "active" to class color
  let tmp_name_fix = data_view;
  if (tmp_name_fix === "essence_combinations") {
    tmp_name_fix = "essences"
  }
  document.getElementById("show_" + tmp_name_fix + "_data").classList.add(chosen_class + "-border-bottom");

  // unhide/hide talent combination selection if necessary
  document.getElementById("talent_combination_selector").hidden = (data_view !== "secondary_distributions");
  document.getElementById("talent_selector_label").hidden = (data_view !== "secondary_distributions");

  let is_essence = (data_view === "essences" || data_view === "essence_combinations");
  document.getElementById("chart_type_essences").hidden = !is_essence;
  document.getElementById("chart_type_essence_combinations").hidden = !is_essence;

  let is_azerite = (data_view === "azerite_traits");
  document.getElementById("chart_type_head").hidden = !is_azerite;
  document.getElementById("chart_type_shoulders").hidden = !is_azerite;
  document.getElementById("chart_type_chest").hidden = !is_azerite;
  document.getElementById("chart_type_itemlevel").hidden = !is_azerite;
  document.getElementById("chart_type_trait_stacking").hidden = !is_azerite;

  let is_traits = (data_view === "azerite_traits" && (chosen_azerite_list_type === "itemlevel" || chosen_azerite_list_type === "trait_stacking"));
  document.getElementById("azerite_traits_tier_3").hidden = !is_traits;
  document.getElementById("azerite_traits_tier_2").hidden = !is_traits;
  document.getElementById("copy_azerite_weights").hidden = !(is_traits || data_view == "essences");
  document.getElementById("copy_azerite_forge").hidden = !is_traits;
}

/**
 * Update the talent list in the talent selector, based on data. Set first talent combination as default.
 */
function update_talent_selector() {
  if (debug)
    console.log("update_talent_selector");

  if (data_view !== "secondary_distributions")
    return;

  let talent_combinations = Object.keys(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]);

  let talent_selector = document.getElementById("talent_combination_selector");
  talent_selector.innerHTML = "";

  if (!chosen_talent_combination || !loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"].hasOwnProperty(chosen_talent_combination)) {
    chosen_talent_combination = talent_combinations[0];
  }

  for (let talent_combination of talent_combinations) {
    let new_option = document.createElement("option");
    new_option.text = talent_combination;
    if (talent_combination === chosen_talent_combination)
      new_option.selected = true;
    talent_selector.add(new_option);
  }

}

/**
 * Resets colors of all fight style buttons and sets active button to class color.
 */
function update_fight_style_buttons() {
  if (debug)
    console.log("update_fight_style_buttons");

  if (chosen_class === "" || chosen_spec === "") {
    debug && console.log("update_fight_style_buttons aborted. No chosen_class or spec found.")
    return;
  }

  // reset buttons to standard visual
  fight_style_IDs.forEach(element => {
    document.getElementById(element).className = "btn-data " + chosen_class + "-button";
  });
  // set "active" to class color
  document.getElementById("fight_style_" + fight_style).classList.add(chosen_class + "-border-bottom");
}

/**
 * Resets colors of all fight style buttons and sets active button to class color.
 */
function update_azerite_buttons() {
  if (debug)
    console.log("update_azerite_buttons");
  if (data_view !== "azerite_traits") {
    if (debug)
      console.log("update_azerite_buttons early exit");
    return;
  }

  if (chosen_class === "" || chosen_spec === "") {
    debug && console.log("update_azerite_buttons aborted. No chosen_class or spec found.")
    return;
  }

  // reset buttons to standard visual
  azerite_trait_view_type_IDs.forEach(element => {
    document.getElementById(element).className = "btn-data " + chosen_class + "-button";
  });
  azerite_trait_tier_IDs.forEach(element => {
    document.getElementById(element).className = "btn-data " + chosen_class + "-button";
  });
  // set "active" to class color
  document.getElementById("chart_type_" + chosen_azerite_list_type).classList.add(chosen_class + "-border-bottom");
  document.getElementById("azerite_traits_tier_" + chosen_azerite_tier).classList.add(chosen_class + "-border-bottom");
}

/**
 * Resets colors of all fight style buttons and sets active button to class color.
 */
function update_essence_buttons() {
  if (debug)
    console.log("update_essence_buttons");
  if (data_view !== "essences" && data_view !== "essence_combinations") {
    if (debug)
      console.log("update_essence_buttons early exit");
    return;
  }

  if (chosen_class === "" || chosen_spec === "") {
    debug && console.log("update_essence_buttons aborted. No chosen_class or spec found.")
    return;
  }

  // reset buttons to standard visual
  ["chart_type_essences", "chart_type_essence_combinations"].forEach(element => {
    document.getElementById(element).className = "btn-data " + chosen_class + "-button";
  });
  // set "active" to class color
  document.getElementById("chart_type_" + data_view).classList.add(chosen_class + "-border-bottom");
}

/**
 * Mark current active chosen class in top navigation.
 */
function update_nav() {
  if (debug)
    console.log("update_nav");
  if (chosen_class === "") {
    return;
  }
  var nav_items = document.getElementsByClassName("dropdown-toggle");
  for (let index = 0; index < nav_items.length; index++) {
    const element = nav_items[index];
    element.classList.remove("active");
  }
  try {
    document.getElementsByClassName("translate_" + chosen_class)[0].classList.add("active");
  } catch (error) {
    //
  }
}

/**
 * Makes all given IDs visible.
 */
function make_visible(IDs) {
  if (debug)
    console.log("make_visible");
  IDs.forEach(element => {
    document.getElementById(element).hidden = false;
  });
}

/**
 * Makes all given IDs invisible.
 */
function make_invisible(IDs) {
  if (debug)
    console.log("make_invisible");
  IDs.forEach(element => {
    document.getElementById(element).hidden = true;
  });
}

/**
 * Show and update the chart with currently available data.
 * Data load is NOT handled by this function. Triggers update_chart!
 */
function update_chart() {
  if (debug) {
    console.log("update_chart");
  }

  // early exit if wrong mode detected
  if (mode !== "data") {
    return;
  }

  if (data_view == "secondary_distributions") {
    document.getElementById("scatter_plot_warning").hidden = false;
    document.getElementById("scatter_plot_chart").hidden = false;
    document.getElementById("chart").hidden = true;
    update_scatter_chart();
    return;
  } else {
    document.getElementById("scatter_plot_warning").hidden = true;
    document.getElementById("scatter_plot_chart").hidden = true;
    document.getElementById("chart").hidden = false;
  }

  if (data_view === "azerite_traits" && chosen_azerite_list_type === "trait_stacking") {
    return update_trait_stacking_chart();
  }

  let data_name = data_view;
  if (data_view === "azerite_traits" && ["head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
    data_name += "_" + chosen_azerite_list_type;
  }

  if ("sorted_data_keys" in loaded_data[chosen_class][chosen_spec][data_name][fight_style]) {
    var dps_ordered_data = [];

    // copy the correct presorted list
    if (data_view === "azerite_traits" && ["itemlevel", "trait_stacking"].includes(chosen_azerite_list_type)) {
      dps_ordered_data = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["sorted_azerite_tier_" + chosen_azerite_tier + "_" + chosen_azerite_list_type].slice();
    } else {
      dps_ordered_data = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["sorted_data_keys"].slice();
    }
  } else {
    debug && console.log("Getting sorted_data_keys from data failed. Set unordered dps_ordered_data");
    var dps_ordered_data = Object.keys(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]);
  }

  // filter dps_ordered_data by source
  let purge_list = [];
  for (let thing of dps_ordered_data) {
    try {
      if (!chosen_source_list.includes(loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data_sources"][thing])) {
        purge_list.push(thing);
      }
    } catch (error) {
      // data_sources are not available
    }
  }
  for (let thing of purge_list) {
    dps_ordered_data.splice(dps_ordered_data.indexOf(thing), 1);
  }


  // cleanse dps_ordered_data from doubled pvp traits
  // alliance names will be deleted
  for (let alliance of Object.values(item_and_trait_equilizer)) {
    let pos = dps_ordered_data.indexOf(alliance);
    if (pos > -1) {
      try {
        dps_ordered_data.splice(pos, 1);
      } catch (error) {
        console.warn(error);
      }
    }
  }


  // cleanse dps_ordered_data from active/passive trinkets if one of either is not allowed
  if (data_view === "trinkets" && (!chosen_activity["active"] || !chosen_activity["passive"])) {
    purge_list = [];
    let data_shorthand = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data_active"];
    for (let trinket of dps_ordered_data) {
      if (!chosen_activity["active"] && data_shorthand[trinket]) {
        purge_list.push(trinket);
      } else if (!chosen_activity["passive"] && !data_shorthand[trinket]) {
        purge_list.push(trinket);
      }
    }
    for (let trait_name of purge_list) {
      dps_ordered_data.splice(dps_ordered_data.indexOf(trait_name), 1);
    }
  }


  // purge essences by type (combined/minor)
  if (data_view === "essences") {
    purge_list = [];
    for (let essence of dps_ordered_data) {
      // if it's a major + minor essence, so no "minor" name addition
      if (!chosen_type['combined'] && essence.indexOf(' minor') === -1) {
        purge_list.push(essence);
      }
      if (!chosen_type['minor'] && essence.indexOf(' minor') > -1) {
        purge_list.push(essence);
      }
    }
    for (let essence_name of purge_list) {
      dps_ordered_data.splice(dps_ordered_data.indexOf(essence_name), 1);
    }
  }


  // sort dps_ordered_data if max itemlevel is not allowed
  try {
    if (chosen_step_list[0] !== loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"][0]) {
      // create list of all categories with their best allowed dps values
      let tmp_list = []

      for (let element of dps_ordered_data) {
        for (let step of chosen_step_list) { // descendant ordered

          if (loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][element][step]) {

            if (tmp_list.length === 0) {
              tmp_list.push([element, loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][element][step]]);
            } else if (tmp_list[tmp_list.length - 1][0] !== element) {
              tmp_list.push([element, loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][element][step]]);
            }
          }
        }
      }

      // sort list
      tmp_list.sort(function (first, second) { return second[1] - first[1]; });

      // throw away dps values
      dps_ordered_data = tmp_list.map(x => x[0]);
    }
  } catch (error) {
    // data doesn't need to be resorted
  }

  // change item/spell names to wowhead links
  ordered_trinket_list = [];
  if (data_view === "trinkets" || data_view === "azerite_traits" || data_view === "essences" || data_view === "essence_combinations") {
    for (let i in dps_ordered_data) {

      if (dps_ordered_data[i].indexOf("baseline") > -1) {
        ordered_trinket_list.push(dps_ordered_data[i]);
        continue;
      }

      if (data_view === "essence_combinations" || data_view === "essences" || data_view == "azerite_traits" && ["itemlevel", "trait_stacking"].includes(chosen_azerite_list_type)) {

        let spell_id = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["spell_ids"][dps_ordered_data[i]];
        let trait_name = dps_ordered_data[i];

        // if the present trait is a value in the collection of equal data (horde/alliance) we have to adjust the trait name and id
        if (Object.values(item_and_trait_equilizer).includes(trait_name)) {
          for (let key in item_and_trait_equilizer) {
            if (item_and_trait_equilizer[key] == trait_name) {
              spell_id = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["spell_ids"][key];
              trait_name = key;
            }
          }
        }

        let name_portions = trait_name.split("+");

        let link = "";

        for (let tmp_i in name_portions) {
          let name_portion = name_portions[tmp_i];
          link += "<div style=\"display:inline-block; margin-bottom:-3px\">";

          link += "<a href=\"https://";

          if (language == "EN") {
            link += "www";
          } else {
            link += language.toLowerCase();
          }

          if (data_view === "essences" || data_view === "essence_combinations") {
            link += ".wowhead.com/azerite-essence-power/";
          } else {
            link += ".wowhead.com/spell=";
          }

          try {
            portion_spell_id = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["spell_ids"][name_portion.trim()];
          } catch (error) {
            portion_spell_id = spell_id;
          }

          if (data_view === "essences") {
            portion_spell_id = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["power_ids"][dps_ordered_data[i]];
          }
          if (data_view === "essences" || data_view === "essence_combinations") {
            portion_spell_id = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["power_ids"][name_portion.trim()];
          }

          link += portion_spell_id;

          if (data_view !== "essences" && data_view !== "essence_combinations") {
            link += "/" + slugify(trait_name);
          }

          link += "\" target=\"blank\"";
          link += "class=\"";
          if (whTooltips.iconizeLinks && !item_and_trait_equilizer[trait_name] && name_portions.length === 1) {
            link += "chart_link";
          }
          if (tmp_i > 0) {
            link += " monk-color small_text";
          }
          link += "\"";

          link += ">";

          if (tmp_i === "0" || !whTooltips.iconizeLinks) { // I have no idea for what reason this is a string...
            link += get_translated_name(name_portion.trim());
          }
          link += "</a></div>";

          if (name_portions.length > 1 && tmp_i < name_portions.length - 1) {
            if (tmp_i % 4 === 0 || tmp_i === "0") {
              link += "<br/>";
            }
            link += "<span class=\"small_text\">+</span>";
          }

        }

        // add second trait
        if (item_and_trait_equilizer[trait_name]) {
          link += " / <br><div style=\"display:inline-block;\"><a href=\"https://";

          if (language == "EN") {
            link += "www";
          } else {
            link += language.toLowerCase();
          }

          link += ".wowhead.com/spell=";
          link += loaded_data[chosen_class][chosen_spec][data_name][fight_style]["spell_ids"][item_and_trait_equilizer[trait_name]];

          link += "/" + slugify(item_and_trait_equilizer[trait_name]);

          let translated_name = get_translated_name(item_and_trait_equilizer[trait_name]);

          link += "\" target=\"blank\"";
          if (whTooltips.iconizeLinks) {
            link += "class=\"chart_link\"";
          }
          link += ">" + translated_name + "</a></div>";
        }

        ordered_trinket_list.push(link);
      } else { // trinkets or head, shoulders, chest

        let string = "<div style=\"display:inline-block; margin-bottom:-3px\"><a href=\"https://";

        if (language == "EN") {
          string += "www";
        } else {
          string += language.toLowerCase();
        }

        string += ".wowhead.com/item=";

        let item_id = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["item_ids"][dps_ordered_data[i]];
        let item_name = dps_ordered_data[i];

        // if the present item is a value in the collection of equal data we have to adjust the item name and id
        if (Object.values(item_and_trait_equilizer).includes(item_name)) {
          for (let key in item_and_trait_equilizer) {
            if (item_and_trait_equilizer[key] == item_name) {
              item_id = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["item_ids"][key];
              item_name = key;
            }
          }
        }

        string += item_id;

        // add slug name
        string += "/" + slugify(item_name);

        // add azerite power string portion
        if (data_view == "azerite_traits" && ["head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
          string += "?azerite-powers=";
          // add class id
          string += loaded_data[chosen_class][chosen_spec][data_name][fight_style]["class_id"];
          // add azerite traits
          for (let j = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["used_azerite_traits_per_item"][dps_ordered_data[i]].length - 1; j >= 0; j--) {
            const trait = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["used_azerite_traits_per_item"][dps_ordered_data[i]][j];
            string += ":" + trait["id"];
          }

        }
        let ilevel = get_minimum_step_of(loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][dps_ordered_data[i]]);
        if (data_view === "trinkets") {
          if (ilevel !== undefined) {
            string += "&ilvl=" + ilevel;
          }
        } else {
          if (ilevel !== undefined) {
            string += "&ilvl=" + ilevel.split("1_")[1];
          }
        }

        let translated_name = get_translated_name(item_name);

        string += "\" target=\"blank\"";
        if (whTooltips.iconizeLinks && !item_and_trait_equilizer[item_name]) {
          string += "class=\"chart_link\"";
        }
        string += ">" + translated_name + "</a></div>";

        // add second item
        if (item_and_trait_equilizer[item_name]) {
          string += " / <br><div style=\"display:inline-block;\"><a href=\"https://";

          if (language == "EN") {
            string += "www";
          } else {
            string += language.toLowerCase();
          }

          string += ".wowhead.com/item=";
          string += loaded_data[chosen_class][chosen_spec][data_name][fight_style]["item_ids"][item_and_trait_equilizer[item_name]];

          let translated_name = get_translated_name(item_and_trait_equilizer[item_name]);

          string += "\" target=\"blank\"";
          if (whTooltips.iconizeLinks) {
            string += "class=\"chart_link\"";
          }
          string += ">" + translated_name + "</a></div>";
        }

        ordered_trinket_list.push(string);
      }
    }
    // rewrite the trinket names
    if (debug) {
      console.log("applying ordered_trinket_list to categories in update_chart");
    }
    standard_chart.update({
      xAxis: {
        categories: ordered_trinket_list
      }
    }, false);
  } else {
    // rewrite the trinket names
    if (debug) {
      console.log("applying ordered_trinket_list to categories in update_chart");
    }

    let new_ordered_data = [];

    for (const name of dps_ordered_data) {
      let translated_name = get_translated_name(name);
      new_ordered_data.push(translated_name);
    }

    standard_chart.update({
      xAxis: {
        categories: new_ordered_data
      }
    }, false);
  }


  // set title and subtitle
  let new_title = "";
  if (data_view == "azerite_traits" && chosen_azerite_list_type == "itemlevel") {
    new_title = "Different itemlevels | number of each trait: 1 | dps from items primary stats included";
  }

  let timestamp = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["timestamp"];
  let year = timestamp.split("-")[0];
  let month = timestamp.split("-")[1];
  let day = timestamp.split("-")[2].split(" ")[0];
  let hour = timestamp.split(" ")[1].split(":")[0];
  let minute = timestamp.split(":")[1];

  let subtitle = "Last updated ";
  // month is a number 0-11
  let age = new Date() - new Date(Date.UTC(year, month - 1, day, hour, minute));
  let age_days = Math.floor(age / 24 / 3600 / 1000);
  if (age_days > 0) {
    subtitle += `${age_days}d `;
  }
  let age_hours = Math.floor(age / 3600 / 1000) - age_days * 24;
  subtitle += `${age_hours}h ago`;

  document.getElementById("chart_title").innerHTML = new_title;
  document.getElementById("chart_title").hidden = false;
  add_profile_information();
  document.getElementById("chart_subtitle").innerHTML = subtitle;
  document.getElementById("chart_simc_hash").innerHTML = `SimulationCraft build: <a href=\"https://github.com/simulationcraft/simc/commit/${loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simc_settings"]["simc_hash"]}\" target=\"blank\">#${loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simc_settings"]["simc_hash"].substring(0, 5)}</a>`;

  // delete all old series data
  while (standard_chart.series[0]) {
    standard_chart.series[0].remove(false);
  }
  // basically: if something was simmed with multiple itemlevels
  if ("simulated_steps" in loaded_data[chosen_class][chosen_spec][data_name][fight_style]) {

    if (debug) {
      console.log("simulated_steps in data found.");
    }

    for (let itemlevel_position = 0; itemlevel_position < chosen_step_list.length; itemlevel_position++) {
      const itemlevel = chosen_step_list[itemlevel_position];

      let itemlevel_dps_values = [];
      if (debug) {
        console.log("handling itemlevel " + itemlevel);
      }

      for (let data of dps_ordered_data) {

        let dps = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data][itemlevel];
        let min_ilevel = chosen_step_list[chosen_step_list.length - 1];
        let max_ilevel = chosen_step_list[0];
        let baseline_dps = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"]["baseline"][loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"][loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"].length - 1]]

        // check for zero dps values and don't change them
        if (dps > 0) {

          // if lowest itemlevel is looked at, substract baseline
          if (itemlevel === min_ilevel) {

            if (itemlevel in loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data]) {
              if (chosen_value_style === "absolute_gain") {
                itemlevel_dps_values.push(dps - baseline_dps);
              } else if (chosen_value_style === "relative_gain") {
                itemlevel_dps_values.push(Math.round((dps - baseline_dps) * 10000 / baseline_dps) / 100);
              } else if (chosen_value_style === "absolute_value") {
                itemlevel_dps_values.push(dps);
              }
            } else {
              if (chosen_value_style === "absolute_gain") {
                itemlevel_dps_values.push(0);
              } else if (chosen_value_style === "relative_gain") {
                itemlevel_dps_values.push(0);
              } else if (chosen_value_style === "absolute_value") {
                itemlevel_dps_values.push(0);
              }
            }

          } else { // else substract lower itemlevel value of same item

            // if lower itemlevel is zero we have to assume that this item needs to be compared now to the baseline
            if (loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data][chosen_step_list[String(Number(itemlevel_position) + 1)]] == 0 || !(chosen_step_list[String(Number(itemlevel_position) + 1)] in loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data])) {

              if (chosen_value_style === "absolute_gain") {
                itemlevel_dps_values.push(dps - baseline_dps);
              } else if (chosen_value_style === "relative_gain") {
                itemlevel_dps_values.push(Math.round((dps - baseline_dps) * 10000 / baseline_dps) / 100);
              } else if (chosen_value_style === "absolute_value") {
                itemlevel_dps_values.push(dps);
              }
            } else { // standard case, next itemlevel is not zero and can be used to substract from the current value

              if (chosen_value_style === "absolute_gain") {
                itemlevel_dps_values.push(dps - loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data][chosen_step_list[String(Number(itemlevel_position) + 1)]]);
              } else if (chosen_value_style === "relative_gain") {
                itemlevel_dps_values.push(Math.round((dps - loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data][chosen_step_list[String(Number(itemlevel_position) + 1)]]) * 10000 / baseline_dps) / 100);
              } else if (chosen_value_style === "absolute_value") {
                itemlevel_dps_values.push(dps - loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data][chosen_step_list[String(Number(itemlevel_position) + 1)]]);
              }
            }
          }

        } else { // if dps is undefined or 0
          if (itemlevel in loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data]) {
            if (chosen_value_style === "absolute_gain") {
              itemlevel_dps_values.push(dps);
            } else if (chosen_value_style === "relative_gain") {
              itemlevel_dps_values.push(Math.round((dps * 100 / baseline_dps - 100) * 100) / 100);
            } else if (chosen_value_style === "absolute_value") {
              itemlevel_dps_values.push(dps);
            }
          } else {
            if (chosen_value_style === "absolute_gain") {
              itemlevel_dps_values.push(0);
            } else if (chosen_value_style === "relative_gain") {
              itemlevel_dps_values.push(0);
            } else if (chosen_value_style === "absolute_value") {
              itemlevel_dps_values.push(0);
            }
          }
        }
      }

      let polished_itemlevel_name = itemlevel;
      if (data_view === "azerite_traits" && ["itemlevel", "head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
        polished_itemlevel_name = itemlevel.split("_")[1];
      } else {
        polished_itemlevel_name = itemlevel;
      }

      standard_chart.addSeries({
        color: ilevel_color_table[polished_itemlevel_name],
        data: itemlevel_dps_values,
        name: polished_itemlevel_name,
        showInLegend: true
      }, false);
    }
  } else { // if no itemlevels were used the dps values are exactly at the keys, like race simulations

    var dps_values = [];
    for (let category of dps_ordered_data) {
      if (data_name === "essence_combinations") {
        let dps = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][category];
        let baseline_dps = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]["baseline"];

        if (chosen_value_style === "absolute_gain") {
          dps_values.push(dps - baseline_dps);
        } else if (chosen_value_style === "relative_gain") {
          dps_values.push(Math.round((dps - baseline_dps) * 10000 / baseline_dps) / 100);
        } else if (chosen_value_style === "absolute_value") {
          dps_values.push(dps);
        }

      } else {
        dps_values.push(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][category]);
      }
    }

    standard_chart.addSeries({
      color: class_colors[chosen_class],
      data: dps_values,
      name: "Race",
      showInLegend: false
    }, false);
  }

  // add new legend title
  if (data_view === "trinkets" || data_view === "azerite_traits" && ["itemlevel", "head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
    standard_chart.legend.title.attr({ text: "Itemlevel" });
  } else if (data_view === "races") {
    standard_chart.legend.title.attr({ text: "" });
  } else if (data_view === "azerite_traits" && chosen_azerite_list_type === "trait_stacking") {
    standard_chart.legend.title.attr({ text: "Trait count" });
  } else if (data_view === "essences") {
    standard_chart.legend.title.attr({ text: "Rank" });
  }

  // adjust axis titles
  set_value_style();

  document.getElementById("chart").style.height = 200 + dps_ordered_data.length * 42 + "px";
  standard_chart.setSize(document.getElementById("chart").style.width, document.getElementById("chart").style.height);
  standard_chart.redraw();

  try {
    $WowheadPower.refreshLinks();
  } catch (error) {
  }
}


/**
 * Function returns the minimal simulated step of the data. Based on the global chosen_step_list, which will later be used as a filter for the user to manage.
 * @param {json} data All simulated data for the item/trait
 */
function get_minimum_step_of(data) {
  if (debug) {
    console.log("get_minimum_itemlevel_of");
  }

  for (let i = chosen_step_list.length - 1; i >= 0; i--) {
    const itemlevel = chosen_step_list[i];
    try {
      if (data[itemlevel]) {
        return itemlevel;
      }
    } catch (error) {
      if (debug) {
        console.log("get_minimum_itemlevel_of skipped " + itemlevel);
      }
    }
  }
}


/**
 * Function returns the maximal simulated step of the data. Based on the global chosen_step_list, which will later be used as a filter for the user to manage.
 * @param {json} data All simulated data for the item/trait
 */
function get_maximum_step_of(data) {
  if (debug) {
    console.log("get_maximum_step_of");
  }

  for (let i = 0; i < chosen_step_list.length; i++) {
    const itemlevel = chosen_step_list[i];
    try {
      if (data[itemlevel]) {
        return itemlevel;
      }
    } catch (error) {
      if (debug) {
        console.log("get_maximum_step_of skipped " + itemlevel);
      }
    }
  }
}


/**
 * https://gist.github.com/mathewbyrne/1280286
 * @param {*} text
 */
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

/**
 * Function returns a filtered data object. Only key/values matching the global chosen_step_list are returned.
 * @param {json} data all available data for the item/spell
 */
function get_filtered_data(data) {
  if (debug) {
    console.log("get_filtered_data");
  }
  let new_data = {};

  for (let i = 0; i < chosen_step_list.length; i++) {
    const step = chosen_step_list[i];
    if (data[step]) {
      new_data.step = data[step];
    }
  }

  console.log("get_filtered_data ", new_data);
  return new_data;
}

/**
 * Get the translation of a name (item, trait, race) from the data file
 * @param {string} name
 */
function get_translated_name(name) {
  if (debug) {
    console.log("get_translated_name " + name);
  }

  let language_table = {
    "CN": "cn_CN",
    "EN": "en_US",
    "DE": "de_DE",
    "ES": "es_ES",
    "FR": "fr_FR",
    "IT": "it_IT",
    "KO": "ko_KR",
    "PT": "pt_BR",
    "RU": "ru_RU"
  }

  let data_name = data_view;
  if (data_view == "azerite_traits" && ["head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
    data_name += "_" + chosen_azerite_list_type;
  }

  let return_name = "";
  try {
    return_name = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["languages"][name][language_table[language]];
  } catch (error) {
    if (debug) {
      console.log(`No translation for ${name} found.`);
      console.log(error);
    }
    return_name = name;
  }

  if (debug) {
    console.log("Translated name: " + return_name);
  }

  return return_name;
}

/**
 * Function solely exists to update the Azerite Trait Stacking chart.
 */
function update_trait_stacking_chart() {
  if (debug)
    console.log("update_trait_stacking_chart");

  if ("sorted_data_keys_2" in loaded_data[chosen_class][chosen_spec][data_view][fight_style]) {
    var dps_ordered_data = [];
    if (data_view === "azerite_traits" && ["itemlevel", "trait_stacking"].includes(chosen_azerite_list_type)) {
      dps_ordered_data = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_azerite_tier_" + chosen_azerite_tier + "_" + chosen_azerite_list_type];
    } else {
      dps_ordered_data = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_data_keys_2"];
    }

  } else {
    if (debug) {
      console.log("Getting sorted_data_keys_2 from data failed. Set unordered dps_ordered_data");
    }
    var dps_ordered_data = Object.keys(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]).slice();
  }

  // filter dps_ordered_data by source
  let purge_list = [];
  for (let thing of dps_ordered_data) {
    try {
      if (!chosen_source_list.includes(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data_sources"][thing])) {
        purge_list.push(thing);
      }
    } catch (error) {
      // data_sources are not available
    }
  }
  for (let thing of purge_list) {
    dps_ordered_data.splice(dps_ordered_data.indexOf(thing), 1);
  }

  // cleanse dps_ordered_data from doubled pvp traits
  // alliance names will be deleted
  // we're essentially just double checking that our item_and_trait_equilizer doesn't try to kill not-present-traits
  for (let alliance of Object.values(item_and_trait_equilizer)) {
    let pos = dps_ordered_data.indexOf(alliance);
    if (pos > -1) {
      try {
        dps_ordered_data.splice(pos, 1);
      } catch (error) {
        console.warn(error);
      }
    }
  }

  // change item/spell names to wowhead links
  let ordered_trinket_list = [];
  for (let i in dps_ordered_data) {

    let spell_id = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["spell_ids"][dps_ordered_data[i]];
    let trait_name = dps_ordered_data[i];

    // if the present trait is a value in the collection of equal data we have to adjust the trait name and id
    if (Object.values(item_and_trait_equilizer).includes(trait_name)) {
      for (let key in item_and_trait_equilizer) {
        if (item_and_trait_equilizer[key] == trait_name) {
          spell_id = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["spell_ids"][key];
          trait_name = key;
        }
      }
    }

    let name_portions = trait_name.split("+");

    let link = "";

    for (let tmp_i in name_portions) {
      let name_portion = name_portions[tmp_i];

      link += "<div style=\"display:inline-block; margin-bottom:-3px\"><a href=\"https://";

      if (language == "EN") {
        link += "www";
      } else {
        link += language.toLowerCase();
      }

      link += ".wowhead.com/spell=";

      let portion_spell_id = "";

      try {
        portion_spell_id = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["spell_ids"][name_portion.trim()];
      } catch (error) {
        portion_spell_id = spell_id;
      }

      link += portion_spell_id;

      link += "/" + slugify(trait_name);


      link += "\" target=\"blank\"";
      if (whTooltips.iconizeLinks && !item_and_trait_equilizer[trait_name] && name_portions.length === 1) {
        link += "class=\"chart_link\"";
      }
      link += ">";
      if (tmp_i === "0" || !whTooltips.iconizeLinks) { // I have no idea for what reason this is a string...
        link += get_translated_name(name_portion.trim());
      }
      link += "</a></div>";

      if (name_portions.length > 1 && tmp_i < name_portions.length - 1) {
        if (tmp_i % 4 === 0 || tmp_i === "0") {
          link += "<br/>";
        }
        link += "+";
      }

    }

    // add equilized spell/effect
    if (item_and_trait_equilizer[trait_name]) {
      link += " / <br><div style=\"display:inline-block;\"><a href=\"https://";

      if (language == "EN") {
        link += "www";
      } else {
        link += language.toLowerCase();
      }

      link += ".wowhead.com/spell=";
      link += loaded_data[chosen_class][chosen_spec][data_view][fight_style]["spell_ids"][item_and_trait_equilizer[trait_name]];

      link += "/" + slugify(item_and_trait_equilizer[trait_name]);

      let translated_name = get_translated_name(item_and_trait_equilizer[trait_name]);

      link += "\" target=\"blank\"";
      if (whTooltips.iconizeLinks) {
        link += "class=\"chart_link\"";
      }
      link += ">" + translated_name + "</a></div>";
    }

    ordered_trinket_list.push(link);
  }
  // rewrite the trinket names
  if (debug) {
    console.log("applying ordered_trinket_list to categories in update_trait_stacking_chart");
  }
  standard_chart.update({
    xAxis: {
      categories: ordered_trinket_list
    }
  }, false);

  // manipulate title and other page elements
  let timestamp = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["timestamp"];
  let year = timestamp.split("-")[0];
  let month = timestamp.split("-")[1];
  let day = timestamp.split("-")[2].split(" ")[0];
  let hour = timestamp.split(" ")[1].split(":")[0];
  let minute = timestamp.split(":")[1];

  let subtitle = "Last updated ";
  // month is a number 0-11
  let age = new Date() - new Date(Date.UTC(year, month - 1, day, hour, minute));
  let age_days = Math.floor(age / 24 / 3600 / 1000);
  if (age_days > 0) {
    subtitle += `${age_days}d `;
  }
  let age_hours = Math.floor(age / 3600 / 1000) - age_days * 24;
  subtitle += `${age_hours}h ago`;

  let max_ilevel = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simulated_steps"][0].split("_")[1];

  // set title and subtitle
  document.getElementById("chart_title").innerHTML = `Itemlevel ${max_ilevel} | different number of traits | pure trait dps`;
  document.getElementById("chart_title").hidden = false;
  add_profile_information();
  document.getElementById("chart_subtitle").innerHTML = subtitle;
  document.getElementById("chart_simc_hash").innerHTML = `SimulationCraft build: <a href=\"https://github.com/simulationcraft/simc/commit/${loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simc_settings"]["simc_hash"]}\" target=\"blank\">#${loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simc_settings"]["simc_hash"].substring(0, 5)}</a>`;


  // delete all old series data
  while (standard_chart.series[0]) {
    standard_chart.series[0].remove(false);
  }

  // basically: if something was simmed with multiple itemlevels
  for (let stack_count of [3, 2, 1]) {
    let max_itemlevel = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simulated_steps"][0].split("_")[1];

    let stack_name = stack_count + "_" + max_itemlevel;
    let itemlevel_dps_values = [];

    if (debug) {
      console.log("handling stack_name " + stack_name);
    }

    // create series input for highcharts
    for (let data of dps_ordered_data) {

      let traits_information = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"];

      let baseline_dps = traits_information["baseline"]["1_" + max_itemlevel];

      let dps = traits_information[data][stack_name];

      // if a trait doesn't have values at the highest simulated itemlevel, get their max available itemlevel dps
      let tmp_max_step = max_itemlevel;
      if (!dps) {
        let simulation_steps = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simulated_steps"];
        for (let i = 0; i < simulation_steps.length; i++) {
          const step = simulation_steps[i];
          if (!dps) {
            // set dps only once
            if (traits_information[data][step]) {
              tmp_max_step = step.split("_")[1];
              dps = traits_information[data][stack_count + "_" + step.split("_")[1]];
              baseline_dps = traits_information["baseline"]["1_" + step.split("_")[1]];
            }
          }
        }
      }

      // check for zero dps values and don't change them
      if (dps > 0) {

        // if lowest trait count is looked at, substract baseline
        if (stack_count === 1) {

          if (chosen_value_style === "absolute_gain") {
            itemlevel_dps_values.push(dps - baseline_dps);
          } else if (chosen_value_style === "relative_gain") {
            itemlevel_dps_values.push(Math.round((dps - baseline_dps) * 10000 / baseline_dps) / 100);
          } else if (chosen_value_style === "absolute_value") {
            itemlevel_dps_values.push(dps);
          }
        } else { // else substract lower itemlevel value of same trait

          if (chosen_value_style === "absolute_gain") {
            itemlevel_dps_values.push(dps - traits_information[data][stack_count - 1 + "_" + tmp_max_step]);
          } else if (chosen_value_style === "relative_gain") {
            itemlevel_dps_values.push(Math.round((dps - traits_information[data][stack_count - 1 + "_" + tmp_max_step]) * 10000 / baseline_dps) / 100);
          } else if (chosen_value_style === "absolute_value") {
            itemlevel_dps_values.push(dps - traits_information[data][stack_count - 1 + "_" + tmp_max_step]);
          }
        }

      } else {
        if (stack_name in traits_information[data]) {
          if (chosen_value_style === "absolute_gain") {
            itemlevel_dps_values.push(dps);
          } else if (chosen_value_style === "relative_gain") {
            itemlevel_dps_values.push(Math.round(dps * 10000 / baseline_dps) / 100);
          } else if (chosen_value_style === "absolute_value") {
            itemlevel_dps_values.push(dps);
          }
        } else {
          if (chosen_value_style === "absolute_gain") {
            itemlevel_dps_values.push(0);
          } else if (chosen_value_style === "relative_gain") {
            itemlevel_dps_values.push(0);
          } else if (chosen_value_style === "absolute_value") {
            itemlevel_dps_values.push(0);
          }
        }
      }
    }

    let new_stack_name = stack_name.split("_")[0];

    standard_chart.addSeries({
      color: ilevel_color_table[stack_name],
      data: itemlevel_dps_values,
      name: new_stack_name,
      showInLegend: true
    }, false);
  }

  // adjust axis titles
  set_value_style();


  standard_chart.legend.title.attr({ text: "Trait count" });

  document.getElementById("chart").style.height = 200 + dps_ordered_data.length * 42 + "px";
  standard_chart.setSize(document.getElementById("chart").style.width, document.getElementById("chart").style.height);
  standard_chart.redraw();

  try {
    $WowheadPower.refreshLinks();
  } catch (error) {

  }

}

function empty_charts() {
  while (standard_chart.series[0]) {
    standard_chart.series[0].remove(false);
  }

  let data_name = data_view;
  if (data_view === "azerite_traits" && ["head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
    data_name += "_" + chosen_azerite_list_type;
  }

  document.getElementById("chart_title").innerHTML = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["title"];
  document.getElementById("chart_title").hidden = false;
  add_profile_information();
  document.getElementById("chart_subtitle").innerHTML = "No data available / Loading...";

  // delete all old series data
  while (scatter_chart.series[0]) {
    scatter_chart.series[0].remove(false);
  }
}

/**
 * Add profile information from data to website.
 */
function add_profile_information() {
  if (debug) {
    console.log("add_profile_information");
  }
  let talents = document.getElementById("used_talents");
  let equip = document.getElementById("used_items");

  // empty
  while (talents.firstChild) {
    talents.removeChild(talents.firstChild);
  }
  while (equip.firstChild) {
    equip.removeChild(equip.firstChild);
  }

  // add title
  talents.appendChild(document.createTextNode("Talents: "));

  // get necessary data
  let data_name = data_view;
  if (data_name === "azerite_traits" && ["head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
    data_name += "_" + chosen_azerite_list_type;
  }
  let talent_data = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["talent_data"];
  let profile_data = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["profile"];

  // create link section
  let talent_combination = undefined;
  try {
    talent_combination = profile_data["talents"];
  } catch (error) {
    document.getElementById("profile_block").hidden = true;
    return;
  }
  for (let row = 0; row < talent_combination.length; row++) {
    let talent = talent_combination[row];
    let talent_id = undefined;
    try {
      // skip row if no talent was selected (0) in a row
      talent_id = talent_data[parseInt(row) + 1][parseInt(talent)]["spell_id"];
    } catch (error) {
      if (!whTooltips.iconizeLinks) {
        talents.appendChild(document.createTextNode("0 "))
      }
      continue;
    }
    let link = document.createElement("a");
    link.href = "https://" + (language === "EN" ? "www" : language.toLowerCase()) + ".wowhead.com";
    link.href += "spell=" + talent_id;
    talents.appendChild(link);
    if (!whTooltips.iconizeLinks) {
      link.appendChild(document.createTextNode(talent));
      talents.appendChild(document.createTextNode(" "));
    } else {
      link.dataset.whIconSize = "small";
    }
  }

  // item links
  let slots = [
    "head",
    "neck",
    "shoulders",
    "back",
    "chest",
    "wrists",
    "hands",
    "waist",
    "legs",
    "feet",
    "finger1",
    "finger2",
    "trinket1",
    "trinket2",
    "main_hand",
    "off_hand"
  ];
  let abbreviations = {
    "head": "H",
    "neck": "N",
    "shoulders": "S",
    "back": "B",
    "chest": "C",
    "wrists": "Wr",
    "hands": "H",
    "waist": "Wa",
    "legs": "L",
    "feet": "F",
    "finger1": "F1",
    "finger2": "F2",
    "trinket1": "T1",
    "trinket2": "T2",
    "main_hand": "MH",
    "off_hand": "OH"
  };
  let enchants = {
    "deadly_navigation": 5965,
    "quick_navigation": 5963,
    "masterful_navigation": 5964,
    "versatile_navigation": 5962,
    "pact_of_critical_strike": 5942,
    "pact_of_haste": 5943,
    "pact_of_mastery": 5944,
    "pact_of_versatility": 5945
  };
  for (let slot of slots) {
    // if itemslot is empty / missing
    if (!profile_data[slot]) {
      equip.appendChild(document.createTextNode(slot + " "));
      continue;
    }
    let item_data = profile_data[slot];
    let link = document.createElement("a");
    link.href = "https://" + (language === "EN" ? "www" : language.toLowerCase()) + ".wowhead.com";
    link.href += "item=" + item_data["id"];
    // add bonus_ids
    if (item_data["bonus_id"]) {
      link.href += "?bonus=" + item_data["bonus_id"].replace(/\//g, ":");
    }
    // add azerite_powers
    if (item_data["azerite_powers"]) {
      link.href += "&azerite-powers=" + loaded_data[chosen_class][chosen_spec][data_name][fight_style]["class_id"] + ":" + item_data["azerite_powers"].replace(/\//g, ":");
    }
    // add enchants
    if (item_data["enchant"]) {
      try {
        link.href += "&ench=" + enchants[item_data["enchant"]];
      } catch (error) {
        // unknown enchant
      }
    }
    // add link to element
    equip.appendChild(link);
    if (!whTooltips.iconizeLinks) {
      link.appendChild(document.createTextNode(abbreviations[slot]));
      equip.appendChild(document.createTextNode(" "));
    } else {
      // add icon size
      link.dataset.whIconSize = "small";
    }
  }

  // show both
  talents.hidden = false;
  equip.hidden = false;
  document.getElementById("profile_block").hidden = false;

}

/**
 * Capitalize all first letters in a string.
 * Example: string_test -> String_Test
 */
function capitalize_first_letters(string) {
  if (debug)
    console.log("capitalize_first_letters");
  var new_string = string.charAt(0).toUpperCase();
  if (string.indexOf("_") > -1) {
    new_string += string.slice(1, string.indexOf("_") + 1);
    new_string += capitalize_first_letters(string.slice(string.indexOf("_") + 1));
  } else {
    new_string += string.slice(1);
  }
  return new_string;
}

/**
 * Update data header, triggers TC area appropriate hide and show.
 */
function update_page_content() {
  if (debug)
    console.log("update_page_content");
  if (chosen_class === "" || chosen_spec === "") {
    debug && console.log("update_page_content aborted. No class or spec found.")
    return;
  }
  // update title
  var content = "<span class=\"" + chosen_class + "-color\"";
  if (chosen_class == "priest" || chosen_class == "rogue") {
    content += " style=\"text-shadow: 0px 0px 13px black\"";
  }
  content += "><span class=\"translate_" + chosen_class + "\">" + capitalize_first_letters(chosen_class).replace("_", " ") + "</span>: <span class=\"translate_" + chosen_spec + "\">" + capitalize_first_letters(chosen_spec).replace("_", " ") + "</span></span>";
  document.getElementById("data_header").innerHTML = content;

  // update TC resource
  // hide tc-boxes
  var boxes = document.getElementsByClassName("tc-box");
  for (let index = 0; index < boxes.length; index++) {
    const element = boxes[index];
    element.hidden = true;
  }
  // show appropriate tc box
  try {
    document.getElementById("tc_" + chosen_class + "_" + chosen_spec).hidden = false;
  } catch (error) {
    //
  }
}

/**
 * Constructs and returns the current state as url-string.
 */
function create_link() {

  var path = window.location.origin;
  path += window.location.pathname;

  if (chosen_class === "") {
    return path;
  }

  path += "#" + chosen_class;
  path += "_" + chosen_spec;

  if (data_view === "trinkets" && fight_style === "patchwerk") {
    return path;
  }
  path += "?data_view=" + data_view;
  if (fight_style !== "patchwerk") {
    path += "&fight_style=" + fight_style;
  }
  if (data_view == "azerite_traits") {
    path += "&type=" + chosen_azerite_list_type;
    if (chosen_azerite_list_type === "itemlevel" || chosen_azerite_list_type === "trait_stacking") {
      path += "&tier=" + chosen_azerite_tier;
    }
  }
  if (language !== "EN") {
    path += "&lang=" + language;
  }

  return path;
}

function copy_link() {
  if (debug)
    console.log("copy_link");

  var path = create_link();

  let link_helper = document.getElementById("chart_link_generator");
  link_helper.innerHTML = path;
  link_helper.style.display = "block";
  window.getSelection().selectAllChildren(link_helper);
  document.execCommand("copy");
  link_helper.style.display = "none";

  let success_message = document.getElementById("copy_success");
  success_message.className = "show";
  setTimeout(function () {
    success_message.className = success_message.className.replace("show", "");
  }, 3000);

}


function copy_azerite_weights() {
  if (debug)
    console.log("copy_azerite_weights");

  var weight_string = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["azerite_weight_" + fight_style];

  let link_helper = document.getElementById("copy_azerite_weights_generator");
  link_helper.innerHTML = weight_string;
  link_helper.style.display = "block";
  window.getSelection().selectAllChildren(link_helper);
  document.execCommand("copy");
  link_helper.style.display = "none";

  let success_message = document.getElementById("copy_weights_success");
  success_message.className = "show";
  setTimeout(function () {
    success_message.className = success_message.className.replace("show", "");
  }, 3000);

}

/**
 * Copy's the relative azerite forge string to your clipboard.
 */

function copy_azerite_forge() {
  if (debug)
    console.log("copy_azerite_forge");

  var weight_string = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["azerite_forge_" + fight_style + "_" + chosen_azerite_list_type];
  let link_helper = document.getElementById("copy_azerite_forge_generator");
  let data = loaded_data[chosen_class][chosen_spec][data_view][fight_style];

  let relative_string = `AZFORGE:${data["class_id"]}:${data["spec_id"]}^`;

  if (relative_azerite_forge_traits_stacking_import && chosen_azerite_list_type === "trait_stacking") {
    let baseline;
    let traitID;
    let oneStack;
    let twoStack;
    let threeStack;
    let section;

    let maxItemLevel = data["simulated_steps"][0].toString().split("_")[1];
    for (let spell in data["azerite_ids"]) {
      baseline = data["data"]["baseline"]["1_" + maxItemLevel];
      traitID = data["azerite_ids"][spell];

      try {
        oneStack = data["data"][spell]["1_" + maxItemLevel] - baseline;
      } catch (e) {oneStack = NaN;}

      try {
        twoStack = data["data"][spell]["2_" + maxItemLevel] - baseline;
      } catch (e) {twoStack = NaN;}

      try {
        threeStack = data["data"][spell]["3_" + maxItemLevel] - baseline;
      } catch (e) {
        threeStack = NaN;
      }

      section = `[${traitID}]`;
      if (!isNaN(oneStack)) {
        section += `1:${(oneStack)},`;
      }
      if (!isNaN(twoStack)) {
        section += `2:${twoStack - oneStack},`;
      }
      if (!isNaN(threeStack)) {
        section += `3:${threeStack - twoStack},`;
      }
      section += "^";
      relative_string += section;
    }
  }
  // For some reason it does not like it when i just overwrite weight_string (Just worked some of the times) OwO
  // So doing this in an if OwO
  if(relative_azerite_forge_traits_stacking_import && chosen_azerite_list_type === "trait_stacking"){
    link_helper.innerHTML = relative_string;
  } else {
    link_helper.innerHTML = weight_string;
  }
  link_helper.style.display = "block";
  window.getSelection().selectAllChildren(link_helper);
  document.execCommand("copy");
  link_helper.style.display = "none";

  let success_message = document.getElementById("copy_weights_success");
  success_message.className = "show";
  setTimeout(function () {
    success_message.className = success_message.className.replace("show", "");
  }, 3000);

}

/**
 * Scatter chart for secondary stat distributions
 */
var scatter_chart = new Highcharts.Chart({
  chart: {
    renderTo: 'scatter_plot_chart',
    type: "scatter3d",
    backgroundColor: null,
    animation: false,
    height: 800,
    width: 800,
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 30,
      depth: 800,
      fitToPlot: false,
    }
  },
  legend: {
    enabled: true,
    backgroundColor: dark_color,
    borderColor: medium_color,
    borderWidth: 1,
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
    itemStyle: { "color": light_color },
    itemHoverStyle: { "color": light_color }
  },
  plotOptions: {
    series: {
      dataLabels: {
        allowOverlap: true,
        style: {
          color: light_color,
          fontSize: font_size,
          fontWeight: "400",
          textOutline: ""
        }
      },
      events: {
        legendItemClick: function () {
          return false;
        }
      },
    },
  },
  series: [],
  title: {
    text: "", //"Title placeholder",
    useHTML: true,
    style: {
      color: light_color
    }
  },
  subtitle: {
    text: "",
    useHTML: true,
    style: {
      color: light_color,
      fontSize: font_size
    }
  },
  tooltip: {
    headerFormat: '',
    pointFormatter: function () {
      return '<table class="">\
        <thead>\
          <tr>\
            <th scope="col"></th>\
            <th scope="col">Absolute</th>\
            <th scope="col">Relative</th>\
          </tr>\
        </thead>\
        <tbody>\
          <tr>\
            <th scope="row">DPS</th>\
            <td>' + Intl.NumberFormat().format(this.dps) + '</td>\
            <td>' + Math.round(this.dps / this.dps_max * 10000) / 100 + '%</td>\
          </tr>\
          <tr>\
            <th scope="row">Crit</th>\
            <td>' + Intl.NumberFormat().format(this.stat_crit) + '</td>\
            <td>' + this.name.split("_")[0] + '%</td>\
          </tr>\
          <tr>\
            <th scope="row">Haste</th>\
            <td>' + Intl.NumberFormat().format(this.stat_haste) + '</td>\
            <td>' + this.name.split("_")[1] + '%</td>\
          </tr>\
          <tr>\
            <th scope="row">Mastery</th>\
            <td>' + Intl.NumberFormat().format(this.stat_mastery) + '</td>\
            <td>' + this.name.split("_")[2] + '%</td>\
          </tr>\
          <tr>\
            <th scope="row">Versatility</th>\
            <td>' + Intl.NumberFormat().format(this.stat_vers) + '</td>\
            <td>' + this.name.split("_")[3] + '%</td>\
          </tr>\
        </tbody>\
      </table>';
    },
    useHTML: true,
    borderColor: dark_color,
  },
  xAxis: {
    min: 0,
    max: 80,
    tickInterval: 20,
    startOnTick: true,
    endOnTick: true,
    title: "",
    labels: {
      enabled: false,
    },
    gridLineWidth: 1,
    gridLineColor: medium_color,
  },
  yAxis: {
    min: -10,
    max: 70,
    tickInterval: 20,
    startOnTick: true,
    endOnTick: true,
    title: "",
    labels: {
      enabled: false,
    },
    gridLineWidth: 1,
    gridLineColor: medium_color,
  },
  zAxis: {
    min: 10,
    max: 90,
    tickInterval: 20,
    startOnTick: true,
    endOnTick: true,
    title: "",
    labels: {
      enabled: false,
    },
    reversed: true,
    gridLineWidth: 1,
    gridLineColor: medium_color,
  },
});

// Add mouse and touch events for rotation
(function (H) {
  function dragStart(eStart) {
    eStart = scatter_chart.pointer.normalize(eStart);

    var posX = eStart.chartX,
      posY = eStart.chartY,
      alpha = scatter_chart.options.chart.options3d.alpha,
      beta = scatter_chart.options.chart.options3d.beta,
      sensitivity = 5; // lower is more sensitive

    function drag(e) {
      // Get e.chartX and e.chartY
      e = scatter_chart.pointer.normalize(e);

      scatter_chart.update({
        chart: {
          options3d: {
            alpha: alpha + (e.chartY - posY) / sensitivity,
            beta: beta + (posX - e.chartX) / sensitivity
          }
        }
      }, undefined, undefined, false);
    }

    scatter_chart.unbindDragMouse = H.addEvent(document, 'mousemove', drag);
    scatter_chart.unbindDragTouch = H.addEvent(document, 'touchmove', drag);

    H.addEvent(document, 'mouseup', scatter_chart.unbindDragMouse);
    H.addEvent(document, 'touchend', scatter_chart.unbindDragTouch);
  }

  H.addEvent(scatter_chart.container, 'mousedown', dragStart);
  H.addEvent(scatter_chart.container, 'touchstart', dragStart);
}(Highcharts));


/**
 *  Creates the rgb color array for the dps of a marker.
 *
 * @param {Int} dps
 * @param {Int} min_dps
 * @param {Int} max_dps
 */
function create_color(dps, min_dps, max_dps) {
  if (debug)
    console.log("create_color");

  // colour of lowest DPS
  let color_min = [0, 255, 255];
  // additional colour step between min and max
  let color_mid = [255, 255, 0];
  // colour of  max dps
  let color_max = [255, 0, 0];

  // calculate the position of the mid colour in this relation to ensure a smooth colour transition (colour distance...if something like this exists) between the three
  let diff_mid_max = 0;
  let diff_min_mid = 0;
  for (let i = 0; i < 3; i++) {
    diff_mid_max += Math.abs(color_max[i] - color_mid[i]);
    diff_min_mid += Math.abs(color_mid[i] - color_min[i]);
  }
  // ratio from min to max to describe the position of the id colour
  let mid_ratio = diff_min_mid / (diff_min_mid + diff_mid_max);
  // mid dps resulting from the ratio
  let mid_dps = min_dps + (max_dps - min_dps) * mid_ratio;

  // calculate colour based on relative dps
  if (dps >= mid_dps) {
    let percent_of_max = (dps - mid_dps) / (max_dps - mid_dps);
    return [
      Math.floor(color_max[0] * percent_of_max + color_mid[0] * (1 - percent_of_max)),
      Math.floor(color_max[1] * percent_of_max + color_mid[1] * (1 - percent_of_max)),
      Math.floor(color_max[2] * percent_of_max + color_mid[2] * (1 - percent_of_max))
    ];
  } else {
    let percent_of_mid = (dps - min_dps) / (mid_dps - min_dps);
    return [
      Math.floor(color_mid[0] * percent_of_mid + color_min[0] * (1 - percent_of_mid)),
      Math.floor(color_mid[1] * percent_of_mid + color_min[1] * (1 - percent_of_mid)),
      Math.floor(color_mid[2] * percent_of_mid + color_min[2] * (1 - percent_of_mid))
    ];
  }
}

/**
 * Creates a series based on the loaded data and pushes it into the scatter chart
 */
function update_scatter_chart() {
  if (debug)
    console.log("update_scatter_chart");

  // get max dps of the whole data set
  let max_dps = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][chosen_talent_combination][loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_data_keys"][chosen_talent_combination][0]];
  // get min dps of the whole data set
  let min_dps = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][chosen_talent_combination][loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_data_keys"][chosen_talent_combination][loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_data_keys"][chosen_talent_combination].length - 1]];

  // prepare series with standard data
  let series = {
    name: Intl.NumberFormat().format(max_dps) + " DPS",
    color: "#FF0000", // make sure this matches the value of color_max in create_color(...)
    data: []
  };

  // add a marker for each distribution in the data set
  for (let distribution of Object.keys(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][chosen_talent_combination])) {
    let talent_data_distribution = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][chosen_talent_combination][distribution];
    // get the markers color
    let color_set = create_color(
      talent_data_distribution,
      min_dps,
      max_dps
    );

    // width of the border of the marker, 0 for all markers but the max, which gets 3
    let line_width = 1;
    let line_color = "#232227";
    // adjust marker radius depending on distance to max
    // worst dps: 2
    // max dps: 5 (increased to 8 to fit the additional border)
    let radius = 2 + 3 * (talent_data_distribution - min_dps) / (max_dps - min_dps);
    if (max_dps === talent_data_distribution) {
      line_width = 3;
      radius = 8;
      line_color = light_color;
    }

    // undefined data label for all markers unless they are the "max" values
    let data_label = undefined;

    // 70 is the max possible value in data. would need adjustement if data changes to other max values. But I doubt this'll happen.
    if (distribution.indexOf("70") > -1) {
      data_label = {
        enabled: true,
        allowOverlap: true,
      };

      switch (distribution.indexOf("70")) {
        case 0: // "70_10_10_10"
          data_label.format = "Crit";
          data_label.verticalAlign = "top";
          break;
        case 3: // "10_70_10_10"
          data_label.format = "Haste";
          break;
        case 6: // "10_10_70_10"
          data_label.format = "Mastery";
          data_label.verticalAlign = "top";
          break;
        case 9: // "10_10_10_70"
          data_label.format = "Versatility";
          data_label.verticalAlign = "top";
          break;

        default:
          // how did we even end up here?
          break;
      }
    }
    const secondary_sum = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["secondary_sum"];
    // push marker data into the series
    series.data.push({
      // formulas slowly snailed together from combining different relations within https://en.wikipedia.org/wiki/Equilateral_triangle and https://en.wikipedia.org/wiki/Pythagorean_theorem
      x: Math.sqrt(3) / 2 * (parseInt(distribution.split("_")[0]) + 1 / 3 * parseInt(distribution.split("_")[1])),
      y: Math.sqrt(2 / 3) * parseInt(distribution.split("_")[1]),
      z: parseInt(distribution.split("_")[2]) + 0.5 * parseInt(distribution.split("_")[0]) + 0.5 * parseInt(distribution.split("_")[1]),
      name: distribution,
      // flat markers with dark border (borders are prepared further up)
      color: "rgb(" + color_set[0] + "," + color_set[1] + "," + color_set[2] + ")",

      // 3d markers with light area and shadow at the opposite side
      // color: {
      //   radialGradient: {
      //     cx: 0.4,
      //     cy: 0.3,
      //     r: 0.5
      //   },
      //   stops: [
      //     //[0, "rgb(" + color_set[0] + "," + color_set[1] + "," + color_set[2] + ")"],
      //     [0, Highcharts.Color('rgb(' + color_set[0] + ',' + color_set[1] + ',' + color_set[2] + ')').brighten(0.4).get('rgb')],
      //     [1, Highcharts.Color('rgb(' + color_set[0] + ',' + color_set[1] + ',' + color_set[2] + ')').brighten(-0.4).get('rgb')]
      //   ]
      // },
      // add additional information required for tooltips
      dps: talent_data_distribution,
      dps_max: max_dps,
      dps_min: min_dps,
      stat_crit: parseInt(distribution.split("_")[0]) * secondary_sum / 100,
      stat_haste: parseInt(distribution.split("_")[1]) * secondary_sum / 100,
      stat_mastery: parseInt(distribution.split("_")[2]) * secondary_sum / 100,
      stat_vers: parseInt(distribution.split("_")[3]) * secondary_sum / 100,
      stat_sum: secondary_sum,
      // add marker information
      marker: {
        radius: radius,
        lineColor: line_color,
        lineWidth: line_width
      },
      // add visible data labels (crit, haste, mastery, vers)
      dataLabels: data_label,
    });
  }

  // delete all old series data
  while (scatter_chart.series[0]) {
    scatter_chart.series[0].remove(false);
  }

  scatter_chart.addSeries(series, false);
  // make sure this color matches the value of color_min in create_color(...)
  scatter_chart.addSeries({ name: Intl.NumberFormat().format(min_dps) + " DPS", color: "#00FFFF" }, false);


  let timestamp = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["timestamp"];
  let year = timestamp.split("-")[0];
  let month = timestamp.split("-")[1];
  let day = timestamp.split("-")[2].split(" ")[0];
  let hour = timestamp.split(" ")[1].split(":")[0];
  let minute = timestamp.split(":")[1];

  let subtitle = "Last updated ";
  // month is a number 0-11
  let age = new Date() - new Date(Date.UTC(year, month - 1, day, hour, minute));
  let age_days = Math.floor(age / 24 / 3600 / 1000);
  if (age_days > 0) {
    subtitle += `${age_days}d `;
  }
  let age_hours = Math.floor(age / 3600 / 1000) - age_days * 24;
  subtitle += `${age_hours}h ago`;

  document.getElementById("chart_title").innerHTML = "";//loaded_data[chosen_class][chosen_spec][data_view][fight_style]["title"];
  document.getElementById("chart_title").hidden = true;
  add_profile_information();
  document.getElementById("chart_subtitle").innerHTML = subtitle;
  document.getElementById("chart_simc_hash").innerHTML = `SimulationCraft build: <a href=\"https://github.com/simulationcraft/simc/commit/${loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simc_settings"]["simc_hash"]}\" target=\"blank\">#${loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simc_settings"]["simc_hash"].substring(0, 5)}</a>`;


  scatter_chart.redraw();
}



/** Save the current iconized_chart in a cookie. */
function set_iconized_chart_cookie() {
  if (debug) {
    console.log("set_iconized_chart_cookie");
  }
  Cookies.set('bloodmallet_iconized_chart', whTooltips.iconizeLinks, { expires: 31, path: '' });
  update_chart();
}


/** searches for the iconized charts cookie */
function search_iconized_chart_cookie() {
  if (debug) {
    console.log("search_iconized_chart_cookie");
  }
  if (Cookies.get('bloodmallet_iconized_chart')) {
    whTooltips.iconizeLinks = ('true' === Cookies.get('bloodmallet_iconized_chart'));
  }
  document.getElementById("iconized_charts_checkbox").checked = whTooltips.iconizeLinks;
}

/**
 * Sets the relative azerite cookie
 */
function set_relative_azerite_forge_import_cookie(){
  if(debug)
    console.log("set_relative_azerite_forge_import_cookie");
  Cookies.set("bloodmallet_relative_azerite_forge_import_string", relative_azerite_forge_traits_stacking_import, {expires: 31, path: ''});
}

/**
 * Gets the relative azerite cookie
 */
function search_relative_azerite_forge_import_cookie(){
  if(debug)
    console.log("search_relative_azerite_forge_import_cookie");
  if(Cookies.get("bloodmallet_relative_azerite_forge_import_string")){
    relative_azerite_forge_traits_stacking_import = ('true' === Cookies.get('bloodmallet_relative_azerite_forge_import_string'));
  }
  document.getElementById("relative_azerite_forge").checked = relative_azerite_forge_traits_stacking_import;
}


/******************************************************************************
 *
 * Last content block. These functions trigger onfinished load.
 *
 */


document.addEventListener("DOMContentLoaded", async function () {
  search_dark_mode_cookie();
  search_iconized_chart_cookie();
  search_relative_azerite_forge_import_cookie();
  await search_language_cookie();

  get_data_from_link();
  if (chosen_spec !== "") {
    switch_mode();
  }

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

});
