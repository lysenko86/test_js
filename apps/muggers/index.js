/*
	source: https://www.youtube.com/watch?v=MaxJ6RdEXVI&list=PLevjgbzdU8UwZbQbiPR4GQcwdkNxDUeUc
	stack: nodejs, express, nodemon, bodyParser, mongodb, mongoose, Postman, Robo 3T, React, Redux
	npm install -g nodemon
	start ---> nodemon index.js

	source of react: https://www.youtube.com/watch?v=kOFdpM7MNDc&list=PLevjgbzdU8UxfbRrLb_ILGXRAHbeJT7w2
*/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost/muggers-db', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use('/api', require('./api'));

app.listen(4000, () => {
	console.log('Server started on port 4000...');
});
