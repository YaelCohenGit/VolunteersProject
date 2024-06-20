
import { configDotenv } from 'dotenv';
configDotenv()

import  express  from 'express';
const app = express();

import FieldsRouter from './routers/FieldsRouter.js';
import AddressRouter from './routers/AddressesRouter.js';
import helpRequestsRouter from './routers/HelpRequestsRouter.js';
import VolunteersRouter from './routers/VolunteersRouter.js'
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.use(express.json());


app.use('/api/addresses', AddressRouter);
app.use('/api/volunteers', VolunteersRouter);
app.use('/api/fields', FieldsRouter);
app.use('/api/helpRequests',helpRequestsRouter);
app.use('/', (req, res) => {
    res.send('welcome to our api');
})


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

