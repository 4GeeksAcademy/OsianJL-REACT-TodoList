import React, { useState } from 'react'
// import "./index.css"
import whiteGrunge from "../../img/white-grunge.jpg"


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
        <div className='container d-flex  fs-1' style={{ background: `url(${whiteGrunge})` }}><span className='todos'>todos</span>
            <div className='input-div'>
                <input type="text" className="input-task"
                    placeholder="what needs to be done?" onKeyDown={createList}
                    onChange={(e) => setTask(e.target.value)} value={task} />

                <div>
                    <ul>
                        {taskList.map((item, index) =>

                        (<li className='listado' key={index}>
                            {item}<a className='close-btn' href='#'
                                onClick={() =>
                                    setTaskList(taskList.filter((item, myIndex) =>
                                        index !== myIndex))}>x</a>
                        </li>))}

                        <div className='bottomCard'>{taskList.length} items left</div>




                    </ul>

                </div>

            </div>
            <div className='bottomCard1'></div>
            <div className='bottomCard2'></div>
        </div>







    )

}

export default Task


