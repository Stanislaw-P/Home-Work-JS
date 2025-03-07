function validateForm() {
	let isValid = true 

	// 1. Валидация имени
	let name = document.getElementById('name').value
	let nameError = document.getElementById('nameError')
	if (name.trim() === '') {
		nameError.textContent = 'Обязательное поле!'
		isValid = false
	} else if (name.length < 5) {
		nameError.textContent = 'Имя должно содержать больше 5 символов!'
		isValid = false
	} else {
		nameError.textContent = '' 
	}

	// 2. Валидация email
	let email = document.getElementById('email').value
	let emailError = document.getElementById('emailError')
	if (email.trim() === '') {
		emailError.textContent = 'Обязательное поле!'
		isValid = false
	} else if (!isValidEmail(email)) {
		emailError.textContent = 'Введите корректный email!'
		isValid = false
	} else {
		emailError.textContent = ''
	}

	// 3. Валидация пароля
	let password = document.getElementById('password').value
	let passwordError = document.getElementById('passwordError')
	if (password.trim() === '') {
		passwordError.textContent = 'Обязательное поле!'
		isValid = false
	} else if (password.length < 8) {
		passwordError.textContent = 'Пароль должен содержать не менее 8 символов!'
		isValid = false
	} else {
		passwordError.textContent = ''
	}

	return isValid 
}

function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}
