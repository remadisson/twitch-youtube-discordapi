const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());



app.listen(7899, () => {
    console.log("Listening on port 7899");
});