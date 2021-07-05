// Source: https://www.udemy.com/course/nodejs-full-guide/learn/lecture/18386426

console.log(process.argv); // process - глобальний об'єкт
// argv - містить параметри, які додаються в командній стрічці
// наприклад пишемо для запуску: node console.js message=hello spec
// в результаті:
// [
//   '/home/oleksandr/.nvm/versions/node/v12.0.0/bin/node',
//   '/home/oleksandr/Projects/learning/nodejs/console.js',
//   'message=hello',   - наш параметр
//   'spec'             - наш параметр
// ]

function consoleToJSON() {
  const c = {};
  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i].split('=');
    c[arg[0]] = arg[1] ? arg[1] : true;
  }
  return c;
}

console.log(consoleToJSON());
