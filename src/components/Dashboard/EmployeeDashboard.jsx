import Header from "../other/Header"
function EmployeeDashboard({data}){
// console.log(data.tasks.values);
return(<>

   <Header data={data} />
   <div id="taskstatuslist" className="flex mt-10 overflow-x-auto">
      <div className="bg-blue-500  w-56 pl-8 pr-8 pt-5 pb-5 rounded ml-5">
         <div className="text-gray-50 font-bold text-xl ml-10">{data.tasks.values.active}</div>
         <div className="text-gray-50 font-bold text-xl">New Task</div>
      </div>
      <div className="bg-green-600  w-56  pl-8 pr-8 pt-5 pb-5 rounded ml-5">
         <div className="text-gray-50 font-bold text-xl ml-10">{data.tasks.values.completed}</div>
         <div className="text-gray-50 font-bold text-xl">Completed Task</div>
      </div>
      <div className="bg-yellow-500  w-56 pl-8 pr-8 pt-5 pb-5 rounded ml-5">
         <div className="text-gray-50 font-bold text-xl ml-10">{data.tasks.values.new_task}</div>
         <div className="text-gray-50 font-bold text-xl">Accepted Task</div>
      </div>
      <div className="bg-red-500 w-56   pl-8 pr-8 pt-5 pb-5 rounded ml-5 ">
         <div className="text-gray-50 font-bold text-xl ml-10">{data.tasks.values.failed}</div>
         <div className="text-gray-50 font-bold text-xl">Failed Task</div>
      </div>
   </div>

   <div id="tasklist" className="flex overflow-x-auto gap-5 mt-20 h-64 w-full">

      <div className="w-60 h-56  bg-gray-700 mt-3 ml-5 flex-nowrap  flex-shrink-0  rounded-md overflow-auto ">
         <div className="flex justify-between ">
            <div className=" bg-red-700 h-fit w-fit ml-2 pl-3 pr-3 pt-1 pb-1 mt-2 rounded text-slate-50 ">High</div>
            <div className=" pt-2 text-white pr-2">11 Mar 2025</div>
         </div>
         <h2 className="ml-5 mt-5 mr-5 text-lg text-white font-bold">Make a youtube Video</h2>
         <div className="ml-5 text-sm pr-2 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. maxime nam
            excepturi consequatur debitis laborum explicabo vero sunt sit ipsum?</div>
         <div className="flex justify-around">
         </div>
      </div>
      <div className=" w-60 h-56  bg-gray-700 mt-3 ml-5 flex-nowrap  flex-shrink-0 rounded-md overflow-auto ">
         <div className="flex justify-between ">
            <div className=" bg-red-700 h-fit w-fit ml-2 pl-3 pr-3 pt-1 pb-1 mt-2 rounded text-slate-50 ">High</div>
            <div className=" pt-2 text-white pr-2">11 Mar 2025</div>
         </div>
         <h2 className="ml-5 mt-5 mr-5 text-lg text-white font-bold">Make a youtube Video</h2>
         <div className="ml-5 text-sm pr-2 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. maxime nam
            excepturi consequatur debitis laborum explicabo vero sunt sit ipsum?</div>
      </div>
      <div className="w-60 h-56 bg-gray-700 ml-5 mt-3  flex-nowrap  flex-shrink-0  rounded-md overflow-auto ">
         <div className="flex justify-between ">
            <div className=" bg-red-700 h-fit w-fit ml-2 pl-3 pr-3 pt-1 pb-1 mt-2 rounded text-slate-50 ">High</div>
            <div className=" pt-2 text-white pr-2">11 Mar 2025</div>
         </div>
         <h2 className="ml-5 mt-5 mr-5 text-lg text-white font-bold">Make a youtube Video</h2>
         <div className="ml-5 text-sm pr-2 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. maxime nam
            excepturi consequatur debitis laborum explicabo vero sunt sit ipsum?</div>
      </div>


      <div className="w-60 h-56 bg-gray-700 mt-3 ml-5 flex-nowrap  flex-shrink-0 rounded-md overflow-auto ">
         <div className="flex justify-between ">
            <div className=" bg-red-700 h-fit w-fit ml-2 pl-3 pr-3 pt-1 pb-1 mt-2 rounded text-slate-50 ">High</div>
            <div className=" pt-2 text-white pr-2">11 Mar 2025</div>
         </div>
         <h2 className="ml-5 mt-5 mr-5 text-lg text-white font-bold">Make a youtube Video</h2>
         <div className="ml-5 text-sm pr-2 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. maxime nam
            excepturi consequatur debitis laborum explicabo vero sunt sit ipsum?</div>
      </div>

   </div>
</>)
}
export default EmployeeDashboard