const target = document.querySelector("#target");

target.onmouseenter = () => {
  target.style.background = "red";
};

target.onmouseleave = () => {
  target.style.background = "none";
};
