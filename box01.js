function box(longueur, hauteur)
{
    let str=""
    for(i=0; i<hauteur; i++)
    {
        for(j=0; j<longueur; j++)
        {
            if(j===0)
            {
                if(i===0)
                {
                    str = str +"/"
                }
                else if(i===hauteur-1)
                {
                    str = str + "\\"
                }
                else
                {
                    str = str + "*"
                }
            }
            else if(j===longueur-1)
            {
                if(i===0)
                {
                    str = str + "\\"
                }
                else if(i===hauteur-1)
                {
                    str = str + "/"
                }
                else
                {
                    str = str + "*"
                }
            }
            else
            {
                if(i===0 || i===hauteur-1)
                {
                    str = str + "*"
                }
                else
                {
                    str = str + " "
                }
            }

        }
        if (i!== hauteur-1)
        {
            str = str + "\n"
        }
    }
    return str
}

console.log(box(4, 4))