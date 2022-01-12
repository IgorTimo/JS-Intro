
const h1 = document.querySelector("h1");
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    h1.innerText = `${button.innerText} clicked`;
    event.stopPropagation();
  })
);

window.addEventListener("click", (event) => {
  console.log("Window clicked" + event.target);
});

//Парсим отсюда города https://en.wikipedia.org/wiki/List_of_municipalities_in_California

// const table = document.querySelector(".plainrowheaders");
// const links = table.querySelector("tbody").querySelectorAll("th a");
// const cites = Array.from(links).map((link) => link.innerText);
// const sanCites = cites.filter(
//   (city) => city.toLowerCase().substring(0, 3) === "san"
// );
// console.log(sanCites);
// links.forEach((link) => {console.log(link.innerText)});
// links.forEach((link) => {console.log(link.textContent)});
// links.forEach((link) => {console.log(link.title)});

const namesArr = [
  "ivan",
  "egor",
  "jack",
  "nina",
  "ivan",
  "egor",
  "jack",
  "nina",
  "ivan",
  "egor",
  "jack",
  "nina",
  "ivan",
  "egor",
  "jack",
];


const nameCounter = namesArr.reduce((acc, name) =>{
  if(!acc[name]){
    acc[name] = 0;
  }
  acc[name]++;
  return acc;
}, {})

console.log(nameCounter);



const auto = {
  name: "lada",
  drive(){
    console.log(`>>> I'm driving ${this.name}`);
  }
}

const autoDrive = auto.drive;
const autoDriveBind = auto.drive.bind(auto);
const motoDriveBind = auto.drive.bind({name: 'yamaha'});

auto.drive();
autoDrive();
autoDriveBind();
motoDriveBind();

let cards = [];

fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
.then((response) => response.json())
.then(data => cards = [ ...data.cards])
.then(() => console.log(cards));



console.log(cards);

//Test change

//One more change


