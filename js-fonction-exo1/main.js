// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)
let fonction = (a, b) => {
    return console.log(a + b);
}
// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)
let soustraction = (a, b) => {
    return console.log(a - b);
}
// EXO3  
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)
let multiplication = (a, b) => {
    return console.log(a * b);
}
// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)
let division = (a, b) => {
    return console.log(a / b);
}
// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)
let modulo = (a, b) => {
    return console.log(a % b);
}
// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)
let sqrt = (num) => {
    return console.log(Math.sqrt(num));
}
// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)
let doubbleSqrt = (a, b) => {
    return console.log( a ** b);
}
// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;
let capitalize = (string) => {
    return console.log(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
}
capitalize("Bonjour")
// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)
let calcul = (nbr1, operator, nbr2) => {
    switch (operator) {
        case "+":
            return console.log(nbr1 + nbr2);
            break;
        case "-":
            return console.log(nbr1 - nbr2);
            break;
        case "*":
            return console.log(nbr1 * nbr2);
            break;
        case "/":
            return console.log(nbr1 / nbr2);
            break;
        default:
            console.log("Problem");
            break;
    }
}
