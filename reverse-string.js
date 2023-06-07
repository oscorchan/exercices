function reverseString(str)
{
    let result="";

    for(let i=str.length-1; i>=0; i--)
    {
        result=result+str.charAt(i);
    }
    return result;
};

console.log(reverseString("I love code"));