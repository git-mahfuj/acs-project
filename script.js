// const button = document.getElementById('changeButton');
// button.addEventListener("click", doSomething);
// function doSomething() {
//   alert("Button clicked!");
// }

const button = document.getElementById("changeButton");
button.addEventListener("click", function () {
  document.body.className = "bg-black";
  document.querySelector(".nav-bar").style.backgroundColor = "black";
  document.querySelector("acs-text").style.backgroundColor = "black";
  
});


