let addItemForm = document.getElementById('addItemForm')
let newItemInput = document.getElementById('newItem')
let addButton = document.getElementById('addButton')
let itemList = document.getElementById('itemList')
let errorMessage = document.getElementById('errorMessage')

addButton.addEventListener('click', function () {
	let newItemText = newItemInput.value.trim() 

	if (newItemText === '') {
		errorMessage.textContent = 'Пожалуйста, введите текст!'
		return 
	} else {
		errorMessage.textContent = '' 
	}

	let newListItem = document.createElement('li')
	newListItem.textContent = newItemText

	itemList.appendChild(newListItem)

	newItemInput.value = ''
	newItemInput.focus() 
})
