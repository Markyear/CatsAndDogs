const {Router} = require('express');
const ChatRoutes = Router();

const ChatController = require('../controllers/ChatController');

ChatRoutes.get('/', ChatController.chat_get_all);

ChatRoutes.get('/:id', ChatController.chat_get_by_id);

//ChatRoutes.post('/', ChatController.meme_create_book);
//ChatRoutes.put('/:id', ChatController.meme_update_book_by_id);
//ChatRoutes.delete('/:id', ChatController.delete_meme_by_id);


/******************************************************
 *****                                            *****
 *****  Add Routes for POST, PUT and DELETE here  *****
 *****                                            *****
 ******************************************************/

module.exports = ChatRoutes;