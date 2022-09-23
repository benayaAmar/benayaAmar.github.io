let myForm = document.getElementById('form');
let lastName = document.getElementById('lastN')
let firstName = document.getElementById('firstN')
let email = document.getElementById('email');


// that the fields arent empty
// need to validate the email is proper ...
//

let myBtn = document.getElementById('myBtn');

myBtn.addEventListener('click', (e) => {
    // email regex
    var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailVal = email.value;
    if (emailVal.match(regx)) {
        // console.log("you good to go");
        alert("good to go")
    }
    else {
    alert("invalid")
    }
    e.preventDefault()
    email.value = " ";
//last name
    if (lastName.value === "" || lastName.value == null) {
        alert("field can't be empty")
    }
    lastName.value = "";
    // name
    if (firstName.value === "" || firstName.value == null) {
        alert("field can't be empty")
    }
    firstName.value = "";

})





// function validate(){
//     var RegMail = email;
//     var regx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/g;
//     if (RegMail.match(regx)) {
//         myForm.classList.add("valid")
//         myForm.classList.remove("invalid")
//         return true
//     }
//     else {
//         myForm.classList.remove("valid")
//         myForm.classList.add("invalid")
//         return false
//     }
// };








// function validEmail() {
//     const regularExpresionForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
//     const myInput = document.getElementById('myInput');
//     const inputValue = myInput.value;

//     if (inputValue.match(regularExpresionForEmail)) {
//         const successmsg = document.getElementById('text');
//         successmsg.innerHTML = `<p class="text-success">Your Input is Valid</p>`

//     } else {
//         const msg = document.getElementById('text');
//         msg.innerHTML = `<p class="text-danger">Input  Valid charecter! </p>`

//     }

// };
