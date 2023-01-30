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
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-center">Crea tu tarea</h1>
        <form className="bg-zinc-400 mb-5 mt-2" onSubmit={guardarTask}>
          <input type="text" className="bg-slate-300 p-3 w-full mb-2" placeholder="Escribi tu tarea" onChange={(e)=> setTitle(e.target.value)} value={title}/> 
          <input  className="bg-slate-300 p-3 w-full mb-2" type="text" placeholder="Descripcion" onChange={(e)=> setdescription(e.target.value)}  value={description}/> 
          <button className="bg-green-500 px-2 py-1 rounded-md mb-5 hover:bg-green-400 text-center">Guardar</button>
        </form>
        </div>
    );
}
export default TaskForm