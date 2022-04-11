import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Plaese Register</h2>
            <form >

        <input type="text" placeholder='Enter name' /> <br />
        <input type="email" placeholder='Enter email' /> <br />
        <input type="password" placeholder='Enter password' id='' name='' /> <br />
        <input type="submit" value= 'Register' />


            </form>
        </div>
    );
};

export default Register;