import './App.css'
import {useState,createContext} from "react"
import Home from './components/Home';

// eslint-disable-next-line react-refresh/only-export-components
export const LogInContext = createContext();

function App() {
 const [isLoggedIn,setIsLoggedIn] = useState(false);

  const handleLogin = () =>{
    return setIsLoggedIn(true)
  }

  const handleLogout = () =>{
    return setIsLoggedIn(false)
  }

  return (
    <LogInContext.Provider value={{isLoggedIn,onLogin:handleLogin,onLogout:handleLogout}}>
     <div>
      <Home isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
     </div>
    </LogInContext.Provider>
  )
}

export default App
