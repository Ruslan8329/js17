let check = [
  ["Хлеб", 3, 2],
  ["Ноутбук", 1, 400],
  ["Колбаса", 4, 5],
];

function printCheck() {
  check.forEach((check) => {
    let [product, quantity, price] = check;
    console.log(`товар-${product}:Колл-во ${quantity}:Цена
     ${price}`);
  });
}
printCheck();

////////////////////////////////////

function totalPrice(check) {
  let total = 0;
  check.forEach((check) => {
    let [product, quantity, price] = check;
    total += quantity * price;
  });
  return total;
}
console.log(totalPrice(check));

/////////////////////////////////////

function averagePrice() {
  totalQuantity = 0;
  totalProductPrice = 0;

  check.forEach((check) => {
    let [product, quantity, price] = check;
    totalQuantity += quantity;
    totalProductPrice += quantity * price;
  });
  let averagePrice2 = totalProductPrice / totalQuantity;
  return averagePrice2;
}
console.log(averagePrice(check));

////////////////////////////////////////////////////////////////////////////////////////////

let cssMassive = [
  { color: "green" },
  { fontsize: 20 },
  { line: "start" },
  { underline: "end" },
];
console.log(cssMassive);

////////////////////////////////////////////////////////////////////////////////////////////

let academyAuditori = [
  { name: "Аудитория А", seats: 10, facultyName: "IT", forWho: "students" },
  { name: "Аудитория Б", seats: 18, facultyName: "Police", forWho: "students" },
  {
    name: "Аудитория В",
    seats: 20,
    facultyName: "medicine",
    forWho: "students",
  },
  {
    name: "Аудитория Г",
    seats: 8,
    facultyName: "psychology",
    forWho: "students",
  },
];

function displayAuditori(academyAuditori) {
  academyAuditori.forEach((auditory) => {
    console.log(auditory.name);
  });
}
displayAuditori(academyAuditori);
//////////////////////////////////////
