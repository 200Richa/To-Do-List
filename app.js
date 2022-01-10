const ol = document.querySelector('ol');
const form = document.getElementById("todo-form");
const resetBtn = document.querySelector('#reset-btn');
const deleteBtn = document.querySelector('#delete-btn');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = form.elements.todo.value
    const li = document.createElement('li');
    li.innerHTML = task;
    const done = document.createElement('button');
    done.setAttribute('class', 'done-btn btn btn-outline-dark btn-sm');
    done.innerHTML = 'Done';
    done.addEventListener('click', (e)=> {
        const li = done.parentNode;
        // console.log(li.textContent);
        li.style.textDecoration = 'line-through';
        e.stopPropagation();
    })
    li.append(done);
    li.setAttribute('class', 'list-group-item item');
    li.addEventListener('click', (e) => {
        const liClass = li.getAttribute('class');
        if (liClass === 'list-group-item item active')
        {
            li.setAttribute('class','list-group-item item' );
            li.style.backgroundColor = '#F9D371';
            return;   
        }
        else
        {
            const liNewClass = liClass +' active'
            li.setAttribute('class', liNewClass);
            li.style.backgroundColor = '#CCD1E4';
        }
    })
    ol.append(li);
})


resetBtn.addEventListener('click', (e) => {
    // ol.remove();
    const allTasks = document.querySelectorAll('.item');
    allTasks.forEach((e)=> {
        e.remove();
    })
})

deleteBtn.addEventListener('click', (e) => {
    const delTasks = document.querySelectorAll('.active');
    delTasks.forEach((el) => {
        el.remove();
    })
})



