let valid = true;
let inputList = document.querySelectorAll('input');
let textArea = document.getElementById('message');

function validateForm() {
    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].value == '') {
            inputList[i].classList.add('is-invalid');
            valid = false;
        } else {
            inputList[i].classList.remove('is-invalid');
            inputList[i].classList.add('is-valid');
        }
    }
    if (textArea.value == '') {
        textArea.classList.add('is-invalid');
        valid = false;
    } else {
        textArea.classList.remove('is-invalid');
        textArea.classList.add('is-valid');
    }
    return valid;
}
