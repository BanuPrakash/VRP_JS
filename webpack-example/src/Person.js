export default class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }
}

