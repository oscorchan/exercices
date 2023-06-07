function pyramid(size)
{
    let str=""

    for (i=0; i<size; i++)
    {
        for (j=0; j<size - i - 1; j++)
        {
            str = str + " "
        }
        for (j=0; j<2*i+1; j++)
        {
            str = str + "X"
        }
        str = str + "\n"
    }

    return str
}

console.log(pyramid(20))