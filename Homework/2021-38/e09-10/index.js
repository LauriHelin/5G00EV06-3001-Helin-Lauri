import fetch from 'node-fetch';

const fetchAllTitles = async(id) =>{
    let hr = await fetch("https://swapi.dev/api/people/")
    let data = await hr.json()
    console.log("name: " +data.name)
    console.log("Movies:")
    for (let i = 0; i < data.films.length; i++) { 
    let hr2 = await fetch(data.films[i])
    let data2 = await hr2.json()
    //for await(var title of data2){
    console.log(data2.title)
    }
    //}
}

fetchAllTitles(1).then((titles) => console.log(titles))
