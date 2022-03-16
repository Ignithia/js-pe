//velden
const btn_betaal = document.querySelector("#btn_betaal");

const wachtwoord = document.querySelector("#ww_input");
const wachtwoordconf = document.querySelector("#wwc_input");
const email = document.querySelector("#email_input");
const gebruikersnaam = document.querySelector("#gebruikersnaam");
const voornaam = document.querySelector("#vn_input");
const achternaam = document.querySelector("#an_input");
const adres = document.querySelector("#adres_input");
const land = document.querySelector("#land_input");
const provincie = document.querySelector("#prov_input");
const postcode = document.querySelector("#pc_input");

const cbx_AlgVw = document.querySelector("#algemenevoorwaarden");
const rbt_banking = document.querySelector("#banking");
const rbt_overschrijving = document.querySelector("#overschrijving");
const rbt_visa = document.querySelector("#visa");
const rbt_paypal = document.querySelector("#paypal")

//variabelen
let errors = [];
let tekst;
//errors
verschillendeww = () => {
  if (wachtwoord.value != wachtwoordconf.value) {
    errors.push("Wachtwoorden komen niet overeen!")    
  }
};
checkWachtwoord = () =>{
if(wachtwoord.value<=7){
    errors.push("Wachtwoord is te kort!")
}
}
checkPC = (veld) => {
  if (veld < 1000 && veld > 9999) {
   errors.push("Deze postcode is ongeldig, het moet tussen 1000 en 9999 liggen!")
  }
};
algemenevoorwaarden = () => {
  if (!cbx_AlgVw.checked) {
    errors.push("Algemene Voorwaarden zijn niet geaccepteerd!");
  }
};
validateEmail = (inputText) =>{
    //Source: https://www.w3resource.com/javascript/form/email-validation.php
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
   
}
else{
    errors.push("E-mailadres is niet geldig!")
}
}
//niets ingevuld
checkEmptyfield = (veld, melding) => {
if(veld.length == 0){
    errors.push(melding)
}
}
//success
success = () => {
    tekst = '<div class="alert alert-success" role="alert">\n'
    tekst += `<h4 class="alert-heading">Goed Gedaan</h4>\n`
    tekst += `<p>Alles is inorde, je kan doorgaan</p>\n`
    tekst += '</div>\n'
};
validatePayment = (veld) =>{
if(veld.checked){
    tekst += '<div class="alert alert-primary" role="alert">\n'
    tekst += `<h4 class="alert-heading">Betalingswijze</h4>\n`
    tekst += `Je betalingswijze is ${veld.value}\n`
    tekst += '</div>\n'
}
}
//weergave
overlooperrors = () => {
  checkEmptyfield(wachtwoord.value,"Het veld wachtwoord is vereist!");
  checkEmptyfield(voornaam.value,"Het veld voornaam is vereist!");
  checkEmptyfield(achternaam.value,"Het veld achternaam is vereist!");
  checkEmptyfield(adres.value,"Het veld adres is vereist!");
  checkEmptyfield(email.value,"Het veld email is vereist!");
  checkEmptyfield(gebruikersnaam.value,"Het veld gebruiksnaam is vereist!");
  checkEmptyfield(wachtwoordconf.value,"Het veld bevestig wachtwoord is vereist!");
  checkEmptyfield(parseInt(postcode.value),"Het veld postcode is vereist!");

  validateEmail(email)
  

  verschillendeww()
  checkWachtwoord()
  checkPC(postcode.value)

  if(errors.length == 0){
    success()
    validatePayment(rbt_banking)
    validatePayment(rbt_overschrijving)
    validatePayment(rbt_paypal)
    validatePayment(rbt_visa)
    console.log("success")
  }
  else{
    tekst = `<div class="alert alert-danger" role="alert">` + `\n`
    tekst += `<h4 class="alert-heading">Error 404</h4>\n`
    errors.forEach(error => {
    tekst += `${error}` + `<br>`
    })
    tekst += `</div>\n`
  }
  document.querySelector('#alerts').innerHTML = tekst
};

btn_betaal.addEventListener("click", overlooperrors);
