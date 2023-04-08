const express = require('express');

const router = express.Router();


const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age : 25
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 24
    }
]

router.get('/', (req, res) => {
    res.send(users);
});


module.exports = router;