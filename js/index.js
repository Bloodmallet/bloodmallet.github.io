var fight_style = "patchwerk";
var pruned = false;
var active_spec = "";


// add listeners after document finished loading
document.addEventListener("DOMContentLoaded", addButtonListeners);
// enable direct links to charts
document.addEventListener('DOMContentLoaded', function () {

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

  var start_chart = window.location.hash.split("#")[1].split("_");
  // enable pruned if it was in the link
  if (start_chart.length > 3 && start_chart[start_chart.length - 1] == "pruned") {
    var to_prune = true;
    start_chart.pop();
  }

  if (start_chart.length == 3 || start_chart.length == 4) {
    var temp_spec = start_chart[0] + "_" + start_chart[1];
    if (start_chart.length == 4) {
      temp_spec += "_" + start_chart[2];
    }
    switch_chart_to(temp_spec);

    if (to_prune) {
      switch_pruning();
    }

    if (start_chart[start_chart.length - 1] != fight_style) {
      switch_fight_style();
    }
  }
}, false);


// add the show chart functionality to all buttons
function addButtonListeners() {
  // add spec buttons
  var specSwitchButtons = document.getElementsByClassName("spec-switch-button");
  for (var i = specSwitchButtons.length - 1; i >= 0; i--) {
    specSwitchButtons[i].addEventListener("click", function (e) {
      switch_chart_to(e.target.name);
    });
  }

  // add fight style switch button
  document.getElementById("fight_style_button").addEventListener("click", switch_fight_style);
  document.getElementById("pruner").addEventListener("click", switch_pruning);
  document.getElementById("chart_linker").addEventListener("click", copy_chart_link);
}

function create_data_name() {
  var name;
  name = "#";
  name += active_spec + "_" + fight_style;
  if (pruned) {
    name += "_pruned";
  }

  return name;
}

function copy_chart_link() {
  var path = window.location.origin;
  path += window.location.pathname;
  if (language != "EN") {
    path += "?lang=" + language;
  }
  path += create_data_name();

  document.getElementById("chart_linker_content").innerHTML = path;
  document.getElementById("chart_linker_content").style.display = "block";
  window.getSelection().selectAllChildren(document.getElementById("chart_linker_content"));
  document.execCommand("copy");
  document.getElementById("chart_linker_content").style.display = "none";

  var success_message = document.getElementById("copy_success");
  success_message.className = "show";
  setTimeout(function () { success_message.className = success_message.className.replace("show", ""); }, 3000);
}


// switches fightstyle between patchwerk and beastlord
function switch_fight_style() {
  if (fight_style == "patchwerk") {
    fight_style = "beastlord";
    document.getElementById("fight_style_button").innerHTML = "&lt; Switch to patchwerk";
  } else if (fight_style == "beastlord") {
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


// switches fightstyle between patchwerk and beastlord
function switch_pruning() {
  if (!pruned) {
    document.getElementById("pruner").innerHTML = "&lt; Show full chart";
  } else {
    document.getElementById("pruner").innerHTML = "Show Top 20 &gt;";
  }
  pruned = !pruned;

  // hide/show other charts
  switch_chart_to(active_spec);
}


// loads and activates spec chart, deactivates all other charts
function switch_chart_to(spec) {
  if (spec == "") {
    return;
  }

  document.getElementById("pre_chart_options").style.display = 'block';

  active_spec = spec;

  var pruned_addition = "";
  var load_path = "js/trinkets/" + spec + "_" + fight_style;
  if (pruned) {
    load_path += "_pruned";
    pruned_addition = "_pruned";
  }
  load_path += ".js";

  // load scripts/data of the wanted chart if it's not already present
  var already_loaded = false;
  var scripts = document.scripts;
  for (var i = scripts.length - 1; i >= 0; i--) {
    // if a script already is loaded for the fight style and spec, don't load again
    if (~scripts[i].src.indexOf(load_path)) {
      already_loaded = true;
    }
  }
  if (!already_loaded) {
    getScript(load_path);
  }

  // hide/show charts
  var container = document.getElementsByClassName("container");
  for (var i = container.length - 1; i >= 0; i--) {
    if (container[i].id === spec + "_" + fight_style + pruned_addition) {
      container[i].style.display = 'block';
    } else {
      container[i].style.display = 'none';
    }
  }

  // fix pruned chart height
  if (pruned) {
    document.getElementById(spec + "_" + fight_style + pruned_addition).style.height = "500px";
  }

  // hide/show TC-resource and Discord of the spec
  var tc_boxes = document.getElementsByClassName("tc-box");

  for (var i = tc_boxes.length - 1; i >= 0; i--) {
    if (tc_boxes[i].id === "tc_" + active_spec) {
      tc_boxes[i].style.display = 'block';
    } else {
      tc_boxes[i].style.display = 'none';
    }
  }

  ga('send', 'event', 'trinkets', fight_style, spec + pruned_addition);

  if (language != "EN") {
    //console.log("Starting translation process.");
    setTimeout(translate_charts, 200);
  }
  window.location.hash = create_data_name();
}


// allows a callback on script load. not necessary but maybe nice to have
function getScript(source, callback) {
  var script = document.createElement("script");
  script.onload = callback;
  script.src = source;

  document.body.appendChild(script);
}



