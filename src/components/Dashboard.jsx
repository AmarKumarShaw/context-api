import { useContext } from "react"
import { LogInContext } from "../App"

const Dashboard = () =>{
const {isLoggedIn,onLogin,onLogout} = useContext(LogInContext)
    return(
        <div>

            <p>This is a Dashboard Page</p>
            {isLoggedIn  ? (
                <div>
                    <p>Welcome User</p>
                    <button onClick={onLogout}>Logout</button>
                </div>  
            ):(
                <div>
                    <p>Please Log In</p>
                    <button onClick={onLogin}>Login</button>
                </div>
            )}

            
        </div>
    )
}

export default Dashboard