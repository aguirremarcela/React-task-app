import TaskList from './TaskList'
import TaskForm from './TaskForm'
import {tasks as data} from './tasks'
import { useState,useEffect } from 'react';
 function App(){
  const [tasks, settasks]= useState([]);
  //aca cuando se cargue el componente lo settea
  useEffect(()=>{
      settasks(data)
  },[]);

  function createTask(newtask){
    settasks([...tasks, {
      id:tasks.length,
      title:newtask.title,
      description:newtask.description
    }]);
  }
  return( <>
    <TaskForm createTask={createTask}/>
    <TaskList tasks={tasks}/>
  </>)
}
export default App