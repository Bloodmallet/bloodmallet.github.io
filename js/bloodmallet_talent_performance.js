/*---------------------------------------------------------
//
//  Page states
//
---------------------------------------------------------*/

/* Variable intended for dev mode specific output/markings */
const debug = true;

/** visual modes
 *   hidden: hides these general elements
 *   shown: unhides these general elements */

let loaded_data = {};

let data_view = "talent_worth"
let chosen_class = "";
let chosen_spec = "";

let fight_style = "patchwerk";

let dark_mode = true;

let language = "EN";
let loaded_languages = {};

/** translate defined IDs based on data */
const translation_IDs = [
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
  "translate_patchwerk",
  "translate_hecticaddcleave",
  "translate_link_to_chart",
  "translate_link_was_copied_to_clipboard",
  "translate_dps_only_warning"
];

const fight_style_IDs = [
  "fight_style_patchwerk",
  // "fight_style_beastlord",
  "fight_style_hecticaddcleave",
];

const light_color = "#eeeeee";
const medium_color = "#999999";
const dark_color = "#343a40";

const font_size = "1.1rem";

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
  document.getElementById("inconized_charts_checkbox").addEventListener("change", function (e) {
    whTooltips.iconizeLinks = e.target.checked;
    set_iconized_chart_cookie();
    $WowheadPower.refreshLinks();
  });

});

/** Updates dark mode based on dark mode check box. */
function update_dark_mode() {
  if (debug)
    console.log("update_dark_mode");
  if (dark_mode) {
    document.getElementsByTagName("body")[0].classList.remove("bg-light");
    document.getElementsByTagName("body")[0].classList.remove("text-dark");
    document.getElementsByTagName("body")[0].classList.add("bg-dark");
    document.getElementsByTagName("body")[0].classList.add("text-light");
  } else {
    document.getElementsByTagName("body")[0].classList.add("bg-light");
    document.getElementsByTagName("body")[0].classList.add("text-dark");
    document.getElementsByTagName("body")[0].classList.remove("bg-dark");
    document.getElementsByTagName("body")[0].classList.remove("text-light");
  }
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
  });
  search_value_style_cookie();
});

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
  set_value_style_cookie();
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
function addFightStyleClickEvent(elementId, new_fight_style) {
  document.getElementById(elementId).addEventListener("click", function () {
    fight_style = new_fight_style;
    push_state();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  try {
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
  get_data_from_link();
  switch_to_data();
};

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

    if (key === "fight_style") {
      fight_style = value;
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

    file_name += "_" + fight_style + ".json";
    let response = await fetch(`./json/${data_view}/${file_name}`);
    try {
      loaded_data[chosen_class][chosen_spec][data_name][fight_style] = await response.json();
    } catch (error) {
      return;
    }
  }
  update_advanced_options();

  update_table();
}

function update_advanced_options() {
  if (debug) {
    console.log("update_advanced_options");
  }
  return;

  var data_name = data_view;

  let chart_options = document.getElementById("advanced_chart_options");
  chart_options.innerHTML = "";
  let area = document.createElement("div");
  area.className = "row";
  chart_options.appendChild(area);

  // add more chart settings here

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
    update_table();
  });

}

/**
 * Function to change the url. url change triggers state application, load, and chart updates according to state (class + spec + fight_style + ...).
 */
async function push_state() {
  if (debug) {
    console.log("push_state");
    console.log(`${chosen_spec} ${chosen_class} ${data_view} ${fight_style}`);
  }
  if (chosen_spec && chosen_class && data_view && fight_style) {
    history.pushState({ id: 'data_view' }, chosen_spec + " " + chosen_class + " | " + data_view + " | " + fight_style, create_link());
    await switch_to_data();
  } else {
    if (debug) {
      console.log("Abort push_state because data is missing.");
    }
  }
}

/**
 * Function to trigger all possible updates and loads.
 */
async function switch_to_data() {
  if (debug) {
    console.log("switch_to_data");
  }
  update_nav();
  update_page_content();
  update_fight_style_buttons();
  await load_data();
  translate_page();


  console.log("Trigger tooltips!");
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
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
function update_table() {
  if (debug) {
    console.log("update_chart");
  }

  let data_name = data_view;

  // set title and subtitle
  let new_title = "";

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
  document.getElementById("chart_subtitle").innerHTML = subtitle;
  document.getElementById("chart_simc_hash").innerHTML = `SimulationCraft build: <a href=\"https://github.com/simulationcraft/simc/commit/${loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simc_settings"]["simc_hash"]}\" target=\"blank\">#${loaded_data[chosen_class][chosen_spec][data_name][fight_style]["simc_settings"]["simc_hash"].substring(0, 5)}</a>`;


  // manage data
  let data = loaded_data[chosen_class][chosen_spec][data_name][fight_style];

  let key_list = [];

  for (let row = 1; row < 8; row++) {
    for (let column = 1; column < 4; column++) {
      key_list.push(row.toString() + column.toString());
    }
  }

  for (let row_column of key_list) {

    let html_element = document.getElementById(row_column);

    try {

      // get best talent combination for a given fixed talent
      let talent_combination = get_best_talent_combination(row_column, data);

      // derive non-talent version
      let blank_talent_combination = talent_combination.slice(0, row_column.slice(0, 1) - 1) + "0" + talent_combination.slice(row_column.slice(0, 1), 8);

      console.log(row_column, talent_combination, blank_talent_combination);

      let talent_dps = data["data"][talent_combination];
      let blank_dps = data["data"][blank_talent_combination];

      let talent_name = document.createElement("h5");
      let talent_data = data["talent_data"][row_column.slice(0, 1)][row_column.slice(1, 2)];
      talent_name.innerHTML = get_talent_name(talent_data["name"], row_column); // TODO: extend here to have a link instead
      html_element.innerHTML = "";
      html_element.appendChild(talent_name);


      let max_element = document.createElement("div");
      max_element.innerHTML = "Gain: ";
      max_element.title = "Talent combination: " + talent_combination;
      max_element.setAttribute("data-toggle", "tooltip");
      let max_value = document.createElement("span");
      gain = get_percentage_gain(blank_dps, talent_dps);
      max_value.innerHTML = gain + "%";
      max_value.classList += get_class_color(gain);
      max_element.appendChild(max_value);
      html_element.appendChild(max_element);

    } catch (error) {
      html_element.innerHTML = "-";
      if (debug) {
        console.warn(error);
      }
      // utility row...probably
    }
  }


  try {
    $WowheadPower.refreshLinks();
  } catch (error) {
  }
}

/**
 * Return first matching talent combination. False otherwise
 * @param {xy} row_column x...row y...column
 * @param {json} data fully loaded data for the state
 */
function get_best_talent_combination(row_column, data) {
  for (let talent_combination of data["sorted_data_keys"]) {
    if (talent_combination[row_column.slice(0, 1) - 1] === row_column.slice(1, 2)) {
      return talent_combination
        ;
    }
  }
  return false;
}

function get_talent_name(name, row_column) {

  let s = "<a href=\"https://";

  if (language === "EN") {
    s += "www";
  } else {
    s += language.toLowerCase();
  }
  s += ".wowhead.com/spell=";
  s += loaded_data[chosen_class][chosen_spec][data_view][fight_style]["talent_data"][row_column.slice(0, 1)][row_column.slice(1, 2)]["spell_id"];
  s += "\">";
  s += get_translated_name(name);
  s += "</a>";

  return s;
}

function get_percentage_gain(base_value, changed_value) {
  if (debug) {
    console.log("get_percentage_gain");
  }
  return Math.round((changed_value * 100 / base_value - 100) * 100) / 100;
}

function get_class_color(dps_increase) {
  if (debug) {
    console.log("get_class_color");
  }

  if (dps_increase < 3.0) {
    return "mage-color";
  } else if (dps_increase > 5.0 && dps_increase <= 7.0) {
    return "druid-color";
  } else if (dps_increase > 7.0) {
    return "death_knight-color";
  } else {
    return "monk-color";
  }
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
 * Update data header
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
  if (fight_style !== "patchwerk") {
    path += "?fight_style=" + fight_style;
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

/** Save the current iconized_chart in a cookie. */
function set_iconized_chart_cookie() {
  if (debug) {
    console.log("set_iconized_chart_cookie");
  }
  Cookies.set('bloodmallet_iconized_chart', whTooltips.iconizeLinks, { expires: 31, path: '' });
  update_chart();
}


/** searches for the iconized charts cookie */
function seach_iconized_chart_cookie() {
  if (debug) {
    console.log("seach_iconized_chart_cookie");
  }
  if (Cookies.get('bloodmallet_iconized_chart')) {
    whTooltips.iconizeLinks = ('true' === Cookies.get('bloodmallet_iconized_chart'));
  }
  document.getElementById("inconized_charts_checkbox").checked = whTooltips.iconizeLinks;
}


/******************************************************************************
 *
 * Last content block. These functions trigger onfinished load.
 *
 */


document.addEventListener("DOMContentLoaded", async function () {
  search_dark_mode_cookie();
  seach_iconized_chart_cookie();
  await search_language_cookie();

  get_data_from_link();
  if (chosen_spec !== "") {
    switch_to_data();
  }
});
