// source: https://youtu.be/nyIpDs2DJ_c
// Дженерік типи



const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5] // Що це за об'єкт Array і з чого він складається <number>
const arrayOfStrings: Array<string> = ['Hello', 'Vladilen']

// Щоб функції, яка працює з різними типами даних вказати корректний тип - юзаєм дженеріки
function reverse<T>(array: T[]): T[] {// Дана ф-ція працює з типом <T>, приймає параметром масив з типом T[] і повертає певний масив з типом T[]
// Такий формат дозволяє підстроюватись динамічно під ті значення, які ми передаємо
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
