import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContetx'
function TaskForm(){
    const [title,setTitle]=useState("");
    const [description,setdescription]=useState("");
    const {createTask}= useContext(TaskContext);
    //ahora value tiene el arreglo task, deleteTask , createTask.
    const guardarTask= (e)=> {
        e.preventDefault();
        const newtask={title,description};
        createTask(newtask);
        setTitle('');//aca el estado esta en vacio
        setdescription("");
        //para q se limpien los input ponemos los value ={title}
    }
    return(
        <form onSubmit={guardarTask}>
          <input type="text" placeholder="Escribi tu tarea" onChange={(e)=> setTitle(e.target.value)} value={title}/> 
          <input type="text" placeholder="Descripcion" onChange={(e)=> setdescription(e.target.value)}  value={description}/> 
          <button>Guardar</button>
        </form>
    );
}
export default TaskForm