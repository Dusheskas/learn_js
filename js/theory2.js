// ООП, прототипное наследование

const solider = {
   health: 400,
   armor: 100,
};

const jonh = {
   health: 100,
};

// Устаревший формат
//jonh.__proto__ = solider; // Прототип Джона - солдат

// Современный формат установки прототипа, но это тоже немного кринж
Object.setPrototypeOf(jonh, solider);

const andy = Object.create(solider); // Создаем новый объект, который будет прототипно наследоваться от солдата
