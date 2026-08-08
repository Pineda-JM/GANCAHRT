/*
========================================================
RESEARCH GANTT CHART
GPS-BASED HIKER TRACKING & MONITORING SYSTEM

PROJECT PERIOD:
03 AUGUST 2026 - 22 AUGUST 2026

CURRENT PROJECT DATE:
10 AUGUST 2026
========================================================
*/


const tasks = [

    {
        date: "03 Aug",
        task: "Review Chapter III requirements and align methodology",
        progress: 100,
        status: "completed"
    },

    {
        date: "04 Aug",
        task: "Revise Research Design",
        progress: 100,
        status: "completed"
    },

    {
        date: "05 Aug",
        task: "Revise System Development Approach",
        progress: 100,
        status: "completed"
    },

    {
        date: "06 Aug",
        task: "Identify hardware and software components",
        progress: 100,
        status: "completed"
    },

    {
        date: "07 Aug",
        task: "Develop System Architecture / Block Diagram",
        progress: 100,
        status: "completed"
    },

    {
        date: "08 Aug",
        task: "Revise Research Instrument / Evaluation Criteria",
        progress: 100,
        status: "completed"
    },

    {
        date: "09 Aug",
        task: "Prepare GPS accuracy testing procedure",
        progress: 80,
        status: "completed"
    },

    {
        date: "10 Aug",
        task: "Prepare LoRa communication-range testing procedure",
        progress: 50,
        status: "current"
    },

    {
        date: "11 Aug",
        task: "Prepare offline communication testing using Meshtastic",
        progress: 35,
        status: "partial"
    },

    {
        date: "12 Aug",
        task: "Develop Functionality testing procedure",
        progress: 30,
        status: "partial"
    },

    {
        date: "13 Aug",
        task: "Develop Reliability testing procedure",
        progress: 25,
        status: "partial"
    },

    {
        date: "14 Aug",
        task: "Develop Portability evaluation procedure",
        progress: 20,
        status: "partial"
    },

    {
        date: "15 Aug",
        task: "Define testing locations and environmental conditions",
        progress: 15,
        status: "unfinished"
    },

    {
        date: "16 Aug",
        task: "Plan urban, suburban and mountainous testing",
        progress: 10,
        status: "unfinished"
    },

    {
        date: "17 Aug",
        task: "Revise data-gathering procedure",
        progress: 10,
        status: "unfinished"
    },

    {
        date: "18 Aug",
        task: "Revise data recording and analysis procedure",
        progress: 5,
        status: "unfinished"
    },

    {
        date: "19 Aug",
        task: "Align Chapter III procedures with research objectives",
        progress: 5,
        status: "unfinished"
    },

    {
        date: "20 Aug",
        task: "Check methodology against Scope and Limitations",
        progress: 0,
        status: "unfinished"
    },

    {
        date: "21 Aug",
        task: "Complete Chapter III proofreading and formatting",
        progress: 0,
        status: "unfinished"
    },

    {
        date: "22 Aug",
        task: "Final Chapter III revision and submission",
        progress: 0,
        status: "unfinished"
    }

];


/*
========================================================
UPDATE STATISTICS
========================================================
*/

function updateStatistics() {

    const completed =
        tasks.filter(t => t.progress >= 80).length;

    const current =
        tasks.filter(t => t.status === "current").length;

    const partial =
        tasks.filter(
            t => t.progress > 0 && t.progress < 80
        ).length;


    const total =
        tasks.reduce(
            (sum, task) => sum + task.progress,
            0
        );


    const overall =
        Math.round(total / tasks.length);


    document.getElementById(
        "completedCount"
    ).textContent = completed;


    document.getElementById(
        "progressCount"
    ).textContent = current;


    document.getElementById(
        "partialCount"
    ).textContent = partial;


    document.getElementById(
        "overallProgress"
    ).textContent = overall + "%";
}


/*
========================================================
DAILY PROGRESS LIST
========================================================
*/

function createDailyList() {

    const container =
        document.getElementById("dailyList");

    tasks.forEach(task => {

        const item =
            document.createElement("div");

        item.className =
            "daily-item " + task.status;


        item.innerHTML = `

            <div class="daily-left">

                <div class="daily-date">
                    ${task.date}
                </div>

                <div class="daily-task">
                    ${task.task}
                </div>

            </div>

            <div class="daily-percent">
                ${task.progress}%
            </div>

        `;

        container.appendChild(item);

    });

}


/*
========================================================
CURRENT DATE
========================================================

For your current Gantt schedule we intentionally use
10 AUGUST 2026 as the active research date.
========================================================
*/

function setCurrentDate() {

    const dateElement =
        document.getElementById("currentDate");

    dateElement.textContent =
        "10 AUG 2026";

}


/*
========================================================
START
========================================================
*/

updateStatistics();

createDailyList();

setCurrentDate();
