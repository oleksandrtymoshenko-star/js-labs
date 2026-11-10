// Лабораторна робота: «Аналіз оцінок студентів»

// ===== Завдання 1. Створення масиву =====
const grades = [10, 8, 12, 7, 9, 11];

console.log('Завдання 1. Оцінки студента:');
for (let i = 0; i < grades.length; i++) {
  console.log(`Оцінка ${i + 1}: ${grades[i]}`);
}
console.log(`Загальна кількість оцінок: ${grades.length}`);
console.log('');

// ===== Завдання 2. Функція підрахунку середнього бала =====
function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

console.log(`Середній бал студента: ${calculateAverage(grades)}`);

// ===== Завдання 3. Функція пошуку найвищої оцінки =====
function findMaxGrade(grades) {
  let max = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > max) {
      max = grades[i];
    }
  }
  return max;
}

console.log(`Найвища оцінка: ${findMaxGrade(grades)}`);

// ===== Завдання 4. Функція підрахунку високих оцінок =====
function countHighGrades(grades) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 10) {
      count++;
    }
  }
  return count;
}

console.log(`Кількість високих оцінок: ${countHighGrades(grades)}`);
console.log('');

// ===== Завдання 5. Виведення загального результату =====
function showResults(grades) {
  // Формуємо рядок з оцінками через кому за допомогою циклу
  let gradesText = '';
  for (let i = 0; i < grades.length; i++) {
    gradesText += grades[i];
    if (i < grades.length - 1) {
      gradesText += ', ';
    }
  }

  console.log('===== АНАЛІЗ ОЦІНОК =====');
  console.log('');
  console.log(`Оцінки студента: ${gradesText}`);
  console.log('');
  console.log(`Кількість оцінок: ${grades.length}`);
  console.log(`Середній бал: ${calculateAverage(grades)}`);
  console.log(`Найвища оцінка: ${findMaxGrade(grades)}`);
  console.log(`Кількість високих оцінок: ${countHighGrades(grades)}`);
  console.log('');
  console.log('=========================');
}

showResults(grades);