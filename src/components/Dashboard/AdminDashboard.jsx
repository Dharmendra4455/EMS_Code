import { useContext } from "react"
import CreateTask from "../other/CreateTask"
import Header from "../other/Header"
import { AuthContext } from "../../context/ContextProvider"

function AdminDashboard(prop){
    //console.log(data);
    const Authdata=useContext(AuthContext)
    return(<>
    <Header data={prop.data} user={prop.user}/>
    <CreateTask data={Authdata} />
    </>)
}
export default AdminDashboard 