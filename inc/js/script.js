//toggle btn transform
let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// boostrap modal
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
  

// copyright text year
var getYear = new Date().getFullYear();
document.getElementById("getYear").innerHTML = getYear;

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

//..................
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-EL36LEQXYG");

// about vertical carousel
$("#vertical-carousel").bind("mousewheel DOMMouseScroll", function (e) {
  e.preventDefault(); // Prevent the default scrolling behavior

  const isScrollingUp =
    e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0;
  const isScrollingDown = !isScrollingUp;

  if (isScrollingUp) {
    $(this).carousel("prev");
  } else if (isScrollingDown) {
    $(this).carousel("next");
  }

  const isFirstSlide = $(this).find(".carousel-item:first").hasClass("active");
  const isLastSlide = $(this).find(".carousel-item:last").hasClass("active");

  if (isFirstSlide && isScrollingUp) {
    window.location.hash = "#beforecaro";
  } else if (isLastSlide && isScrollingDown) {
    window.location.hash = "#aftercaro";
  }
});
