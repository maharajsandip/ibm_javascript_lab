function addTask() {
    const input_todo_task = document.getElementById('taskInput');
    const taskText = input_todo_task.value.trim();

    if (taskText !== "") {
        const ul_todoList = document.getElementById('todoList');

        // <li>todo task<li>
        const li_new_task = document.createElement('li');

        // <span> new_task </span>
        const new_task_span = document.createElement('span');
        new_task_span.textContent = taskText;

        // create edit and delete buttons
        const btn_edit = document.createElement('button');
        btn_edit.textContent = 'Edit';
        btn_edit.onclick = () => editTask(new_task_span); 

        const btn_delete = document.createElement('button');
        btn_delete.textContent = 'Delete';
        btn_delete.onclick = () => removeTask(li_new_task);

        // add the task to the <ul>
        li_new_task.appendChild(new_task_span);
        li_new_task.appendChild(btn_edit);
        li_new_task.appendChild(btn_delete);
        
        ul_todoList.appendChild(li_new_task)

        input_todo_task.value = '';
    } else {
        alert("Please enter a task");
    }
}

function editTask(span) {
    let x = prompt('Edit your Task', span.value);

}
