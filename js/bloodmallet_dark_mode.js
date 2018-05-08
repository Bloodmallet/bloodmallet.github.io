/* Variable intended for dev mode specific output/markings */
var dev_mode = true;

var dark_mode = true;

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

  } else {
    document.getElementsByTagName("body")[0].classList.remove("bg-dark");
    document.getElementsByTagName("body")[0].classList.remove("text-light");
    document.getElementsByTagName("body")[0].classList.add("bg-light");
    document.getElementsByTagName("body")[0].classList.add("text-dark");
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
  dark_mode = ("true" == Cookies.get('bloodmallet_dark_mode') ? Cookies.get('bloodmallet_dark_mode') : false);
  document.getElementById("darkModeCheckbox").checked = dark_mode;

  update_dark_mode();
  set_dark_mode_cookie();
}


