document.addEventListener("DOMContentLoaded", add_link_listener);

// add tracking listeners to links, so i'm able to see which resources are beeing used
function add_link_listener() {
  var links = document.links;
  for (var i = links.length - 1; i >= 0; i--) {
    links[i].addEventListener("click", function(e) {
      ga('send', 'event', 'outgoing', 'click', e.target.href);
    } );
  }
}
