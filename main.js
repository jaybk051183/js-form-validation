// Koppel het javscript bestand met het html bestand.
// Koppel het css bestand met het html bestand.
// Maak een form tag in het html bestand
// Maak labels aan voor gebruikersnaam en wachtwoord
// Maak script die checkt of gebruikersnaam geen @ bevat elke keer als de waarde in het veld veranderd
// Maak script die checkt of wachtwoord langer is dan 6 tekens elke keer als de waarde in het veld veranderd. Als het veld leeg is
//

console.log("Hello")

function handleClick() {
    console.log("Ik wil me registreren!")

}

const signUpButton = document.getElementById("inlog-button");

signUpButton.addEventListener("click", handleClick);

function handleInputChange(e) {
const currentValue = e.target.value;
const currentInput = e.target.name;
    console.log(e.target.value)
}

const usernameInputField = document.getElementById("username-field");

usernameInputField.addEventListener("keyup", handleInputChange);

const passwordInputField = document.getElementById("password-field");

passwordInputField.addEventListener("keyup", handleInputChange);

