// navbar close onclick
$(document).ready(function () {
  $(document).click(function () {
    // if($(".navbar-collapse").hasClass("in")){
    $(".navbar-collapse").collapse("hide");
    // }
  });
});

//toggle btn transform
let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};

//video popup close
$(document).ready(function () {
  /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
  var url = $("#popupVideo").attr("src");

  /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
  $("#myModal").on("hide.bs.modal", function () {
    $("#popupVideo").attr("src", "");
  });

  /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
  $("#myModal").on("show.bs.modal", function () {
    $("#popupVideo").attr("src", url);
  });
});

// copyright text year
var getYear = new Date().getFullYear();
document.getElementById("getYear").innerHTML = getYear;
