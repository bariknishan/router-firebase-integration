import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';





const auth =getAuth(app)


const Home = () => {
   const [ user]=useAuthState(auth)
    return (
        <div>
            <h2>This is home</h2>
            <p>Name: {user? user.displayName: 'null name'}</p>
        </div>
    );
};

export default Home;