function box(longueur, hauteur)
{
    let str = ""

    for (i=0; i<hauteur; i++)
    {
        for (j=0; j<longueur; j++)
        {
            if (j===0 || j===longueur-1)
            {
                if (i===0)
                {
                    str = str + "A"
                }
                else if (i===hauteur-1)
                {
                    str = str + "C"
                }
                else
                {
                    str = str + "B"
                }
            }
            else 
            {
                if(i===0 || i===hauteur-1)
                {
                    str = str + "B"
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

console.log(box(4, 4))