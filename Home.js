document.addEventListener("DOMContentLoaded", function(event) {console.log("DOM fully loaded and parsed");

    class Chat {
        constructor(id, headLine, comment, like, likeHelper) {
            this.id = id;
            this.headLine = headLine;
            this.comment = comment;
            this.like = like;
            this.likeHelper = likeHelper;


            const amountOfChats = 8;
            let Id = 1;




            async function loadNewChat(loadChatId) {

                let myObject = await fetch("http://localhost:3000/api/v1/chats/"+loadChatId);
                let chatObject = await myObject.json();


                console.log(chatObject);


                chat.addComment(chatObject);

            }

            loadNewChat(Id);
            Id++;
            loadNewChat(Id);
            Id++;
            loadNewChat(Id);
            Id++;
            loadNewChat(Id);
            Id++;

            window.addEventListener('scroll', function () {
                if (window.scrollY >= document.getElementById("catChat").clientHeight - window.innerHeight - 10 && Id <= amountOfChats) {
                    loadNewChat(Id);
                    Id++;
                }
            });


        }

        addComment(chat){
            let note = document.getElementById("catChat");
            let article = document.createElement("article");
            article.id ="article"+chat.id;
            let headLine = document.createElement("h2");
            let chatNote = document.createTextNode(chat.headLine);
            headLine.appendChild(chatNote);
            let comment = document.createElement("h3");
            let commentNode = document.createTextNode(chat.comment);
            comment.appendChild(commentNode);


            let likeButton = document.createElement("BUTTON");
            likeButton.setAttribute("class", "like");
            likeButton.id = chat.headLine+"Like"
            likeButton.addEventListener("click", event => incrementValue(chat));
            likeButton.innerHTML = "Like";

            let showLike = document.createElement("p");
            showLike.id = chat.id+"node";
            let showLikeNode = document.createTextNode(chat.like);
            showLikeNode.id = chat.headLine;
            showLike.appendChild(showLikeNode);
            let deleteButton = document.createElement("BUTTON");
            deleteButton.setAttribute("class", "delete Button");

            deleteButton.addEventListener("click", event => deleteChat(chat.id));
            deleteButton.innerHTML = 'delete';
            note.appendChild(article);
            article.appendChild(headLine);
            article.appendChild(comment);
            article.appendChild(likeButton);
            article.appendChild(showLike);
            article.appendChild(deleteButton);
        }
    }
    function deleteChat(id) {
        alert("chat got deleted");
        let removeChat = document.getElementById("article" + id);


        let url = "http://localhost:3000/api/v1/chats/" + id;

        let opts = {
            method: 'DELETE',
            headers: {}
        };
        fetch(url, opts);

        removeChat.remove();

    }

    function incrementValue(chat) {
        if(chat.likeHelper < 1){
            chat.like = chat.like + 1;
            chat.likeHelper = chat.likeHelper+1;
            let amount = document.getElementById(chat.id+"node");
            amount.innerHTML = chat.like;


            let updateChat = {
                headLine: chat.headLine,
                comment: chat.comment,
                like: chat.like
            };


            fetch('http://localhost:3000/api/v1/chats/'+chat.id, {
                method: 'PUT',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(updateChat),
            }).then(function (response){

            });


        }
    }

    const chat = new Chat();

});



















































/*
document.addEventListener("DOMContentLoaded", function(event) {console.log("DOM fully loaded and parsed");

class Chat {
    constructor(id, headLine, comment, like, likeHelper) {
        this.id = id;
        this.headLine = headLine;
        this.comment = comment;
        this.like = like;
        this.likeHelper = likeHelper;





        window.addEventListener('scroll', function () {
            if (window.scrollY >= document.getElementById("catChat").clientHeight - window.innerHeight - 10 && bookId <= maxBooksPerPage) {
                loadNewBook(bookId);
                bookId++;
            }
        });


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


        let likeButton = document.createElement("BUTTON");
        likeButton.setAttribute("class", "like");
        likeButton.id = chat.headLine+"Like"
        likeButton.addEventListener("click", event => incrementValue(chat));
        likeButton.innerHTML = "Like";

        let showLike = document.createElement("p");
        showLike.id = chat.id+"node";
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

    if(chat.likeHelper < 1){
        //console.log(chat.likeHelper);
        chat.like = chat.like + 1;
        chat.likeHelper = chat.likeHelper+1;
        let amount = document.getElementById(chat.id+"node");
        amount.innerHTML = chat.like;


       /!* let updateChat = {
            id: chat.id,
            headLine: chat.headLine,
            comment: chat.comment,
            like: chat.like
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
        });*!/
    }
 }

    const chat = new Chat();

});*/
