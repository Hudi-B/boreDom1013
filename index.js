function preventSubmit(event) {
    event.preventDefault();
}

var ageRange = document.getElementById('ageRange');
var ageShow = document.getElementById('ageShow');
var genderShow = document.getElementById('genderShow');
var dropIcon = document.getElementById('dropIcon');
var passwordInput = document.getElementById('passwordInput');
var passwordInputRe = document.getElementById('passwordInputRe');
var passVisIcon = document.getElementById('passVisIcon');
var passGenIcon = document.getElementById('passGenIcon');
var jobSelect = document.getElementById('jobSelect');
var selectedGenderOut = ""

function selectedGender(selectedGender) {
    genderShow.textContent = selectedGender.checked ? selectedGender.value : "Select a gender";
    selectedGenderOut = selectedGender.value
}
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
    "Közlekedés és szállítmányozás",
]

fields.forEach(function(element) {
    const option = document.createElement("option")
    option.text = element;
    option.style.color = "#383838";

        jobSelect.appendChild(option);
});

ageRange.addEventListener("input", function(){
    ageShow.textContent = ageRange.value;
})

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

function areFirstLettersUppercase(inputString) {
    return inputString.split(' ').every(word => word[0] === word[0].toUpperCase());
}

function doesNotIncludeNumber(inputString) {
const noNumberPattern = /^[^0-9]*$/;
return noNumberPattern.test(inputString);
}
  

function isValidEmail(email) {
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
return emailPattern.test(email);
}

function onSubmit() {
    let nameInput = document.getElementById('nameInput')
    let emailInput = document.getElementById('emailInput')
    let passwordInput = document.getElementById('passwordInput')
    let passwordInputRe = document.getElementById('passwordInputRe')
    let ageRange = document.getElementById('ageRange')
    let ageShow = document.getElementById('ageShow')
    let maleRadio = document.getElementById('maleRadio')
    let femaleRadio = document.getElementById('femaleRadio')
    let otherRadio = document.getElementById('otherRadio')
    let fieldInput = document.getElementById('fieldInput')
    let jobSelect = document.getElementById('jobSelect')
    let succesfullValidation = true;

    let errorsArray = []

    if (nameInput.checkValidity() && emailInput.checkValidity() && passwordInput.checkValidity() && fieldInput.checkValidity() && jobSelect.checkValidity()) {
        if (!areFirstLettersUppercase(nameInput.value)) {
            succesfullValidation = false;
            errorsArray.push("A nevek első betűi nagyok lehetnek csak.")
        }
        if (!doesNotIncludeNumber(nameInput.value)) {
            succesfullValidation = false;
            errorsArray.push("A név mező nem tartalmazhat számot")
        }
        if (!isValidEmail(emailInput.value)) {
            succesfullValidation = false;
            errorsArray.push("A email mező nem egyezik meg a sablonnak[pelda@pelda.pelda]")
        }
        if (passwordInput.value != passwordInputRe.value) {
            succesfullValidation = false;
            errorsArray.push("A jelszavak nem egyeznek meg.")
        }
        if (isNaN(ageShow.textContent)) {
            succesfullValidation = false;
            errorsArray.push("Nem valasztott kort.")
        }
        if (!maleRadio.checked && !femaleRadio.checked && !otherRadio.checked) {
            succesfullValidation = false;
            errorsArray.push("Nem valasztott nemet.")
        }
    }
    else succesfullValidation = false;

    if (succesfullValidation) {
        Swal.fire({
            title: 'Siker!',
            text: 'Sikeresen regisztált.',
            icon: 'success',
            confirmButtonText: 'Rendben',
            confirmButtonColor: 'greenyellow',
            color: 'white',
            iconColor: 'greenyellow',
            background: '#383838',
          })
        console.log(`Név:${nameInput.value} Email:${emailInput.value} Password:${passwordInput.value} Age:${ageRange.value} Gender:${selectedGenderOut} Field:${fieldInput.value} jobType:${jobSelect.value}`);
    }
    else if (!succesfullValidation && errorsArray.length > 0) {
        let errors = ""
        errorsArray.forEach(function(element) {
            errors += element + "<br>"
        });

        Swal.fire({
            title: 'Hiba!',
            text: 'Valami hiba merült fel.',
            icon: 'error',
            confirmButtonText: 'Újra',
            confirmButtonColor: 'red',
            color: '#fff',
            iconColor: 'red',
            background: '#383838',
            footer: errors
          })
    }
}