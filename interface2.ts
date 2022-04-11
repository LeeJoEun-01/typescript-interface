interface Person2 {
  name: string,  // 꼭 있어야 되는 형태 
  age?: number,  // 없어도 되는 형태에는 ? 를 달아준다.
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({ name: "Mark", age: 39 });
hello2({ name: "Anns" });