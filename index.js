import { HashMap } from "./HashMap.js";

const test = new HashMap();

// Импорт класса HashMap (выбери нужный вариант в зависимости от твоей среды)
const HashMap = require('./HashMap.js'); // для Node.js
// import HashMap from './HashMap.js'; // для ES6 модулей

// Создаём экземпляр HashMap с маленькой вместимостью
const map = new HashMap(0.75, 4);

console.log("=== Начало тестов HashMap ===");

// Тест 1: Добавление элементов и вызов resize()
console.log("Тест 1: Добавление элементов и проверка resize()");
map.set('apple', 'red');
map.set('banana', 'yellow');
map.set('cat', 'gray');
console.log("После добавления 3 элементов: length =", map.length()); // Ожидаем 3
map.set('dog', 'brown'); // 4-й элемент, loadFactor = 4/4 = 1 > 0.75, должен сработать resize()
console.log("После добавления 4-го элемента: length =", map.length()); // Ожидаем 4
console.log("capacity после resize:", map.capacity); // Ожидаем 8

// Тест 2: get(key) после resize()
console.log("\nТест 2: get(key)");
console.log("get('apple'):", map.get('apple')); // Ожидаем 'red'
console.log("get('dog'):", map.get('dog')); // Ожидаем 'brown'
console.log("get('fish'):", map.get('fish')); // Ожидаем null

// Тест 3: has(key) после resize()
console.log("\nТест 3: has(key)");
console.log("has('banana'):", map.has('banana')); // Ожидаем true
console.log("has('fish'):", map.has('fish')); // Ожидаем false

// Тест 4: remove(key) после resize()
console.log("\nТест 4: remove(key)");
console.log("remove('cat'):", map.remove('cat')); // Ожидаем true
console.log("get('cat') после удаления:", map.get('cat')); // Ожидаем null
console.log("length после удаления:", map.length()); // Ожидаем 3
console.log("remove('fish'):", map.remove('fish')); // Ожидаем false
console.log("length после неудачного удаления:", map.length()); // Ожидаем 3

// Тест 5: length() после resize()
console.log("\nТест 5: length()");
console.log("length():", map.length()); // Ожидаем 3

// Тест 6: clear() после resize()
console.log("\nТест 6: clear()");
map.clear();
console.log("length после clear():", map.length()); // Ожидаем 0
console.log("get('apple') после clear():", map.get('apple')); // Ожидаем null

// Тест 7: keys() после resize()
// Сначала снова добавим элементы
map.set('apple', 'red');
map.set('banana', 'yellow');
map.set('cat', 'gray');
map.set('dog', 'brown'); // Снова resize()
console.log("\nТест 7: keys()");
console.log("keys():", map.keys()); // Ожидаем ['apple', 'banana', 'cat', 'dog'] (порядок может отличаться)

// Тест 8: values() (если реализовано)
console.log("\nТест 8: values() (если реализовано)");
if (typeof map.values === 'function') {
    console.log("values():", map.values()); // Ожидаем ['red', 'yellow', 'gray', 'brown']
} else {
    console.log("values() ещё не реализован");
}

// Тест 9: entries() (если реализовано)
console.log("\nТест 9: entries() (если реализовано)");
if (typeof map.entries === 'function') {
    console.log("entries():", map.entries()); // Ожидаем [['apple', 'red'], ...]
} else {
    console.log("entries() ещё не реализован");
}

console.log("=== Конец тестов HashMap ===");