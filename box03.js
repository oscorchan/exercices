function box(longueur, hauteur)
{
    let str = ""

    for (i=0; i<hauteur; i++)
    {
        for (j=0; j<longueur; j++)
        {
            if (j===0)
            {
                if(i===0)
                {
                    str = str + "A"
                }
                else if (i===1 || i===hauteur-2)
                {
                    str = str + "|"
                }
                else if(i===hauteur-1)
                {
                    str = str + "D"
                }
                else
                {
                    str = str + "*"
                }
             }
             else if (j===1 || j===longueur-2)
             {
                if (i===0 || i===hauteur-1)
                {
                    str = str + "-"
                }
                else
                {
                    str = str + " "
                }
             }
             else if (j===longueur-1)
             {
                if(i===0)
                {
                    str = str + "B"
                }
                else if (i===hauteur-1)
                {
                    str = str + "C"
                }
                else if (i===1 || i===hauteur-2)
                {
                    str = str + "|"
                }
                else 
                {
                    str = str + "*"
                }
             }
             else
             {
                if (i===0 || i===hauteur-1)
                {
                    str = str + "*"
                }
                else
                {
                    str = str + " "
                }
             }
        }
        if (i!==hauteur-1)
        {
            str = str + "\n"
        }
    }
    return str
}

console.log(box(40, 40))