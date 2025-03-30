import Header from "../other/Header"
import Newtask from "../other/Newtask"
import Completed from "../other/Completed"
import Failed from "../other/Failed"
import Activetask from "../other/Activetask"
import { useEffect, useState } from "react"
import { GetlocalStorage } from "../../utils/localStorage"
import { ToastContainer,toast } from "react-toastify"
function EmployeeDashboard(prop){
const[newtask,setnewtask]=useState(0)
const[failed,setfailed]=useState(0)
const[completed,setcompleted]=useState(0)
const[active,setactive]=useState(0)

//array of employee data
       //  console.log(data)                               // propdata -logged user data
   //searching logged user data in emp array in local storage                                     
   const data= GetlocalStorage('employee')                   //initiall assign old data
   const loggeduser=data.employee.find((e)=>e.id==prop.data.id)
   const[mapdata,setmapdata]=useState(loggeduser.tasks.task)   
 
  function handler(a){
   
   console.log("fun call")
   const data= GetlocalStorage('employee')          //after update completed task button call handler fun and again fetch new updated data 
                                                  //  from local storage and update it with mapdata state var which again run map method which 
                                                // result again rerendering of components takes place  through map method.
   const loggeduser=data.employee.find((e)=>e.id==prop.data.id) 
   
   setnewtask(loggeduser.tasks.values.new_task)
   setfailed(loggeduser.tasks.values.failed)
   setcompleted(loggeduser.tasks.values.completed)
   setactive(loggeduser.tasks.values.active)
   //console.log(loggeduser.tasks.task)
   setmapdata(loggeduser.tasks.task)
  // console.log(loggeduser.tasks.task)
}

useEffect(()=>{
   handler()
},[])
//console.log(mapdata)
return(<>
   <Header data={prop.data} user={prop.user}/>
   <div id="taskstatuslist" className="flex mt-10 overflow-x-auto">
      <div className="bg-blue-500  w-56 pl-8 pr-8 pt-5 pb-5 rounded ml-5">
         <div className="text-gray-50 font-bold text-xl ml-10">{newtask}</div>
         <div className="text-gray-50 font-bold text-xl">New Task</div>
      </div>
      <div className="bg-green-600  w-56  pl-8 pr-8 pt-5 pb-5 rounded ml-5">
         <div className="text-gray-50 font-bold text-xl ml-10">{completed}</div>
         <div className="text-gray-50 font-bold text-xl">Completed Task</div>
      </div>
      <div className="bg-yellow-500  w-56 pl-8 pr-8 pt-5 pb-5 rounded ml-5">
         <div className="text-gray-50 font-bold text-xl ml-10">{active}</div>
         <div className="text-gray-50 font-bold text-xl">Active Task</div>
      </div>
      <div className="bg-red-500 w-56   pl-8 pr-8 pt-5 pb-5 rounded ml-5 ">
         <div className="text-gray-50 font-bold text-xl ml-10">{failed}</div>
         <div className="text-gray-50 font-bold text-xl">Failed Task</div>
      </div>
   </div>

   <div id="tasklist" className="flex overflow-x-auto gap-5 mt-20 h-72 w-full">
  
  {

   mapdata.map((e,id)=>
      {
           if(e.new_task)
             {
               return < Newtask key={id} task={e}  data={prop.data} fun={handler} />
             }
            if(e.completed)
             {
              return <Completed key={id} task={e} data={prop.data} fun={handler}/>
             }
            if(e.failed)
             {
              return <Failed key={id} task={e} data={prop.data} fun={handler}/>
             }
            if(e.active)
             {
              return <Activetask key={id} task={e} data={prop.data} fun={handler}/>
             }
       })
  }
  

   </div>
</>)
}
export default EmployeeDashboard