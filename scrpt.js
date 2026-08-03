// ===========================
// GANTT CHART DASHBOARD
// ===========================

const addTaskBtn = document.getElementById("addTask");
const todayBtn = document.getElementById("todayBtn");
const taskCount = document.getElementById("taskCount");
const ganttBody = document.getElementById("ganttBody");

// Initial task count
updateTaskCount();

// ---------------------------
// Add Task
// ---------------------------
addTaskBtn.addEventListener("click", () => {

    const taskName = prompt("Task Name:");

    if (!taskName) return;

    const color = prompt(
        "Color (green, blue, purple, orange, red):",
        "blue"
    );

    const progress = prompt(
        "Progress (0-100):",
        "0"
    );

    const start = parseInt(prompt(
        "Start Column (1-6):",
        "1"
    ));

    const span = parseInt(prompt(
        "Duration (columns):",
        "2"
    ));

    addTask(taskName, color, progress, start, span);

});


// ---------------------------
// Function Add Task
// ---------------------------

function addTask(name, color, progress, start, span){

    const row = document.createElement("tr");

    // Task Name
    let html = `<td>${name}</td>`;

    // Timeline Columns
    for(let i=1;i<=6;i++){

        if(i===start){

            html += `
            <td colspan="${span}">
                <div class="task ${color}">
                    ${progress}%
                </div>
            </td>`;

            i += span-1;

        }else{

            html += "<td></td>";

        }

    }

    row.innerHTML = html;

    ganttBody.appendChild(row);

    updateTaskCount();

}


// ---------------------------
// Update Counter
// ---------------------------

function updateTaskCount(){

    taskCount.innerText =
        ganttBody.querySelectorAll("tr").length;

}


// ---------------------------
// Today Button
// ---------------------------

todayBtn.addEventListener("click",()=>{

    alert(
`Today's Date

${new Date().toDateString()}`
    );

});


// ---------------------------
// Double Click = Delete Task
// ---------------------------

ganttBody.addEventListener("dblclick",(e)=>{

    const row=e.target.closest("tr");

    if(!row) return;

    if(confirm("Delete this task?")){

        row.remove();

        updateTaskCount();

    }

});


// ---------------------------
// Progress Animation
// ---------------------------

const progressBar =
document.querySelector(".progress-bar");

let width=0;

const interval=setInterval(()=>{

    width++;

    progressBar.style.width=width+"%";

    if(width>=48){

        clearInterval(interval);

    }

},20);


// ---------------------------
// Hover Effect
// ---------------------------

document.querySelectorAll(".task").forEach(task=>{

    task.addEventListener("mouseenter",()=>{

        task.style.transform="scale(1.05)";
        task.style.transition=".25s";

    });

    task.addEventListener("mouseleave",()=>{

        task.style.transform="scale(1)";

    });

});


// ---------------------------
// Keyboard Shortcut
// Ctrl + N = Add Task
// ---------------------------

document.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="n"){

        e.preventDefault();

        addTaskBtn.click();

    }

});
