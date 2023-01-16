import {tasks as data} from './tasks'
import{useState, useEffect} from 'react'

console.log(data);
function TaskList(){
    const [tasks, settasks]= useState([]);
    //aca cuando se cargue el componente lo settea
    useEffect(()=>{
        settasks(data)
    },[])
    return(
        <div>{tasks.map(task => (<div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>))}</div>
    )
}

export default TaskList