// Source: https://www.udemy.com/course/nodejs-full-guide/learn/lecture/18387416

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000; // значення порта пробуємо взяти з середовища

app.listen(PORT, () => { // працює по аналогії з результатом виконання http.createServer()
  console.log('Server was started on port', PORT);
});
