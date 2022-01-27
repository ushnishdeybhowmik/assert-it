const db = require("../models");

const client_contact = db.client_contact;

const addData = async (req, res) => {
  let data = {
    phone_no: req.body.phone_no,
    order: req.body.order,
  };

  const clientData = await client_contact.create(data);

  res.status(200).send(clientData);
};

const deleteData = async (req, res) => {
  let id = req.params.id;

  const clientData = await client_contact.destroy({
    where: {
      id : id,
    },
  });

  res.status(200).send(clientData);
};

const deleteAllData = async (req, res) => {
  const clientData = await client_contact.destroy({ where: {} });
  res.status(200).send(clientData);
};

module.exports = {
    addData,
    deleteData,
    deleteAllData
}