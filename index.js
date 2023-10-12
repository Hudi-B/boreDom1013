var ageRange = document.getElementById('ageRange');
var ageShow = document.getElementById('ageShow');
var genderShow = document.getElementById('genderShow');
var dropIcon = document.getElementById('dropIcon');
var passwordInput = document.getElementById('passwordInput');
var passwordInputRe = document.getElementById('passwordInputRe');
var passVisIcon = document.getElementById('passVisIcon');
var passGenIcon = document.getElementById('passGenIcon');
var jobSelect = document.getElementById('jobSelect');

var fields = [
    "Egészségügy",
    "Élelmiszeripar",
    "Építőipar",
    "Gépészet",
    "Épületgépészet",
    "Fa- és bútoripar",
    "Elektronika és elektrotechnika",
    "Informatika és távközlés",
    "Honvédelem",
    "Kereskedelem",
    "Közlekedés és szállítmányozás"
]

fields.forEach(function(element) {
    const option = document.createElement("option")
    option.text = element;
    option.style = "color: #383838;";

        jobSelect.appendChild(option);
});

ageRange.addEventListener("input", function(){
    ageShow.textContent = ageRange.value;
})



function selectedGender(selectedGender) {
    genderShow.textContent = selectedGender.checked ? selectedGender.value : "Select a gender";
}

passVisIcon.addEventListener("click", function() {
    if (passwordInput.type == "text") {
        passwordInput.type = "password";
        passwordInputRe.type = "password";
        passVisIcon.textContent = "visibility_off"
    }
    else{
        passwordInput.type = "text";
        passwordInputRe.type = "text";
        passVisIcon.textContent = "visibility"
    }
})

passGenIcon.addEventListener("click", function() {
    const genChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
    let pass = "";

    if (passwordInput.disabled) {
        passGenIcon.textContent = "sync_disabled"
        passwordInput.removeAttribute('disabled')
        passwordInput.value = ""
        passwordInputRe.removeAttribute('disabled')
        passwordInputRe.value = ""
    }
    else {
        for (let index = 0; index <= 10; index++) {
            const rndIndex = Math.floor(Math.random() * genChars.length);
            pass += genChars[rndIndex];
        }
        passGenIcon.textContent = "sync"
        passwordInput.setAttribute('disabled', '')
        passwordInput.setAttribute('disabled', '')
        passwordInput.value = pass;
        passwordInputRe.setAttribute('disabled', '')
        passwordInputRe.value = pass;
    }
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

function test() {
    alert('button pressed')
}