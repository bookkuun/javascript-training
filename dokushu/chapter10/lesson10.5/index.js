localStorage.setItem("car", "黒い車");
sessionStorage.setItem("car", "赤い車");

localStorage.setItem("car", "白い車");
const car = sessionStorage.getItem("car") || localStorage.getItem("car");

sessionStorage.setItem("car", car);
console.log(sessionStorage.getItem("car"));
