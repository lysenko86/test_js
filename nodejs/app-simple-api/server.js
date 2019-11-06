const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const artists = [
    { id: 1, name: 'Metallica' },
    { id: 2, name: 'Iron Maiden' },
    { id: 3, name: 'Deep Purple' }
];

app.get('/', function(req, res){
    res.send('GOOD');
});

app.get('/artists', function(req, res){
    res.send(artists);
});

app.get('/artists/:id', function(req, res){
    const artist = artists.find(artist => artist.id === Number(req.params.id));
    res.send(artist);
});

app.post('/artists', function(req, res){
    console.log(req.body);
});

app.listen(3001, () => {
    console.log('Server started...');
});
