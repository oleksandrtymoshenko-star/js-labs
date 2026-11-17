// Завдання 3. Об'єднання об'єктів за допомогою spread

const car1 = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
};

const car2 = {
  brand: 'BMW',
  model: 'X5',
  owner: 'Олександр Тимошенко',
};

// властивості з car2 перезаписують однакові властивості з car1 (brand, model)
const car3 = { ...car1, ...car2 };

console.log(car3);