let btnClick = document.querySelector('#btn-click');
let todoBox = document.querySelector('.todo-box');

btnClick.addEventListener('click', ()=>{
    let task = document.querySelector('#task').value;
    let div = document.createElement('div');
    if(task!==''){

        let btn = document.createElement('button');
        btn.innerText = "DEL";
        btn.setAttribute('id', 'del-btn');
        
        div.setAttribute('class', 'div-box');
        let h3 = document.createElement('h3');
        todoBox.appendChild(div);
        
        document.querySelector('#task').value = "";
        h3.innerText = `${task}`;
        
        div.appendChild(h3);
        div.appendChild(btn);
    }else{
        alert("Please Enter Task!");
    }

});

todoBox.addEventListener('click', (event) => {
    if (event.target.id === 'del-btn') {
        event.target.closest('.div-box').remove();
    }
});