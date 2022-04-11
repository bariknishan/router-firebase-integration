import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const LogIn = () => {

    const {signInWithGoogle}= useFirebase()
    return (
        <div>
           <h2>Plaese Log In</h2> 
           <div>
           <button  onClick={signInWithGoogle}>Google SignIn</button>
           </div>
           <br />
           <form>
              
           <input type="email" placeholder='Enter email' /> <br />
             <input type="password" placeholder='Enter password' id='' name='' /> <br />
            <input type="submit" value= 'Log In' />
           </form>
        </div>
    );
};

export default LogIn;