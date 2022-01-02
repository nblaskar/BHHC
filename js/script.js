$(document).ready(function () {

// start first
  $(".firsthide ").hide();
  $(".firstshow").click(function () {
    $(".firsthide ").slideToggle(500);
    $(".secondhide ").hide();
    $(".thirdhide ").hide();
    $(".fourthhide ").hide();
  });
  // end first
// start first
  $(".secondhide ").hide();
  $(".secondshow").click(function () {
    $(".secondhide ").slideToggle(500);
    $(".firsthide ").hide();
    $(".thirdhide ").hide();
    $(".fourthhide ").hide();
  });
  // end first
// start first
  $(".thirdhide ").hide();
  $(".thirdshow").click(function () {
    $(".thirdhide ").slideToggle(500);
    $(".firsthide ").hide();
    $(".secondhide ").hide();
    $(".fourthhide ").hide();
  });
  // end first
// start first
  $(".fourthhide ").hide();
  $(".fourthshow").click(function () {
    $(".fourthhide ").slideToggle(500);
    $(".firsthide ").hide();
    $(".secondhide ").hide();
    $(".thirdhide ").hide();
  });
  // end first

  // Shutter Start
  $(".navmobile .outerul ").hide();
  $(".navmobile .homebar").click(function () {
    $(".navmobile .outerul ").slideToggle(500);
  });
  // Shutter End
})