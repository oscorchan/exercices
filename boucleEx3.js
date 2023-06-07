/*
  L'objectif de cet exercice est d'afficher "o---o" sur plusieurs lignes.
  Exemple si `height` vaut 4 :
  o---o
  o---o
  o---o
  o---o
*/

// Début de votre code
function generateString(height)
{
    let string = "o---o\n"

    for (i=1; i<height; i++)
    {
        string = string + "o---o\n"
    }

    return string
}

// Fin de votre code

const height = 10;
console.log(generateString(height));