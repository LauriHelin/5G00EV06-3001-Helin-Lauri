let obj = {'name': 'jussi'} //outputtina tulee "Jussi sniffs butt" koska obj (joka on Jussi) korvaa this snaan sniffButt funktiossa

function Dog(name) {
    this.name = name
    this.sniffButt = this.sniffButt.bind(this)      //tämä bindaa molemmissa uusissa olioissa this sanaan oliossa olevan nimen
    //this.sniffButt = this.sniffButt.bind(obj)
    //this.sniffButt = function() {               //tämä muuttaa sniffButt funktion sanomaan "hello world",
    //    console.log('hello world')              // koska toinen sniffbutt on prototyyppinä, niin kun tuo 
    //}                                           //lisätään luojan sisään, joka kerta kun luodaan uusi olio 
}                                               //new:llä, se perii construcotrilta SniffButt funktion
Dog.prototype.sniffButt = function() {          //Yhden kerran, sillä se on prototypessä
    console.log(this.name + ' sniffs butt')
}

Dog.prototype.delayedSniffButt = function() {   //Ei toimi sillä olio.delayedsniffbutt kulkee pelkän funktion kautta.
    setTimeout(this.sniffButt, 1000)
}


let spot = new Dog('spot')
let vilma = new Dog('vilma')
spot.sniffButt()
vilma.sniffButt()


spot.delayedSniffButt()
vilma.delayedSniffButt()