const bannerheader = document.querySelector("#banner .content Header");
const p = document.createElement("p");

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const bday = month >= 9 ? year - 1995 : year - 1996;

p.innerText = "a " + bday + " year old Computer Science student from Berlin.\nI'm passionate about learning new skills to creat software and games.\nFeel free to explore my projects!";
bannerheader.appendChild(p);