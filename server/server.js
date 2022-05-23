const path = require('path');
const express = require('express');
const app = express();

app.use('/', express.static(path.resolve(__dirname,'../client')));

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))