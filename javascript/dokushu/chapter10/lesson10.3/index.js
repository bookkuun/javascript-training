const date = new Date("2022-05");

const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
console.log(firstDay.getDay());

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
console.log(lastDay.getDay());

firstDay.setDate(firstDay.getDate() + 30);
console.log(firstDay.toDateString());

firstDay.setMonth(firstDay.getMonth() + 20);
console.log(firstDay.toDateString());
