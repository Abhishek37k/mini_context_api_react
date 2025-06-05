import React, { useState, useContext } from 'react'
import UserContext from '../context/userContext';
function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <div className='p-2 text-2xl'>Please login</div>
    }

    return <>
        Welcome {user.username}
    </>

}

export default Profile
