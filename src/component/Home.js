import {  useState } from 'react'
import React  from 'react'
import Task from './Task'


function Home() {
const [tasks,settasks]=useState([]);
const [title,settitle]=useState("");
const [descripation,setdescripation]=useState("");

const sumbitHandle =(e)=>{e.preventDefault();
  settitle("")
  setdescripation("")
settasks([...tasks,{title,descripation}]);
};
const DeleteTask=(index)=>{
const filterArr=tasks.filter((val,i)=>{
return i !==index;
});
settasks(filterArr);
};
  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
        <form onSubmit={sumbitHandle}>
      <input type="text" placeholder="Title" value={title} onChange={(e)=>settitle(e.target.value)}/>
      <textarea placeholder="Descripation" value={descripation} onChange={(e)=>setdescripation(e.target.value)}></textarea>
      <button className="ho" type="submit" disabled={title.length===0}  >ADD</button>
        </form>
       {tasks.map((item,index)=> (
        <Task key={index} title={item.title} descripation={item.descripation} DeleteTask={DeleteTask} index={index}/>
       ))}
    </div>

  )
}

export default Home
