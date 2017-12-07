var fight_style = "patchwerk";
var active_spec = "";

// add listeners after document finished loading
document.addEventListener("DOMContentLoaded", addButtonListeners);
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(addCrucibleListeners, 1500);
});
document.addEventListener('DOMContentLoaded', function() {

  //load tooltip script if viewport is large enough
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  if (w > 450 && h > 450) {
    getScript("//wow.zamimg.com/widgets/power.js");
  }

  // switch charts to language
  if (window.location.search) {
    if (window.location.search.split("lang=")[1]) {
      var new_language = window.location.search.split("lang=")[1];
      // set new language for the website
      switchLanguage(new_language);

      ga('send', 'event', 'switch_language', new_language);

      // set language selector to the new starting language
      document.getElementById("select_language").value = new_language;
    }
  }

  // jump directly to chart
  if (window.location.hash == "") {
    return;
  }
  var start_chart =  window.location.hash.split("#")[1].split("_");
  if (start_chart.length == 4 || start_chart.length == 5) {
    var temp_spec = start_chart[1] + "_" + start_chart[2];
    if (start_chart.length == 5) {
      temp_spec += "_" + start_chart[3];
    }
    switch_chart_to(temp_spec);

    if (start_chart[start_chart.length-1] != fight_style) {
      switch_fight_style();
    }
  }
}, false);


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
  document.getElementById("chart_linker").addEventListener("click", copy_chart_link );
}


// add the show chart functionality to all buttons
function addCrucibleListeners() {
  // add crucible copy function
  var crucible_iframes = document.getElementsByTagName("iframe");
  for (var i = crucible_iframes.length - 1; i >= 0; i--) {
    var iframe_content = crucible_iframes[i].contentDocument;
    iframe_content.addEventListener("click", function(e) {
      copy_crucible_weights(e);
    } );
  }
}


function copy_chart_link() {
  var path = window.location.origin;
  path += window.location.pathname;
  if (language != "EN") {
    path += "?lang=" + language
  }
  path += "#crucible_" + active_spec + "_" + fight_style;
  document.getElementById("chart_linker_content").innerHTML = path;
  document.getElementById("chart_linker_content").style.display = "block";

  window.getSelection().selectAllChildren( document.getElementById( "chart_linker_content" ) );
  document.execCommand('copy');

  document.getElementById("chart_linker_content").style.display = "none";

  var success_message = document.getElementById("copy_success");
  success_message.className = "show";
  setTimeout(function(){ success_message.className = success_message.className.replace("show", ""); }, 3000);
}


function copy_crucible_weights(element) {
  console.log("Copy crucible weight to clipboard.");
  element.view.getSelection().selectAllChildren( element.view.document.getElementsByTagName("pre")[0].parentNode );
  element.view.document.execCommand('copy');
  element.view.getSelection().removeAllRanges();
  var success_message = document.getElementById("crucible_copy_success");
  success_message.className = "show";
  setTimeout(function(){ success_message.className = success_message.className.replace("show", ""); }, 3000);
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
    if (~scripts[i].src.indexOf("js/crucible/crucible_" + spec + "_" + fight_style + ".js")) {
      already_loaded = true;
    }
  }
  if ( ! already_loaded) {
    getScript("js/crucible/crucible_" + spec + "_" + fight_style + ".js");
  }

  // hide/show charts
  var container = document.getElementsByClassName("container-relics");
  for (var i = container.length - 1; i >= 0; i--) {
    if (container[i].id === "crucible_" + spec + "_" + fight_style) {
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

  ga('send', 'event', 'relics', fight_style, active_spec);

  if (language != "EN") {
    //console.log("Starting translation process.");
    setTimeout(translate_charts, 200);
  }
}


// allows a callback on script load. not necessary but maybe nice to have
function getScript(source, callback) {
  var script = document.createElement("script");
  script.onload = callback;
  script.src = source;

  document.body.appendChild(script);
}
