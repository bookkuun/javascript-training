let person = { name: "bob", age: "32", male: true };

delete person.name;
console.log(person);
console.log(typeof person);
console.log(+person.age);
console.log(!person.male);
