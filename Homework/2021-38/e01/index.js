/*
var sum = null

function makeCalculation () {
  console.log('2) calculating sum...')
  sum = 5 + 5
  console.log('3) sum is ' + sum)
}

function sendStuffToBackend () {
  console.log('4) sending ' + sum + ' to backend\'s database')
}

console.log('1) starting the calculation and sending')
setTimeout(makeCalculation, 2000)
setTimeout(sendStuffToBackend, 1000)
console.log('5) ending the calculation and sending') 

Ongelmana on että setTimeout funktion ovat asynkronisia, jolloin ongelmana on että ohjela tulostaa ensiksi linjat rivit 14 ja 17,
 tämän jälkeen sekunnin päästä tulostaa rivin 16 jossa sum on null ja tämän jälkeen vasta rivin 15 */



/*var sum = null

function makeCalculation () {
  console.log('2) calculating sum...')
  sum = 5 + 5
  console.log('3) sum is ' + sum)
  setTimeout(sendStuffToBackend, 1000)
}

function sendStuffToBackend () {
  console.log('4) sending ' + sum + ' to backends database')
  console.log('5) ending the calculation and sending')
}

console.log('1) starting the calculation and sending')
setTimeout(makeCalculation, 2000)

Tässä ohjelma toimii sillä toinen asynkroninen funktio on ensimmäisen sisällä, jolloin makeCalculation ajaa omat toimintonsa järjsetyksessä
ja koska toinen asynkroninen funktio on viimeisenä toimintona makeCalculationissa se toimii, jos makeCalculation funktiossa
olisi jotain toimintoja setTimeout(sendStuffToBackend, 1000) jälkeen olisi ohjelmassa sama ongelma kuin aikaisemmassa*/


function makeCalculation () {
    function asynFunc (resolve, reject) {
      setTimeout(() => {
        console.log('calculating stuff')
        const division = 5 / 5
        resolve(division)
      }, 1000)
    }
    const p = new Promise(asynFunc)
    return p
  }

function sendStuffToBackend (result) {
    function asynFunc (resolve, reject) {
      setTimeout(() => {
        console.log(`sending to backend ${result}`)
        resolve('done')
      }, 1000)
    }
    const p = new Promise(asynFunc)
    return p
  }
  
  
  // make the calculation that takes time and when ready, invoke the
  // arrow function.
  

  makeCalculation()
  .then(sum => sendStuffToBackend(sum))
      .then(msg => console.log(msg))
