function Header(prop){
  //console.log(data);
  const logouthandler=()=>{
    localStorage.setItem("loggedInUser","")
    // window.location.reload()
    prop.user("")
  }

  
    return(<>
    <div className=" mt-5 flex justify-between mr-5 p-2">
      <div>
      <h1 className="text-gray-50 pl-2 text-3xl font-bold">Hello 👋</h1>
      <div className="flex">
      <h1 className="text-gray-50 pl-20 text-3xl font-bold">{prop.data.firstname + " "+prop.data.lastname} </h1>
      <span class="flex h-3 w-3 pointer-events-none">
      <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
      </span>
      </div>
      </div>
      
      <div>
      <button onClick={logouthandler} className="text-gray-50 pl-8 pr-8 pt-3 pb-3 mt-3 font-bold rounded bg-red-600">Logout</button>
      </div>
    </div>
    
    </>)
}
export default Header;