// Завдання 5. Масив об'єктів, цикл for...of і деструктуризація

const users = [
  { name: 'Анна', email: 'anna@example.com', age: 22 },
  { name: 'Богдан', email: 'bohdan@example.com', age: 25 },
  { name: 'Вікторія', email: 'viktoria@example.com', age: 19 },
];

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}