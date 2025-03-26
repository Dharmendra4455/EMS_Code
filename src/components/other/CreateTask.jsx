import {useState} from "react"
import { SetlocalStorage } from "../../utils/localStorage"
import Newtask from "./Newtask"
function CreateTask(prop){
const data=prop.data
const[Newtasks,setNewtasks]=useState({})
const[id,setid]=useState("")
const[assignemployee,setassignemployee]=useState("")
const[task_title,settask_title]=useState("")
const[task_date,settask_date]=useState("")
const[task_category,settask_category]=useState("")
const[task_description,settask_description]=useState("")
const namehandler=(e)=>{
setassignemployee(e.target.value)
setid(e.target.selectedIndex);
}
//console.log(assignemployee+id);
const taskhandler=(e)=>{
settask_title(e.target.value)
}
const Submissiondatehandler=(e)=>{
settask_date(e.target.value)
}
const Categoryhandler=(e)=>{
settask_category(e.target.value)
}

const descriptionhandler=(e)=>{
settask_description(e.target.value)
}
const Createtaskhandler=(e)=>{
e.preventDefault();
setNewtasks({task_title,task_date,task_category,task_description,new_task:true,completed:false,failed:false,active:false})
const data1=data.employee.find((item)=>item.id==id);
if(data1 && Object.keys(Newtasks).length)
{ 
  console.log(Newtasks,"Task Created")
  
  data1.tasks.task.push(Newtasks)
  data1.tasks.values.new_task +=1;
 // console.log(data1)
 localStorage.setItem('employee',JSON.stringify(data.employee))
}

}


return(<>
  <div className="mt-5">
    <form action="" onSubmit={Createtaskhandler}>
      <div className=" ml-5  flex bg-stone-950 justify-between mr-5">
        <div className=" w-6/12 h-auto bg-black-700 p-2 m-5">
          <h2 className="text-gray-50 font-bold">Task Assign To :</h2>

          <select required onChange={namehandler} className=" text-white w-full p-2 rounded bg-stone-800">
            <option>Select Employee</option>
            {
            data.employee.map((name ,id=1)=>(<option key={id} className=" text-white font-bold">{name.firstname+" "+name.lastname} </option>
            ))
            }
          </select>
          <h2 className="text-gray-50 font-bold mt-2">Task Title:</h2>
          <input required onChange={taskhandler} type="text" className="w-full text-white p-2 rounded  bg-stone-800" />
          <h2 className="text-gray-50 font-bold mt-2">Submission Date:</h2>
          <input required onChange={Submissiondatehandler} className="w-full p-2 rounded bg-stone-800 text-white"
            type="date" />
          <h2 className="text-gray-50 font-bold mt-2">Category:</h2>
          <input required onChange={Categoryhandler} type="text" placeholder="design,dev,etc"
            className="text-white round bg-stone-800 ed p-2 w-full" />

        </div>
        <div className="p-5">
          <h2 className="text-gray-50 font-bold">Description:</h2>
          <textarea required onChange={descriptionhandler}
            className=" text-white w-96 h-36 rounded bg-stone-900"></textarea><br />
          <button type="submit" className="w-96 text-gray-50 bg-green-500 font-bold p-2 rounded">Create Task</button>
        </div>
      </div>

      <div className="  text-gray-50 rounded flex justify-between m-5">

        <div className="text-xl p-2  font-bold">Employee Name</div>
        <div className="text-xl p-2  font-bold">New Task</div>
        <div className="text-xl p-2  font-bold">Active Task</div>
        <div className="text-xl p-2  font-bold">Failed Task</div>
        <div className="text-xl p-2  font-bold">Completed Task</div>
      </div>
      {
      data.employee.map((e ,id=1)=>
      (
      <div key={id} className=" bg-zinc-400 rounded flex justify-between m-5 ">
        <div className="text-xl p-2   font-bold ">{e.id+"."+e.firstname +" "+ e.lastname }</div>
        <div className="text-xl p-2  text-yellow-400 overflow-hidden  font-bold">{e.tasks.values.new_task}</div>
        <div className="text-xl p-2  text-blue-700  font-bold">{e.tasks.values.active}</div>
        <div className="text-xl p-2  text-red-600  font-bold">{e.tasks.values.failed}</div>
        <div className="text-xl p-2  text-green-900 font-bold pr-7">{e.tasks.values.completed}</div>
      </div>

      ))
      }
      {/* <div className="bg-orange-600  rounded flex justify-between m-5">
        <div className="text-xl p-2  font-bold">Dharmendra Patel</div>
        <div className="text-xl p-2  font-bold">UX Developer</div>
        <div className="text-xl p-2  font-bold">Status</div>
      </div>
      <div className="bg-yellow-400  rounded flex justify-between m-5">
        <div className="text-xl p-2  font-bold">Dharmendra Patel</div>
        <div className="text-xl p-2  font-bold">UX Developer</div>
        <div className="text-xl p-2  font-bold">Status</div>
      </div>
      <div className="bg-lime-500  rounded flex justify-between m-5">
        <div className="text-xl p-2  font-bold">Dharmendra Patel</div>
        <div className="text-xl p-2  font-bold">UX Developer</div>
        <div className="text-xl p-2  font-bold">Status</div>
      </div> */}

    </form>
  </div>
</>)
}
export default CreateTask