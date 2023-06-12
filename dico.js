function dico (l1, l2)
{
    let a = new Map()
    for (i=0; i<l1.length; i++)
    {
        a.set(l1[i], l2[i])
    }

    return a
}

l1 = ["chat", "chien", "vache", "loup", "poule"]
l2 = ["miaow", "wouaf", "meuh", "aouu", "cotcot"]

console.log(dico(l1, l2))