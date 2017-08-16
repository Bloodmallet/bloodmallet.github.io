var fight_style = "patchwerk";
var active_spec = "";

var language = "EN";
var translator = {};

// add listeners after document finished loading
document.addEventListener("DOMContentLoaded", addButtonListeners);
document.addEventListener("DOMContentLoaded", addLanguageListener);

// add the show chart functionality to all buttons
function addButtonListeners() {
  // add spec buttons
  var specSwitchButtons = document.getElementsByClassName("spec-switch-button");
  for (var i = specSwitchButtons.length - 1; i >= 0; i--) {
    specSwitchButtons[i].addEventListener("click", function(e) { 
      switch_chart_to(e.target.name);
    } );
  }

  // add fight style switch button
  document.getElementById("fight_style_button").addEventListener("click", switch_fight_style );
}

// replaces all known trinket names with the ones from the translation file
function addLanguageListener() {
  document.getElementById("select_language").addEventListener("change", function() {
    switchLanguage(this.options[this.selectedIndex].value);
  });
}

function switchLanguage(new_language) {
  // little sanity check
  if (new_language == "EN" || new_language == "FR") {
    if (new_language != language && new_language != "EN") {
      // load new language file
      var xhttp_getlanguage = new XMLHttpRequest();
      xhttp_getlanguage.open("GET", "./translations/" + new_language.toLowerCase() + ".json", true);
      xhttp_getlanguage.setRequestHeader("Content-type", "application/json");

      xhttp_getlanguage.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //console.log(JSON.parse(xhttp_getlanguage.responseText));
          translator = JSON.parse(xhttp_getlanguage.responseText);
        }
      }
      xhttp_getlanguage.send();
      // set new language
      language = new_language;
    } else if (new_language != language && new_language == "EN") {
      reset_translations();
      language = new_language;
    }
  }

  // translate charts with new language
  setTimeout(translate_charts, 100);
}

// switches fightstyle between patchwerk and beastlord
function switch_fight_style() {
  if (fight_style == "patchwerk") {
    fight_style = "beastlord";
    document.getElementById("fight_style_button").innerHTML = "&lt; Switch to patchwerk";
  } else if (fight_style=="beastlord") {
    fight_style = "patchwerk";
    document.getElementById("fight_style_button").innerHTML = "Switch to beastlord &gt;";
  } else {
    fight_style = "patchwerk";
    document.getElementById("fight_style_button").innerHTML = "Switch to beastlord &gt;";
  }
  // hide/show beastlord disclaimer
  if (fight_style == "beastlord") {
    document.getElementById("beastlord-disclaimer").style.display = 'block';
  } else {
    document.getElementById("beastlord-disclaimer").style.display = 'none';
  }
  switch_chart_to(active_spec);
}

// loads and activates spec chart, deactivates all other charts
function switch_chart_to(spec) {
  if (spec == "") {
    return;
  }

  document.getElementById("pre_chart_options").style.display = 'block';

  // load scripts/data of the wanted chart if it's not already present
  var already_loaded = false;
  var scripts = document.scripts
  for (var i = scripts.length - 1; i >= 0; i--) {
    // if a script already is loaded for the fight style and spec, don't load again
    if (~scripts[i].src.indexOf("js/" + spec + "_" + fight_style + ".js")) {
      already_loaded = true;
    }
  }
  if ( ! already_loaded) {
    getScript("js/" + spec + "_" + fight_style + ".js");
  }


  // hide/show charts
  var container = document.getElementsByClassName("container");
  for (var i = container.length - 1; i >= 0; i--) {
    if (container[i].id === spec + "_" + fight_style) {
      container[i].style.display = 'block';
      active_spec = spec;
    } else {
      container[i].style.display = 'none';
    }
  }
  // hide/show TC-resource and Discord of the spec
  var tc_boxes = document.getElementsByClassName("tc-box");
  for (var i = tc_boxes.length - 1; i >= 0; i--) {
    if (tc_boxes[i].id === "tc_" + spec) {
      tc_boxes[i].style.display = 'block';
    } else {
      tc_boxes[i].style.display = 'none';
    }
  }

  ga('send', 'event', 'spec', 'show ' + fight_style + ' chart', active_spec);

  if (language != "EN") {
    //console.log("Starting translation process.");
    setTimeout(translate_charts, 100);
  }
}

// allows a callback on script load. not necessary but maybe nice to have
function getScript(source, callback) {
  var script = document.createElement("script");
  script.onload = callback;
  script.src = source;
  
  document.body.appendChild(script);
}


function translate_charts() {
  if (language=="EN") {
    return;
  }

  var tspans = document.getElementsByTagName("tspan");

  for (var i = tspans.length - 1; i >= 0; i--) {
    var translation = false;
    if (tspans[i].name) {
      translation = translate_trinket(tspans[i].name);
    } else {
      translation = translate_trinket(tspans[i].innerHTML);
      if (translation) {
        tspans[i].name = tspans[i].innerHTML;
      }
    }

    if (translation) {
      tspans[i].innerHTML = translation;
    }
  }
}

function translate_trinket(trinket) {
  if (translator[trinket] && translator[trinket] != "") {
    return translator[trinket];
  }
  return false;
}

function reset_translations() {
  var tspans = document.getElementsByTagName("tspan");
  for (var i = tspans.length - 1; i >= 0; i--) {
    if (tspans[i].name) {
      tspans[i].innerHTML = tspans[i].name;
    }
  }
}
