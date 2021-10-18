class Father {
    constructor() {
        this.age = 10;
    }
    growUp() {
        this.age++;
    }
    eat(food) {
        return `my favourite food is ${food}, I am ${this.age}`;
    }
    static eat(food) {
        return `今天吃${food}`
    }
}

class Child extends Father {
    constructor(age, job) {
        super();
        this.age = age;
        this.job = job;
    }
    work() {
        let food = super.eat('凤梨');
        return `my job is ${this.job}, and ${food}`;
    }
    static eat(food) {
        return super.eat(food);
    }
    eat(food) {
        return super.eat(food);
    }
}

let child1 = new Child(21, 'student');
child1.growUp();
console.log('age', child1.age);
console.log(child1.eat('烤鸡'));
console.log(Child.eat('猪蹄'));
console.log(Child.prototype.__proto__ === Father.prototype);
console.log(Child.__proto__);