function exOh(str)
{
    let countx=0
    let counto=0

    for(i=0; i<str.length; i++)
    {
            if(str.charAt(i)==="x")
            {
                countx++
            }
            else if(str.charAt(i)==="o")
            {
                counto++
            }
    }
    if (counto==countx)
    {
        return true
    }
    else
    {
        return false
    }
}

console.log(exOh("xooxo"))