const toDopage = document.querySelector(".to-do-page");
if(toDopage){
  toDopage.onload = function(){

const tasksStorage = localStorage.getItem("tasks")
let tasks = JSON.parse(tasksStorage) || []
tasks.forEach((task,index) => {
  createTask(task.name, task.done, index)
});
document.querySelector(".addBtn").addEventListener("click",newElement);
document.querySelector("#input").addEventListener("keydown",function(e){
  console.log("gjh")
  if (e.keyCode===13) {
    newElement();
  }
});

function createTask(name, done,index) {
  let li = document.createElement("li");
  if (document.getElementById("done").checked && done) {
    li.style.display="none";
  }
  if (document.getElementById("undone").checked && !done) {
    li.style.display="none";
  }
  const labelTask = document.createElement("label");
  let inputCompleted = document.createElement("input")
  inputCompleted.type="checkbox";
  inputCompleted.checked=done;
  inputCompleted.addEventListener("change", function(event){
  tasks[index].done = event.target.checked;
  localStorage.setItem("tasks",JSON.stringify(tasks))
});
   document.getElementById("ul").appendChild(li);
   let span = document.createElement("span");
    span.className = "del-task";
    span.addEventListener("click", function(){
      tasks = tasks.filter((task,currentIndex) => {
        // const result = (currentIndex !== index)
        if(currentIndex !== index) {
          return true;
        } else return false;
      })
      document.getElementById("ul").innerText="";
      localStorage.setItem("tasks",JSON.stringify(tasks));
      tasks.forEach((task,currentIndex) => {
        createTask(task.name, task.done, currentIndex)
      });
    })
    span.innerText=String.fromCharCode(10060);
    labelTask.appendChild(inputCompleted);
    let t = document.createTextNode(name);
    labelTask.appendChild(t);
    li.appendChild(labelTask);
    li.appendChild(span);
}

function newElement() {
    let inputValue = document.getElementById("input").value;
    if (inputValue === '') {
      alert("Вы обязаны что-то написать!");
    } else {
      createTask(inputValue, false,tasks.length);
      document.getElementById("input").value = "";
      tasks.push({name:inputValue,done:false});
      localStorage.setItem("tasks",JSON.stringify(tasks))
    }
  };

  document.getElementById("done").addEventListener("change",function(event){
    const that = event.target;
    const liElements  = document.querySelector("ul").querySelectorAll("li");

  if (that.checked) {  
  liElements.forEach((task,index) => {
    if (tasks[index].done) {
    task.style.display = "none";
    }
  });
  } else {
    liElements.forEach((task,index) => {
      if (tasks[index].done) {
      task.style.display = "block";
      }
    });
  }
 changeLabelStyle(that);
  })
  document.getElementById("undone").addEventListener("change",function(event){
    const that = event.target;
    const liElements  = document.querySelector("ul").querySelectorAll("li");

  if (that.checked) {  
  liElements.forEach((task,index) => {
    if (!tasks[index].done) {
    task.style.display = "none";
    }
  });
  } else {
    liElements.forEach((task,index) => {
      if (!tasks[index].done) {
      task.style.display = "block";
      }
    });
  }
    changeLabelStyle(that);
  });

  function changeLabelStyle(that){
    const idFor = that.id;
    if (that.checked) {
      document.querySelector('label[for="'+idFor+'"]').className = "checked";
    }else{
      document.querySelector('label[for="'+idFor+'"]').className = "";
    }
  };
document.querySelector(".clear-done").addEventListener("click",function(){
  tasks = tasks.filter((task) => {
    if (task.done) {
      return false;
    } else {
      return true;
    }
  })
  localStorage.setItem("tasks",JSON.stringify(tasks));
  document.querySelector("ul").innerText="";
  tasks.forEach((task,index) => {
    createTask(task.name, task.done, index)
  });
});
document.querySelector(".clear-all").addEventListener("click",function(){
  tasks = [];
  localStorage.setItem("tasks",JSON.stringify(tasks));
  document.querySelector("ul").innerText="";
})
  }
}



