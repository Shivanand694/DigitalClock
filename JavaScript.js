// targeting required elements
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// setinterval will repeat this function every 1 second
setInterval(function () {
  let currectTime = new Date();

  hrs.innerHTML = currectTime.getHours();
  min.innerHTML = currectTime.getMinutes();
  sec.innerHTML = currectTime.getSeconds();
}, 1000);
