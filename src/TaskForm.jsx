import { useState } from "react";

function TaskForm({createTask}){
    const [title,setTitle]=useState("");
    const [description,setdescription]=useState("");
    const guardarTask= (e)=> {
        e.preventDefault();
        const newtask={title,description};
        createTask(newtask);
    }
    return(
        <form onSubmit={guardarTask}>
          <input type="text" placeholder="Escribi tu tarea" onChange={(e)=> setTitle(e.target.value)}/> 
          <input type="text" placeholder="Descripcion" onChange={(e)=> setdescription(e.target.value)}/> 
          <button>Guardar</button>
        </form>
    );
}
export default TaskForm