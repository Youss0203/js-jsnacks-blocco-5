/*Crea un array di oggetti che rappresentino delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome e l'indicazione se può guidare,
 in base all'età.*/

 const people =[
    {
        nome: "gianmarco",
        cognome:"tocco",
        eta:17
    },
    {
        nome: "cristiano",
        cognome:"zano",
        eta:26
    },
    {
        nome: "francesco",
        cognome:"marzano",
        eta:45
    },
    {
        nome: "zazzone",
        cognome:"ilzazza",
        eta:14
    },{
        nome: "cristiano",
        cognome:"matara",
        eta:22
    },
 ]




 const newPeopleArray = people.map((singlePerson) =>{
    singlePerson.nomeCompleto = singlePerson.nome + ' ' + singlePerson.cognome;
    singlePerson.maggiorenne = singlePerson.eta >= 18;
    return singlePerson;
});
console.log(newPeopleArray)

