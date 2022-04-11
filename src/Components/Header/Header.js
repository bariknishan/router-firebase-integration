import { getAuth ,signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

import './Header.css';
const Header = () => {


const auth= getAuth(app);
const [user]=useAuthState(auth)
    
    return (
        <div className='header'>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/register">Register</Link>


                {
                    user && <>
                    
                    <Link to="/vip">VIP</Link>
                    
                    </>
                }
                <span> {user?.displayName  && user.displayName} </span>
            {
                user?.uid ?
               <button onClick={()=>signOut(auth)}>SignOut</button>
                :
                <Link to="/login">Log In</Link>}
            </nav>
        </div>
    );
};

export default Header;