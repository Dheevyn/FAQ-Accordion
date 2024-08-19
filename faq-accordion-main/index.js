

var optionBtn = document.querySelectorAll(".about, .last_about");

optionBtn.forEach(function(sign) {
  var btn = sign.querySelector(".plus"); 
  var content = sign.querySelector("p"); 

  sign.addEventListener("click", function() {
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      btn.src = './images/icon-minus.svg';
    } else {
      content.style.display = "none";
      btn.src = './images/icon-plus.svg';
    }
  });
});
