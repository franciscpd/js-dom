const header = document.getElementById("header");

header.style.backgroundColor = "green";

const menus = document.querySelectorAll("a");

menus.forEach((menu) => {
  if (menu.innerText === "Facebook") {
    menu.setAttribute("href", "https://facebook.com");
  }
});

const facebook = document.querySelector("#menu nav a:nth-child(1)");

facebook.setAttribute("href", "https://google.com");
