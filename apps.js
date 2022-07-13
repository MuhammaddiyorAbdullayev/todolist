 
var array = ["Learning python" , "Learning JavaScript" , "Learning Sql"]

var Btn = document.getElementById('btn')



var globalid = -1;


function InitialList() {
    
    var Text = document.getElementById('text');

    var table = ''

    for (let i = 0; i < array.length; i++) {
        table =  table + `
        <div class = "matn">
        <li>${array[i]}</li>
        <p>
        <button onclick = "Edite(${i})" id = "Edite" >
        <i class="fas fa-edit"></i>
        </button>
        <button onclick ='Delete(${i})'>
        <i class="fas fa-trash-alt"></i>
        </p>
        </div>`

    }
    Text.innerHTML = table
}

function Delete(id) {
    array.splice(id , 1)
    InitialList()
}

function Add() {
    var Word = document.getElementById('inp').value;
    if(Word.value = ''){
        alert('Inputni toldiring ')
    }
    else{
        if (globalid === -1) {
            array.unshift(Word.value);
            InitialList();
        }
        else{
            array[globalid] = Word.value;
            globalid = -1;
            Btn.textContent = 'Add'
            Word.value = ''
            InitialList();
        }
    }
}

function addNew() {
    var Word = document.getElementById('todo');

    array.push(Word.value);
    Word.value = ''
    InitialList();
}

function ClearAll() {
    // array.splice(0)
    array.length = 0
    InitialList()
    
}

function Edite(i) {
    var Word = document.getElementById('todo');
    Word.value = array[i]
    Btn.textContent = 'Save'
    globalid = i
}

InitialList()
