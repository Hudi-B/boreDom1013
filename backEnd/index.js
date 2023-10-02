const professions = [
    "Cashier",
    "Policeman",
    "Pilot",
    "Soccer player",
    "Teacher",
    "Private investigator",
    "Atronaut",
    "Hairdresser",
    "Magician",
    "Firefighter"
];

const form = document.getElementById("form")
const fname = document.getElementById("fname")
const gender = document.getElementById("gender").checked.value
const age = document.getElementById("age1").checked.value
const occupation = getElementById("profession")
const branch = getElementById("branch")
const email = getElementById("email")
const password = getElementById("password")

let txt = ""
    for(let x of professions.keys()){
        txt += "<input type=\"radio\" name=\"professionName\" value=\"" + professions[x] + "\">\n<label>" + professions[x] + "</label><br>"
    }
    document.getElementById("branch").innerHTML = "<form>\n" + txt + "\n</form>"

function user(name, age, gender, occup, prof, email, pass, ){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.occup = occup;
    this.prof = prof;
    this.email = email;
    this.pass = pass;
}