const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res, next) => res.send('Hello from Homepage.'));

app.listen( PORT, () => console.log(`Server running on port : http://localhost:${PORT}`) );

