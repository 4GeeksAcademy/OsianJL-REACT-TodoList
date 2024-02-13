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
                <input type="text" className="input-task" 
                placeholder="what needs to be done?" onKeyDown={createList} 
                onChange={(e) => setTask(e.target.value)} value={task} />

                <div>
                    <ul>
                        {taskList.map((item, index) =>

                        (<li className='list-unit' key={index}>
                            {item}<a className='close-btn' href='#'
                            onClick={() => 
                            setTaskList(taskList.filter((t, currentIndex) => 
                            index !== currentIndex))}>x</a>
                        </li>))}

                        <div className='bottomCard'>{taskList.length} items left</div>
                        <div className='bottomCard1'></div>
                        <div className='bottomCard2'></div>

                    </ul>
                </div>

            </div>

        </div>







    )

}

export default Task


