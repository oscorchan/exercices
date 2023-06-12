function TriABulles (tableau)
{
    let a = 0

    for (i=0; i<tableau.length; i++)
    {
        for (j=0; j<tableau.length-i-1; j++)
        {
            if(tableau[j]>tableau[j+1])
            {
                a = tableau[j]
                tableau[j]=tableau[j+1]
                tableau[j+1]=a
            }
        }
    }
}

let tableau = [2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42]

TriABulles(tableau)

console.log(tableau)