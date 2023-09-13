import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UsersRegister from './pages/UsersRegister.jsx'
import AddRoles from './pages/AddRoles.jsx'
import Home from './pages/Home.jsx'
import NavBar from './components/NavBar.jsx'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <Toaster position="bottom-right"
          reverseOrder={true}
        />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersRegister />} />
          <Route path="/roles" element={<AddRoles />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
