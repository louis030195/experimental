interface Person {
  name: string;
  age: number;
  sayHi: () => void;
}

class Developer implements Person {
  constructor(public name: string, public age: number, private language: string) {}

  sayHi(): void {
    console.log(`hi, i'm ${this.name}, a ${this.age}-year-old ${this.language} developer.`);
  }

  code(): void {
    console.log(`${this.name} is coding in ${this.language}...`);
  }
}

const add = (a: number, b: number): number => a + b;

console.log('hello from github typescript!');
console.log('2 + 3 =', add(2, 3));

const message: string = 'the answer to life, the universe, and everything is';
console.log(message, 42);

const numbers: number[] = [1, 2, 3, 4, 5];
console.log('array sum:', numbers.reduce((a, b) => a + b, 0));

const dev: Developer = new Developer('alice', 28, 'typescript');
dev.sayHi();
dev.code();

// async function example
const fetchData = async (url: string): Promise<string> => {
  const response = await fetch(url);
  return response.text();
};

fetchData('https://api.github.com/zen')
  .then(data => console.log('github zen:', data))
  .catch(err => console.error('error:', err));

console.log('script execution completed!');
