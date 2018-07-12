const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(peocess.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
}).catch(err => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Its going down on port ${port}.`);});
