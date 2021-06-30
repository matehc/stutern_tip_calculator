let price = document.querySelector("#price");
let tip = document.querySelector("#tip");
let people = document.querySelector("#people");
let calc = document.querySelector(".btn-calc");

// nodes to display amounts
let amtLabel = document.querySelector(".amount-label"); // change this
let tipLabel = document.querySelector(".tip-amt-label"); // and this
let tipEachLabel = document.querySelector(".tip-each-label"); // and this
let amtEachLabel = document.querySelector(".amt-each-label"); // and this
let moneyBox = document.querySelector(".money");

let calcTip = (e) => {
  e.preventDefault();

  // parse values
  let amt = parseInt(price.value);
  let tipp = parseInt(tip.value);
  let persons = parseInt(people.value);

  // calculate using formula
  //tip percentage
  let tipPercentage = tipp / 100;

  // amount to tip
  let tipAmount = amt * tipPercentage;

  // total amount you'll pay
  let totalAmount = amt + tipAmount;

  // tip per person
  let tipPerPerson = tipAmount / persons;

  // how will we share the money
  let amountPerPerson = totalAmount / persons;

  display(totalAmount, amountPerPerson, tipAmount, tipPerPerson);
};

let display = (amt, amtEach, tipAmt, tipEach) => {
  if (amt === NaN || tipEach === NaN) {
    console.log(amt, tip);
  } else {
    amtLabel.textContent = `${"N" + amt}`;
    tipLabel.textContent = `${"N" + tipAmt}`;
    amtEachLabel.textContent = `${"N" + amtEach}`;
    tipEachLabel.textContent = `${"N" + tipEach}`;
  }
};

calc.addEventListener("click", calcTip);
