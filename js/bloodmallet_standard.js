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
      "tc_resources"
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
      "chart"
    ]
  }
};

let loaded_data = {};

let chosen_class = "";
let chosen_spec = "";
let chosen_talent_combination = "";
let chosen_azerite_list_type = "trait_stacking";

let chosen_azerite_tier = 1;

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
  "translate_link_was_copied_to_clipboard"
];


let mode = "welcome";
let fight_style = "patchwerk";
let data_view = "trinkets";

const data_view_IDs = [
  "show_trinkets_data", // => trinkets
  "show_azerite_traits_data", // => azerite_traits
  "show_races_data", // => races
  "show_secondary_distributions_data",
  "talent_combination_selector",
  "chart_type_itemlevel",
  "chart_type_trait_stacking",
  "chart_type_head",
  "chart_type_shoulders",
  "chart_type_chest",
  "copy_link"
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
  "azerite_traits_tier_1",
  "azerite_traits_tier_2"
];

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
    backgroundColor: dark_color,
    borderColor: medium_color,
    borderWidth: 1,
    floating: true,
    itemMarginBottom: 3,
    itemMarginTop: 3,
    layout: 'vertical',
    reversed: true,
    shadow: false,
    verticalAlign: "middle",
    x: 0,
    y: 0,
    itemStyle: {
      color: light_color,
    },
    itemHoverStyle: {
      color: light_color,
    }
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
    text: "Data not found",
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
      s += '"><div style=\"margin-left: 9px; margin-right: 9px; margin-bottom: 6px; font-weight: 700;\">' + this.x + '</div>'
      var cumulative_amount = 0;
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
            Intl.NumberFormat().format(cumulative_amount) +
            "</div>";
        }
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
    // adding this as a potential tooltip positioning fix. changes tooltip position to be inside the bar rather than at the end
    positioner: function (boxWidth, boxHeight, point) {
      return {
        x: point.plotX,
        y: point.plotY
      };
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
  yAxis: {
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
    gridLineColor: medium_color
  }
};

const standard_chart = Highcharts.chart('chart', empty_chart);

// invalid ilevels to use highcharts base colours but keep the old ones
const ilevel_color_table = {
  "00": "#1f78b4",
  "10": "#a6cee3",
  "20": "#33a02c",
  "30": "#b2df8a",
  "40": "#e31a1c",
  "50": "#fb9a99",
  "60": "#ff7f00",
  "70": "#cab2d6",
  "80": "#fdbf6f"
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


/*---------------------------------------------------------
//
//  Dark Mode
//
---------------------------------------------------------*/


/** add listener to the dark mode checkbox */
document.addEventListener("DOMContentLoaded", function () {
  if (debug)
    console.log("addEventListener darkModeCheckbox");
  document.getElementById("darkModeCheckbox").addEventListener("change", function (e) {
    dark_mode = e.target.checked;
    update_dark_mode();
    set_dark_mode_cookie();
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
      backgroundColor: secondary_color,
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
    yAxis: {
      stackLabels: {
        style: {
          color: primary_color
        }
      }
    }
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
  if (debug)
    console.log("set_dark_mode_cookie");
  Cookies.set('bloodmallet_dark_mode', dark_mode, { expires: 31, path: '' });
}

/** searches for the dark mode cookie and updates the page if necessary */
function search_dark_mode_cookie() {
  if (debug)
    console.log("search_dark_mode_cookie");
  if (Cookies.get('bloodmallet_dark_mode')) {
    dark_mode = ('true' === Cookies.get('bloodmallet_dark_mode'));
  }
  document.getElementById("darkModeCheckbox").checked = dark_mode;
  update_dark_mode();
  set_dark_mode_cookie();
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
    let response = await fetch(`./translations/${new_language.toLowerCase()}.json`);
    loaded_languages[new_language] = await response.json();
  }
  language = new_language;
  set_language_cookie();
  push_state();
}


/**
 * translate all translation_IDs and translation_classes. Does NOT translate charts. Use translate_chart() for that
 */
function translate_page() {
  if (debug)
    console.log("translate_page");

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

  if (typeof loaded_languages[language] === 'undefined') {
    debug && console.log("translate_page abort, due to missing data");
    return;
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
  [].forEach.call(document.getElementsByClassName(element), function (html_element) {
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

    html_element.innerHTML = translated_element;
  });
}

/** Translates the current chart.
 *  assumption: only one chart is present */
function translate_chart() {
  if (debug)
    console.log("translate_chart");

  if (data_view !== "trinkets" && data_view !== "azerite_traits") {
    if (debug)
      console.log("translate_chart early exit");
    return;
  }
  if (chosen_class === "" || chosen_spec === "") {
    if (debug)
      console.log("translate_chart early exit");
    return;
  }

  if (document.getElementById("translator_helper").childElementCount > 0) {

    debug && console.log("Another translation seems to be in progress. translate_chart early exit.");

    return;
  }

  // create a dictionary of all created links
  let link_list = [];
  clear_translator();

  let current_data;

  if (data_view === "azerite_traits" && ["head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
    current_data = loaded_data[chosen_class][chosen_spec][data_view + "_" + chosen_azerite_list_type][fight_style];
  } else {
    current_data = loaded_data[chosen_class][chosen_spec][data_view][fight_style];
  }

  if (!current_data) {
    debug && console.log("current_data is mysteriously empty.");
    return;
  }

  let appropriate_data_key_list = [];
  if (data_view === "azerite_traits" && ["itemlevel", "trait_stacking"].includes(chosen_azerite_list_type)) {
    appropriate_data_key_list = current_data["sorted_azerite_tier_" + chosen_azerite_tier + "_" + chosen_azerite_list_type];
  } else {
    appropriate_data_key_list = current_data["sorted_data_keys"];
  }

  for (let trinket of appropriate_data_key_list) {

    if (trinket.indexOf("baseline") > -1) {
      let p = document.createElement("span");
      let text_trinket_name = document.createTextNode(trinket);
      p.appendChild(text_trinket_name);
      link_list.push(`<span>${trinket}</span>`);
      if (language !== "EN")
        translator.appendChild(p);
      continue;
    }

    const lowest_ilvl = current_data["simulated_steps"][current_data["simulated_steps"].length - 1];

    // create untranslated link
    let new_link = document.createElement("a");
    // TODO: will need more logic for azerite traits later
    let link = `https://${language.toLowerCase()}.wowhead.com/`;
    if (data_view === "azerite_traits" && ["itemlevel", "trait_stacking"].includes(chosen_azerite_list_type)) {
      link += `spell=${current_data["spell_ids"][trinket]}`;
    } else {
      link += `item=${current_data["item_ids"][trinket]}`;
    }

    try {
      link += `&ilvl=${lowest_ilvl.split("1_")[1]}`;
    } catch (error) {
      link += `&ilvl=${lowest_ilvl}`;
    }

    // add azerite power link portion
    if (data_view === "azerite_traits" && ["head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
      link += `&azerite-powers=${current_data["class_id"]}`;
      // add azerite traits
      for (let trait of current_data["used_azerite_traits_per_item"][trinket]) {
        link += ":" + trait["id"];
      }
    }

    new_link.href = link;
    new_link.target = "blank";
    let text_trinket_name = document.createTextNode(trinket);
    new_link.appendChild(text_trinket_name);

    link_list.push(`<a href="${link}" target="blank">${trinket}</a>`);

    if (language !== "EN") {
      let translator = document.getElementById("translator_helper");
      translator.appendChild(new_link);
    }

  }

  if (debug) {
    console.log("update categories with link_list (english names, foreign link in translate_chart");
  }
  standard_chart.update({
    xAxis: {
      categories: link_list
    }
  }, true);

  if (debug)
    console.log("try to trigger wowhead power js");
  trigger_wowhead_link_renaming();

  setTimeout(function () {
    update_link_data(link_list)
  }, 200);
}

/**
 * Somewhat saver way to try and retrigger wowhead link translation.
 */
function trigger_wowhead_link_renaming() {
  if (debug) {
    console.log("trigger_wowhead_link_renaming");
  }

  try {
    $WowheadPower.refreshLinks();
  } catch (error) {
    setTimeout(trigger_wowhead_link_renaming, 50);
  }
}

function clear_translator() {
  if (debug) {
    console.log("clear_translator");
  }
  let translator = document.getElementById("translator_helper");
  while (translator.firstChild) {
    translator.removeChild(translator.firstChild);
  }
}

/**
 * Awaits the translation of all hidden links.
 * If translation is done, will apply new links to chart.
 */
function update_link_data(original_list) {
  if (debug)
    console.log("update_link_data");

  let all_translated = true;
  for (let a in original_list) {

    let original_link = original_list[a];
    let new_link;
    try {
      new_link = document.getElementById("translator_helper").childNodes[a].outerHTML;
    } catch (error) {
      debug && console.log(`update_link_data couldn't find '${original_link}' in the translator_helper. Abort.`);
      clear_translator();
      return;
    }
    // wowhead tooltips add span elements into the link, therefore changing the number of the resulting array
    if (original_link.split(">").length == new_link.split(">").length && original_link.indexOf("baseline") == -1) {
      all_translated = false;
    }
  }

  if (!all_translated) {
    setTimeout(function () { update_link_data(original_list) }, 1000);
    return;
  }

  let new_categories = [];
  for (let link of document.getElementById("translator_helper").childNodes) {
    new_categories.push(link.outerHTML);
  }

  clear_translator();

  if (debug) {
    console.log(original_list);
    console.log(new_categories);
    console.log("updating categories with new_categories from update_link_data");
  }
  standard_chart.update({
    xAxis: {
      categories: new_categories
    }
  }, true);
}

/** Save the current language in a cookie. */
function set_language_cookie() {
  if (debug)
    console.log("set_language_cookie");
  Cookies.set('bloodmallet_language_selection', language, { expires: 31, path: '' });
}

/** Searches for the dark mode cookie and updates the page if necessary. */
function search_language_cookie() {
  if (debug)
    console.log("search_language_cookie");
  switch_language(Cookies.get("bloodmallet_language_selection") || "EN");
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
    addDataViewClickEvent("show_azerite_traits_data", "azerite_traits");
    addDataViewClickEvent("show_races_data", "races");
    addDataViewClickEvent("show_secondary_distributions_data", "secondary_distributions");
    addAzeriteViewClickEvent("chart_type_head", "head");
    addAzeriteViewClickEvent("chart_type_shoulders", "shoulders");
    addAzeriteViewClickEvent("chart_type_chest", "chest");
    addAzeriteViewClickEvent("chart_type_itemlevel", "itemlevel");
    addAzeriteViewClickEvent("chart_type_trait_stacking", "trait_stacking");
    addAzeriteTierClickEvent("azerite_traits_tier_1", 1);
    addAzeriteTierClickEvent("azerite_traits_tier_2", 2);
    addFightStyleClickEvent("fight_style_patchwerk", "patchwerk");
    addFightStyleClickEvent("fight_style_hecticaddcleave", "hecticaddcleave");

    document.getElementById("copy_link").addEventListener("click", function () {
      copy_link();
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
  clear_translator();
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
function get_data_from_link() {
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

  if (hash.indexOf("&") === -1) {
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
    } else if (key === "lang") {
      switch_language(value);
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
    let response = await fetch(`./json/${data_view}/${file_name}`);
    try {
      loaded_data[chosen_class][chosen_spec][data_name][fight_style] = await response.json();
    } catch (error) {
      return;
    }
  }
  empty_charts();
  update_talent_selector();
  update_chart();
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
  history.pushState({ id: 'data_view' }, chosen_spec + " " + chosen_class + " | " + data_view + " | " + fight_style, create_link());
  switch_to_data();
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
  update_azerite_buttons();
  load_data();
  translate_page();
  translate_chart();
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
    } catch (err) {
      console.log(element + " was not found in page.");
    }
  });
  // set "active" to class color
  document.getElementById("show_" + data_view + "_data").classList.add(chosen_class + "-border-bottom");

  // unhide/hide talent combination selection if necessary
  document.getElementById("talent_combination_selector").hidden = (data_view !== "secondary_distributions");

  let is_azerite = (data_view === "azerite_traits");
  document.getElementById("chart_type_head").hidden = !is_azerite;
  document.getElementById("chart_type_shoulders").hidden = !is_azerite;
  document.getElementById("chart_type_chest").hidden = !is_azerite;
  document.getElementById("chart_type_itemlevel").hidden = !is_azerite;
  document.getElementById("chart_type_trait_stacking").hidden = !is_azerite;

  let is_traits = (data_view === "azerite_traits" && (chosen_azerite_list_type === "itemlevel" || chosen_azerite_list_type === "trait_stacking"));
  document.getElementById("azerite_traits_tier_1").hidden = !is_traits;
  document.getElementById("azerite_traits_tier_2").hidden = !is_traits;
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

  if (!chosen_talent_combination) {
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
  document.getElementsByClassName("translate_" + chosen_class)[0].classList.add("active");
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
  if (debug)
    console.log("update_chart");

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
  if (data_view == "azerite_traits" && ["head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
    data_name += "_" + chosen_azerite_list_type;
  }


  // https://stackoverflow.com/questions/25500316/sort-a-dictionary-by-value-in-javascript
  // create a list of all trinkets with their highest dps value
  // var dps_ordered_data = Object.keys(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["trinkets"]).map(function (key) { return [key, Math.max(...Object.values(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["trinkets"][key]))] });
  // order said list
  // dps_ordered_data.sort(function (first, second) { return second[1] - first[1]; });
  //console.log(dps_ordered_data);
  // get rid of dps values and keep only the trinket names
  // dps_ordered_data = dps_ordered_data.map(x => x[0]);
  // or.... just use the provided sorted list once that is included in fresh data
  if ("sorted_data_keys" in loaded_data[chosen_class][chosen_spec][data_name][fight_style]) {
    var dps_ordered_data = [];

    if (data_view === "azerite_traits" && ["itemlevel", "trait_stacking"].includes(chosen_azerite_list_type)) {
      dps_ordered_data = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["sorted_azerite_tier_" + chosen_azerite_tier + "_" + chosen_azerite_list_type];
    } else {
      dps_ordered_data = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["sorted_data_keys"];
    }
  } else {
    debug && console.log("Getting sorted_data_keys from data failed. Set unordered dps_ordered_data");
    var dps_ordered_data = Object.keys(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]);
  }

  // change item/spell names to wowhead links
  ordered_trinket_list = [];
  if (data_view == "trinkets" || data_view == "azerite_traits") {
    for (let i in dps_ordered_data) {

      if (dps_ordered_data[i].indexOf("baseline") > -1) {
        ordered_trinket_list.push(dps_ordered_data[i]);
        continue;
      }

      if (data_view == "azerite_traits" && ["itemlevel", "trait_stacking"].includes(chosen_azerite_list_type)) {
        let link = "<a href=\"https://";

        if (language == "EN") {
          link += "www";
        } else {
          link += language.toLowerCase();
        }

        link += ".wowhead.com/spell=";
        link += loaded_data[chosen_class][chosen_spec][data_name][fight_style]["spell_ids"][dps_ordered_data[i]];
        link += "\" target=\"blank\">" + dps_ordered_data[i] + "</a>";

        ordered_trinket_list.push(link);
      } else {

        let string = "<a href=\"https://";

        if (language == "EN") {
          string += "www";
        } else {
          string += language.toLowerCase();
        }

        string += ".wowhead.com/item=";
        string += loaded_data[chosen_class][chosen_spec][data_name][fight_style]["item_ids"][dps_ordered_data[i]];

        // add azerite power string portion
        if (data_view == "azerite_traits" && ["head", "shoulders", "chest"].includes(chosen_azerite_list_type)) {
          string += "/azerite-powers=";
          // add class id
          string += loaded_data[chosen_class][chosen_spec][data_name][fight_style]["class_id"];
          // add azerite traits
          for (trait of loaded_data[chosen_class][chosen_spec][data_name][fight_style]["used_azerite_traits_per_item"][dps_ordered_data[i]]) {
            string += ":" + trait["id"];
          }
          string += "&ilvl=" + loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"][loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"].length - 1].split("1_")[1];
        }

        string += "\" target=\"blank\">" + dps_ordered_data[i] + "</a>";

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
    let race_array = {
      "Lightforged Draenei": "光铸德莱尼",
      "Gnome": "侏儒",
      "Undead": "亡灵",
      "Pandaren": "熊猫人",
      "Troll": "巨魔",
      "Draenei": "德莱尼",
      "Goblin": "地精",
      "Blood Elf": "血精灵",
      "Void Elf": "虚空精灵",
      "Worgen": "狼人",
      "Tauren": "牛头人",
      "Highmountain Tauren": "至高岭牛头人",
      "Night Elf": "暗夜精灵",
      "Dark Iron Dwarf": "黑铁矮人",
      "Orc": "兽人",
      "Maghar Orc": "玛格汉兽人",
      "Human": "人类",
      "Dwarf": "矮人",
      "Nightborne": "夜之子"
    };

    for (const name of dps_ordered_data) {
      if (language === "CN") {
        try {
          new_ordered_data.push(race_array[name]);
        } catch (error) {
          new_ordered_data.push(name);
        }
      } else {
        new_ordered_data.push(name);
      }
    }

    standard_chart.update({
      xAxis: {
        categories: new_ordered_data
      }
    }, false);
  }


  // set title and subtitle
  let new_title = "";
  if (data_view == "azerite_traits" && chosen_azerite_list_type == "itemlevel")
    new_title = "Different itemlevels; number of each trait: 1";

  standard_chart.setTitle({
    text: new_title //loaded_data[chosen_class][chosen_spec][data_view][fight_style]["title"]
  }, {
      text: loaded_data[chosen_class][chosen_spec][data_name][fight_style]["subtitle"]
    }, false);

  // delete all old series data
  while (standard_chart.series[0]) {
    standard_chart.series[0].remove(false);
  }
  // basically: if something was simmed with multiple itemlevels
  if ("simulated_steps" in loaded_data[chosen_class][chosen_spec][data_name][fight_style]) {

    if (debug)
      console.log("simulated_steps in data found.");

    for (let itemlevel_position in loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"]) {

      let itemlevel = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"][itemlevel_position];
      let itemlevel_dps_values = [];

      if (debug)
        console.log("handling itemlevel " + itemlevel);

      // create series input for highcharts
      for (data of dps_ordered_data) {

        let dps = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data][itemlevel];
        let min_ilevel = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"][loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"].length - 1];
        let max_ilevel = loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"][0];

        // check for zero dps values and don't change them
        if (dps > 0) {

          // if lowest itemlevel is looked at, substract baseline
          if (itemlevel_position === loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"].length - 1) {

            if (itemlevel in loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data]) {
              itemlevel_dps_values.push(dps - loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"]["baseline"][min_ilevel]);
            } else {
              itemlevel_dps_values.push(0);
            }


          } else { // else substract lower itemlevel value of same item

            // if lower itemlevel is zero we have to assume that this item needs to be compared now to the baseline
            if (loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data][loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"][String(Number(itemlevel_position) + 1)]] == 0 || !(loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"][String(Number(itemlevel_position) + 1)] in loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data])) {

              itemlevel_dps_values.push(dps - loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"]["baseline"][min_ilevel]);

            } else { // standard case, next itemlevel is not zero and can be used to substract from the current value

              itemlevel_dps_values.push(dps - loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data][loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simulated_steps"][String(Number(itemlevel_position) + 1)]]);
            }

          }

        } else {
          if (itemlevel in loaded_data[chosen_class][chosen_spec][data_name][fight_style]["data"][data]) {
            itemlevel_dps_values.push(dps);
          } else {
            itemlevel_dps_values.push(0);
          }
        }

      }

      standard_chart.addSeries({
        color: ilevel_color_table[itemlevel],
        data: itemlevel_dps_values,
        name: itemlevel,
        showInLegend: true
      }, false);
    }
  } else { // if no itemlevels were used the dps values are exactly at the keys

    var dps_values = [];
    for (let category of dps_ordered_data) {
      dps_values.push(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][category]);
    }

    standard_chart.addSeries({
      color: class_colors[chosen_class],
      data: dps_values,
      name: data_view,
      showInLegend: true
    }, false);
  }
  document.getElementById("chart").style.height = 200 + dps_ordered_data.length * 30 + "px";
  standard_chart.setSize(document.getElementById("chart").style.width, document.getElementById("chart").style.height);
  standard_chart.redraw();

  if (debug)
    console.log("call translate_chart from update_chart");
  translate_chart();

}

function update_trait_stacking_chart() {
  if (debug)
    console.log("update_trait_stacking_chart");

  if ("sorted_data_keys_2" in loaded_data[chosen_class][chosen_spec][data_view][fight_style]) {
    var dps_ordered_data = [];
    if (data_view === "azerite_traits" && ["itemlevel", "trait_stacking"].includes(chosen_azerite_list_type)) {
      dps_ordered_data = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_azerite_tier_" + chosen_azerite_tier + "_" + chosen_azerite_list_type];
    } else {
      dps_ordered_data = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_data_keys"];
    }

  } else {
    if (debug)
      console.log("Getting sorted_data_keys from data failed. Set unordered dps_ordered_data");
    var dps_ordered_data = Object.keys(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]);
  }

  // change item/spell names to wowhead links
  let ordered_trinket_list = [];
  for (let i in dps_ordered_data) {
    let string = "<a href=\"https://";

    if (language == "EN") {
      string += "www";
    } else {
      string += language.toLowerCase();
    }

    string += ".wowhead.com/spell=";
    string += loaded_data[chosen_class][chosen_spec][data_view][fight_style]["spell_ids"][dps_ordered_data[i]];
    string += "\" target=\"blank\">" + dps_ordered_data[i] + "</a>";

    ordered_trinket_list.push(string);
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


  // set title and subtitle
  standard_chart.setTitle({
    text: "Same itemlevel; different number of traits"
  }, {
      text: loaded_data[chosen_class][chosen_spec][data_view][fight_style]["subtitle"]
    }, false);

  // delete all old series data
  while (standard_chart.series[0]) {
    standard_chart.series[0].remove(false);
  }

  // basically: if something was simmed with multiple itemlevels
  for (let stack_count of [3, 2, 1]) {
    let max_itemlevel = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simulated_steps"][0].split("_")[1];

    let stack_name = stack_count + "_" + max_itemlevel;
    let itemlevel_dps_values = [];

    if (debug)
      console.log("handling stack_name " + stack_name);

    // create series input for highcharts
    for (data of dps_ordered_data) {

      let dps = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][data][stack_name];

      let baseline_dps = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]["baseline"]["1_" + max_itemlevel];

      // check for zero dps values and don't change them
      if (dps > 0) {

        // if lowest itemlevel is looked at, substract baseline
        if (stack_count === 1) {

          itemlevel_dps_values.push(dps - baseline_dps);

        } else { // else substract lower itemlevel value of same trait

          itemlevel_dps_values.push(dps - loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][data][stack_count - 1 + "_" + max_itemlevel]);

        }

      } else {
        if (stack_name in loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][data]) {
          itemlevel_dps_values.push(dps);
        } else {
          itemlevel_dps_values.push(0);
        }
      }

    }

    standard_chart.addSeries({
      color: ilevel_color_table[stack_name],
      data: itemlevel_dps_values,
      name: stack_name,
      showInLegend: true
    }, false);
  }

  document.getElementById("chart").style.height = 200 + dps_ordered_data.length * 30 + "px";
  standard_chart.setSize(document.getElementById("chart").style.width, document.getElementById("chart").style.height);
  standard_chart.redraw();

  if (debug)
    console.log("call translate_chart from update_trait_stacking_chart");
  translate_chart();

}

function empty_charts() {
  while (standard_chart.series[0]) {
    standard_chart.series[0].remove(false);
  }
  standard_chart.setTitle({
    //text: loaded_data[chosen_class][chosen_spec][data_view][fight_style]["title"]
  }, {
      text: "No data available / Loading..."
    }
  );

  // delete all old series data
  while (scatter_chart.series[0]) {
    scatter_chart.series[0].remove(false);
  }
  scatter_chart.setTitle({
    //text: loaded_data[chosen_class][chosen_spec][data_view][fight_style]["title"]
  }, {
      text: "No data available / Loading..."
    }
  );
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
  document.getElementById("tc_" + chosen_class + "_" + chosen_spec).hidden = false;
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
  path += "?data_view=" + data_view;
  if (data_view == "azerite_traits") {
    path += "&type=" + chosen_azerite_list_type;
  }
  if (chosen_azerite_list_type === "itemlevel" || chosen_azerite_list_type === "trait_stacking") {
    path += "&tier=" + chosen_azerite_tier;
  }
  path += "&fight_style=" + fight_style;
  path += "&lang=" + language;

  return path;
} // ?data_view=trinkets&fight_style=patchwerk

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
    text: "Data not found",
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
  scatter_chart.setTitle({
    //text: loaded_data[chosen_class][chosen_spec][data_view][fight_style]["title"]
  }, {
      text: loaded_data[chosen_class][chosen_spec][data_view][fight_style]["subtitle"]
    }
  );
  scatter_chart.redraw();
}

/******************************************************************************
 *
 * Last content block. These functions trigger onfinished load.
 *
 */


/** Look for the dark mode cookie and update view */
document.addEventListener("DOMContentLoaded", search_dark_mode_cookie);

/** Load language from cookie. */
document.addEventListener("DOMContentLoaded", search_language_cookie);

/** Load spec and data mode if a spec link was used. */
document.addEventListener("DOMContentLoaded", function () {
  if (debug)
    console.log("interprete link");

  get_data_from_link();
  if (chosen_spec !== "") {
    switch_mode();
  }

});
