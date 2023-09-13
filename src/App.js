import { useState } from "react";

function App() {

  const[title,setTitle] = useState("");
  const[description,setDescription] = useState("");
  const[mainTask,setMaintask] = useState([]);
  const submitHandler = (e)=>{
    e.preventDefault()
    setMaintask([...mainTask,{title,description}])
    setTitle("")
    setDescription("")
  }

  const deleteHandler = (id)=>{
    let copyTask = [...mainTask]
    copyTask.splice(id,1)
    setMaintask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length>0){
    renderTask = mainTask.map((task,id)=>{
      return(
        <li key={id} className="list-none mb-6 gap-3">
          <div className="flex justify-between items-center">
          <h5 className="text-2xl font-semibold">{task.title}</h5>
          <h6 className="text-xl font-semibold w-2/3 text-right">{task.description}</h6>
          <button onClick={deleteHandler}
          className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
        </div>
        </li>
      )
    })
    
  }

  return (
    <>
      <h1 className="bg-black text-white text-center font-bold text-3xl py-4">My To Do List</h1>    
      <form onSubmit={submitHandler}>
        <input type="text" className="text-xl border-zinc-700 border-2 my-4 mx-3 px-2 py-2" 
        placeholder="Enter Title Here"
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
        <input type="text" className="text-xl border-zinc-700 border-2 my-4 mx-3 px-2 py-2" 
        placeholder="Enter Description Here"
        value={description}
        onChange={(e)=>{
          setDescription(e.target.value)
        }}/>
        <button className="bg-black px-4 py-2 text-white rounded-md mx-2 text-2xl">Add Task</button>
      </form>
      <hr className="mt-2"/>
      <div className="p-8 bg-slate-200 my-6">
        {renderTask}
      </div>
    </>
  );
}

export default App;
