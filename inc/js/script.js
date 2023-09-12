// .....toggle btn transform..... //
let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};

// .....about vertical carousel..... //
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

// .....back to top button..... //
let mybutton = document.getElementById("btn-back-to-top");
// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
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

// .....boostrap modal..... //
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

// .....copyright text year...... //
var getYear = new Date().getFullYear();
document.getElementById("getYear").innerHTML = getYear;


// .....counter..... // 
$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});  