import { useEffect, useState } from "react"
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();



const useFirebase = () => {

    const [user, setUser] = useState({});



    const signInWithGoogle = () => {
       
        signInWithPopup(auth, googleprovider)
            .then(result => {
                const user = result.user;
                setUser(user);
             console.log(user)

            })
// .catch(error=>{

// })

    }


    const handleSignOut=()=>{

        signOut(auth)
        .then(()=>{})

    }
 useEffect(()=>{
     onAuthStateChanged(auth, (user=>{
         setUser(user)
     }))
 },[])










    return { user, signInWithGoogle ,handleSignOut }

}

export default useFirebase;
