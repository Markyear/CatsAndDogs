const {Router} = require('express');
const ChatRoutes = Router();

const ChatController = require('../controllers/ChatController');

ChatRoutes.get('/', ChatController.chat_get_all);

ChatRoutes.get('/:id', ChatController.chat_get_by_id);

ChatRoutes.post('/', ChatController.chat_create_chat);
ChatRoutes.put('/:id', ChatController.chat_update_chat_by_id);
ChatRoutes.delete('/:id', ChatController.delete_chat_by_id);



module.exports = ChatRoutes;