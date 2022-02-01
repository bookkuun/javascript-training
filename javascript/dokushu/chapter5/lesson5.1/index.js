const person = {
  name: "Bob",
  age: 28,
  gender: "male",
};

if (person.gender === "male" && person.age >= 25) {
  console.log(`${person.name}は25歳以上の男性です。`);
} else {
  console.log(`${person.name}は25歳以上の男性ではありません。`);
}
