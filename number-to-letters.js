function NumberToLetters(num) {
    let str = ''
    if (typeof num !== "number" || num < 0 || num > 9999) {
        str = 'Entrée invalide'
    }
    else {
        let unite = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huite", "dix-neuf"]
        let dizaine = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"]

        if (num == 0) {
            str = "zéro"
        }

        if (num >= 1000) {
            let millier = Math.floor(num / 1000)
            if (millier == 1) {
                str = " mille "
            }
            else {
                str = unite[millier] + " mille "
            }
            num = num % 1000
        }
        if (num >= 100) {
            let centaines = Math.floor(num / 100)
            num = num % 100
            if (num == 0) {
                if (centaines == 1) {
                    str = str + " cent "
                }
                else {
                    str = str + unite[centaines] + " cents "
                }
            }
            else {
                if (centaines == 1) {
                    str = str + " cent "
                }
                else {
                    str = str + unite[centaines] + " cent "
                }
            }
        }
        if (num >= 20) {
            let dix = Math.floor(num / 10)
            if (dix == 7 || dix == 9) {
                num = num % 20
                if (num == 11 && dix == 7) {
                    str = str + dizaine[dix - 1] + " " + "et " + unite[num]
                }
                else {
                    str = str + dizaine[dix - 1] + "-" + unite[num]
                }
            }
            else {
                num = num % 10
                if (num == 0) {
                    if (dix == 8) {
                        str = str + dizaine[dix] + "s"
                    }
                    else {
                        str = str + dizaine[dix]
                    }
                }
                else {
                    if (num == 1 && dix != 8) {
                        str = str + dizaine[dix] + " et " + unite[num]
                    }
                    else if (dix != 8) {
                        str = str + dizaine[dix] + "-" + unite[num]
                    }
                    else {
                        {
                            str = str + dizaine[dix] + "-" + unite[num]
                        }
                    }
                }
            }
        }
        else {
            str = str + unite[num]
        }
    }
    return str
}

for (i=0; i<10000; i++)
{
    console.log(NumberToLetters(i))
}
