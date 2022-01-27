const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8080;

var corOptions = {
    origin: 'https://localhost:8081'
}

//Middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.get('/', (req,res)=>{
    res.json({msg : "Heyloo"});
})

//Server Initialise
app.listen(PORT, (req,res)=> console.log(`Server running on port ${PORT}`));