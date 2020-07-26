var list = document.getElementById('list');
var submit = document.getElementById('submit')

function addTodo(){
    
    var todo_item = document.getElementById('todo-item');
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value)
    li.setAttribute('class','list')

    var delBtn = document.createElement('button');
    var delText = document.createTextNode('DELETE');
    
    var editBtn = document.createElement('button');
    var editText = document.createTextNode('EDIT');
    

    li.appendChild(liText)

    delBtn.appendChild(delText)
    delBtn.setAttribute('class','btn-del')
    delBtn.setAttribute('onclick','deleteItem(this)')

    editBtn.appendChild(editText)
    editBtn.setAttribute('class','btn-edit')
    editBtn.setAttribute('onclick','editItem(this)')


    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)
    submit.appendChild(submitBtn)

    todo_item.value = ""
    console.log(li)
    submitBtn.style.display = 'block';
}

function deleteItem(e){
    e.parentNode.remove();
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt('Enter Edit Value',val)
    e.parentNode.firstChild.nodeValue = editValue;
}

var submitBtn = document.createElement('button');
var submitText = document.createTextNode('SUBMIT')

submitBtn.appendChild(submitText)   
submitBtn.setAttribute('class','btn-submit')
submitBtn.setAttribute('onclick','submitItem(this)')

function submitItem(e){
    alert('Your Items are submitted😍 Please visit to the counter for payment...🙂')
    list.innerHTML = "";
    e.remove();
}