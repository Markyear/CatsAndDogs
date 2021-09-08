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
        let chat = req.body;
        ChatModels.createChat(chat);
        res.status(201).send("Chat entry was created");
    }

    static chat_update_chat_by_id(req, res) {
        const {id} = req.params;
        let chat = req.body;
        ChatModels.updateLikes(id, chat);
        res.status(201).send("Likes were updated");
    }

    static delete_chat_by_id(req, res) {

        const {id} = req.params;
        console.log("deleting meme with id: "+ id);
        ChatModels.deleteChatById(id);
        res.status(200).send("chat was deleted");

    }
}

module.exports = ChatController;