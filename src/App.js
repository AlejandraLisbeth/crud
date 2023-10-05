
import './App.css';
import React, {useState} from 'react';
//validar campos vacios
import {isEmpty} from 'lodash'
//generar codigos
import shortid from 'shortid';



function App() {
  //para almacenar el estado de una nueva tarea
  const [task,setTask] = useState("")
  //tendremos un arreglo de tareas
  const [tasks,setTasks]=useState([])

  const addTask = (e) => {
    //para evitar que la pagine recargue por el submint usamos prevenDefault
    e.preventDefault();
    if(isEmpty(task)){
      console.log('Task empty')
      return
    }
    
    const newTask={
      //no tenemos el id de tarea no lo tenemos vamos usar el 
      //metodo shortid  el metodo generate genera un numero alfanomerico
      id:shortid.generate(),
      //task:task   pero si se llama igual me ahorro solo escribiendo solo task
      name:task
    }
  
    //vamos agregar la tarea a la coleccion de tareas q ya tenemos
    //setTasks([newTAsk]) no puedo hacer asi porq solo va a quedar siempre la ultima tarea 
    //lo q quiero es q agrege a la coleccion de task un nueva tarea
    setTasks([...tasks,newTask])
    //para limpiar el campo task
    setTask("")
  }


  return (
   <div className='container mt-5'>
      <h1>Tareas</h1>
      <hr/>
      <div className='row'>
         <div className='col-8'>
          <h4 className='text-center'>Lista de Tareas</h4>
          <ul className='list-group'>
            {
              //el map nos ayuda a recorrer todo el arreglo de tareas
              tasks.map((task)=>(
                
                <li className='list-group-item' key={task.id}>
                <span className='lead'>{task.name}</span>
                <button  className='btn btn-danger btn-sm float-rigth mx-2'>Eliminar</button>
                <button className='btn btn-warning btn-sm float-rigth '>Editar</button>
              </li>
                
                ))
             
            }
    
          </ul>
          
         </div>
         <div className='col-4'>
         <h4 className='text-center'>Formulario</h4>
         <form onSubmit={addTask}>
          <input
          type="text"
          className='form-control mb-2'
          placeholder='Ingrese la tarea...'
          onChange={(text)=>setTask(text.target.value)}
          value={task}
          />
          <button className='btn btn-dark btn-block' type='submit'>Agregar tarea</button>
         </form>
         </div>
      </div>
    </div>)
}

export default App;
