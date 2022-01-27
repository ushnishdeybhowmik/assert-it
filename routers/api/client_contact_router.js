const client_contact_controller = require("../../controllers/client_contact_controller");

const router = require("express").Router();

router.post("/addOrder", client_contact_controller.addData);

router.delete("/delOrder/:id", client_contact_controller.deleteData);

router.delete("/delOrders", client_contact_controller.deleteAllData);


module.exports = router;