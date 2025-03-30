import {ToastContainer, toast} from "react-toastify"
function Newtask(prop){
   
   const empdata=localStorage.getItem('employee')
   const authdata=JSON.parse(empdata)
  // console.log(authdata)
   const completetaskhandler=()=>{
      // toast.error("first Active the Task")
       alert("first Active the Task")
   }
   const failedtaskhandler=()=>{
      //toast.error("first Active the Task")
      alert("first Active the Task")
   }
   const activebutton=()=>{
       
       const searchedemp=authdata.find((e)=>e.id==prop.data.id); //search emp in authemp data
       const searchedtask=searchedemp.tasks.task.find((e)=>e.task_title==prop.task.task_title && e.task_date==prop.task.task_date && e.task_description==prop.task.task_description);
       searchedtask.active=true;
       searchedtask.new_task=false;
       searchedemp.tasks.values.active+=1;
       if(searchedemp.tasks.values.new_task)
         searchedemp.tasks.values.new_task-=1;
       localStorage.setItem('employee',JSON.stringify(authdata))
       prop.fun()
       
      }
    return(<>
     <div id="newtasklist" className="w-72 h-64  bg-gray-700 mt-3 ml-5 flex-nowrap  flex-shrink-0  rounded-md overflow-hidden ">
         <div className="flex justify-between ">
            <button id="activebutton" onClick={activebutton} className=" bg-yellow-500 h-fit w-fit ml-2 pl-3 pr-3 pt-1 pb-1 mt-2 rounded text-slate-50 ">Active</button>
            
            <div className=" pt-2 font-bold text-white pr-2">{prop.task.task_date}</div>
        
         </div>
         <h2 className="ml-5 mt-5 mr-5 text-lg text-white font-bold">{prop.task.task_title}</h2>
         <div className="ml-5 text-sm pr-2 pt-2 h-20">{prop.task.task_description}</div>
         <div className="flex justify-around">
         </div>
         <div className="flex pt-4" >
            <button  onClick={completetaskhandler} className="bg-green-400  ml-6 from-neutral-950 font-bold rounded">Mark as Completed</button>
            <ToastContainer/>
            <button  onClick={failedtaskhandler} className="bg-red-500 ml-6 from-neutral-950 mr-6 font-bold rounded">Mark as Failed</button>
            <ToastContainer/>
         </div>
         
      </div>
    </>)
}
export default Newtask;