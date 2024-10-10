const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
     res.end('<h1>dede</h1>');
})

app.listen(port, (req, res) => {
     console.log('listening on ' + port);
})