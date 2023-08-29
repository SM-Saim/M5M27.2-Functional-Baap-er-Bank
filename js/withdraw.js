// Step:1 Add withdraw button event handler
document.getElementById("withdrawInput").addEventListener("click", function () {
  // Step:2 Get withdraw amount by using get input
  const withdrawInputValue = getTheInputValue("inputWithdraw");
  // Step:3 Get the value of withdraw board
  const withdrawBoardValue = getTheValueFromDipositBoard("withdrawBalance");
  // Step:4 Calculate new withdraw total and set the value
  const totalWithdrawBoardValue = withdrawBoardValue + withdrawInputValue;
  updateTheValue("withdrawBalance", totalWithdrawBoardValue);
  // Step:5 Get previous balance board
  const previousBalanceBoard = getTheValueFromDipositBoard("currentBalance");
  //   Step:6 Calculate totalBalance Board value
  const totalBalanceBoardWithdraw = previousBalanceBoard - withdrawInputValue;
  updateTheValue("currentBalance", totalBalanceBoardWithdraw);
});
