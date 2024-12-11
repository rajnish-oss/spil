
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "img/download.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,    },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "img/download.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,    },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "img/download.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`    },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "img/download.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `    },
  
];

let main = document.querySelector(".main");
let bars = document.querySelector("#bars");
let wbtn = document.querySelector(".whatsapp");
let map = document.querySelector(".contacts1");
let sideBar = document.querySelector(".sidebar");
let xcross = document.querySelector(".xcross");

bars.addEventListener("click",() => {
  sideBar.style.display = 'flex';
})

xcross.addEventListener("click",() => {
  sideBar.style.display = 'none';
})

map.addEventListener("click" , () => {
  window.open('https://maps.app.goo.gl/7LLM5i2589YHMNFs5','_blank');
})

wbtn.addEventListener("click", () => {
  window.open('https://wa.me/qr/4O4FHKBQCLB6O1','_blank');
})

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItem(menu);
})

function displayMenuItem (menu) {
  let displayMenu =  menu.map(function (item){
      return `<article class="products">
      <div class="imgprod">
          <img src=${item.img}/> </div> 
          <div class="info">
          <header>
          <h3>${item.title}</h3>
          <h3 class="price">&#8377; ${item.price} per piece</h3>
          </header>
          <p class="description">${item.desc}</p>
          </div>   
     
  </article>`
  })
  displayMenu = displayMenu.join("");
  main.innerHTML=displayMenu;
}