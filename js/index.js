var fight_style = "patchwerk";
var active_spec = "";
var language = "EN";

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

function addLanguageListener() {
  document.getElementById("select_language").addEventListener("change", function() {
    switchLanguage(this.options[this.selectedIndex].value);
  });
}

function switchLanguage(new_language) {
  if (new_language == "EN" || new_language == "DE" || new_language == "FR") {
    language = new_language;
  }
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
  var tspans = document.getElementsByTagName("tspan");

  var wait_counter = 0;
  while(tspans.length == 0 && wait_counter < 3000) {
    setTimeout(function() {  }, 5);
    wait_counter += 5;
    tspans = document.getElementsByTagName("tspan");
  }

  for (var i = tspans.length - 1; i >= 0; i--) {
    var translation = translate_trinket(tspans[i].innerHTML);
    if (translation) {
      tspans[i].innerHTML = translation;
    }
  }
}

function translate_trinket(trinket) {
  var translate_heap = {
    "Kil'jaeden's Burning Wish": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Chrono Shard": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Horn of Valor": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Toe Knee's Promise": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Infernal Alchemist Stone": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Unstable Arcanocrystal": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Darkmoon Deck: Dominion": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Bloodstained Handkerchief": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Chaos Talisman": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Eye of Command": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Faulty Countermeasure": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Gift of Radiance": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Giant Ornamental Pearl": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Mark of Dargrul": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Memento of Angerboda": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Nightmare Egg Shell": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Spiked Counterweight": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Terrorbound Nexus": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Tiny Oozeling in a Jar": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Windscar Whetstone": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Nature's Call": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Ravaged Seed Pod": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Spontaneous Appendages": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Draught of Souls": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Entwined Elemental Foci": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Infernal Cinders": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Umbral Moonglaives": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Vial of Ceaseless Toxins": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Specter of Betrayal": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "The Devilsaur's Bite": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Aran's Relaxing Ruby": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Caged Horror": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Corrupted Starlight": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Deteriorated Construct Core": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },       
    "Elementium Bomb Squirrel Generator": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Eye of Skovald": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Figurehead of the Naglfar": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Moonlit Prism": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Mrrgria's Favor": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Naraxas' Spiked Tongue": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Oakheart's Gnarled Root": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Obelisk of the Void": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Stormsinger Fulmination Charge": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Twisting Wind": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Unstable Horrorslime": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Fury of the Burning Sky": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Icon of Rot": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Spectral Thurible": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Tarnished Sentinel Medallion": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Terror From Below": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Splinters of Agronax": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Tempered Egg of Serpentrix": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Tirathon's Betrayal": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Bloodthirsty Instinct": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Arcanogolem Digit": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Convergence of Fates": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Nightblooming Frond": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "PVP Insignia of Conquest": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "PVP Badge of Conquest": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Cradle of Anguish": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Engine of Eradication": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Ley Spark": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Six-Feather Fan": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Thrice-Accursed Compass": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Darkmoon Deck: Hellfire": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Dreadstone of Endless Shadows": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Infernal Writ": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Portable Manacracker": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Bough of Corruption": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Swarming Plaguehive": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Twisting Wind": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Unstable Horrorslime": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Wriggling Sinew": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Erratic Metronome": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Pharameres Forbidden Grimoire": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Star Gate": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Whispers in the Dark": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "PVP Insignia of Dominance": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "PVP Badge of Dominance": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Charm of the Rising Tide": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Tome of Unraveling Sanity": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Devilsaur Shock-Baton": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Eyasu's Mulligan": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Padawsen's Unlucky Charm": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Stat Stick (Crit)": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Stat Stick (Haste)": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Stat Stick (Mastery)": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Stat Stick (Versatility)": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Fel-Oiled Infernal Machine": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Ursoc's Rending Paw": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Claw of the Crystalline Scorpid": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Convergence of Fates": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Might of Krosus": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "PVP Insignia of Victory": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "PVP Badge of Victory": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Cradle of Anguish": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Engine of Eradication": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    },
    "Ettin Fingernail": {
      "DE": "Schnitzel",
      "FR": "Croissant"
    }
  };

  if (translate_heap[trinket] && translate_heap[trinket][language]) {
    return translate_heap[trinket][language];
  }
  return false;
}