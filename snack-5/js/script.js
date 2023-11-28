/*Creare un array di oggetti di squadre di volley.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Generare numeri random al posto delle nelle proprietà:
punti fatti e falli subiti*/


const campionato=[
    {
        nome:"juventus",
        punti_fatti:"",
        falli_subit:"",
    },
    {
        nome:"milan",
        punti_fatti:"",
        falli_subit:"",
    },
    {
        nome:"roma",
        punti_fatti:"",
        falli_subit:"",
    },
    {
        nome:"atalanta",
        punti_fatti:"",
        falli_subit:"",
    },
];
console.log(campionato)



const punti=Math.floor(Math.random()*60)
const falli=Math.floor(Math.random()*50)


const copyCampionato=[...campionato,punti,falli]