const chats = new Map();
let chatId = 1;

chats.set(chatId.toString(), {
    headLine: "HTML5",
    comment: "Html5: Up And Running",
    like: 0
});

chatId++;
chats.set(chatId.toString(), {
    headLine: "HTML5",
    comment: "Html5: Up And Running",
    like: 0
});

chatId++;
chats.set(chatId.toString(), {
    headLine: "HTML5",
    comment: "Html5: Up And Running",
    like: 0
});

chatId++;
chats.set(chatId.toString(), {
    headLine: "HTML5",
    comment: "Html5: Up And Running",
    like: 0
});

class ChatModels {
    static getChats() {
        let booksArray = [];
        for (let [id, book] of chats) {
            booksArray.push({ id, book});
        }
        return booksArray;
    }

    static findChatById(id) {
        let chat = chat.get(id);
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