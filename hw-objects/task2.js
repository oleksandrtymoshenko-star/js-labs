// Завдання 2. Деструктуризація об'єкта book

const book = {
  title: '1984',
  author: 'Джордж Орвелл',
  year: '1949',
};

const { title, author } = book;

console.log('Назва:', title);
console.log('Автор:', author);
