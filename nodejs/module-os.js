// source: https://www.udemy.com/course/nodejs-full-guide/learn/lecture/18386320#overview
// documentation: https://nodejs.org/dist/latest-v14.x/docs/api/os.html

const os = require('os'); // модуль для роботи з операційною системою в node.js

// Платформа
console.log(os.platform()); // linux

// Архітектура
console.log(os.arch()); // x64

// Загальна інфа по процам
console.log(os.cpus());

// Вільна пам'ять
console.log(os.freemem());

// Скільки всього пам'яті
console.log(os.totalmem());

// Коренева папка на компі
console.log(os.homedir());

// Скільки часу система вже працює
console.log(os.uptime());
