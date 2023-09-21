// <=========================FizzBuzz===================================>

function fizzbuzz(n) {
  return Array.from({ length: n }, (_, i) => {
    i += 1;
    let result = "";

    if (i % 3 === 0) {
      result += "Fizz";
    }

    if (i % 5 === 0) {
      result += "Buzz";
    }
    return result || i;
  });
}
console.log(fizzbuzz(15));
// [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",];

// <============================Docker================================>

// Основні функції для створення та запуску контейнера

const createContainer = (imagePath, containerConfig) => {
  // 1. Створюємо кореневу файлову систему контейнера
  const containerRootFS = createFilesystem();

  // 2. Копіюємо образ в кореневу файлову систему контейнера
  copyImageToContainer(imagePath, containerRootFS);

  // 3. Створюємо мережевий інтерфейс для контейнера
  const networkInterface = createNetworkInterface();

  // 4. Створюємо ізольоване середовище для процесу контейнера
  const containerProcess = createIsolatedEnvironment(
    containerRootFS,
    networkInterface
  );

  // 5. Додаткові налаштування:
  //    - Налаштування мережі
  configureContainerNetwork(networkInterface, containerProcess);
  //    - Встановлення обмежень ресурсів
  configureResourceLimits(containerProcess);

  // 6. Запускаємо процес контейнера
  startContainer(containerProcess);

  // 7. Виконання користувацьких команд
  if (containerConfig.commands) {
    containerConfig.commands.forEach((command) => {
      executeUserCommand(containerProcess, command);
    });
  }
};

// Додаткові функції та змінні

const createFilesystem = () => {
  // Використовуємо API операційної системи для створення кореневої файлової системи
  // mount, mkdir і ін.
  // Повертаємо шлях до кореневої файлової системи контейнера
};

const copyImageToContainer = (imagePath, containerRootFS) => {
  // Використовуємо API операційної системи для копіювання зображення в кореневу файлову систему контейнера
  // cp, tar і ін.
};

const createNetworkInterface = () => {
  // Використовуємо API операційної системи для створення мережевого інтерфейсу
  // Створюємо віртуальні мережеві пристрої, налаштовуємо маршрутизацію і інше
  // Повертаємо інформацію про мережевий інтерфейс
};

const configureContainerNetwork = (networkInterface, containerProcess) => {
  // Налаштовуємо мережеві параметри контейнера, наприклад, налаштування IP-адреси та портів
  // Використовуємо API операційної системи для налаштування мережі
};

const configureResourceLimits = (containerProcess) => {
  // Встановлюємо обмеження на ресурси для контейнера (CPU, пам'ять, дисковий простір)
  // Використовуємо cgroups або аналогічні механізми
};

const createIsolatedEnvironment = (containerRootFS, networkInterface) => {
  // Використовуємо API операційної системи для створення ізольованого середовища
  // Налаштовуємо namespaces, cgroups, встановлюємо кореневу файлову систему та мережевий інтерфейс
  // Повертаємо інформацію про середовище виконання контейнера
};

const startContainer = (containerProcess) => {
  // Використовуємо API операційної системи для запуску процесу в контейнері
  // exec, chroot та інші.
};

const executeUserCommand = (containerProcess, command) => {
  // Виконання користувацької команди в контейнері
  // Використовуємо системні виклики для виконання команди в ізольованому середовищі
};

// Основна функція, яка буде викликатися для створення та запуску контейнера
const main = () => {
  const imagePath = "path/to/container/image";
  const containerConfig = {
    commands: ["npm start", "my_custom_command", "another_command"],
    // Інші параметри конфігурації контейнера, такі як порти, обмеження і т.д.
  };
  createContainer(imagePath, containerConfig);
};
