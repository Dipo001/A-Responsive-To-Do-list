const inputD = document.getElementById('input');
const listC = document.getElementById('list');

function addClick(){
    if(inputD.value === ''){
    alert('Input is invalid');
    }
    else{
    let li = document.createElement('li');
    li.innerHTML = inputD.value;
    li.style.backgroundColor = "grey"
    li.style.padding = "15px"
    li.style.marginBottom = "10px"
    listC.appendChild(li);
    }
    inputD.value = ''
}