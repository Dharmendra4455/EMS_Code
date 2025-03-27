
 
function Failed(prop){
  const empdata=localStorage.getItem('employee')
  const authdata=JSON.parse(empdata)
  const activebutton=()=>{
    const searchedemp=authdata.find((e)=>e.id==prop.data.id); //search emp in authemp data
    const searchedtask=searchedemp.tasks.task.find((e)=>e.task_title==prop.task.task_title && e.task_date==prop.task.task_date && e.task_description==prop.task.task_description);
    //console.log(searchedtask)
    if(!searchedtask.Failed){
     
    searchedtask.active=true;
    searchedtask.failed=false;
    searchedemp.tasks.values.active+=1;
    if(searchedemp.tasks.values.failed)
    searchedemp.tasks.values.failed-=1;
   localStorage.setItem('employee',JSON.stringify(authdata))
    prop.fun() 
    }
   }
    return(<>
   <div className=" w-72 h-64  bg-red-400 mt-3 ml-5 flex-nowrap  flex-shrink-0 rounded-md overflow-hidden">
         <div className="flex justify-between ">
         <button id="activebutton" onClick={activebutton} className=" bg-yellow-500 h-fit w-fit ml-2 pl-3 pr-3 pt-1 pb-1 mt-2 rounded text-slate-50 ">Active</button>
            <div className=" pt-2 text-white pr-2 font-bold">11 Mar 2025</div>
         </div>
         <h2 className="ml-5 mt-5 mr-5 text-lg text-white font-bold">Make a youtube Video</h2>
         <div className="ml-5 text-sm pr-2 pt-2 h-24">Lorem  totam consequuntur non, minima aut?
         </div>
           <div  className="bg-red-600 text-white pl-28 w-72 text-xl from-neutral-950 mr-6 font-bold  pt-2 pb-2">Failed</div>
      </div>
    </>)
}
export default Failed;