const client_contact_controller = require('../../controllers/client_contact_controller');

const router = require('express').Router();

router.post('/addOrder', client_contact_controller.addData);

router.delete('/delOrder', client_contact_controller.deleteData)