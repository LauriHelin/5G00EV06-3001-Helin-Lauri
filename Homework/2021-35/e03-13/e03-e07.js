var readlineSync = require('readline-sync');
var e05 = "Hello";

var nimi = readlineSync.question('Syota nimesi: ');
var kerta = readlineSync.question('Kuinka monesti nimi toistetaan: ');
console.log(nimi.repeat(kerta));

//Number(e05) antaa NaN
console.log(e05.repeat(16)+ ' Batman');

var b = 2;
let a = 3;
const x = 4;

console.log("const x ei voida uudelleenjulistaa, kun " + x + " on julistettu koodissa, sen muuttaminen aiheuttaa virheen ");
console.log("tässä let a = " + a );
console.log("kun taas var b = " + b);
{
    let a = 5
    console.log("mutta taman blokin sisalla, a = " + a);
    console.log("lun taas b pysyy = " + b);
}


let x = "tuplalainausmerkkien kansa pystyt kayttamaan sanoja can't etc."
let y = 'yksittaislainausmerkkien sisalla pystyt kayttamaan "tuplalainausmerkkeja" muuta eroa niilla ei ole'
let z = `kaytannossa ei muuta funktionaalista eroa, kuin etta toistenas sisalla voi kayttaa toisiaan`

