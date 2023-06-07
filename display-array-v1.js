function displayArray(tab)
{
    let str = ""

    for (i=0; i<tab.length; i++)
    {
        if (i===tab.length-1)
        {
            str = str + tab[i]
        }
        else
        {
            str = str + tab[i] + " - "
        }
    }

    return str
}

console.log(displayArray(["Bim", "Bam", "Boom"])); // Affichera "Bim - Bam - Boom"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"])); // Affichera "Pomme - Banane - Abricot - Cerise"