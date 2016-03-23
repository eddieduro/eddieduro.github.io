

$(document).ready(function(){
  var $hamburger = $(".hamburger");
  $hamburger.click(function() {
    if($("#navigation").hasClass("hidden")){
      $hamburger.toggleClass("is-active");
      $('#navigation.hidden').removeClass("hidden");
      $("#navigation").addClass("reveal");
    } else {
      $hamburger.toggleClass("is-active");
      $("#navigation.reveal").addClass("hidden");
    }
  });
});
