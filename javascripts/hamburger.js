// Borrowed hamburger menu from Cory Simmons CodePen
// http://codepen.io/corysimmons/pen/KbFcg

$(document).ready(function(){
  $('button').click(function() {
  $(this).toggleClass('expanded').siblings('ul').slideToggle();
  });
});
