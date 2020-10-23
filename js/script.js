//inserisco la variabile cognomi, un array con 5 elementi
var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
//lo stampo in console per controllo
console.log(cognomi);
//--------------------------------------------

//inserisco la variabile cognomeUser, he sarà  un prompt dove utente mette il suo cognome
var cognomeUser = prompt('Inserisci il cognome');
//stampo l'elemento inserito nella console
console.log(cognomeUser);
//--------------------------------------------

//inserisco il cognomeUser che ho appena ricavato nell'array cognomi
cognomi.push(cognomeUser);
//controllo in console e vedo che viene inserito come ultimo elemento
console.log(cognomi);
//--------------------------------------------

//metto con sort in ordine alfabetico gli elementi all'interno di dell'array, e questo lo faccio diventare il nuovo array
var cognomi = cognomi.sort();
//controllo e vedo che gli elementi dell'array  sono  in ordine alfabetico
console.log(cognomi);
//--------------------------------------------

//adesso ci interessa stampare il tutto
var lista = '';
var i=0;
while (i < cognomi.length) {
    lista = lista + "<li>" + cognomi[i] + "</li>";
    i++;
};
document.getElementById('lista').innerHTML = lista;
//--------------------------------------------


//la variabile posizione prende la posizione del cognome user che ho inserito con il prompt dall'array, e aggiunge 1 dato che si parte da zero.
var posizione = cognomi.indexOf(cognomeUser) + 1;
// posto il valore della variabile posizione nel div con id=posizione
document.getElementById('posizione').innerHTML = posizione;
