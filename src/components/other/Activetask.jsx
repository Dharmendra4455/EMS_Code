import { useContext, useState } from "react";
import Completed from "./Completed";
import { SetlocalStorage } from "../../utils/localStorage";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Activetask(prop){

   const empdata=localStorage.getItem('employee')
   const authdata=JSON.parse(empdata)
   //const[activetask,setactivetask]=useState(0)
   const completetaskhandler=()=>{
     
       const searchedemp=authdata.find((e)=>e.id==prop.data.id); //search emp in authemp data
       const searchedtask=searchedemp.tasks.task.find((e)=>e.task_title==prop.task.task_title && e.task_date==prop.task.task_date && e.task_description==prop.task.task_description);
       //console.log(searchedtask)
       if(searchedtask.active){
       searchedtask.completed=true;
       searchedtask.active=false;
       searchedemp.tasks.values.completed+=1;
       if(searchedemp.tasks.values.active)
       searchedemp.tasks.values.active-=1;
      localStorage.setItem('employee',JSON.stringify(authdata))
       prop.fun()
         
    }
    else{
      alert("First Active the Task")
    }
   }
    const failedtaskhandler=()=>{
       const searchedemp=authdata.find((e)=>e.id==prop.data.id); //search emp in authemp data    
      const searchedtask=searchedemp.tasks.task.find((e)=>e.task_title==prop.task.task_title && e.task_date==prop.task.task_date && e.task_description==prop.task.task_description);
      if(searchedtask.active){
      searchedtask.failed=true;
      searchedtask.active=false;
      searchedemp.tasks.values.failed+=1;
      if(searchedemp.tasks.values.active)
      searchedemp.tasks.values.active-=1;
        //console.log(searchedemp,searchedtask)
      //  console.log(authdata)
      //console.log(authdata)
     localStorage.setItem('employee',JSON.stringify(authdata))
      prop.fun()
     
   }
   else{

      alert("First Active the task")
   }
 
   }
   
  
    return(<>
    <div id="newtasklist" className="w-72 h-64  bg-yellow-500 mt-3 ml-5 flex-nowrap  flex-shrink-0  rounded-md overflow-hidden ">
            {/* <button id="activebutton" onClick={activetaskhandler} className=" bg-yellow-500 h-fit w-fit ml-2 pl-3 pr-3 pt-1 pb-1 mt-2 rounded text-slate-50 ">Active</button> */}
            <div className=" pt-2 font-bold text-white pr-2 text-right">{prop.task.task_date}</div>
         
         <h2 className="ml-5 mt-5 mr-5 text-lg text-white font-bold">{prop.task.task_title}</h2>
         <div className="ml-5 text-sm pr-2 pt-2 h-20">{prop.task.task_description}</div>
         <div className="flex justify-around">
         </div>
         <div className="flex pt-4" >
            <button  onClick={completetaskhandler} className="bg-green-400  ml-6 from-neutral-950 font-bold rounded">Mark as Completed</button>
           
            <button  onClick={failedtaskhandler} className="bg-red-500 ml-6 from-neutral-950 mr-6 font-bold rounded">Mark as Failed</button>
            
         </div>
      </div>
    </>)
} 
 export default Activetask;