// Ei function er maddome dipost er input valu ta nisi, same way te withdraw er valu tao nibo.
function getTheInputValue(inputValue) {
  const dipositInputValue = document.getElementById(inputValue);
  const dipositInputValueString = dipositInputValue.value;
  const dipositInputValueFloat = parseFloat(dipositInputValueString);
  //
  dipositInputValue.value = "";
  //
  return dipositInputValueFloat;
}
//
function getTheValueFromDipositBoard(inputId) {
  const dipositBoardValue = document.getElementById(inputId);
  const dipositBoardValueString = dipositBoardValue.innerText;
  const dipositBoardValueFloat = parseFloat(dipositBoardValueString);
  return dipositBoardValueFloat;
}
//
function updateTheValue(elementId, value1) {
  const valueUpdate = document.getElementById(elementId);
  valueUpdate.innerText = value1;
}
