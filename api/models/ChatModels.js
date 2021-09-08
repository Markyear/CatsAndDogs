const chats = new Map();
let chatId = 1;

chats.set(chatId.toString(), {
    id:chatId,
    headLine: "Cat1",
    comment: "Html5: Up And Running",
    like: 0,
    likeHelper: 0
});

chatId++;
chats.set(chatId.toString(), {
    id:chatId,
    headLine: "Cat2",
    comment: "Html5: Up And Running",
    like: 0,
    likeHelper: 0
});

chatId++;
chats.set(chatId.toString(), {
    id:chatId,
    headLine: "Cat3",
    comment: "Html5: Up And Running",
    like: 0,
    likeHelper: 0
});

chatId++;
chats.set(chatId.toString(), {
    id:chatId,
    headLine: "Cat4",
    comment: "Html5: Up And Running",
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
}


module.exports = ChatModels;