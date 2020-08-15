var list=document.getElementById('list')

function todo(){
   

var Todo=document.getElementById('C_Todo')
    // li
    if(Todo.value==" "){
        alert('Nothing To Add')
    }
    else{
var li=document.createElement('li')
var text=document.createTextNode(Todo.value)
text.value
li.appendChild(text)

 // firebase database
    firebase.database().ref('ToDo/').push(Todo.value)
//firebase dtabase end here

// crate btns
// delte btn
var dlt=document.createElement('button')
var dlttext=document.createTextNode('Delete')
dlt.appendChild(dlttext)
dlt.setAttribute('onclick','DltBtn(this)')
dlt.setAttribute('class','rounded btn btn-outline-success ')
// edit btn
var edit=document.createElement('button')
var edittext=document.createTextNode('Edit')
edit.setAttribute('onclick','editBtn(this)')
edit.setAttribute('class','rounded btn btn-outline-success')


edit.appendChild(edittext)

li.appendChild(dlt)
li.appendChild(edit)
// ul
var ul=document.getElementById('ul')
ul.appendChild(li)
    }
Todo.value=""
}

function dltall(){
    if(list.innerHTML==""){
        alert('Nothing to delete')
    }
    else{
        list.innerHTML=""
    }
}
function DltBtn(para){
para.parentNode.remove()
}
function editBtn(para){
var editval=prompt('Edit ToDo',para.parentNode.firstChild.nodeValue)
para.parentNode.firstChild.nodeValue=editval
}
