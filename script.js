var items = 0;
var btnSave = document.querySelector('#btnSave');
function onSaveClick(e) {
    e.preventDefault();
    items++;
    var id = 'div${items}';
    var noteInput = document.getElementById("note").value,
        dateInput = document.getElementById("date").value,
        timeInput = document.getElementById("time").value;

    for (var index = 0; index < noteInput.length; index++) {


    }
    var div = document.createElement('div');
    div.id = id;

    var note = document.createElement('p');
    var date = document.createElement('p');
    var time = document.createElement('p');
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    document.body.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(div);
    div.className = 'new_note';
    ul.id = 'myUL';
    var del_btn = document.createElement('button');
    del_btn.innerHTML = 'X';

    note.className = 'p_data';
    date.className = 'p_data';
    time.className = 'p_data';

    var noteData = document.createTextNode(noteInput);
    note.appendChild(noteData);
    var dateData = document.createTextNode(dateInput);
    date.appendChild(dateData);
    var timeData = document.createTextNode(timeInput);
    time.appendChild(timeData);
    div.appendChild(note);
    div.appendChild(del_btn);
    div.appendChild(date);
    div.appendChild(time);
    del_btn.onclick = function () {
        var myobj = document.getElementById(id);
        myobj.remove();
    }
}
var input = document.getElementById("myInput");
input.onkeyup = function () {
    var filter = input.value.toUpperCase();
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].getElementsByClassName('new_note')[0].innerText;
        if (name.toUpperCase().indexOf(filter) == 0)
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }
}

btnSave.addEventListener("click", onSaveClick);
