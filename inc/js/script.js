//toggle btn transform
let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};

// copyright text year
var getYear = new Date().getFullYear();
document.getElementById("getYear").innerHTML = getYear;
