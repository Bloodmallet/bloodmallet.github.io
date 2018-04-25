/*---------------------------------------------------------
//
//  Page states
//
---------------------------------------------------------*/

/* Variable intended for dev mode specific output/markings */
var dev_mode = true;

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

var loaded_data = {};

var chosen_class = "";
var chosen_spec = "";

var dark_mode = true;
var bloodyfiller = "&nbsp;charts&nbsp;";


var language = "EN";
var loaded_languages = {};

/** translate defined IDs based on data */
const translation_IDs = [
  "translate_main_paragraph",
  "navbarSettingsMenu",
  "translate_dark_mode",
  "translate_faq",
  "translate_report_an_error",
  "show_trinkets_data",
  "show_azerite_traits_data",
  "show_races_data",
  "fight_style_patchwerk",
  "fight_style_beastlord",
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
  "translate_fury"
];


var mode = "welcome";
var fight_style = "patchwerk";
var data_view = "trinkets";

const data_view_IDs = [
  "show_trinkets_data", // => trinkets
  "show_azerite_traits_data", // => azerite_traits
  "show_races_data" // => races
];
const fight_style_IDs = [
  "fight_style_patchwerk",
  "fight_style_beastlord",
  "copy_link"
];

var light_color = "#eee";
var medium_color = "#999"
var dark_color = "#343a40";

var standard_chart = Highcharts.chart('chart',
  {
    chart: {
      type: "bar",
      backgroundColor: null,
      //borderColor: medium_color,
      //borderWidth: 1
    },
    legend: {
      align: "right",
      backgroundColor: null,
      borderColor: medium_color,
      borderWidth: 1,
      floating: false,
      reversed: true,
      shadow: false,
      verticalAlign: "bottom",
      x: 0,
      y: 0,
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
                color: 'white',
                width: 2,
                id: 'helperLine',
                zIndex: 5,
                label: {
                  text: this.series.name + ' ' + this.category,
                  align: 'left',
                  verticalAlign: 'bottom',
                  rotation: 0,
                  y: -5
                }
              });
            }
          }
        },
        stacking: "normal",
      },
      series: {
        borderColor: dark_color,
        events: {
          legendItemClick: function () { return false; }
        },
        style: {
          textOutline: false
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
      text: "Subtitle placeholder",
      useHTML: true,
      style: {
        color: light_color
      }
    },
    title: {
      text: "Title placeholder",
      useHTML: true,
      style: {
        color: light_color
      }
    },
    tooltip: {
      backgroundColor: light_color,
      borderColor: dark_color,
      formatter: function () {
        var s = '<b>' + this.x + '</b>';
        var cumulative_amount = 0;
        for (var i = this.points.length - 1; i >= 0; i--) {
          cumulative_amount += this.points[i].y;
          if (this.points[i].y !== 0) {
            s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name + '</span>: ' + Intl.NumberFormat().format(cumulative_amount);
          }
        }
        return s;
      },
      headerFormat: "<b>{point.x}</b>",
      shared: true,
      style: {
        color: "black"
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
          color: light_color
        }
      },
      gridLineWidth: 1,
      gridLineColor: medium_color,
      lineColor: medium_color,
      tickColor: medium_color
    },
    yAxis: {
      labels: {
        enabled: true,
        style: {
          color: medium_color
        }
      },
      min: 0,
      stackLabels: {
        enabled: true,
        formatter: function () {
          return Intl.NumberFormat().format(this.total);
        },
        style: {
          color: light_color,
          textOutline: false
        }
      },
      title: {
        text: "\u0394 Damage per second",
        style: {
          color: light_color
        }
      },
      gridLineWidth: 1,
      gridLineColor: medium_color
    }
  });


/*---------------------------------------------------------
//
//  Settings area
//
---------------------------------------------------------*/

// https://stackoverflow.com/questions/25089297/avoid-dropdown-menu-close-on-click-inside/25253002#25253002
$('#settingsDropDown').on('click', function (event) {
  var events = $._data(document, 'events') || {};
  events = events.click || [];
  for (var i = 0; i < events.length; i++) {
    if (events[i].selector) {

      //Check if the clicked element matches the event selector
      if ($(event.target).is(events[i].selector)) {
        events[i].handler.call(event.target, event);
      }

      // Check if any of the clicked element parents matches the
      // delegated event selector (Emulating propagation)
      $(event.target).parents(events[i].selector).each(function () {
        events[i].handler.call(this, event);
      });
    }
  }
  event.stopPropagation(); //Always stop propagation
});


/*---------------------------------------------------------
//
//  Dark Mode
//
---------------------------------------------------------*/


/** look for the dark mode cookie and update view */
document.addEventListener("DOMContentLoaded", search_dark_mode_cookie);

/** add listener to the dark mode checkbox */
document.addEventListener("DOMContentLoaded", function () {
  if (dev_mode)
    console.log("addEventListener darkModeCheckbox");
  document.getElementById("darkModeCheckbox").addEventListener("change", function (e) {
    dark_mode = e.target.checked;
    update_dark_mode();
    set_dark_mode_cookie();
  });
});

/** Updates dark mode based on dark mode check box. */
function update_dark_mode() {
  if (dev_mode)
    console.log("update_dark_mode");

  if (dark_mode) {
    document.getElementsByTagName("body")[0].classList.remove("bg-light");
    document.getElementsByTagName("body")[0].classList.remove("text-dark");
    document.getElementsByTagName("body")[0].classList.add("bg-dark");
    document.getElementsByTagName("body")[0].classList.add("text-light");
    // update chart base colors
    standard_chart.update({
      title: {
        style: {
          color: light_color
        }
      },
      subtitle: {
        style: {
          color: light_color
        }
      },
      xAxis: {
        labels: {
          style: {
            color: light_color
          }
        }
      },
      yAxis: {
        stackLabels: {
          style: {
            color: light_color
          }
        },
        title: {
          style: {
            color: light_color
          }
        },
        subtitle: {
          style: {
            color: light_color
          }
        }
      }
    });
  } else {
    document.getElementsByTagName("body")[0].classList.remove("bg-dark");
    document.getElementsByTagName("body")[0].classList.remove("text-light");
    document.getElementsByTagName("body")[0].classList.add("bg-light");
    document.getElementsByTagName("body")[0].classList.add("text-dark");
    // update chart base colors
    standard_chart.update({
      title: {
        style: {
          color: dark_color
        }
      },
      subtitle: {
        style: {
          color: dark_color
        }
      },
      xAxis: {
        labels: {
          style: {
            color: dark_color
          }
        }
      },
      yAxis: {
        stackLabels: {
          style: {
            color: dark_color
          }
        },
        title: {
          style: {
            color: dark_color
          }
        },
        subtitle: {
          style: {
            color: dark_color
          }
        }
      }
    });
  }
}

/** save the current dark_mode value in a cookie */
function set_dark_mode_cookie() {
  if (dev_mode)
    console.log("set_dark_mode_cookie");
  var cookie_name = "bloodmallet_dark_mode";
  var duration = new Date();
  var days = 31;
  duration.setTime(duration.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = cookie_name + "=" + dark_mode + ";" + duration, ";path=/";
}

/** searches for the dark mode cookie and updates the page if necessary */
function search_dark_mode_cookie() {
  if (dev_mode)
    console.log("search_dark_mode_cookie");
  var cookie_array = document.cookie.split(";");
  cookie_array.forEach(element => {
    if (element.indexOf("bloodmallet_dark_mode=") > -1) {
      if (element.indexOf("=false") > -1) {
        dark_mode = false;
        document.getElementById("darkModeCheckbox").checked = false;
        update_dark_mode();
      }
      // reset dark mode cookie to have a new expiry date
      set_dark_mode_cookie();
    }
  });
}


/*---------------------------------------------------------
//
//  Reroll the FILLER of Bloody(FILLER)
//
---------------------------------------------------------*/
const filler_possibilities_common = ["&nbsp;charts&nbsp;", "&nbsp;trinkets&nbsp;", "&nbsp;traits&nbsp;", "&nbsp;races&nbsp;"];
const filler_possibilities_rare = ["¯\\_(ツ)_/¯", " ͡° ͜ʖ ͡°", "ಠ_ಠ", "⌐■_■", "ʕ•ᴥ•ʔ", "ಠᴗಠ", "づ￣ ³￣", "⊙_☉"];
const filler_possibilities_epic = ["\\_/"];
// I'm looking for more silly smileys. Contact me! Maybe your smiley can make it into the epic category.

document.addEventListener("DOMContentLoaded", function () {
  if (dev_mode)
    console.log("addEventListener bloodyfiller");
  //document.getElementById("bloodyfiller").addEventListener("click", randomize_bloodyfiller);
});

/**
 * Randomize the CONTENT of Bloody(CONTENT) header on the main page.
 */
function randomize_bloodyfiller() {
  if (dev_mode)
    console.log("randomize_bloodyfiller");
  var roll = Math.floor(Math.random() * (filler_possibilities_common.length + 1));
  while (filler_possibilities_common[roll] == bloodyfiller) {
    roll = Math.floor(Math.random() * (filler_possibilities_common.length + 1));
  }
  if (roll == filler_possibilities_common.length) {
    roll = Math.floor(Math.random() * filler_possibilities_rare.length + 1);
    while (filler_possibilities_rare[roll] == bloodyfiller) {
      roll = Math.floor(Math.random() * filler_possibilities_rare.length + 1);
    }
    if (roll == filler_possibilities_rare.length) {
      roll = Math.floor(Math.random() * filler_possibilities_epic.length);
      while (filler_possibilities_rare[roll] == bloodyfiller) {
        roll = Math.floor(Math.random() * filler_possibilities_epic.length);
      }
      document.getElementById("bloodyfiller").innerHTML = filler_possibilities_epic[roll];
      bloodyfiller = filler_possibilities_epic[roll];
    } else {
      document.getElementById("bloodyfiller").innerHTML = filler_possibilities_rare[roll];
      bloodyfiller = filler_possibilities_rare[roll];
    }
  } else {
    document.getElementById("bloodyfiller").innerHTML = filler_possibilities_common[roll];
    bloodyfiller = filler_possibilities_common[roll];
  }
}


/*---------------------------------------------------------
//
//  Switch language
//
---------------------------------------------------------*/


document.addEventListener("DOMContentLoaded", search_language_cookie);

document.addEventListener("DOMContentLoaded", function () {
  if (dev_mode)
    console.log("addEventListener languageSelector");
  document.getElementById("languageSelector").addEventListener("change", function () {
    switch_language(this.options[this.selectedIndex].value);
  });
});

/**
 * Switches the language and calls translate_page to do the actual translation.
*/
function switch_language(new_language) {
  if (dev_mode)
    console.log("switch_language");
  // if new language is different to already active language and if it wasn't already loaded
  if (new_language != language && !loaded_languages[new_language]) {
    var xhttp_getLanguage = new XMLHttpRequest();
    xhttp_getLanguage.open("GET", "./translations/" + new_language.toLowerCase() + ".json", true);
    xhttp_getLanguage.setRequestHeader("Content-type", "application/json");
    xhttp_getLanguage.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // save loaded translations
        loaded_languages[new_language] = JSON.parse(xhttp_getLanguage.responseText);
        language = new_language;
        translate_page();
        set_language_cookie();
      }
    }
    xhttp_getLanguage.send();
  } else if (new_language == language) {
    // nothing happens....there is nothing to do
    console.log("switch_language didn't detect a change in language. new: " + new_language + ", old: " + language);
  } else {
    language = new_language;
    translate_page();
    set_language_cookie();
  }
}


/**
 * translate all translation_IDs and translation_classes. Does NOT translate charts. Use translate_chart() for that
 */
function translate_page() {
  if (dev_mode)
    console.log("translate_page");
  // get the translation options
  var language_html_elements = document.getElementById("languageSelector").options;
  // de-select whatever language option was chosen
  language_html_elements[document.getElementById("languageSelector").selectedIndex].selected = false;

  // select the new language in the settings based on data
  for (let index = 0; index < language_html_elements.length; index++) {
    const element = language_html_elements[index];
    if (element.value == language) {
      element.selected = true;
    }
  }

  // translate content of IDs
  translation_IDs.forEach(element => {
    if (loaded_languages[language][element] && loaded_languages[language][element] !== "") {
      document.getElementById(element).innerHTML = loaded_languages[language][element];
    } else if (loaded_languages[language][element] === "") {
      // Don't translate
      console.log("No translation for '" + element + "' available. Help improve the page by submitting a bug report. Or even better: clone the repo, fix the problem, and create a pull request. Any help is greatly appreciated!");
      if (dev_mode)
        document.getElementById(element).style.border = "1px solid red";
    } else {
      // Don't translate
      console.log("Language package '" + language + "' doesn't have '" + element + "' added to it or the ID is missing in the page. Help improve the page by submitting a bug report. Or even better: clone the repo, fix the problem, and create a pull request. Any help is greatly appreciated!");
      if (dev_mode)
        document.getElementById(element).style.border = "1px solid red";
    }
  });

  // translate content of classes
  translation_classes.forEach(element => {
    if (loaded_languages[language][element] && loaded_languages[language][element] !== "") {
      var targets = document.getElementsByClassName(element);
      for (let index = 0; index < targets.length; index++) {
        const html_element = targets[index];
        html_element.innerHTML = loaded_languages[language][element];
      }
    } else if (loaded_languages[language][element] === "") {
      // Don't translate
      console.log("No translation for '" + element + "' available. Help improve the page by submitting a bug report. Or even better: clone the repo, fix the problem, and create a pull request. Any help is greatly appreciated!");
      if (dev_mode) {
        var targets = document.getElementsByClassName(element);
        for (let index = 0; index < targets.length; index++) {
          const html_element = targets[index];
          html_element.style.border = "1px solid red";
        }
      }
    } else {
      // Don't translate
      console.log("Language package '" + language + "' doesn't have '" + element + "' added to it or the ID is missing in the page. Help improve the page by submitting a bug report. Or even better: clone the repo, fix the problem, and create a pull request. Any help is greatly appreciated!");
      if (dev_mode) {
        var targets = document.getElementsByClassName(element);
        for (let index = 0; index < targets.length; index++) {
          const html_element = targets[index];
          html_element.style.border = "1px solid red";
        }
      }
    }
  });
}

/** Translates the current chart.
 *  assumption: only one chart is present */
function translate_chart() {
  if (dev_mode)
    console.log("translate_chart");
  console.log("translate_chart() is not yet implemented.")
}

/** Save the current language in a cookie. */
function set_language_cookie() {
  if (dev_mode)
    console.log("set_language_cookie");
  var cookie_name = "bloodmallet_language_selection";
  var duration = new Date();
  var days = 31;
  duration.setTime(duration.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = cookie_name + "=" + language + ";" + duration, ";path=/";
}

/** Searches for the dark mode cookie and updates the page if necessary. */
function search_language_cookie() {
  if (dev_mode)
    console.log("search_language_cookie");
  var language_found = false;
  var cookie_array = document.cookie.split(";");
  cookie_array.forEach(element => {

    if (element.indexOf("bloodmallet_language_selection=") > -1) {

      if (element.indexOf("=EN") == -1) {
        switch_language(element.slice(element.indexOf("=") + 1));
        language_found = true;
      }
      // re-set language cookie to have a new expiry date
      set_language_cookie();
    }
  });
  return language_found;
}


/*---------------------------------------------------------
//
//  Switch to data mode
//
---------------------------------------------------------*/

/** Load spec and data mode if a spec link was used. */
document.addEventListener("DOMContentLoaded", function () {
  if (dev_mode)
    console.log("eventListener, used link interpretation");

  get_class_spec_from_link();
  if (chosen_spec) {
    switch_mode();
  }

});

/**
 * Apply click events for data manipulation.
 */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("show_trinkets_data").addEventListener("click", function () {
    data_view = "trinkets";
    update_data_buttons();
  });
  document.getElementById("show_azerite_traits_data").addEventListener("click", function () {
    data_view = "azerite_traits";
    update_data_buttons();
  });
  document.getElementById("show_races_data").addEventListener("click", function () {
    data_view = "races";
    update_data_buttons();
  });
  document.getElementById("fight_style_patchwerk").addEventListener("click", function () {
    fight_style = "patchwerk";
    update_fight_style_buttons();
  });
  document.getElementById("fight_style_beastlord").addEventListener("click", function () {
    fight_style = "beastlord";
    update_fight_style_buttons();
  });
});

/**
 * Update the global class and spec variables from the current url.
 */
function get_class_spec_from_link() {
  if (dev_mode)
    console.log("get_class_spec_from_link");
  var hash = window.location.hash;
  var combined_class_spec = "";
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
}

/**
 * Returns the language (lang-attribute) from link, else return false.
 */
function get_language_from_link() {
  if (dev_mode)
    console.log("get_language_from_link");
  var string = window.location.search;
  if (window.location.hash.indexOf("?") > -1) {
    string = window.location.hash.slice(window.location.hash.indexOf("?"));
  }
  if (string.indexOf("lang=") > -1) {
    var lang = string.slice(string.indexOf("lang=") + 5);
    if (lang.indexOf("&") > -1) {
      lang = lang.slice(0, lang.indexOf("&"));
    }
    return lang;
  }
  return false;
}

/**
 * A spec is considered valid if a json file for it can be found.
 */
window.onhashchange = function () {
  if (dev_mode)
    console.log("window.onhashchange");
  switch_mode();
  // re-translate everything again?
};

/**
 * Loads spec data (json) according to the already applied settings. Calls update_chart.
 */
function load_data() {
  if (dev_mode)
    console.log("load_data");
  if (!loaded_data[chosen_class]) {
    loaded_data[chosen_class] = {};
  }
  if (!loaded_data[chosen_class][chosen_spec]) {
    loaded_data[chosen_class][chosen_spec] = {};
  }
  if (!loaded_data[chosen_class][chosen_spec][data_view]) {
    loaded_data[chosen_class][chosen_spec][data_view] = {};
  }
  if (!loaded_data[chosen_class][chosen_spec][data_view][fight_style]) {
    var xhttp_getLanguage = new XMLHttpRequest();
    var file_name = chosen_class + "_" + chosen_spec + "_" + data_view + "_" + fight_style + ".json";
    xhttp_getLanguage.open("GET", "./json/" + data_view + "/" + file_name, true);
    xhttp_getLanguage.setRequestHeader("Content-type", "application/json");
    xhttp_getLanguage.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // save loaded data
        loaded_data[chosen_class][chosen_spec][data_view][fight_style] = JSON.parse(xhttp_getLanguage.responseText);
        update_chart();
      }
    }
    xhttp_getLanguage.send();
  }
}

/**
 * Acivates the data mode.
 * Prepares global chosen_class and chosen_spec variables.
 * Loads necessary chart data, renders chart, translates page and chart.
 * Hides welcome-area and shows data area if necessary.
 */
function switch_mode() {
  if (dev_mode)
    console.log("switch_mode");
  // underline new nav
  get_class_spec_from_link();
  update_nav();
  update_page_content();
  // update data buttons
  update_data_buttons();
  update_fight_style_buttons();
  // load appropriate data for the initial chart
  load_data();
  // set appropriate language
  var new_lang = get_language_from_link();
  if (new_lang) {
    switch_language(new_lang);
    translate_chart();
  } else if (language != "EN") {
    switch_language(language);
    translate_chart();
  }
  // hide, unhide stuff
  if (mode == "welcome") {
    mode = "data";
    make_invisible(modes[mode]["hidden"]);
    make_visible(modes[mode]["shown"]);
  }
}

/**
 * Update which data button has the class color background.
 */
function update_data_buttons() {
  if (dev_mode)
    console.log("update_data_buttons");
  // reset buttons to standard visual
  data_view_IDs.forEach(element => {
    document.getElementById(element).className = "btn-data " + chosen_class + "-button";
  });
  // set "active" to class color
  document.getElementById("show_" + data_view + "_data").classList.add(chosen_class + "-border-bottom");
}

/**
 * Resets colors of all fight style buttons and sets active button to class color.
 */
function update_fight_style_buttons() {
  if (dev_mode)
    console.log("update_fight_style_buttons");
  // reset buttons to standard visual
  fight_style_IDs.forEach(element => {
    document.getElementById(element).className = "btn-data " + chosen_class + "-button";
  });
  // set "active" to class color
  document.getElementById("fight_style_" + fight_style).classList.add(chosen_class + "-border-bottom");
}

/**
 * Mark current active chosen class in top navigation.
 */
function update_nav() {
  if (dev_mode)
    console.log("update_nav");
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
  if (dev_mode)
    console.log("make_visible");
  IDs.forEach(element => {
    document.getElementById(element).hidden = false;
  });
}

/**
 * Makes all given IDs invisible.
 */
function make_invisible(IDs) {
  if (dev_mode)
    console.log("make_invisible");
  IDs.forEach(element => {
    document.getElementById(element).hidden = true;
  });
}

/**
 * Show and update the chart with currently available data.
 * Data load is NOT handled by this function.
 * Function applies standard data (in english) to the chart. To translate a chart use translate_chart().
 */
function update_chart() {
  if (dev_mode)
    console.log("update_chart");
  console.log("update_chart is not yet implemented");
}

/**
 * Capitalize all first letters in a string.
 * Example: string_test -> String_Test
 */
function capitalize_first_letters(string) {
  if (dev_mode)
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
  if (dev_mode)
    console.log("update_page_content");
  // update title
  var content = "<span class=\"" + chosen_class + "-color\"";
  if (chosen_class == "priest" || chosen_class == "rogue") {
    content += " style=\"text-shadow: 0px 0px 13px black\"";
  }
  content += "><span class=\"translate_" + chosen_class + "\">" + capitalize_first_letters(chosen_class) + "</span>: <span class=\"translate_" + chosen_spec + "\">" + capitalize_first_letters(chosen_spec) + "</span></span>";
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
