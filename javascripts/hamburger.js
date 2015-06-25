$(document).ready(function(){
  $('button').click(function() {
  $(this).toggleClass('expanded').siblings('ul').slideToggle();
  });
});
