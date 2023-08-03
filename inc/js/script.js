// navbar close onclick
$(document).ready(function () {
  $(document).click(function () {
    // if($(".navbar-collapse").hasClass("in")){
    $(".navbar-collapse").collapse("hide");
    // }
  });
});

// copyright text year
var getYear = new Date().getFullYear();
document.getElementById("getYear").innerHTML = getYear;
