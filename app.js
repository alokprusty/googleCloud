'use strict';
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config')
const app = express();
const path    = require("path");
app.use(bodyParser.json());
app.use(cors());

const mysql = require('mysql');
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

app.get('/products',(req,res)=>{
  var query = db.query(`select * from products`,function (err, result) {
    if (err) throw err;
    else {
            res.send(result)
        }
});
})

app.get('/api/html',(req,res)=>{
  res.sendFile(path.join(__dirname+'/public/abc.html'));
})

// app.get('/api/products',
//     (req, res) => {
//         database.ref('appointment/').once("value", function (snapshot) {
//             var data = snapshot.val();
//             res.send(data)
//         });
//     }
// );



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
