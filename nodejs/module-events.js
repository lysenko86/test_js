// source: https://www.udemy.com/course/nodejs-full-guide/learn/lecture/18386330#overview
// documentation: https://nodejs.org/dist/latest-v14.x/docs/api/events.html

const EventEmitter = require('events'); // модуль для роботи з івентами в node.js

class Logger extends EventEmitter {
// Наслідування від EventEmitter дає зразу 2 методи ".on()" та ".emit()"
  log(message) { // Реалізуємо якийсь власний метод, з якимсь одним параметром "message"
    console.log('Просто виконання методу, message = ', message);
    this.emit('message', `${message} ${Date.now()}`); // звертаємось до батьківського методу
    // Перший параметр - назва івента, яку ми хочемо заемітити
    // Другий параметр - дані, які ми хочемо передати
  }
};

const logger = new Logger();

logger.on('message', data => { // звертаємось до батьківського методу - підписуємось на івент "message"
// Перший параметр - назва івента, яку ми хочемо слухати
// Другий параметр - дані, що передаються в методі this.emit(..., data)
  console.log('Спрацювання по підписці на подію, data:', data)
});
// Важлива послідовність - спочатку підписатись на івент, а потім викликати, інакше не спрацює

logger.log('Hello');
logger.log('Hello');
logger.log('Hello');
