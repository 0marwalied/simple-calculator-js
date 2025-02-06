var screen = document.querySelector(".screen");
var screenContent = "";

function appendScreen(char) {
  screenContent += char;
  screen.innerHTML = screenContent;
}

function deleteScreen() {
  if (screenContent == "Error") {
    screenContent = "";
  } else {
    screenContent = screenContent.slice(0, -1);
  }
  screen.innerHTML = screenContent;
}

function clearScreen() {
  screenContent = "";
  screen.innerHTML = screenContent;
}

function calculate() {
  try {
    screenContent = eval(screenContent);
    screen.innerHTML = screenContent;
  } catch (e) {
    screenContent = "Error";
    screen.innerHTML = screenContent;
  }
}
