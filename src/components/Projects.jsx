import { useRef, useState } from 'react'

var task=[];
export default function Projects({ data,index,onDelete }) {
    const input=useRef();
    const[istask,setTask]=useState([]);
    function handleAddTask(){
        var value=input.current.value;
        task.push({title:data[index].title,task:value});
        setTask(prevs=>{
            return [...prevs,{title:data[index].title,task:value}];
        });
        input.current.value="";
    }
    function handleDelete(index){
        const upadtedTaskData=task.filter((el)=>el.title!==data[index].title);
        task=[...upadtedTaskData];
        onDelete(index);
    }
    function handleClearTask(currentTaskValue){
        console.log(currentTaskValue);
        const upadtedTaskData=task.filter(el=>{
            if(el.title===data[index].title&&currentTaskValue===el.task){
    
                    return false;
                }else{
                    return true;
                }
        });
        task=[...upadtedTaskData];
        setTask([]);
    }
    console.log(task);
    console.log(istask);
    return (
        <section className='w-full mx-auto p-8'>
            <div>
                <h1 className="mb-4" >{data[index].title}</h1>
                <p className="mb-4" >{data[index].date}</p>
                <h3 className="mb-4" >{data[index].description}</h3>
                <button  className="mb-4" onClick={()=>handleDelete(index)}>Delete</button>
            </div>
            <hr />
            <div>
                <h1 className="my-4">Task</h1>
                <input ref={input} type="text" />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div>
            {task.filter(el=>el.title.toLowerCase()===data[index].title.toLowerCase()).map((el,index)=>{
                return (<div key={index} className="flex justify-between my-3">
                    <h2>{el.task}</h2>
                    <button onClick={()=>handleClearTask(el.task)}>Clear</button>
                </div>)
            })}
            </div>
        </section>
    )
}
