const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000

app.use(express.static('../template'))

app.get('/', (req, res) => res.sendFile('index.html'))

// app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/../template/index.html')))

// app.use('/', router);


// app.use('/', express.static(__dirname + '/template/index.html'))

// app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(port, () => console.log(`Listening on port ${port}`))