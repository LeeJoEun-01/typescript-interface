interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

// class도 type처럼 사용 가능 
class Person implements IPerson1 {
  name: string;
  age?: number | undefined; //optional

  // 초기값 설정 
  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

const person: IPerson1 = new Person("MArkkkk");
person.hello();