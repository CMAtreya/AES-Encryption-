const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');   
const cors = require('cors');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

