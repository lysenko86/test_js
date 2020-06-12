// source: https://youtu.be/nyIpDs2DJ_c?t=2605



// ------------
// Базовий приклад
// ------------
class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}



// ------------
// Приклад з readonly
// ------------
class Car1 {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel // тільки в конструкторі ми можемо змінити значення readonly
    }
}

// Коротший запис
class Car2 {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {} // Зробить те саме - створить пропертю model і задасть їй значення з конструктора і це буде readonly
}



// ------------
// Модифікатори: protected, private, public. Якщо модифікатор не вказати - то ставиться по дефолту public
// protected - поля доступні для батьківського класу і всіх нащадків
// private - доступні тільки для того класу, де були заведені
// ------------
class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
        //this.go() // Помилка, бо private пропертя
    }
}

const cat = new Cat()
//cat.voice // Інстанс класу не має доступу до protected пропертів
cat.setVoice('test')
console.log(cat.color)



// ------------
// Абстрактні класи - потрібні на етапі розробки, щоб від них наслідуватись
// містить в собі асбтрактні методи, які мають бути реалізовані у класів, які будуть наслідуватись від цього класу
// ------------
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info'
    }
}
