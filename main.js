const form = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msgDiv = document.querySelector(".msg");

function sendForm(e) {
  e.preventDefault();
  const nameInputValue = nameInput.value;
  const emailInputValue = emailInput.value;

  const user = {
    nameInputValue,
    emailInputValue,
  };
  // user.name =nameInput.value
  if (nameInputValue === "" || emailInputValue === "") {
    console.log("espabila y rellena los campos");
    msgDiv.innerHTML = "espabila y rellena los campos";
  } else if (/(\w+?@\w+?\x2E.+)/.test(emailInputValue) !== true) {
    msgDiv.innerHTML = "Please enter a correct email";
  } else {
    msgDiv.innerHTML = `Nombre: ${nameInputValue} <br> Email: ${emailInputValue}`;
    console.log(user);
  }
  setTimeout(function () {
    msgDiv.innerHTML = "";
  }, 3000);
}

form.addEventListener("submit", sendForm);

let re;

re = /hello/i;

re = /^h/i;

re = /World$/i;

re = /^hello$/i;

re = /^h.llo$/i;

console.log(re.test("h?llo"));
