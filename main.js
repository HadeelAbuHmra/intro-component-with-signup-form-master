const form = document.getElementById("contactForm");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const emailAddress = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values of inputs
  const fName = firstName.value.trim();
  const lName = lastName.value.trim();
  const email = emailAddress.value.trim();
  const pass = password.value.trim();

  if (fName === "") {
    // show error
    // add error class
    setErrorFor(firstName, "First name connot be empty");
  }

  if (lName === "") {
    // show error
    // add error class
    setErrorFor(lastName, "Last name connot be empty");
  }

  if (email === "") {
    // show error
    // add error class
    setErrorFor(emailAddress, "Email Address connot be empty");
  } else if (!isEmail(email)) {
    setErrorFor(emailAddress, "Look link this is not an email");
  }

  if (pass === "") {
    // show error
    // add error class
    setErrorFor(password, "Password connot be empty");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.col-f class

  const small = formControl.querySelector("small");
  //   add error message in small
  small.innerText = message;

  // add error class
  formControl.className = "col-f error";
}

function isEmail(emailAddress) {
  return /^\S+@\S+\.\S+$/.test(emailAddress);
}

// // Function to display error
// function printErr(elemID, errMsg) {
//   document.getElementById(elemID).innerHTML = errMsg;
// }

// // Function for Validation form
// function validateForm() {
//   // Retrive the values of form elements
//   var fName = document.contactForm.fname.value;
//   var lName = document.contactForm.lname.value;
//   var email = document.contactForm.email.value;
//   var password = document.contactForm.password.value;
//   name = document.getElementById("fname");

//   //   Defining error variables with a default value
//   var fNameErr = (lNameErr = emailErr = passwordErr = true);

//   //   Validate First Name
//   if (fName == "") {
//     printErr("fnameErr", "First Name cannot be empty");
//     name.classList.add("error-input");
//   } else {
//     var regex = /^[a-zA-Z\s]+$/;
//     if (regex.test(fName) === false) {
//       printErr("fnameErr", "Please enter a valid name");
//     } else {
//       printErr("fnameErr", "");
//       fnameErr = false;
//     }
//   }

//   //   Validate Last Name
//   if (lName == "") {
//     printErr("lnameErr", "Last Name cannot be empty");
//   } else {
//     var regex = /^[a-zA-Z\s]+$/;
//     if (regex.test(lName) === false) {
//       printErr("lnameErr", "Please enter a valid name");
//     } else {
//       printErr("lnameErr", "");
//       lNameErr = false;
//     }
//   }
//   //   Validate Email
//   if (email == "") {
//     printErr("emailErr", "Please Inter your Email");
//   } else {
//     var regex = /^\S+@\S+\.\S+$/;
//     if (regex.test(email) === false) {
//       printErr("emailErr", "Look link this is not an email");
//     } else {
//       printErr("emailErr", "");
//       emailErr = false;
//     }
//   }
//   //   Validate Password
//   if (password == "") {
//     printErr("passwordErr", "Password cannot be empty");
//   } else {
//     printErr("passwordErr", "");
//     passwordErr = false;
//   }
// }
