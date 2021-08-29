//window.alert("hello")
/*
window.addEventListener('beforeunload', function(event) {
    event.returnValue = 'Ihre individuelle Fehlermeldung ...';
});*/



document.addEventListener("DOMContentLoaded", function(event) {console.log("DOM fully loaded and parsed");

/*
function myFunction1() {
    alert("Hello");
}

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", myFunction1);
*/


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

    class Chat {
        constructor(id, headLine, comment, like, likeHelper) {
            this.id = id;
            this.headLine = headLine;
            this.comment = comment;
            this.like = like;
            this.likeHelper = likeHelper;
        }
        addComment(chat){
            let note = document.getElementById("catChat");
            let article = document.createElement("article");
            let headLine = document.createElement("h2");
            let chatNote = document.createTextNode(chat.headLine);
            headLine.appendChild(chatNote);
            let comment = document.createElement("h3");
            let commentNode = document.createTextNode(chat.comment);
            comment.appendChild(commentNode);


            let likeButton = document.createElement("likeButton");
            likeButton.setAttribute("class", "like");
            likeButton.id = chat.headLine+"Like"
            likeButton.addEventListener("click", event => incrementValue(chat));
            likeButton.innerHTML = "Like";

            let showLike = document.createElement("p");
            showLike.id = chat.id +"node";
            let showLikeNode = document.createTextNode(chat.like);
            showLikeNode.id = chat.headLine;
            showLike.appendChild(showLikeNode);
            note.appendChild(article);
            article.appendChild(headLine);
            article.appendChild(comment);
            article.appendChild(likeButton);
            article.appendChild(showLike);
        }
    }

    function incrementValue(chat) {
        //PP_helper makes sure, that PP can only go up max by 1
        if(chat.likeHelper < 1){
            //console.log(chat.likeHelper);
            chat.like = chat.like + 1;
            chat.likeHelper = chat.likeHelper+1;
            let amount = document.getElementById(chat.id+"node");
            amount.innerHTML = chat.like;


            let updateChat = {
                id:chat.id,
                headLine: chat.headLine,
                comment: chat.comment,
                like:chat.like
            };

            let opts = {
                method: 'PUT',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(updateChat),
            };
            let url = "http://localhost:3000/api/v1/chat/" +chat.id;

            fetch(url, opts).then(function (response){
                // alert(response.text)
            }) .catch(function (error){
                // alert(error);
            });
        }}

});