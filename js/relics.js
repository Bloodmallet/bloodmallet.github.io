/*
Highcharts.chart('bl-container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Beastlord Relics'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
    'Electric Discharge',
    'The Ground Trembles',
    '+3 weapon item levels',
    'Elemental Destabilization',
    '+2 weapon item levels',
    "Firestorm",
    "Call the Thunder",
    "+1 item level",
    'Lava Imbued',
    "Molten Blast",
    "Earthen Attunement"
        ],
        crosshair: false
    },
    yAxis: {
        min: 0,
        title: {
            text: '% DPS Gain'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} dps</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [ {
        name: 'Ascendance',
        color: '#F44336',
        data: [1.1,1.2,1.1,1,0.7,0.3,0.3,0.4,0.2,0.1,0.05]
    }, {
        name: 'Lightning Rod',
        color: '#18FFFF',
        data: [1.4,1.1,1.1,1.1,0.7,0.4,0.5,0.3,0.2,0.2,0.1]
    }, {
        name: 'Icefury',
        color: '#448AFF',
        data: [1,1.2,1.1,1,0.7,0.4,0.3,0.3,0.2,0.1,0.1]

    } ]
});




Highcharts.chart('st-asc-container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Patchwerk relics and Shadow/Light traits'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Murderous Intent',
            'Master of Shadows',
            'Shocklight',
            'Light Speed',
            'Elemental Destabilization',
            '+3 weapon item levels',
            'Secure in the Light',
            'Infusion of Light',
            'Torment the Weak',
            'Chaotic Darkness',
            '+2 weapon item levels',
            'Lava Imbued',
            'Shadowbind',
            "Firestorm",
            "Molten Blast",
            "Earthen Attunement",
            "+1 item level",
            "Call the Thunder",
            'Dark Sorrow',
        ],
        crosshair: false
    },
    yAxis: {
        min: 0,
        title: {
            text: '% DPS Gain'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} dps</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [ {
        name: 'Ascendance',
        color: '#F44336',
        data: [1.20,1.19,1.16,1.15,1.14,1.07,1.03,0.96,0.86,0.75,0.74,0.70,0.67,0.63,0.57,0.45,0.33,0.31,0.23]
    } ]
});

Highcharts.chart('st-if-container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Patchwerk relics and Shadow/Light traits'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Shocklight',
            'Murderous Intent',
            'Master of Shadows',
            'Elemental Destabilization',
            '+3 weapon item levels',
            'Light Speed',
            'Secure in the Light',
            'Infusion of Light',
            'Torment the Weak',
            'Chaotic Darkness',
            '+2 weapon item levels',
            "Firestorm",
            'Shadowbind',
            'Lava Imbued',
            "Molten Blast",
            "+1 item level",
            "Earthen Attunement",
            "Call the Thunder",
            'Dark Sorrow',
        ],
        crosshair: false
    },
    yAxis: {
        min: 0,
        title: {
            text: '% DPS Gain'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} dps</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [ {
        name: 'Icefury',
        color: '#448AFF',
        data: [1.32,1.14,1.12,1.09,1.04,1.04,1.02,1.00,0.87,0.80,0.78,0.74,0.72,0.58,0.42,0.41,0.39,0.35,0.32]
    } ]
});



Highcharts.chart('st-lr-container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Patchwerk relics and Shadow/Light traits'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Master of Shadows',
            'Shocklight',
            'Light Speed',
            'Murderous Intent',
            'Secure in the Light',
            'Elemental Destabilization',
            'Infusion of Light',
            '+3 weapon item levels',
            'Torment the Weak',
            'Chaotic Darkness',
            'Shadowbind',
            "Firestorm",
            '+2 weapon item levels',
            'Lava Imbued',
            "Call the Thunder",
            "Earthen Attunement",
            "Molten Blast",
            "+1 item level",
            'Dark Sorrow',
        ],
        crosshair: false
    },
    yAxis: {
        min: 0,
        title: {
            text: '% DPS Gain'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} dps</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [ {
        name: 'Lightning Rod',
        color: '#18FFFF',
        data: [1.31,1.19,1.11,1.10,1.06,1.04,1.02,0.96,0.88,0.76,0.72,0.65,0.65,0.53,0.49,0.47,0.39,0.30,0.24]
    } ]
});


Highcharts.chart('st-container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Patchwerk relics and Shadow/Light traits'
    },
    subtitle: {
        text: ''
    },

    yAxis: {
        min: 0,
        title: {
            text: '% DPS Gain'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} dps</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    xAxis: {
        categories: [
            'Shocklight',
            'Murderous Intent',
            'Master of Shadows',
            'Elemental Destabilization',
            '+3 weapon item levels',
            'Light Speed',
            'Secure in the Light',
            'Infusion of Light',
            'Torment the Weak',
            'Chaotic Darkness',
            '+2 weapon item levels',
            "Firestorm",
            'Shadowbind',
            'Lava Imbued',
            "Molten Blast",
            "+1 item level",
            "Earthen Attunement",
            "Call the Thunder",
            'Dark Sorrow',
        ],
        crosshair: false
    },
    series: [ {
        name: 'Ascendance',
        color: '#F44336',
        data: [1.16,1.20,1.19,1.14,1.07,1.15,1.03,0.96,0.86,0.75,0.74,0.63,0.67,0.70,0.57,0.33,0.45,0.31,0.23]
    }, {
        name: 'Lightning Rod',
        color: '#18FFFF',
        data: [1.19,1.10,1.31,1.04,0.96,1.11,1.06,1.02,0.88,0.76,0.65,0.65,0.72,0.53,0.39,0.30,0.47,0.49,0.24]
    }, {
        name: 'Icefury',
        color: '#448AFF',
        data: [1.32,1.14,1.12,1.09,1.04,1.04,1.02,1.00,0.87,0.80,0.78,0.74,0.72,0.58,0.42,0.41,0.39,0.35,0.32]
    } ]
}); */






var fight_style = "patchwerk";
var active_spec = "";

var language = "EN";
var translator = {};

// add listeners after document finished loading
document.addEventListener("DOMContentLoaded", addButtonListeners);
document.addEventListener("DOMContentLoaded", addLanguageListener);
document.addEventListener('DOMContentLoaded', function() {
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

// replaces all known trinket names with the ones from the translation file
function addLanguageListener() {
  document.getElementById("select_language").addEventListener("change", function() {
    switchLanguage(this.options[this.selectedIndex].value);
    ga('send', 'event', 'switch_language', this.options[this.selectedIndex].value);
  });
}


function copy_chart_link() {
  var path = window.location.origin;
  path += window.location.pathname;
  path += "#crucible_" + active_spec + "_" + fight_style;
  document.getElementById("chart_linker_content").innerHTML = path;
  document.getElementById("chart_linker_content").style.display = "block";
  window.getSelection().selectAllChildren( document.getElementById( "chart_linker_content" ) );
  document.execCommand('copy');
  document.getElementById("chart_linker_content").style.display = "none";

  var success_message = document.getElementById("copy_success")
  success_message.className = "show";
  setTimeout(function(){ success_message.className = success_message.className.replace("show", ""); }, 3000);
}


function switchLanguage(new_language) {
  // little sanity check
  if (new_language == "EN" || 
    new_language == "FR" || 
    new_language == "DE" || 
    new_language == "KO" ||
    new_language == "CN" ||
    new_language == "ES" ||
    new_language == "PT" ||
    new_language == "RU" ) {
    if (new_language != language && new_language != "EN") {
      // load new language file
      var xhttp_getlanguage = new XMLHttpRequest();
      xhttp_getlanguage.open("GET", "./translations/" + new_language.toLowerCase() + ".json", true);
      xhttp_getlanguage.setRequestHeader("Content-type", "application/json");

      xhttp_getlanguage.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //console.log(JSON.parse(xhttp_getlanguage.responseText));
          translator = JSON.parse(xhttp_getlanguage.responseText);
          // set new language
          language = new_language;
          translate_charts();
        }
      }
      xhttp_getlanguage.send();
    } else if (new_language != language && new_language == "EN") {
      reset_translations();
      language = new_language;
      translate_charts();
    }
  }
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
