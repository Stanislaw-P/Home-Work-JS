let colorInput = document.getElementById('changeColorInput');
let errorMessage = document.getElementById('errorMessage')
let changeColorButton = document.getElementById('changeColorButton');

const regex = /^#([0-9A-Fa-f]{3}){1,2}$|^[a-zA-Z]+$/;

changeColorButton.onclick = function (){
    if(regex.test(colorInput.value.trim())){
        document.body.style.backgroundColor = colorInput.value;
        errorMessage = '';
    }
    else{
        errorMessage.textContent = 'Некорректный цвет!';
    }
}