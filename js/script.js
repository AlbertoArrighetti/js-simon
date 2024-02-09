// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di lunedi!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!

// setto la data a lunedì mattina con new Date
// 2024 = anno, 1 = Febbraio (i mesi iniziano da i = 0), 12 = giorno, 9 = ora, minuti e secondi 
const targetDate = new Date (2024, 1, 12, 9, 0, 0);

// data di oggi
const now = new Date ();

// visualizzo il tempo mancante fino a targetDate
const timeRemaining = targetDate - now;

console.log(timeRemaining);
console.log("data di oggi ", now);
console.log("lunedì ", targetDate);

