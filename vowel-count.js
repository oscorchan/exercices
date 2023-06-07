function vowelCount(str)
{
    let result = 0
    for (i=0; i<str.length; i++)
    {
        if(str.charAt(i)==="a" || str.charAt(i)==="e" || str.charAt(i)==="i" || str.charAt(i)==="o" || str.charAt(i)==="u" || str.charAt(i)==="y")
        {
            result++
        }
    }
    return result
}

console.log(vowelCount("thereactor"))