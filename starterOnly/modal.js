function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalClose = document.querySelectorAll(".close");

const form = document.getElementById("form_reserve"); //document.getElementsByTagName('form')[0];


const radios = document.querySelectorAll('input[name=location]');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// evenement fermeture de la modal RP
modalClose.forEach((btn) => btn.addEventListener("click", closeModal ));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermeture de la modal RP
function closeModal() {
  modalbg.style.display = "";
}

// POUR controle des radios qui ont le nom location (ville)
const radio = document.querySelectorAll('input[name=location]');
const tabVillesSelectionnees = [];
radio.forEach( (rd) => rd.addEventListener('click', radioadd) );
  function radioadd(){
    if ( radio.checked = true) {
      tabVillesSelectionnees.push(radio);
    }  
}

const checkbox1 = document.getElementById("checkbox1");
form.addEventListener('click', () => {
  // Controle de la case a cocher des conditions générales
  if(!checkbox1.checked){
    document.getElementById('error-checkbox1').innerHTML = "Vous devez accepter les conditions d'utilisation";
    document.getElementById('error-checkbox1').classList.add('error-visible');
  } else {
    document.getElementById('error-checkbox1').innerHTML = "";
    document.getElementById('error-checkbox1').classList.remove('error-visible');
  }
  // controle des radios qui ont le nom location (ville)
  if(tabVillesSelectionnees.length > 0){
    document.getElementById('error-radio').innerHTML = "";
    document.getElementById('error-radio').classList.remove('error-visible');
  }
})

function validate(){
  var formValide = 1;

  // Controle de la case a cocher des conditions générales
  if(!checkbox1.checked){
    formValide = 0;
    document.getElementById('error-checkbox1').innerHTML = "Vous devez accepter les conditions d'utilisation";
    document.getElementById('error-checkbox1').classList.add('error-visible');
  } else {
    document.getElementById('error-checkbox1').innerHTML = "";
    document.getElementById('error-checkbox1').classList.remove('error-visible');
  }
  
  // controle des radios qui ont le nom location (ville)
  if(tabVillesSelectionnees.length == 0){ 
    formValide = 0;
    document.getElementById('error-radio').innerHTML = "Vous devez choisir une ville.";
    document.getElementById('error-radio').classList.add('error-visible');
  } else {
    document.getElementById('error-radio').innerHTML = "";
    document.getElementById('error-radio').classList.remove('error-visible');
  }

  if (formValide == '0') {
    return false;
  }
  else alert ('Vos informations ont bien été prises en compte, merci');
}