import { createContext , useState, useEffect} from "react";
import {tasks as data} from '../data/tasks';
export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, settasks]= useState([]);
    function createTask(newtask){
        settasks([...tasks, {
          id:tasks.length,
          title:newtask.title,
          description:newtask.description
        }]);
    }
    function deleteTask(taskID){
        // tasks.filter(task=> task.id!==taskID);
         //esto me dice que si es distinto al id que le paso le vuelve agregar a tasks y sino no lo hace pero debo actualizar tasks
         settasks(tasks.filter(task=> task.id!==taskID))
    }
     //aca cuando se cargue el componente lo settea
  useEffect(()=>{
    settasks(data)
    },[]);
  return (<TaskContext.Provider value={{
    tasks,
    deleteTask,
    createTask: createTask
  }}>{props.children}</TaskContext.Provider>);
}

