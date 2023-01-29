
import TaskCard from "./TaskCard"; 
import {useContext}from 'react';
import{TaskContext} from '../context/TaskContetx';
function TaskList(){

    const {tasks, deleteTask}=useContext(TaskContext);
    if (tasks.length===0){
        return <h1>No hay tareas </h1>
    }
    return(
        <div>{tasks.map(task => (
           <TaskCard key={task.id}task={task} deleteTask={deleteTask}/> 
        ))}
        </div>
    );
}

export default TaskList