// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class Developer {
    name;
    age;
    language;
    constructor(name, age, language){
        this.name = name;
        this.age = age;
        this.language = language;
    }
    sayHi() {
        console.log(`hi, i'm ${this.name}, a ${this.age}-year-old ${this.language} developer.`);
    }
    code() {
        console.log(`${this.name} is coding in ${this.language}...`);
    }
}
const add = (a, b)=>a + b;
console.log('hello from github typescript!');
console.log('2 + 3 =', add(2, 3));
const message = 'the answer to life, the universe, and everything is';
console.log(message, 42);
const numbers = [
    1,
    2,
    3,
    4,
    5
];
console.log('array sum:', numbers.reduce((a, b)=>a + b, 0));
const dev = new Developer('alice', 28, 'typescript');
dev.sayHi();
dev.code();
const fetchData = async (url)=>{
    const response = await fetch(url);
    return response.text();
};
fetchData('https://api.github.com/zen').then((data)=>console.log('github zen:', data)).catch((err)=>console.error('error:', err));
console.log('script execution completed!');
