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

    for (let index = 0; index <= 10; index++) {
        const rndIndex = Math.floor(Math.random() * genChars.length);
        pass += genChars[rndIndex];
    }

    passwordInput.value = pass;
    passwordInputRe.value = pass;
})