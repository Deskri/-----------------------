let header = document.getElementById("header");
let nav = document.createElement("nav");
let container = document.createElement("div");
let title = document.createElement("a");
let button = document.createElement("button");
let span = document.createElement("span");
let collapse = document.createElement("div");
let ul = document.createElement("ul")
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let a1 = document.createElement("a");
let a2 = document.createElement("a");
let a3 = document.createElement("a");
let a4 = document.createElement("a");


nav.classList.add("navbar");
nav.classList.add("navbar-expand-lg");
nav.classList.add("bg-dark");
nav.classList.add("border-bottom");
nav.classList.add("border-body");
nav.setAttribute("data-bs-theme", "dark");

container.classList.add("container-fluid");

button.classList.add("navbar-toggler");
button.type = "button";
button.setAttribute("data-bs-toggle", "collapse");
button.setAttribute("data-bs-target", "#navbarNav");
button.setAttribute("aria-controls", "navbarNav");
button.setAttribute("aria-expanded", "false");
button.setAttribute("aria-label", "Toggle navigation");

span.classList.add("navbar-toggler-icon");

collapse.classList.add("collapse");
collapse.classList.add("navbar-collapse");
collapse.id = "navbarNav";

title.classList.add("navbar-brand");
title.classList.add("text-light");
title.textContent = "Моделирование ИС";

ul.classList.add("navbar-nav");

li1.className = "nav-item";
li2.className = "nav-item";
li3.className = "nav-item";
li4.className = "nav-item";

a1.classList.add("nav-link");
a1.textContent = "Лаб. 1";
a1.href = "index.html"

a2.classList.add("nav-link");
a2.textContent = "Лаб. 2";
a2.href = "lab2.html"

a3.classList.add("nav-link");
a3.textContent = "Лаб. 3";
a3.href = "lab3.html"

a4.classList.add("nav-link");
a4.textContent = "Лаб. 5";
a4.href = "lab5.html"

li1.append(a1);
li2.append(a2);
li3.append(a3);
li4.append(a4);
ul.append(li1);
ul.append(li2);
ul.append(li3);
ul.append(li4);
collapse.append(ul);
button.append(span);
container.append(title);
container.append(button);
container.append(collapse);
nav.append(container);
header.append(nav);