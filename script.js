const p = document.querySelector("p");
let c = 0;
setInterval(function () {
  c++;
  p.setAttribute("data-value", c);
}, 1000);
