/**
 * @function [sumNumbers]
 * @description функция складывает 2 числа
 * @param {Number} a первое число, которое будет складываться в функции
 * @param {Number} b второе число, которое будет складываться в функции
 * @returns {Number} вернет число - результат сложения двух чисел
 */
function sumNumbers(a, b){
	return a + b;
}


/**
 * @function [subtractNumbers]
 * @description функция вычитает одно число из другого, в зависимости от того, 
 * какое число больше
 * @param {Number} a первое число, которое будет будет обработано функцией вычитания
 * @param {Number} b второе число, которое будет будет обработано функцией вычитания
 * @returns {Number} вернет число - результат вычитания меньшего числа из 
 * большего или 0, если числа равны
 */
function subtractNumbers(a, b) {
	return (a >= b) ? (a - b) : (b - a); 
}


/**
 * @function [multiplyNumbers]
 * @description функция умножает 2 числа
 * @param {Number} a первое число, которое будет умножаться в функции
 * @param {Number} b второе число, которое будет умножаться в функции
 * @returns {Number} вернет число - результат умножения двух чисел
 */
function multiplyNumbers(a, b) {
	return a * b;
}

/**
 * @function [divideNumbers]
 * @description функция делит одно число из другого, в зависимости от того, 
 * какое число больше
 * @param {Number} a первое число, которое будет будет обработано функцией деления
 * @param {Number} b второе число, которое будет будет обработано функцией деления
 * @returns {Number} вернет число - результат деления большего числа на 
 * меньшее или 1, если числа равны
 */
function divideNumbers(a, b) {
	return (a >= b) ? (a / b) : (b / a);
}


/**
 * @function [mathOperation]
 * @description функция получает 3 аргумента, первые 2 - числа, 3 - оператор, 
 * показывающий, что с этими числами нужно сделать: сложить || 
 * вычесть (из большего меньшее по умолчанию) || умножить || 
 * разделить (большее на меньшее по умолчанию). 
 * Если оператор задан неверно или такого действия нет, то выведеся значение NaN
 * @param {Number} arg1 первое число для проведения математической операции
 * @param {Number} arg2 второе число для проведения математической операции
 * @param {String} operation оператор, указывающий ЧТО нужно сделать с 2-мя 
 * числами
 * @returns возвращает число результат сложения (вычитания, деления или умножения)
 * в зависимости от выбранного оператора или NaN, если указанный оператор 
 * не найден или в нем ошибка
 */


function mathOperation(arg1, arg2, operation) {
	if (operation === '+') {
		return sumNumbers(arg1, arg2);
	} else if (operation === '-') {
		return subtractNumbers(arg1, arg2);
	} else if (operation === '*') {
		return multiplyNumbers(arg1, arg2);
	} else if (operation === '/') {
		return divideNumbers(arg1, arg2);
	} else if (!operation) {
		return NaN;
	} else {
		;	// ; - пустая инструкция
	}
}









/**
 * @function [getLastDigitsOfNumber]
 * @description функция получает в качестве аргумента число и возвращает 
 * последние цифры (цифру) этого числа. для правильного склонения (в дальнейшем)
 * нам нужны числа от 0 до 20 - если число больше, то рекурсивно вызываем 
 * функцию и отбрасываем ненужные части числа ))) 
 * @param {Number} number число, которое будет транспонироваться до 20
 *  включительно
 * @returns возвращает число от 0 до 20 включительно 
 */
function getLastDigitsOfNumber(number) {
	if (number === 1) {
		return number;
	} else if (number >= 2 && number < 5) {
		return number;
	} else if (number >= 5 && number <= 20 || number === 0) {
		return number;
	} else {
		return getLastDigitsOfNumber(number % 10);
	}
}

/**
 * @function [declinationOfNumber]
 * @description функция принимает 4 аргумента, 1 - число, остальные - строки, 
 * показывающие варианты правильных склонений существительного.
 * Функция обрабатывает число и выбирает 1 правильный вариант из 3
 * @param {Number} count количество указаных предметов 
 * @param {String} one строка - первый вариант склонения существительного 
 * @param {String} two строка - второй вариант склонения существительного 
 * @param {String} five строка - третий вариант склонения существительного 
 * @returns возвращает одну из трех строк, которые были переданы в аргументах
 */
function declinationOfNumber(count, one, two, five) {
	if (getLastDigitsOfNumber(count) === 1) {
		return one;
	} else if (getLastDigitsOfNumber(count)  >= 2 && 
								getLastDigitsOfNumber(count) <= 4) {
		return two;
	} else {
		return five;
	}
}