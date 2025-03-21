function Newtask(){
    return(<>
    <div id="newtasklist" className="w-72 h-64  bg-gray-700 mt-3 ml-5 flex-nowrap  flex-shrink-0  rounded-md overflow-hidden ">
         <div className="flex justify-between ">
            <div className=" bg-red-700 h-fit w-fit ml-2 pl-3 pr-3 pt-1 pb-1 mt-2 rounded text-slate-50 ">High</div>
            <div className=" pt-2 text-white pr-2">11 Mar 2025</div>
         </div>
         <h2 className="ml-5 mt-5 mr-5 text-lg text-white font-bold">Make a youtube Video</h2>
         <div className="ml-5 text-sm pr-2 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. maxime nam
            excepturi consequatur debitis laborum explicabo vero sunt sit ipsum?</div>
         <div className="flex justify-around">
         </div>
         <div className="flex pt-4" >
            <button className="bg-green-400  ml-6 font-serif font-bold rounded">Mark as Completed</button>
            <button className="bg-red-500 ml-6 font-serif mr-6 font-bold rounded">Mark as Failed</button>
         </div>
      </div>
    </>)
} 
 export default Newtask;