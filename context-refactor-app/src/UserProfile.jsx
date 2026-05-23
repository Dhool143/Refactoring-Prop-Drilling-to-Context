
import { useContext } from "react"
import { UserContext } from "./UserContext"



function UserProfile(){

 const { user } = useContext(UserContext);

return(
    <div className="profile">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        

        




    </div>

);

}
export default UserProfile;