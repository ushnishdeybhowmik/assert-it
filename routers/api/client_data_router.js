const client_data_controller = require('../../controllers/client_data_controller');

const router = require('express').Router();

router.post('/addUser', client_data_controller.addData);

router.get('/getUsers', client_data_controller.getAllData);

router.get('/getUser/:phone_no', client_data_controller.getSingleData);

router.put('/updateUser/:phone_no', client_data_controller.updateData);

router.delete('/deleteUser/:phone_no', client_data_controller.deleteData);

router.delete('/deleteUsers', client_data_controller.deleteAllData);

module.exports = router;