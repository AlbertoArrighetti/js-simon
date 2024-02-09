// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di lunedi!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!

// DATE 

// setto la data a lunedì mattina con new Date
// 2024 = anno, 1 = Febbraio (i mesi iniziano da i = 0), 12 = giorno, 9 = ora, minuti e secondi 
const targetDate = new Date (2024, 1, 12, 9, 0, 0);
// data di oggi
const now = new Date ();
// visualizzo il tempo mancante fino a targetDate
const timeRemaining = targetDate - now;


// CONVERSIONE 

// converto i milisecondi in secondi 
// 60'000 = numero di millesecondi in un minuto
// dividendo per 1'000 ottengo i millisecondi che mi rimangono in questo minuto
const seconds = Math.floor ((timeRemaining % 60000) / 1000);

// converto i milisecondi in minuti 
const minutes = Math.floor ((timeRemaining % 3600000) / 60000)

// converto i milisecondi in ore 
const hours = Math.floor(timeRemaining / 3600000);

// converto i millisecondi in giorni
const days = Math.floor(timeRemaining / 86400000);





// tempo 
console.log(days, hours, minutes, seconds);



console.log(timeRemaining);
console.log("data di oggi ", now);
console.log("lunedì ", targetDate);

