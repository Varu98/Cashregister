let billAmt = document.querySelector(".billAmt");
let cashAmt = document.querySelector(".cashAmt");
let change = cashValue - billValue;
const billClick = () => {
  let billValue = billAmt.value;
  console.log(billAmt.value);
  return billValue;
};

const cashClick = () => {
  let cashValue = cashAmt.value;
  console.log(cashAmt.value);
  return cashValue;
};
