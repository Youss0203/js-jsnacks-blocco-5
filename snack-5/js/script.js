/*Creare un array di oggetti di squadre di volley.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Generare numeri random al posto delle nelle proprietà:
punti fatti e falli subiti*/


const campionato=[
    {
        nome:"juventus",
        punti_fatti:getRandomNumber(0,100),
        falli_subit:45,
    },
    {
        nome:"milan",
        punti_fatti:getRandomNumber(0,100),
        falli_subit:65,
    },
    {
        nome:"roma",
        punti_fatti:getRandomNumber(0,100),
        falli_subit:43,
    },
    {
        nome:"atalanta",
        punti_fatti:getRandomNumber(0,100),
        falli_subit:23
    },
];
console.log(campionato)



function getRandomNumber(min,max){
    return Math.floor(Math.random()*max-min)+min;
}