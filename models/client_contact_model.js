module.exports = (sequelize, DataTypes) => {
  const client_contact = sequelize.define("client_contact", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    phone_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return client_contact;
};
