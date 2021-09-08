document.addEventListener("DOMContentLoaded", function (event) {

    function sendButtonIsClicked() {

        alert("your message has been posted");

        let headline = document.getElementById("myForm").elements[0].value;
        let comment = document.getElementById("myForm").elements[1].value;


        let newComment = {
            headLine: headline,
            comment: comment


        };


        fetch('http://localhost:3000/api/v1/chats/', {
            method: 'POST',

            ///WICHTIG
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newComment),
        }).then(function (response){
            alert(response.text());
        });


    }

    document.getElementById("sendButton").onclick = function() {sendButtonIsClicked()};

});