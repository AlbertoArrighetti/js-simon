// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di lunedi!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!


// setto la data a lunedì mattina con new Date
// 2024 = anno, 1 = Febbraio (i mesi iniziano da i = 0), 12 = giorno, 9 = ora, minuti e secondi 
const targetDate = new Date (2024, 1, 12, 9, 0, 0);




// Per poter usare la timing function creo una funzione
function updatedCountdown() {
    // visualizzo il tempo mancante fino a targetDate
    const timeRemaining = targetDate - new Date();
    



    
    // converto i milisecondi in secondi 
    // 60'000 = numero di millesecondi in un minuto
    // dividendo per 1'000 ottengo i millisecondi che mi rimangono in questo minuto
    const seconds = Math.floor((timeRemaining % 60000) / 1000);
    
    // converto i milisecondi in minuti 
    const minutes = Math.floor((timeRemaining % 3600000) / 60000)
    
    // converto i milisecondi in ore 
    const hours = Math.floor(timeRemaining / 3600000);
    
    // converto i millisecondi in giorni
    const days = Math.floor(timeRemaining / 86400000);



    // log 
    console.log(days, hours, minutes, seconds);

}


// con setInterval aggiorno ogni secondo il tempo rimanente 
setInterval(updatedCountdown, 1000);





console.log("lunedì ", targetDate);