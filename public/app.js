// get element by id list and todo add btn 
var list=document.getElementById('list')
var Todo=document.getElementById('C_Todo')
// get element by id list and todo add btn end here

// get data of database from firebase database start here
firebase.database().ref('ToDo/').on('child_added',function(data){
    var li=document.createElement('li')
    var text=document.createTextNode(data.val().value)
    text.value
    li.appendChild(text)

    // crate btns
//create delte btn start here
var dlt=document.createElement('button')
var dlttext=document.createTextNode('Delete')
dlt.appendChild(dlttext)
dlt.setAttribute('onclick','DltBtn(this)')
dlt.setAttribute('id',data.val().key)
dlt.setAttribute('class','rounded btn btn-outline-success ')
// created dlt btn end here
//created edit btn start here
var edit=document.createElement('button')
var edittext=document.createTextNode('Edit')
edit.appendChild(edittext)
edit.setAttribute('onclick','editBtn(this)')
edit.setAttribute('id',data.val().key)
edit.setAttribute('class','rounded btn btn-outline-success')
//created edit btn end here

// add btns in li
li.appendChild(dlt)
li.appendChild(edit)
// add btns in ul's li
var ul=document.getElementById('ul')
ul.appendChild(li)
})

// add function in add todo btn start here
function todo(){
    // firebase database start
var key=firebase.database().ref().push().key
var todo_obj={
    value:Todo.value,
    key:key
}
firebase.database().ref('ToDo/').child(key).set(todo_obj)
    // firebase database end
Todo.value=""
}
// add function in add todo btn end here

// DltAll btn start here
function dltall(){
    if(list.innerHTML==""){
        alert('Nothing to delete')
    }
    else{
        list.innerHTML=""
    }
    firebase.database().ref('ToDo/').remove()
}
// DltAll btn end here
// Delete btn start
function DltBtn(para){
firebase.database().ref('ToDo').child(para.id).remove()
para.parentNode.remove()
}
// delete btn end

// edit btn start
function editBtn(para){
var editval=prompt('Edit ToDo',para.parentNode.firstChild.nodeValue)
var editTodo={
    value:editval,
    key:para.id
}
firebase.database().ref('ToDo/').child(para.id).set(editTodo)
para.parentNode.firstChild.nodeValue=editval
}
// edit btn end

