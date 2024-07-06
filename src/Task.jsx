import { useState } from 'react'
function Task ({todoList, setTodoList}) {

      const [newTask, setNewTask] = useState("");

     const handleChange = (event) =>{
     setNewTask(event.target.value);
  }

  const addTask = () =>{
    const taskX = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName: newTask,
      completed:false,
    }
     
    setTodoList([...todoList, taskX]);
  }


const completed = (id) =>{
   let newArray = todoList.map(x=>{
    return x.id === id ?  {...x, completed:true} : x;
   })

    setTodoList(newArray);
}
 


  const deleteTask = (id)=>{
     let newArray = todoList.filter(x=>x.id===id ? false : true)

     setTodoList(newArray)
  }

return (

        <div  className='App container'>
        
            <div className='addTask bg-danger p-2'>
                <input onChange={handleChange} className='form-control m-1' type="text" />
                <button onClick={addTask} className='btn btn-primary m-1'>add task</button>
            </div>
            <div className='list'>
            {todoList.map((data,idx)=>{  return (
                                <div key={idx} style={ {backgroundColor:data.completed ? "green" : "white"}} className='border-bottom border-danger d-flex flex-row  px-5 py-2 justify-content-between align-items-center'  >
                                <h2 className='m-2 h2'>{data.taskName}</h2>
                                <button className='btn btn-primary ' onClick={ ()=>completed(data.id)} >complete</button>
                                <button className='btn btn-primary ' onClick={  ()=>deleteTask(data.id)} >X</button>
                            </div>
            )  })}
            </div>
        </div>
)


  
}


export {Task}