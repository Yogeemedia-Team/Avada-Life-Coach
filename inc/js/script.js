//toggle btn transform
let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

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

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

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

//..................
// window.dataLayer = window.dataLayer || [];
// function gtag() {
//   dataLayer.push(arguments);
// }
// gtag("js", new Date());

// gtag("config", "G-EL36LEQXYG");

// copyright text year
var getYear = new Date().getFullYear();
document.getElementById("getYear").innerHTML = getYear;
