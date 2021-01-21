import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser  from 'body-parser';

import blogRouter from './routes/blogRoute.js'

const app = express();
const PORT = process.env.PORT || 7000;
const URI_DB = process.env.URI_DB;
const api = process.env.API;


/**middleware */
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(`${api}/blogs` , blogRouter);


/**connect mongoose */
mongoose.connect(URI_DB, { useNewUrlParser : true, useUnifiedTopology : true })
.then(() => console.log(`database connect`))
.catch(error => console.log(error));
/**http listen */
app.listen(PORT, () => console.log(`server run di port ${PORT}`));