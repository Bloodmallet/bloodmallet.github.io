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
