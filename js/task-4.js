function calculate() {
	const num1 = document.getElementById('num1').value
	const num2 = document.getElementById('num2').value
	const operation = document.getElementById('operation').value
	const resultElement = document.getElementById('result')
	const errorElement = document.getElementById('error')

	// Сбросим сообщения об ошибках
	errorElement.textContent = ''
	resultElement.textContent = ''

	// Проверка на пустые поля и нечисловые значения
	if (num1 === '' || num2 === '' || isNaN(num1) || isNaN(num2)) {
		errorElement.textContent =
			'Пожалуйста, введите корректные числа в оба поля.'
		return
	}

	const number1 = parseFloat(num1)
	const number2 = parseFloat(num2)
	let result

	// Выполнение операции в зависимости от выбора
	switch (operation) {
		case 'add':
			result = number1 + number2
			break
		case 'subtract':
			result = number1 - number2
			break
		case 'multiply':
			result = number1 * number2
			break
		case 'divide':
			if (number2 === 0) {
				errorElement.textContent = 'Деление на ноль невозможно.'
				return
			}
			result = number1 / number2
			break
	}

	resultElement.textContent = 'Результат: ' + result
}
