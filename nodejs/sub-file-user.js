const user = {
  name: 'Elena',
  age: 25
};

const user2 = { // Локальна змінна НЕ експортована, внутрішня, тільки для модуля
  name: 'Igor'
}

//module.exports = user; // експорт модуля

module.exports = { // експорт модуля
  user: user,
  sayHello() {
    console.log('Hello');
  }
}
