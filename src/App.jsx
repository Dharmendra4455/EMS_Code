import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login.jsx"
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx"
import { GetlocalStorage, SetlocalStorage } from "./utils/localStorage.jsx"
import { AuthContext } from "./context/ContextProvider.jsx"

function App() {
  const [user,setuser]=useState(null)
  const[loggedInUserData,setloggedInUserData]=useState(null)
  const authdata=useContext(AuthContext)


 useEffect(()=>{
  const loggedin= (localStorage.getItem("loggedInUser"))
  if(loggedin){
   const loginuser=JSON.parse(loggedin)
   //console.log(loginuser.role);
   setuser(loginuser.role)
   setloggedInUserData(loginuser.data)
   
  }
  SetlocalStorage()
 },[])
 //console.log(user);
  const loginhandler=(email,password)=>{
  if(email=="admin1@example.com" && password=="123"){
    //const admin=authdata.admin.find((e)=>email==e.email && e.password==password)
    setuser('admin')
    setloggedInUserData(authdata.admin[0])
    localStorage.setItem('loggedInUser',JSON.stringify({role:"admin",data:authdata.admin[0]}))
  }
  else if(email=="admin2@example.com" && password=="123"){
    //const admin=authdata.admin.find((e)=>email==e.email && e.password==password)
    setuser('admin')
    setloggedInUserData(authdata.admin[1])
    localStorage.setItem('loggedInUser',JSON.stringify({role:"admin",data:authdata.admin[0]}))
  }
    else if(authdata){
    const employee=authdata.employee.find((e)=>email==e.email && e.password==password)
    
    
    if(employee)
    {
      setuser('employee')
      setloggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data:employee}))
    }
  }
  else{
    alert("Invalid LoginId or Password")
  }
}
//loginhandler("admin@example.com","123")
 const data =useContext(AuthContext)
 //console.log(data);
 //console.log(data.employee.find((e)=>e.email==email && e.password==password)
   return (
    <>
      {!user ? <Login loginhandler={loginhandler}/>:''}
      {user  ? (user =='admin' ? <AdminDashboard data={loggedInUserData}/>:<EmployeeDashboard data={loggedInUserData} />):""}
    </>
  )
}

export default App
