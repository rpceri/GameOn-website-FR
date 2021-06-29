  function validateChampEmail(obj, champInfo) {
    var ctrOk = 1;
    var idChampSignalisation =  document.getElementById(champInfo);
  
    if(obj.value.length < 2){ 
      idChampSignalisation.innerHTML = "Veuillez saisire votre email.";
      idChampSignalisation.classList.add('error-visible');
      ctrOk = 0;
    }
    else if (validateEmail(email.value) === false) {
      idChampSignalisation.innerHTML = "L'adresse mail saisie est incorrecte.";
      idChampSignalisation.classList.add('error-visible');
      ctrOk = 0;
    } else {
      idChampSignalisation.innerHTML = "";
      idChampSignalisation.classList.remove('error-visible');
    }
    return ctrOk;
  }

  // test la validité d'une adresse mail passée en paramètre (regex)
function validateEmail(mail) 
{
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))   return (true);
  else return (false);
}


// fonction permettant de verifier si la valeur passée en paramètre ne contient que des caractère de a à z (ctrl insensible a la casse)
function isSaisiAlpha(valAtester) {
    //  ^[a-z0-9]+$/i
    //^         Start of string
    //[a-z0-9]  a or b or c or ... z or 0 or 1 or ... 9
    //+         one or more times (change to * to allow empty string)
    //$         end of string
    ///i        case-insensitive
    return /^[a-z]+$/i.test(valAtester);
  }


  // fonction permettant de controler les champs texte simples (nom et prénom) : taille + regex
function CtrlChampTxtStd(objAVerif, suffixeChampInfo, lib) {
    var idChampSignalisation =  document.getElementById('error-' + suffixeChampInfo); //error-nom ou error-prenom
    var ctrOk = 1;
  
    if(objAVerif.value.length < 2){ 
      idChampSignalisation.innerHTML = "Veuillez entrer 2 caractères ou plus pour le " + lib + ".";
      idChampSignalisation.classList.add('error-visible');
      ctrOk = 1;
    }
    if(ctrOk==0) {
      var retTestAlpha = isSaisiAlpha(objAVerif.value);
      //console.log(retTestAlpha);
      if(retTestAlpha === false) {
        idChampSignalisation.innerHTML = "Le " + lib + " ne doit contenir que des caractères alphabétiques";//lib.substr(0,1).toUpperCase()+lib.substr(1)
        idChampSignalisation.classList.add('error-visible');
        ctrOk = 1;
      }
    }
    if(ctrOk==0) {
      idChampSignalisation.innerHTML = "";
      idChampSignalisation.classList.remove('error-visible');
    }
    return ctrOk;   
  }


  function CtrDateNaissance(idElement, nomClassChampInfo) {
    var ctrOk = 1;

    //console.log(biridElementthdate.value);
    //console.log(validateDate(idElement.value));
    var idChampSignalisation =  document.getElementById(nomClassChampInfo);
    if(idElement.value.length == 0){ 
      idChampSignalisation.innerHTML = "Vous devez entrer votre date de naissance.";
      idChampSignalisation.classList.add('error-visible');
      ctrOk = 0;
    } 
    else if (validateDate(idElement.value) === false) {
      idChampSignalisation.innerHTML = "La date de naissance saisie est incorrecte.";
      idChampSignalisation.classList.add('error-visible');
      ctrOk = 0;
    }
    else {
      idChampSignalisation.innerHTML = "";
      idChampSignalisation.classList.remove('error-visible');
    }
    return ctrOk;
  }

  // test la validité d'une date passée en paramètre (regex) en dd/mm/yyyy ou yyyy/mm/dd et année en 1900 ou 2000; saparateur / . ou -
// match the character class for the first seperator, then capture that as a group ([./-]) and use a reference to the captured group \1 
// test la validité d'une date passée en paramètre (regex)
function validateDate(str) {
    //if (/^\d{2}([./-])\d{2}\1\d{4}$/.test(str))   return (true); // basique sans controle reférence du group 1 :  /^\d{2}[./-]\d{2}[./-]\d{4}$/
    //if (/^\d{4}([./-])\d{2}\1\d{2}$/.test(str))   return (true); 
    if (/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(str) || 
        /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(str))   return (true);  // https://www.regextester.com/97332, permet de tester si date en 1900 ou 2000
    else return (false);
  }
  //function parseDate(str) {
//  var m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/); // yy/mm/dddd
//  return (m) ? new Date(m[3], m[2]-1, m[1]) : numm;
//}

// fonction permettant de vérifier si le nombre contenu dans l'objet passé en paramètre est compris enntre 0 et 99
function CtrlChampNbTournois(idElement, nomClassChampInfo) {
  var ctrOk = 1;

  console.log(idElement.value);
  var idChampSignalisation =  document.getElementById(nomClassChampInfo);
  if(idElement.value.length == 0){ 
    console.log("Vous devez entrer un nombre.");
    idChampSignalisation.innerHTML = "Vous devez entrer un nombre.";
    idChampSignalisation.classList.add('error-visible');
    ctrOk = 0;
  } 
  else {
    var testRegex =  /^\d{1,2}$/.test(idElement.value); // décimal, entre 1 et 2 occurences
    console.log(idElement.value + ' :' + testRegex);
    if (testRegex === false) {
      idChampSignalisation.innerHTML = "Vous devez entrer un nombre entre 0 et 99.";
      idChampSignalisation.classList.add('error-visible');
      ctrOk = 0;
    }
  }
  if(ctrOk == 1) {
    idChampSignalisation.innerHTML = "";
    //idChampSignalisation.classList.remove('error-visible');
  }
  return ctrOk;
}
