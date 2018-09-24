var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page Not Found',
        name: 'To Do App 1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Shailesh Sakhare',
            age: 20
        },
        {
            name: 'Pyare Mohan',
            age: 50
        }]);
});

app.listen(3000);

module.exports.app = app;