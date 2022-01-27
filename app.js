const express = require("express");
const app = express();
const cors = require("cors");
const client_data_router = require("./routers/api/client_data_router");
const client_contact_router = require("./routers/api/client_contact_router");
const PORT = process.env.PORT || 8080;

var corOptions = {
  origin: "https://localhost:8081",
};

//Middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/client_data", client_data_router);
app.use("/api/order_data", client_contact_router);

// app.get('/', (req,res)=>{
//     res.json({msg : "Heyloo"});
// })

//Server Initialise
app.listen(PORT, (req, res) => console.log(`Server running on port ${PORT}`));
