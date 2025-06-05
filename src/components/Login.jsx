import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const formSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })   // we are sending data here 


    }
    return (
        <div>
            <h1 className='text-3xl text-bold my-4'>Login</h1>
            <input type="text" className='bg-gray-600 border-black text-white p-2 rounded' placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username} /> <br /><br />
            <input type="password" placeholder='password' className='bg-gray-600 border-black text-white p-2 rounded' onChange={(e) => setPassword(e.target.value)} value={password} /> <br />
            <br /> <button onClick={formSubmit} className='bg-green-600 text-black text-bold p-2 rounded'>Submit</button>
        </div>
    )
}

export default Login
