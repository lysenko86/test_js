/*
    source: https://www.youtube.com/watch?v=8bE_PBRriyU
    stack: nodemon, nodejs, express, mongoose, express-handlebars
    start ---> npm run dev
    start ---> npm run start
*/

const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const todoRoutes = require('./routes/todos');

const PORT = process.env.PORT || 3500;
const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(todoRoutes);

async function start() {
    try {
        await mongoose.connect('mongodb://localhost/todos-db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        app.listen(PORT, () => {
            console.log('Server works on port ', PORT);
        });
    } catch (e) {
        console.log(e);
    }
}

start();
