const chats = new Map();
let chatId = 1;

chats.set(chatId.toString(), {
    id:chatId,
    headLine: "Cats and disease",
    comment: "It's said, that cats can absorb disease from a human being",
    like: 0,
    likeHelper: 0
});

chatId++;
chats.set(chatId.toString(), {
    id:chatId,
    headLine: "Cats and stress",
    comment: "Cats can decrease your stress-level by petting them",
    like: 0,
    likeHelper: 0
});

chatId++;
chats.set(chatId.toString(), {
    id:chatId,
    headLine: "Cats are awesome",
    comment: "My cat is the greatest",
    like: 0,
    likeHelper: 0
});

chatId++;
chats.set(chatId.toString(), {
    id:chatId,
    headLine: "Cats are like goats",
    comment: "they climb trees",
    like: 0,
    likeHelper: 0
});


class ChatModels {
    static getChats() {
        let chatArray = [];
        for (let [id, chat] of chats) {
            chatArray.push({ id, chat});
        }
        return chatArray;
    }

    static findChatById(id) {
        let chat = chats.get(id);
        return chat;
    }



    static createChat(chat) {
        chatId ++;

        chats.set(chatId.toString(), {
            headLine: chat.headLine,
            comment: chat.comment,
            like: 0,
            likeHelper: 0

        });


    }


    static deleteChatById(id) {

        chats.delete(id);

    }

    static updateLikes(id, chat){

        chats.set(id.toString(), {
            headLine: chat.headLine,
            comment: chat.comment,
            like: chat.like,
            likeHelper: 0

        });

    }
}


module.exports = ChatModels;














/*

class ChatModels {
    static getChats() {
        let chatArray = [];
        for (let [id, chat] of chats) {
            chatArray.push({ id, chat});
        }
        return chatArray;
    }

    static findChatById(id) {
        let chat = chats.get(id);
        return chat;
    }

    

    static createChat(chat) {
        chatId ++;

        chats.set(chatId.toString(), {
            headLine: chat.headLine,
            comment: chat.comment,
            like: 0,
            likeHelper: 0

        });


    }

    static updateBookById(id, book) {

    }

    static deleteBookById(id) {

    }
}


module.exports = ChatModels;*/
