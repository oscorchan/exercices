const email = "oscorchangmail.com";
let valid = false

// début de votre code
for (i=0; i<email.length; i++)
{
    if(email[i]=='@')
    {
        valid = true
    }
}
// fin de votre code

console.log(valid);