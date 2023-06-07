// fonction pour obtenir les unités
const getFigure = (num) => {
    switch (num) {
        case 1:
            return "un";
        case 2:
            return "deux";
        case 3:
            return "trois";
        case 4:
            return "quatre";
        case 5:
            return "cinq";
        case 6:
            return "six";
        case 7:
            return "sept";
        case 8:
            return "huit";
        case 9:
            return "neuf";
        default:
            return "";
    }
};
// fonction pour obtenir les dizaines
const getSecondPartOfTrio = (num) => {
    const dizaine = Number(String(num).substring(0, 1)) * 10;
    switch (num) {
        case 10:
            return "dix";
        case 11:
            return "onze";
        case 12:
            return "douze";
        case 13:
            return "treize";
        case 14:
            return "quatorze";
        case 15:
            return "quinze";
        case 16:
            return "seize";
        case 20:
            return "vingt";
        case 30:
            return "trente";
        case 40:
            return "quarante";
        case 50:
            return "cinquante";
        case 60:
            return "soixante";
        case 70:
            return "soixante-dix";
        case 80:
            return "quatre-vingt";
        case 90:
            return "quatre-vingt-dix";
        default:
            if (num < 10) {
                return getFigure(num);
            }
            if (num > dizaine && num < dizaine + 10) {
                if (num === dizaine + 1 && dizaine !== 70 && dizaine !== 90) {
                    return getSecondPartOfTrio(dizaine) + " et un";
                }
                if (num === 71) {
                    return "soixante-et-onze";
                } else {
                    if (dizaine !== 70 && dizaine !== 90) {
                        return (
                            getSecondPartOfTrio(dizaine) +
                            "-" +
                            getFigure(Number(String(num).substring(1, 2)))
                        );
                    } else {
                        return (
                            getSecondPartOfTrio(dizaine - 10) +
                            "-" +
                            getSecondPartOfTrio(num - dizaine + 10)
                        );
                    }
                }
            }
    }
};
// fonction de composition de la première partie du trio
const getFirstPartOfTrio = (num) => {
    const cent = "cent";
    if (!num) {
        return "";
    } else if (num === 1) {
        return cent + " ";
    } else {
        return getFigure(num) + " " + cent + "s ";
    }
};
// fonction de conversion du trio en string
const getTrioToString = (num, position) => {
    let afterTrio = "";
    switch (position) {
        case 1:
            afterTrio = " mille";
            break;
        case 2:
            afterTrio = " million";
            break;
        case 3:
            afterTrio = " milliard";
            break;
        case 4:
            afterTrio = " billion";
            break;
        case 5:
            afterTrio = " billiard";
            break;
        case 6:
            afterTrio = " trillion";
            break;
        case 7:
            afterTrio = " trilliard";
            break;
    }
    // On convertit un nombre en string, afin de pouvoir l'analyser correctement
    let trioToString;
    if (!position) {
        trioToString = String(num).slice(-3);
    } else {
        trioToString = String(num).slice(
            -(position + 1) * 3,
            String(num).length - position * 3
        );
    }
    if (position && Number(trioToString) > 1) {
        afterTrio += "s";
    }
    // On rajoute des zéro, pour toujours faire un trio à 3 chiffres (avec des zéros devant)
    while (trioToString.length !== 3) {
        trioToString = "0" + trioToString;
    }
    // Puis on analyse...
    if (trioToString === "000") {
        return "";
    } else if (trioToString === "001" && position === 1) { // cas particulier pour le millier (on ne dit pas "un mille", mais "mille")
        return afterTrio +
            " ";
    } else if (trioToString === "001") {
        return "un " +
            afterTrio +
            " ";
    } else {
        return (
            getFirstPartOfTrio(Number(trioToString.substring(0, 1))) +
            getSecondPartOfTrio(Number(trioToString.substring(1, 3))) +
            afterTrio +
            " "
        );
    }
};
// fonction principale
const numberToLetters = (num) => {
    // on teste si c'est un nombre
    if (typeof num !== "number") {
        return "Paramètre invalide !";
    }
    // zéro
    if (num === 0) {
        return "zéro";
    }
    let str = "";
    // gestion du négatif
    let negativeNumber = false;
    if (num < 0) {
        negativeNumber = true;
        num = -num;
    }
    const numberOfTrios = Math.ceil(String(num).length / 3);
    for (let position = 0; position < numberOfTrios; position++) {
        str = getTrioToString(num, position) + str;
    }
    // on n'oublie pas de rajouter "moins" devant, si c'est un nombre négatif
    if (negativeNumber) {
        str = "moins " + str;
    }
    return str.trim(); // on enlève les espaces avant et après (au cas où)
};
// lorsque l'on travaille avec des grands nombres, et pour améliorer la lisibilité,
// on peut utiliser le "_" en tant que séparateur de milliers
for (i=0; i<10000; i++)
{
    console.log(numberToLetters(i))
}