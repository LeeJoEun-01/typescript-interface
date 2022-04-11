interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: 'Mark',
  age: 39,
  hello: function (): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

const p42: Person4 = {
  name: 'Anna',
  age: 39,
  // 여기에는 this: Person4를 쓰지 않아도 되지만 
  // 만약 가져오고자 하는 this가 다른 경우 이렇게 사용한다.
  hello(this: Person4): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

//arrow function 안에는 this 사용 불가 
// const p43: Person4 = {
//   name: 'Mark',
//   age: 39,
//   hello: (): void => {
//     console.log(`안녕하세요! ${this.name} 입니다.`);
//   }
// }

p41.hello();
p42.hello();

