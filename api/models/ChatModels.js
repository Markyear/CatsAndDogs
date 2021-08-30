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

    

    static createBook(book) {
        /*************************************************************************
         *****                                                               *****
         *****   Add Method for creating a new book in the chats map by id   *****
         *****                                                               *****
         *************************************************************************/
    }

    static updateBookById(id, book) {
        /*************************************************************************
         *****                                                               *****
         *****     Add Method for updating a book in the chats map by id     *****
         *****                                                               *****
         *************************************************************************/
    }

    static deleteBookById(id) {
        /*************************************************************************
         *****                                                               *****
         *****    Add Method for deleting a book from the chats map by id    *****
         *****                                                               *****
         *************************************************************************/
    }
}


module.exports = ChatModels;