const ChatModels = require("../models/ChatModels");

class ChatController {
    static chat_get_all(req, res) {
        const chatArray = ChatModels.getChats();
        res.send(chatArray);
    }


    static chat_get_by_id(req, res) {
        const {id} = req.params;
        const getChat = ChatModels.findChatById(id);
        if (getChat) {
            res.send(getChat);
        } else {
            res.status(404).send('Chat not found.');
        }
    }

    static chat_create_chat(req, res) {
        /******************************************************
         *****                                            *****
         *****   Add Controller for creating a new book   *****
         *****                                            *****
         ******************************************************/
    }

    static chat_update_chat_by_id(req, res) {
        /******************************************************
         *****                                            *****
         *****  Add Controller for updating a book by id  *****
         *****                                            *****
         ******************************************************/
    }

    static delete_chat_by_id(req, res) {
        /******************************************************
         *****                                            *****
         *****  Add Controller for deleting a book by id  *****
         *****                                            *****
         ******************************************************/
    }
}

module.exports = ChatController;