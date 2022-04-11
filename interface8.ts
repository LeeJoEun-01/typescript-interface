interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Mark',
  gender: "male",
};

// readonly를 변경하려면 오류가 난다. 읽기만 가능
// p81.gender = "female";