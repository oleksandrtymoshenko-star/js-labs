// Завдання 4. Додавання та видалення властивостей

const person = {
  firstName: 'Олександр',
  lastName: 'Тимошенко',
  age: 19,
};

person.email = 'oleksandr@example.com';
delete person.age;

console.log(person);