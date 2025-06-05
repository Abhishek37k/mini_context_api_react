import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {

  return (
    <UserContextProvider>

      <p className="text-center text-3xl text-white bg-gray-600 py-5">
        Context API
      </p>

      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
