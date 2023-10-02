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

console.table(professions)

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

function submit(){
    
}