import { useContext } from "react"
import CreateTask from "../other/CreateTask"
import Header from "../other/Header"
import { AuthContext } from "../../context/ContextProvider"

function AdminDashboard({data}){
    //console.log(data);
    const Authdata=useContext(AuthContext)
    return(<>
    <Header data={data}/>
   <CreateTask data={Authdata}/>

   
    </>)
}
export default AdminDashboard 