//①id属性がidAttrの要素
const a = document.querySelector("#idAttr");
//document.getElementId("idAttr");
console.log(a);

//②class属性がclassAttrのすべての要素
const b = document.querySelectorAll(".classAttr");
console.log(b);

//③すべてのpタグの要素
const c = document.querySelectorAll("p");
console.log(c);

//④inputタグのtype属性がtextの要素
const d = document.querySelector("input[type='text");
console.log(d);

//⑤<span>要素の祖先要素でpタグの要素
const span = document.querySelector("span");
const e = span.closest("p");
console.log(e);

//⑥h1タグの兄弟要素でtype属性がpasswordの要素
const f = document.querySelector("h1 ~ input[type='password']");
console.log(f);

//⑦id属性がidAttrの要素の子要素
const g = document.querySelector("#idAttr").firstElementChild;
console.log(g);

//⑧inputタグのtype属性がtextの直後の要素
const h = document.querySelector("input[type='text']").nextElementSibling;
console.log(h);
