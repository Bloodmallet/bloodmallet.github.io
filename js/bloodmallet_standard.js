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
  "show_races_data", // => races
  "show_secondary_distributions_data"
];
const fight_style_IDs = [
  "fight_style_patchwerk",
  "fight_style_beastlord",
  "copy_link"
];

var light_color = "rgba(238, 238, 238, 1.0)"; // #eee
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
      borderWidth: 0,
      floating: false,
      reversed: true,
      shadow: false,
      verticalAlign: "bottom",
      x: 0,
      y: 0,
      itemStyle: {
        color: medium_color,
      },
      itemHoverStyle: {
        color: medium_color,
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
                color: medium_color,
                width: 2,
                id: 'helperLine',
                zIndex: 5,
                label: {
                  text: this.series.name + ' ' + this.category,
                  style: {
                    color: medium_color,
                    fontSize: "1.1rem",
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
          legendItemClick: function () { return false; }
        },
        style: {
          textOutline: false,
          fontSize: "1.1rem",
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
        color: light_color,
        //fontSize: "1.1rem"
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
      backgroundColor: light_color,
      borderColor: dark_color,
      formatter: function () {
        var s = '<div style="margin: -4px -6px -11px -7px; z-index: 9999!important; padding: 3px 3px 6px 3px; background-color:' + light_color + '"><b>' + this.x + '</b>';
        var cumulative_amount = 0;
        for (var i = this.points.length - 1; i >= 0; i--) {
          cumulative_amount += this.points[i].y;
          if (this.points[i].y !== 0) {
            s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name + '</span>: ' + Intl.NumberFormat().format(cumulative_amount);
          }
        }
        s += '</div>';
        return s;
      },
      headerFormat: "<b>{point.x}</b>",
      shared: true,
      style: {
        color: dark_color,
        fontSize: "1.1rem",
      },
      useHTML: true
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
          fontSize: "1.1rem",
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
          fontSize: "1.0rem",
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
  });

var ilevel_color_table = {
  "300": "#1f78b4",
  "310": "#a6cee3",
  "320": "#33a02c",
  "330": "#b2df8a",
  "340": "#e31a1c",
  "350": "#fb9a99",
  "360": "#ff7f00",
  "370": "#cab2d6",
  "380": "#fdbf6f"
};


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
        }
      }
    });

    scatter_chart.update({
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
      plotOptions: {
        series: {
          dataLabels: {
            style: {
              color: light_color
            }
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
        }
      }
    });

    scatter_chart.update({
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
      plotOptions: {
        series: {
          dataLabels: {
            style: {
              color: dark_color
            }
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
  Cookies.set('bloodmallet_dark_mode', dark_mode, { expires: 31, path: '' });
}

/** searches for the dark mode cookie and updates the page if necessary */
function search_dark_mode_cookie() {
  if (dev_mode)
    console.log("search_dark_mode_cookie");
  dark_mode = ('true' == Cookies.get('bloodmallet_dark_mode'));
  document.getElementById("darkModeCheckbox").checked = dark_mode;
  update_dark_mode();
  set_dark_mode_cookie();
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
  if (language === new_language)
    return;

  if (dev_mode)
    console.log("switch_language");
  // if new language is different to already active language and if it wasn't already loaded
  if (!loaded_languages[new_language]) {
    fetch(`./translations/${new_language.toLowerCase()}.json`)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        loaded_languages[new_language] = json;
      });
  }
  language = new_language;
  translate_page();
  set_language_cookie();
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
  try {
    document.getElementById("show_trinkets_data").addEventListener("click", function () {
      data_view = "trinkets";
      update_data_buttons();
      load_data();
    });
  } catch (err) {
    console.log("show_trinkets_data was not found in page.");
  }

  try {
    document.getElementById("show_azerite_traits_data").addEventListener("click", function () {
      data_view = "azerite_traits";
      update_data_buttons();
      load_data();
    });
  } catch (err) {
    console.log("show_azerite_traits_data was not found in page.");
  }

  try {
    document.getElementById("show_races_data").addEventListener("click", function () {
      data_view = "races";
      update_data_buttons();
      load_data();
    });
  } catch (err) {
    console.log("show_races_data was not found in page.");
  }

  try {
    document.getElementById("show_secondary_distributions_data").addEventListener("click", function () {
      data_view = "secondary_distributions";
      update_data_buttons();
      load_data();
    });
  } catch (err) {
    console.log("show_secondary_distribution_data was not found in page.");
  }

  document.getElementById("fight_style_patchwerk").addEventListener("click", function () {
    fight_style = "patchwerk";
    update_fight_style_buttons();
    load_data();
  });
  document.getElementById("fight_style_beastlord").addEventListener("click", function () {
    fight_style = "beastlord";
    update_fight_style_buttons();
    load_data();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("copy_link").addEventListener("click", function () {
    copy_link();
  })
})

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
 * Loads spec data (json) according to the already applied settings. Triggers update_chart.
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
    var file_name = chosen_class + "_" + chosen_spec + "_" + fight_style + ".json";
    xhttp_getLanguage.open("GET", "./json/" + data_view + "/" + file_name, true);
    xhttp_getLanguage.setRequestHeader("Content-type", "application/json");
    xhttp_getLanguage.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // save loaded data
        loaded_data[chosen_class][chosen_spec][data_view][fight_style] = JSON.parse(xhttp_getLanguage.responseText);
        update_chart();
      }
      else if (this.readyState == 4 && this.status == 404) {
        if (dev_mode)
          alert("Data for this mode was not found! the following link was tried, please check: ./json/" + data_view + "/" + file_name);
      }
    }
    xhttp_getLanguage.send();
  } else {
    if (dev_mode)
      console.log("Data is already present.");
    update_chart();
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
    try {
      document.getElementById(element).className = "btn-data " + chosen_class + "-button";
    } catch (err) {
      console.log(element + " was not found in page.");
    }
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

  if (data_view == "secondary_distributions") {
    document.getElementById("scatter_plot_chart").hidden = false;
    document.getElementById("chart").hidden = true;
    update_scatter_chart();
    return;
  } else {
    document.getElementById("scatter_plot_chart").hidden = true;
    document.getElementById("chart").hidden = false;
  }

  // https://stackoverflow.com/questions/25500316/sort-a-dictionary-by-value-in-javascript
  // create a list of all trinkets with their highest dps value
  // var dps_ordered_trinkets = Object.keys(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["trinkets"]).map(function (key) { return [key, Math.max(...Object.values(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["trinkets"][key]))] });
  // order said list
  // dps_ordered_trinkets.sort(function (first, second) { return second[1] - first[1]; });
  //console.log(dps_ordered_trinkets);
  // get rid of dps values and keep only the trinket names
  // dps_ordered_trinkets = dps_ordered_trinkets.map(x => x[0]);
  // or.... just use the provided sorted list once that is included in fresh data
  try {
    //console.log("set dps_ordered_trinkets");
    var dps_ordered_trinkets = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_data_keys"];
  } catch (err) {
    //console.log("failed. set dps_ordered_trinkets");
    var dps_ordered_trinkets = Object.keys(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]);
  } finally {
    //console.log(dps_ordered_trinkets);
  }

  // set title and subtitle
  standard_chart.setTitle({
    //text: loaded_data[chosen_class][chosen_spec][data_view][fight_style]["title"]
  }, {
      text: loaded_data[chosen_class][chosen_spec][data_view][fight_style]["subtitle"]
    }, false);

  // rewrite the trinket names
  standard_chart.update({
    xAxis: {
      categories: dps_ordered_trinkets
    }
  }, false);

  // delete all old series data
  while (standard_chart.series[0]) {
    standard_chart.series[0].remove(false);
  }

  for (itemlevel_position in loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simulated_itemlevels"]) {

    var itemlevel = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simulated_itemlevels"][itemlevel_position];
    var itemlevel_dps_values = [];

    for (trinket of dps_ordered_trinkets) {

      // check for zero dps values and don't change them
      if (Number(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][trinket][itemlevel]) > 0) {

        // if lowest itemlevel is looked at, substract baseline
        if (itemlevel_position == loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simulated_itemlevels"].length - 1) {

          if (itemlevel in loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][trinket]) {
            itemlevel_dps_values.push(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][trinket][itemlevel] - loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]["baseline"][Math.min(...loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simulated_itemlevels"])]);
          } else {
            itemlevel_dps_values.push(0);
          }


        } else { // else substract lower itemlevel value of same item

          // if lower itemlevel is zero we have to assume that this item needs to be compared now to the baseline
          if (loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][trinket][loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simulated_itemlevels"][String(Number(itemlevel_position) + 1)]] == 0 || !(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simulated_itemlevels"][String(Number(itemlevel_position) + 1)] in loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][trinket])) {

            itemlevel_dps_values.push(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][trinket][itemlevel] - loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]["baseline"][Math.min(...loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simulated_itemlevels"])]);

          } else { // standard case, next itemlevel is not zero and can be used to substract from the current value

            itemlevel_dps_values.push(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][trinket][itemlevel] - loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][trinket][loaded_data[chosen_class][chosen_spec][data_view][fight_style]["simulated_itemlevels"][String(Number(itemlevel_position) + 1)]]);
          }

        }

      } else {
        if (itemlevel in loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][trinket]) {
          itemlevel_dps_values.push(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][trinket][itemlevel]);
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
  document.getElementById("chart").style.height = 200 + dps_ordered_trinkets.length * 30 + "px";
  standard_chart.setSize(document.getElementById("chart").style.width, document.getElementById("chart").style.height);
  standard_chart.redraw();
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


function copy_link() {
  if (dev_mode)
    console.log("copy_link");
  console.log("copy_link is not yet implemented.");
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
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
    itemStyle: { "color": medium_color },
    itemHoverStyle: { "color": medium_color }
  },
  plotOptions: {
    series: {
      dataLabels: {
        allowOverlap: true,
        style: {
          color: light_color,
          fontSize: "1.1rem",
          fontWeight: "400",
          textOutline: ""
        }
      },
      events: {
        legendItemClick: function () { return false; }
      },
    },
  },
  series: [
  ],
  subtitle: {
    text: "Subtitle placeholder",
    useHTML: true,
    style: {
      color: light_color
    }
  },
  title: {
    text: "", //"Title placeholder",
    useHTML: true,
    style: {
      color: light_color
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
  if (dev_mode)
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
  if (dev_mode)
    console.log("update_scatter_chart");

  // get max dps of the whole data set
  let max_dps = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][1111111][loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_data_keys"][1111111][0]];
  // get min dps of the whole data set
  let min_dps = loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][1111111][loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_data_keys"][1111111][loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_data_keys"][1111111].length - 1]];

  // prepare series with standard data
  let series = {
    name: Intl.NumberFormat().format(max_dps) + " DPS",
    color: "#FF0000", // make sure this matches the value of color_max in create_color(...)
    data: []
  };

  // add a marker for each distribution in the data set
  for (distribution of Object.keys(loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][1111111])) {

    // get the markers color
    let color_set = create_color(
      loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]["1111111"][distribution],
      loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]["1111111"][loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_data_keys"]["1111111"][loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_data_keys"]["1111111"].length - 1]],
      loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]["1111111"][loaded_data[chosen_class][chosen_spec][data_view][fight_style]["sorted_data_keys"]["1111111"][0]]
    );

    // width of the border of the marker, 0 for all markers but the max, which gets 3
    let line_width = 1;
    let line_color = "#232227";
    // adjust marker radius depending on distance to max
    // worst dps: 2
    // max dps: 5 (increased to 8 to fit the additional border)
    let radius = 2 + 3 * (loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"]["1111111"][distribution] - min_dps) / (max_dps - min_dps)
    if (max_dps == loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][1111111][distribution]) {
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
      dps: loaded_data[chosen_class][chosen_spec][data_view][fight_style]["data"][1111111][distribution],
      dps_max: max_dps,
      dps_min: min_dps,
      stat_crit: parseInt(distribution.split("_")[0]) * loaded_data[chosen_class][chosen_spec][data_view][fight_style]["secondary_sum"] / 100,
      stat_haste: parseInt(distribution.split("_")[1]) * loaded_data[chosen_class][chosen_spec][data_view][fight_style]["secondary_sum"] / 100,
      stat_mastery: parseInt(distribution.split("_")[2]) * loaded_data[chosen_class][chosen_spec][data_view][fight_style]["secondary_sum"] / 100,
      stat_vers: parseInt(distribution.split("_")[3]) * loaded_data[chosen_class][chosen_spec][data_view][fight_style]["secondary_sum"] / 100,
      stat_sum: loaded_data[chosen_class][chosen_spec][data_view][fight_style]["secondary_sum"],
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
