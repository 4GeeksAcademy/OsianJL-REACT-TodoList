import React, { useState } from 'react'
// import "./index.css"


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
        <div className='container d-flex  fs-1'><span className='todos'>todos</span>
            <div className='input-div'>
                <input type="text" className="input-task" placeholder="what needs to be done?" onKeyDown={createList} onChange={(e) => setTask(e.target.value)} value={task} />

                <div>
                    <ul style={{listStyle:"none"}}>
                        {taskList.map((item, index) => <li className='list-unit' key={index}>{item}<a href='#' >x</a></li>)}
                    </ul>
                </div>

            </div>

        </div>







    )

    }

export default Task


// {taskList.map((item, index) => { <li key={index}>{item}</li> })}