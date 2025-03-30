import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
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
      <div id="typewriter" className="h-screen">
<TypeAnimation 
sequence={[
'WELCOME BACK',
1000, // wait 1s before replacing "Mice" with "Hamsters"
'EMPLOYEE MANAGEMENT SYSTEM',
1000,
]}
wrapper="span"
speed={200}
style={{ paddingLeft:"100px",marginTop:"1vw", fontSize: '4vw', fontWeight: "bold",display: 'inline-block',color:"#ff1d58", fontFamily: 'Work Sans, sans-serif'}}
repeat={Infinity}
/>
   
    <div class="min-h-fit py-6 flex flex-col sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div>
          <h1 class="text-3xl font-bold pl-20  w-72">LOGIN</h1>
        </div>

        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <form onSubmit={(e)=>{submithandler(e)}}>
            <div class="relative">
              <input autocomplete="off" id="email" onChange={userhandler}  value={email} name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
              <label for="email"  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
            </div>
            <div class="relative">
              <input autocomplete="off" onChange={passwordhandler} id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
              <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>
            <div class="relative">
              <button class="bg-blue-500 mt-1 text-white rounded-md px-2 py-1">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
    </>)
}
export default Login;