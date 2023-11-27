/*Crea un array di oggetti che rappresentino delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome e l'indicazione se può guidare,
 in base all'età.*/

 const people =[
    {
        name: "gianmarco",
        cognome:"tocco",
        età:17
    },
    {
        name: "cristiano",
        cognome:"zano",
        età:26
    },
    {
        name: "francesco",
        cognome:"marzano",
        età:45
    },
    {
        name: "zazzone",
        cognome:"ilzazza",
        età:14
    },{
        name: "cristiano",
        cognome:"matara",
        età:22
    },
 ]


 const peopleLicense = people.map((people) => {
    return people.età>18
 })
 console.log(peopleLicense)