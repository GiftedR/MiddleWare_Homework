var express = require('express');
var router = express.Router();
module.exports = router;

var data = [
    {id: 0, name: "person1", username: "user1"},
    {id: 1, name: "person2", username: "user2"},
    {id: 2, name: "person3", username: "user3"}
]

router.get('/', (req, res, next) => {
    res.writeHead(302, {
        'Location': '/api/person'
    });
    res.end();
})

router.get('/person', (req, res, next) => {
    res.status(200);
    res.send(data);
})

router.get('/person/:id', (req, res, next) => {
    res.status(200);
    res.send(data.filter(person => {
        person.id == req.params.id;
    }));
})

router.post('/person', (req, res, next) => {
    res.status(200);
    data.push(req.body);
    res.send(req.body);
})

router.put('/person/:id', (req, res, next) => {
    res.status(200);
    var index = data.indexOf(person => {
        return person.id === req.params.id;
    });
    data[index] = req.body;
    res.send(data[index]);
})

router.delete('/person/:id', (req, res, next) => {
    res.status(200);
    data[index] = data.filter(person => person.id != req.params.id);
    res.send(data[index]);
})