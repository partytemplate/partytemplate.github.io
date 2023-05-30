const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

const output = document.getElementById("output");

names = ["camilo@k.com", "abelp.com"];
codes = ["L -1 ", " Z -4"];

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get fullname lowercase
  fullname = e.target[0].value.toLowerCase().trim();
  if (fullname.length < 2) {
    var text = "Please Enter your Email ";
    if (output.value !== null || output.value !== undefined) {
      output.innerHTML = text;
    } else {
      output.innerHTML = " ";
    }
    return;
  }
  add = false;
  for (var i = 0; i < names.length; i++) {
    if (names[i].includes(fullname)) {
      var text = codes[i];
      if (output.value !== null || output.value !== undefined) {
        output.innerHTML = text;
      } else {
        output.innerHTML = " ";
      }

      add = true;
	  break;
    }
  }
  if (!add) {
    var text = " I can't find your email, please contact  admin@mail.com ";
    if (output.value !== null || output.value !== undefined) {
      output.innerHTML = text;
    } else {
      output.innerHTML = " ";
    }
  }
});
secondForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("form map");
});
