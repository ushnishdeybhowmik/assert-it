const db = require("../models");

const client_data = db.client_data;
//const client_contact = db.client_contact;

const addData = async (req, res) => {
  let data = {
    name: req.body.name,
    phone_no: req.body.phone_no,
    address: req.body.address,
    status: req.body.status,
  };
  const clientData = await client_data.create(data);
  res.status(200).send(clientData);
};

const getAllData = async (req, res) => {
  let data = await client_data.findAll({});
  res.status(200).send(data);
};

const getSingleData = async (req, res) => {
  let phone_no = req.params.phone_no;
  let data = await client_data.findOne({
    where: {
      phone_no: phone_no,
    },
  });
  res.status(200).send(data);
};

const updateData = (req, res) => {
  let phone_no = req.params.phone_no;

  const clientData = await client_data.update(req.body, {
    where: {
      phone_no: phone_no,
    },
  });

  res.status(200).send(clientData);
};

const deleteData = (req, res) => {
  let phone_no = req.params.phone_no;

  const clientData = await client_data.destroy({
    where: {
      phone_no: phone_no,
    },
  });

  res.status(200).send(clientData);
};

const deleteAllData = (req, res) => {
  const clientData = await client_data.destroy({ where: {} });

  res.status(200).send(clientData);
};


module.exports = {
    addData,
    getAllData,
    getSingleData, 
    updateData,
    deleteData,
    deleteAllData
}