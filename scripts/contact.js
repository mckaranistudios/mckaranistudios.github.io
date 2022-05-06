	// Page loading animation
  $(window).on('load', function() {

    $('#js-preloader').addClass('loaded');

});

//Form

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


//Loader
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 4000);
}

init();


//Form validation
function validateName() {
  var name = document.getElementById('name').value;
  if(name.length == 0) {
    alert("Whoops! Name field is blank") ;
    return false;

  }
  if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    alert("Kindly enter your correct name") ;//Validation Message
    return false;
  }
  return true;
}

function validateEmail () {

var email = document.getElementById('email').value;
if(email.length == 0) {
  alert("Sorry! Email field shouldn't be blank") ;//Validation Message
  return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  alert("Kindly use the correct email address format") ;//Validation Message
  return false;

}

return true;

}

function validatePhone() {
  var phone = document.getElementById('phone').value;
  if(phone.length == 0) {
    alert("Alert! Phone number field shouldn't be blank") ;//Validation Message
    return false;
  }

  if(!phone.match(/^[0]?[789]\d{8}$/)) {
   alert("Kindly enter your phone number correctly e.g 0712345678") ;//Validation Message
   return false;
 }

 return true;

}    

function validateForm() {
if (!validateName() || !validatePhone() || !validateEmail()) {

  alert("Form not submitted");//Validation Message
  return false;
}
else {
  submitted=true;
  return true;
}
}






form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact message sent successfully.</div>"))
  .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message not sent.</div>"))
})
