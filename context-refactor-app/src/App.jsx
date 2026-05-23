import  Dashboard from "./Dashboard"
import { UserProvider} from "./UserContext"
import './App.css'

function App() {
  

  return (
    <UserProvider>
       <div className="container">
        <h1>My App</h1>
       <Dashboard/>



      </div> 


    </UserProvider>
   
  );
}

export default App;
