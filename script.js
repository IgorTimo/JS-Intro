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

const nameCounter = namesArr.reduce((acc, name) => {
  if (!acc[name]) {
    acc[name] = 0;
  }
  acc[name]++;
  return acc;
}, {});

console.log(nameCounter);

const auto = {
  name: "lada",
  drive() {
    console.log(`>>> I'm driving ${this.name}`);
  },
};

const autoDrive = auto.drive;
const autoDriveBind = auto.drive.bind(auto);
const motoDriveBind = auto.drive.bind({ name: "yamaha" });

auto.drive();
autoDrive();
autoDriveBind();
motoDriveBind();

//Сохранить карты из интернета
let cards = [];

// fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
// .then((response) => response.json())
// .then(data => cards = [ ...data.cards])
// .then(() => console.log(cards));

// console.log(cards);

// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log(`${i}: foolbar`);
//     continue;
//   }
//   if (i % 5 === 0) {
//     console.log(`${i}: bar`);
//     continue;
//   }
//   if (i % 3 === 0) {
//     console.log(`${i}: fool`);
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//   let result = `${i}: `;
//   if (i % 3 === 0) {
//     result += "fool";
//   }
//   if (i % 5 === 0) {
//     result += "bar";
//   }
//   console.log(result);
// }

// const foobar = (i) => {
//   return [{ 3: "foo"}, {5: "bar"}].reduce((acc, obj) => {
//      if(i % Object.keys(obj)[0] === 0) {
//        acc += Object.values(obj)[0];
//      }
//     return acc;
//   }, `${i} `);
// };

// for (let i = 1; i <= 100; i++) {
//   console.log(foobar(i));
// }

const foobarForEach = (count, mapOfDivides) => {
  for (let i = 1; i <= count; i++) {
    let result = i + " divide on ";
    Object.entries(mapOfDivides).forEach(([key, value]) => {
      if (i % key === 0) {
        result += (value + "  ");
      }
    });
    console.log(result);
  }
};

// foobarForEach(130, { 3: "three", 5: "five", 7: "seven", 10: "ten" });

const simpleNumbers = (count) => {
  const map = {};
  let countOfSimpleNumbers = 1;
  for (let i = 2; i <= count; i++){
    let result = [];
    Object.entries(map).forEach(([key, value]) => {
      if (i % key === 0) {
        result.push(value);
      }
    });
    if(result.length === 0){
      console.log(i + " is a simple number");
      countOfSimpleNumbers++;
    }else{
      console.log( i + " divides on " + result.join(", "));
    }
    map[i] = i.toString();
  }
  console.log(`-------> There is ${countOfSimpleNumbers} under ${count}`)
}

simpleNumbers(1000);