import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

function App() {
  return (
    <div className='main'>
        <Navbar/>
        <Login />
    </div>
  )
}

export default App
