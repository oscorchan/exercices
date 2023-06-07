/*
  L'objectif de cet exercice est d'afficher les 3 lignes de 5 caractères
  suivantes :
  -----
  -----
  -----
*/

/*

  Aide :
  Vous aurez besoin de créer une boucle dans une boucle et d'utiliser '\n'
  pour déclencher des retours à la ligne
*/

const generateString = (height, width) => {
    let str = "";
  
    // Début de votre code
    for (i=0; i<width; i++)
    {
        str = str + "-"
    }

    let str1=str

    for(i=1; i<height; i++)
    {
        str=str + "\n" + str1
    }
    // Fin de votre code
  
    return str;
  };
  
  const height = 5;
  const width = 10;
  console.log(generateString(height, width));