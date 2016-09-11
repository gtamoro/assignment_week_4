// Collapsing and expanding long blocks of toggle_text with "Show more" and "Show less" links

$(document).ready(start);

function start() {
  $(".readmore").click ({more_trigger: ".readmore", toggle_text: "#show-this-on-click", less_trigger: ".readless" }, show_more);
  $(".readless").click ({more_trigger: ".readmore", toggle_text: "#show-this-on-click", less_trigger: ".readless" }, show_less);
  $(".learnmore").click({more_trigger: ".learnmore", toggle_text: "#learnmoretext"}, show_more)
}

// this function requires three parameters:
//   toggle_text: paragraph that will expand
//   more_trigger: link that represents the "show more"
//   less_trigger: link that represents the "show less"

function show_more(event) {
  event.preventDefault();
  $(event.data.toggle_text).slideDown();
  $(event.data.more_trigger).hide();
  $(event.data.less_trigger).show();
}

// this function requires three parameters:
//   toggle_text: paragraph that will collapse
//   more_trigger: link that represents the "show more"
//   less_trigger: link that represents the "show less"

function show_less(event) {
  event.preventDefault();
  $(event.data.toggle_text).slideUp();
  $(event.data.more_trigger).show();
  $(event.data.less_trigger).hide();
}
