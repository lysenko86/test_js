// source: https://youtu.be/nyIpDs2DJ_c?t=1268



// ----------
// інтерфейс - певний тип даних, юзається для об'єктів, класів, містить набір полів і методів, які юзаються в цих об'єктах і класах
// ----------
interface Rect {
    readonly id: string // тільки для читання
    color?: string // не обов'язковий
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: { width: 20, height: 30 },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: { width: 10, height: 5 }
}
rect2.color = 'black'
//rect2.id = '3232' // помилка тому що це поле readonly

const rect3 = {} as Rect // Приведення до типу
const rect4 = <Rect>{} // Інший варіант запису



// ----------
// Наслідування інтерфейсів
// ----------
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: { width: 20, height: 20 },
    getArea(): number {
        return this.size.width * this.size.height
    }
}



// ----------
// Імплементація інтерфейсів в класах
// ----------
interface IClock { // Зазвичай імена інтерфейсів починаються з літери "I"
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}



// ----------
// Динамічні ключі
// ----------
interface Styles {
    //border: string
    [key: string]: string // задання динамічного ключа: сам ключ типу string і значення також типу string
}
const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}
// одним динамічним ключем ми описали всі задані стилі, їх може бути не 3 а 100 наприклад
