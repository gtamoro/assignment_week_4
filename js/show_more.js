// Collapsing and expanding long blocks of toggle_text with "Show more" and "Show less" links

$(document).ready(start);

function start() {
  $(".readmore").click (function() { show_more(event,".readmore", "#show-this-on-click", ".readless"); } );
  $(".readless").click (function() { show_less(event,".readmore", "#show-this-on-click", ".readless"); } );
  $(".learnmore").click(function() { show_more(event,".learnmore", "#learnmoretext"); } );
}

// these functions have the following parameters:
//   event: to prevent the link behaving as it should, and load the link
//   toggle_text: paragraph that will expand
//   more_trigger: link that represents the "show more"
//   less_trigger: link that represents the "show less"

function show_more(event,more_trigger,toggle_text,less_trigger) {
  event.preventDefault();
  $(toggle_text).slideDown();
  toggle_links(more_trigger,less_trigger);
}

function show_less(event,more_trigger,toggle_text,less_trigger) {
  event.preventDefault();
  $(toggle_text).slideUp("slow", function() { toggle_links(less_trigger,more_trigger);} );
}

function toggle_links(hide_trigger,show_trigger) {
  $(hide_trigger).hide();
  $(show_trigger).show();
}
