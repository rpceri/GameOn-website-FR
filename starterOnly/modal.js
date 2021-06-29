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

// pour controle des radios qui ont le nom location (ville)
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

// controle nom
const last = document.getElementById('last');
//last.onblur = function() { équivalent a ci dessous
last.addEventListener('blur', (event) => {
  CtrlChampTxtStd(last, 'last', 'nom');
}); // avec last.onblur il n'y aurait pas un besoin de la )

// controle prénom
const first = document.getElementById('first');
first.addEventListener('blur', (event) => {
  CtrlChampTxtStd(first, 'first', 'prénom');
});

// controle email
const email = document.getElementById('email');
email.onblur = function() {
  validateChampEmail(email, 'error-email');
};

// controle date de naissance
const birthdate = document.getElementById('birthdate');
birthdate.onblur = function() {
  CtrDateNaissance(birthdate, 'error-date');
};

// controle si le nombre contenu dans l'objet passé en paramètre est compris enntre 0 et 99
const quantity = document.getElementById('quantity');
quantity.addEventListener('blur', (event) => {
  CtrlChampNbTournois(quantity, 'error-quantity');
});


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

  // controle nom
  const last = document.getElementById('last');
  retourFct = CtrlChampTxtStd(last, 'last', 'nom');
  if(retourFct == 0) formValide = 0;

  // controle prénom
  const first = document.getElementById('first');
  retourFct = CtrlChampTxtStd(first, 'first', 'prénom');
  if(retourFct == 0) formValide = 0;

  // controle email
  const email = document.getElementById('email');
  retourFct = validateChampEmail(email, 'error-email');
  if(retourFct == 0) formValide = 0;

  // controle date de naissance
  const birthdate = document.getElementById('birthdate');
  retourFct = CtrDateNaissance(birthdate, 'error-date');
  if(retourFct == 0) formValide = 0;

  // controle si le nombre contenu dans l'objet passé en paramètre est compris enntre 0 et 99
  const quantity = document.getElementById('quantity');
  retourFct = CtrlChampNbTournois(quantity, 'error-quantity');
  if(retourFct == 0) formValide = 0;

  if (formValide == '0') {
    return false;
  }
  else alert ('Vos informations ont bien été prises en compte, merci');
}