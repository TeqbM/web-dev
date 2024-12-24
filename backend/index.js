// import express from 'express';
const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
     res.end('this is ');
})

app.listen(port, (req, res) => {
     console.log( `listening on http://127.0.0.1:${port}`);
})



