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
      <h1 className="text-gray-50 pl-5 text-3xl font-bold">Hello 👋</h1>
      <h1 className="text-gray-50 pl-16 text-3xl font-bold">{prop.data.firstname} </h1>
      </div>
      <div>
      <button onClick={logouthandler} className="text-gray-50 pl-8 pr-8 pt-3 pb-3 mt-3 font-bold rounded bg-red-600">Logout</button>
      </div>
    </div>
    
    </>)
}
export default Header;