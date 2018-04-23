'use strict';

const process = require('process');
const body_parser = require('body-parser');
const fs = require('fs');
const http = require('http');
const socket = require('socket.io');
const path = require('path');
const express = require('express');
const app = express();

app.enable('trust proxy');
app.use(body_parser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const PORT = process.env.PORT || 8080;
const server = http.createServer(app).listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});
const io = socket.listen(server);

require("./routes/nws")(app);
require('./sockets/main_socket')(io)

module.exports = app;