const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.body
  body.addEventListener('keydown', checkCode)
}

let index = 0;

function checkCode(e) {
  const key = parseInt(e.detail || e.which);
  if (key == code[index]) {
    console.log("keep going");
    index++;
    if (index === code.length) {
      alert("Hurray!");
    }
  } else {
    console.log("start over");
    index = 0;
  }
}