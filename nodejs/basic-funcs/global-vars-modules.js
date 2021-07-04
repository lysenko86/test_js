// source: https://www.udemy.com/course/nodejs-full-guide/learn/lecture/18386220#overview

console.log('Hello', __dirname); // абсолютний шлях до робочого каталогу
console.log('Hello', __filename); // абсолютний шлях до робочого файлу

const obj = require('./user'); // імпорт модуля

console.log('userObj >>>', obj.user);

obj.sayHello();


// Як модулі реалізовані під капотом - анонімні функції які зразу ж викликаються
(function(require, module, exports, __filename, __dirname) { // набір параметрів, які ми можемо юзати
  if (true) { // просто щоб код працював
    return;
  }
  console.log('Hello', __dirname);
  console.log('Hello', __filename);
  const obj = require('./user');
  console.log('userObj >>>', obj.user);
  obj.sayHello();
})();
