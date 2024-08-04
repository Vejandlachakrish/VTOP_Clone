function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
let captcha;
function generate() {
  // Clear old input
  document.getElementById("submit").value = "";

  // Access the element to store
  // the generated captcha
  captcha = document.getElementById("image");
  let uniquechar = "";

  const randomchar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Generate captcha for length of
  // 5 with random character
  for (let i = 1; i < 7; i++) {
    uniquechar += randomchar.charAt(Math.random() * randomchar.length);
  }

  // Store generated input
  captcha.innerHTML = uniquechar;
}

function printmsg() {
  const usr_input = document.getElementById("submit").value;

  if (usr_input == captcha.innerHTML) {
    // Redirect to student.html when matched
    window.location.href = "student.html";
  } else {
    // Show an error message
    generate();
  }
}
