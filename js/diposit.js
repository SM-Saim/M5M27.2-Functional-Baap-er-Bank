// DRY - Donot Repeat Yourself
// Step:1
document.getElementById("dipositInput").addEventListener("click", function () {
  // Step:2
  //   Get the input element by id,
  //   get the value from the element,
  //   convert string value to a number
  const dipositInputValue = getTheInputValue("inputDiposit");

  // Step:3 Get the value of dipostBoard
  const dipositBoard = getTheValueFromDipositBoard("dipositBoardValue");
  // Step:4 Sum of the previous and current diposit value whuch will show in diposit Board
  const dipositTotal = dipositBoard + dipositInputValue;
  // Step:5 Set diposit total value
  updateTheValue("dipositBoardValue", dipositTotal);

  // Step:6 get previous balance by using function
  const balanceBoardValue = getTheValueFromDipositBoard("currentBalance");
  console.log(balanceBoardValue);
  // Step:7  calculate total balance which will be shown in balance board
  const totalBalanceBoard = balanceBoardValue + dipositInputValue;
  updateTheValue("currentBalance", totalBalanceBoard);
});
