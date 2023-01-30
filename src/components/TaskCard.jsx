import {useContext}from 'react';
import{TaskContext} from '../context/TaskContetx'
function TaskCard({ task}) {
    const {deleteTask}=useContext(TaskContext);
  return (
      <div className='bg-slate-400 rounded-md p-4'>
        <h1 className='text-center text-xl font-bold'>{task.title}</h1>
        <p className='text-gray-50 text-sm'>{task.description}</p>
        <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400'  onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
  );
}
export default TaskCard;
