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

var dark_mode = true;

// look for the dark mode cookie and update view
document.addEventListener("DOMContentLoaded", search_dark_mode_cookie);

// add listener to the dark mode checkbox
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("darkModeCheckbox").addEventListener("change", function (e) {
    dark_mode = e.target.checked;
    update_dark_mode();
    set_dark_mode_cookie();
  });
});

// updates dark mode based on dark mode check box
function update_dark_mode() {
  if (dark_mode) {
    document.getElementsByTagName("body")[0].classList.add("bg-dark");
    document.getElementsByTagName("body")[0].classList.add("text-light");
  } else {
    document.getElementsByTagName("body")[0].classList.remove("bg-dark");
    document.getElementsByTagName("body")[0].classList.remove("text-light");
  }
}

// save the current dark_mode value in a cookie
function set_dark_mode_cookie() {
  var cookie_name = "bloodmallet_dark_mode";
  var duration = new Date();
  var days = 31;
  duration.setTime(duration.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = cookie_name + "=" + dark_mode + ";" + duration, ";path=/";
}

// searches for the dark mode cookie and updates the page if necessary
function search_dark_mode_cookie() {
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

var bloodyfiller = "&nbsp;charts&nbsp;";
var filler_possibilities_common = ["&nbsp;charts&nbsp;", "&nbsp;trinkets&nbsp;", "&nbsp;traits&nbsp;", "&nbsp;races&nbsp;"];
var filler_possibilities_rare = ["¯\\_(ツ)_/¯", " ͡° ͜ʖ ͡°", "ಠ_ಠ", "⌐■_■", "ʕ•ᴥ•ʔ", "ಠᴗಠ", "づ￣ ³￣", "⊙_☉"];

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("bloodyfiller").addEventListener("click", randomize_bloodyfiller);
});

function randomize_bloodyfiller() {
  var roll = Math.floor(Math.random() * (filler_possibilities_common.length + 1));
  while (filler_possibilities_common[roll] == bloodyfiller) {
    roll = Math.floor(Math.random() * (filler_possibilities_common.length + 1));
  }
  if (roll == filler_possibilities_common.length) {
    roll = Math.floor(Math.random() * filler_possibilities_rare.length);
    while (filler_possibilities_rare[roll] == bloodyfiller) {
      roll = Math.floor(Math.random() * filler_possibilities_rare.length);
    }
    document.getElementById("bloodyfiller").innerHTML = filler_possibilities_rare[roll];
    bloodyfiller = filler_possibilities_rare[roll];
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

var language = "EN";
var loaded_languages = {};

document.addEventListener("DOMContentLoaded", search_language_cookie);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("languageSelector").addEventListener("change", function () {
    switch_language(this.options[this.selectedIndex].value);
  });
});

// switches the language, calls translate_page to do the actual translation
function switch_language(new_language) {
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
  } else {
    language = new_language;
    translate_page();
    set_language_cookie();
  }
}

function translate_page() {
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

  // translate defined IDs based on data
  var translation_IDs = [
    "translate_main_paragraph",
    "navbarSettingsMenu",
    "translate_dark_mode",
    "translate_faq",
    "translate_contact",
    "translate_impressum"
  ];

  // If content is used multiple times like class names or spec names, add a translation class to the class list
  var translation_classes = [
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


  translation_IDs.forEach(element => {
    if (loaded_languages[language][element] && loaded_languages[language][element] !== "") {
      document.getElementById(element).innerHTML = loaded_languages[language][element];
    } else if (loaded_languages[language][element] === "") {
      // Don't translate
      console.log("No translation for '" + element + "' available. Help improve the page by submitting a bug report. Or even better: clone the repo, fix the problem, and create a pull request. Any help is greatly appreciated!");
    } else {
      // Don't translate
      console.log("Language package '" + language + "' doesn't have '" + element + "' added to it or the ID is missing in the page. Help improve the page by submitting a bug report. Or even better: clone the repo, fix the problem, and create a pull request. Any help is greatly appreciated!");
    }
  });
}

// save the current language in a cookie
function set_language_cookie() {
  var cookie_name = "bloodmallet_language_selection";
  var duration = new Date();
  var days = 31;
  duration.setTime(duration.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = cookie_name + "=" + language + ";" + duration, ";path=/";
}

// searches for the dark mode cookie and updates the page if necessary
function search_language_cookie() {
  var cookie_array = document.cookie.split(";");
  cookie_array.forEach(element => {

    if (element.indexOf("bloodmallet_language_selection=") > -1) {

      if (element.indexOf("=EN") == -1) {
        switch_language(element.slice(element.indexOf("=") + 1));
      }
      // re-set language cookie to have a new expiry date
      set_language_cookie();
    }
  });
}




/*---------------------------------------------------------
//
//  Switch to data mode
//
---------------------------------------------------------*/

var loaded_data = {};

// A spec is considered valid if a json file for it can be found
window.onhashchange = function () {
  load_spec_data();
};

function load_spec_data() {
  var class_spec_name = window.location.hash.slice(1);
  console.log(class_spec_name);

}
