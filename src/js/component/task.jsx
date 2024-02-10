import React, { useState } from 'react'


export const Task = () => {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    console.log(task)

    console.log(taskList)

    function createList(e) {
        if (e.key === "Enter") {
            setTaskList(taskList.concat(task));
            setTask("");
        }



    }

    return (
        <div>

            <input type="text" className="task-inputs" placeholder="what needs to be done?" onKeyDown={createList} onChange={(e) => setTask(e.target.value)} value={task} />
            <div>
                <div>
                    <ul>
                    {taskList.map((item, index) =>  <li key={index}>{item}</li> )}
                    </ul>
                </div>
            </div>
        </div>






    )
}


export default Task


// {taskList.map((item, index) => { <li key={index}>{item}</li> })}