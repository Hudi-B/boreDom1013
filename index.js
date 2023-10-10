



jQuery('.button_gender').click(function(){
    var button = jQuery(this);
    if (button.hasClass('active') == false){
      jQuery('.button_gender').removeClass('active').removeClass('scale');
      button.addClass('active scale');
      know_gender();
    }
  });
  
  function know_gender(){
    var id_gender = parseInt(jQuery('.button_gender.active').data('gender'));
    var name_gender = '';
    if (id_gender == 1){
      name_gender = 'Male';
    } else if (id_gender == 2){ 
      name_gender = 'Female';
    } else {
      name_gender = 'Select a Gender';
    }  
    jQuery('.status li .id_gender').html(id_gender);
    jQuery('.status li .name_gender').html(name_gender);
  }



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

/*Dropdown Menu*/

/*End Dropdown Menu*/
