const buttons = document.querySelectorAll("button");
const randomButton = document.querySelector("#randomButton");
const question = document.querySelector("#question");
const reply = document.querySelector("#reply");
const answer = document.querySelector("#answer");
const form = document.querySelector("form");

let randomNumebr = () => Math.floor(Math.random() * 10);

buttons.forEach((button) => {
  button.onclick = function () {
    let a, b, c;
    if (button.id === randomButton.id) {
      a = randomNumebr();
    } else {
      a = Number(button.id);
    }
    b = randomNumebr();
    question.innerHTML = `${a} * ${b}`;
    c = a * b;
    mult(c);
  };
});

function mult(buttonValue) {
  form.onsubmit = function () {
    if (buttonValue === Number(answer.value)) {
      reply.innerHTML = "The answer is correct!";
      return false;
    } else {
      reply.innerHTML = "This is not true!Try agan!";
      return false;
    }
  };
}
