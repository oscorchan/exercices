function wordCount(str)
{
    let result = 0;

    for (i=0; i<str.length; i++)
    {
         if(str.charAt(i)===" ")
        {
            result++;
        }
    }
    return result+1;
};
console.log(wordCount("Hello World"));