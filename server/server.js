require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;
const URI_DB = process.env.URI_DB;
const api = process.env.API

/**middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(morgan('tiny'));
app.use(cors());
app.options(`*`, cors());

/**test route */
app.get(`${api}`, (req, res) => {
   res.json({ msg : 'router get berjalan'});
});
app.post(`/`, (req, res) => {
   console.log(req.body);
   res.json({ reqBody : 'berjalan'})
});

/**connect database */
mongoose.connect(URI_DB, { useNewUrlParser : true, useUnifiedTopology : true})
.then(() => { console.log(`database connect`)})
.catch(err => { console.log(err)});


/** http run */
app.listen(PORT, () => { console.log(`server run di port ${PORT}`)});