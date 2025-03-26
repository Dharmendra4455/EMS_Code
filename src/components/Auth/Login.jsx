import { useState } from "react";

function Login({loginhandler}){
    const [email,setemail]=useState("")
    const[password,setpassword]=useState("")
  
    const submithandler=(e)=>{
        e.preventDefault(); //prvent default property of form of auto reload 
        loginhandler(email,password)
        setemail("")
        setpassword("")
    }
   
    const userhandler=(e)=>{
        setemail(e.target.value)
       
    }
    const passwordhandler=(e)=>{
        setpassword(e.target.value)
       
    }
    return(<>
    <div className=" rounded-sm bg-neutral-800 h-80 w-fit m-6 ">
        <form onSubmit={(e)=>{submithandler(e)}}>
        <div className="p-3">
        <h2 className="text-white pt-2">Username</h2>    
        <input onChange={userhandler}  value={email} className="mb-2 rounded-sm text-xl outline-none" required type="text" placeholder="Username"/><br/>
        <h2 className="text-white">Password</h2>  
        <input onChange={passwordhandler} type="password" required className="rounded-sm text-xl outline-none" /><br/>
        <button className=" ml-20 mt-3 p-1 rounded-sm font-bold bg-white">Submit</button>
        </div>
        </form>
    </div>
    </>)
}
export default Login;