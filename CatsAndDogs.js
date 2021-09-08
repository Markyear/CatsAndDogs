document.addEventListener("DOMContentLoaded", function(event) {console.log("DOM fully loaded and parsed");



async function getCatPic(){
    const RESPONSE = await fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg');
    const DATA = await RESPONSE.json();
    const CATPICS = DATA[0].url;
    console.log(CATPICS);

    document.getElementById("catImg").src = CATPICS;
}

async function getCatFact(){
    const RESPONSE = await fetch('https://catfact.ninja/fact?max_length=140');
    const DATA = await RESPONSE.json();
    const CATFACTS = DATA.fact;
    console.log(CATFACTS);

    document.getElementById("catP").innerText = CATFACTS;
}

async function getDogPic(){
    const RESPONSE = await fetch('https://dog.ceo/api/breeds/image/random');
    const DATA = await RESPONSE.json();
    const DOGPICS = DATA.message;
    console.log(DOGPICS);

    document.getElementById("dogImg").src = DOGPICS;
    }

getCatPic();
getDogPic();
getCatFact()



});