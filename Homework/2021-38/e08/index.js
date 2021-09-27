import fetch from 'node-fetch';
import readlineSync from 'readline-sync';

const fetchTitle = async(id) =>{
    let hr = await fetch("https://swapi.dev/api/people/1/")
    let data = await hr.json()
    let hr2 = await fetch(data.films[id-1])
    let data2 = await hr2.json()
    console.log(data2.title)
}

var id = readlineSync.question("give id: ")
/*fetch("https://swapi.dev/api/people/1/")
.then(hr =>hr.json())
.then(result => fetch(result.films[id-1]))
.then(hr=>hr.json())
.then(result=>console.log(result.title))*/
fetchTitle(id)