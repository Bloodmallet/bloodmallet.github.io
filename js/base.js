let language = "EN";
let translator = {};
const available_languages = ["EN", "FR", "DE", "KO", "CN", "ES", "PT", "RU"];

document.addEventListener("DOMContentLoaded", add_link_listener);
document.addEventListener("DOMContentLoaded", addLanguageListener);

// add tracking listeners to links, so i'm able to see which resources are beeing used
function add_link_listener() {
  const links = document.links;
  for (let link of links) {
    link.addEventListener("click", function (e) {
      ga('send', 'event', 'outgoing', 'click', e.target.href);
    });
  }
}


// replaces all wowhead link names with the ones from the translation file
function addLanguageListener() {
  document.getElementById("select_language").addEventListener("change", function () {
    switchLanguage(this.options[this.selectedIndex].value);
    ga('send', 'event', 'switch_language', this.options[this.selectedIndex].value);
  });
}

function switchLanguage(new_language) {
  // little sanity check
  if (available_languages.indexOf(new_language) === -1) {
    reset_language();
    return;
  }
  if (new_language === language) {
    return;
  }
  if (new_language === "EN") {
    reset_language();
    return;
  }
  // load new language file

  fetch(`./translations/${new_language.toLowerCase()}.json`)
    .then(function (response) {
      return response.json();
    }).then(function (json) {
    translator = json;
    language = new_language;
    translate_charts();
  });
}

function reset_language() {
  reset_translations();
  language = "EN";
}

function translate_charts() {
  if (language === "EN") {
    return;
  }

  const all_links = document.getElementsByTagName("a");

  const wowhead_links = [];

  for (element of all_links) {
    if (String(element.href).search("wowhead") > -1) {
      wowhead_links.push(element);
    }
  }

  // translate all links that point to wowhead
  for (let link of wowhead_links) {
    let translation = false;
    // .name is our "saved" default value (english)
    if (link.name) {
      translation = translate_trinket(link.name);
    } else {
      // set the defualt value if it isn't present
      link.name = link.innerHTML;
      translation = translate_trinket(link.innerHTML);
    }

    // if a translation for the content was found, change the innerHTML to the translated phrase
    link.innerHTML = translation || link.name;

    // change the link to the new language as well (tooltip language change)
    let new_link = "http://" + language;
    for (let element in String(link.href).split(".")) {
        new_link += "." + String(link.href).split(".")[element];
    }
    link.href = new_link;
  }
}


function translate_trinket(phrase) {
  if (translator[phrase] && translator[phrase] !== "") {
    return translator[phrase];
  }
  return false;
}


function reset_translations() {
  const all_links = document.getElementsByTagName("a");

  let wowhead_links = [];

  for (let link of all_links) {
    if (String(link.href).search("wowhead") > -1) {
      wowhead_links.push(link);
    }
  }

  for (let wowhead_link of wowhead_links) {
    wowhead_link.innerHTML = wowhead_link.name || "";
  }
}
