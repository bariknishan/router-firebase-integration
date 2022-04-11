import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../Hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
const auth = getAuth(app);
const LogIn = () => {

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    // const {signInWithGoogle}= useFirebase()
    const location =useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/';
    const hanndleGoogleSignIn = () => {
        signInWithGoogle()

            .then(() => {
                navigate(from, { replace: true })

            })

    }

    return (
        <div>
            <h2>Plaese Log In</h2>
            <div>
                <button onClick={hanndleGoogleSignIn}>Google SignIn</button>
            </div>
            <br />
            <form>

                <input type="email" placeholder='Enter email' /> <br />
                <input type="password" placeholder='Enter password' id='' name='' /> <br />
                <input type="submit" value='Log In' />
            </form>
        </div>
    );
};

export default LogIn;