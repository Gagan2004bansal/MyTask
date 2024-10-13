const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
require('dotenv').config();
const Route = require('./Routes/Route');
require('./config/database');

const app = express();
const PORT = process.env.PORT || 3001;

const fileupload = require('express-fileupload');
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

app.use(cors({
    origin: '*',
    credentials: true,
}));

app.use(bodyparser.json());
app.use(express.json());

app.use("/api/v1", Route);

app.listen(PORT, () => {
    console.log(`sever is running on port : ${PORT}`);
});