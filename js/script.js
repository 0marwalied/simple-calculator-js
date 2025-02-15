var screen = document.querySelector(".screen");
var screenContent = "";
var lastOpeeration = "";

function appendScreen(char) {
  if (lastOpeeration == "Error") return;
  screenContent += char;
  screen.innerHTML = screenContent;
  lastOpeeration = "appendScreen";
}

function deleteScreen() {
  if (
    lastOpeeration == "Error" ||
    lastOpeeration == "calculate" ||
    lastOpeeration == "clearScreen"
  ) {
    screenContent = "";
  } else {
    screenContent = screenContent.slice(0, -1);
  }
  screen.innerHTML = screenContent;
  lastOpeeration = "deleteScreen";
}

function clearScreen() {
  screenContent = "";
  screen.innerHTML = screenContent;
  lastOpeeration = "clearScreen";
}

function calculate() {
  try {
    screenContent = screenContent.replace("x", "*");
    if (screenContent == "Error") {
      return;
    }
    lastOpeeration = "calculate";
    screenContent = eval(screenContent);
    screen.innerHTML = screenContent;
    if (screenContent == "Error") lastOpeeration = "Error";
  } catch (e) {
    lastOpeeration = "Error";
    screenContent = "Error";
    screen.innerHTML = screenContent;
  }
}
