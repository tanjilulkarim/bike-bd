import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,signInWithEmailAndPassword,updateProfile,createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";



initializeAuthentication()

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();




const useFirebase = () => {
     const [user, setUser] = useState({})
     const [error, setError] = useState("")
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [name, setName] = useState("")
     const [photo, setPhoto] = useState("")
     const [isLoading, setIsLoading] = useState(true)
     const [admin, setAdmin] = useState(false);

    //  google sign in
     const signInWithGoogle = () => {
         setIsLoading(true)
        return  signInWithPopup(auth, googleProvider)
         
     }

    
    
    //  get email input value
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    //  get password input value
    const getPassWord = (e) => {
        setPassword(e.target.value)
    }
    //  get name input value
    const getName = (e) => {
        setName(e.target.value)
    }
    //  get photo input value
    const getPhoto = (e) => {
        setPhoto(e.target.value)
    }

   
    

    
    // set name and Photo 
    const setNameAndPhoto = () => {
        updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          }).then(() => {}).catch((err) => {
            setError(err.message)
          });
    }
        // sign in with email and password
        const SignInWithEmail = (e) => {
        
            return signInWithEmailAndPassword(auth, email, password)
                    
    
        }
   
    // sign up with email password name photo
    const signUp = (e) => {
    //   e.preventDefault()
    //   setIsLoading(true)
     return createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     setNameAndPhoto()
        //     setUser(userCredential.user)
        //     alert("user has been created")
        // })
        // .catch((err) => {
        //     setError(err.message)
        // })
        // .finally(() => {
        //     setIsLoading(false)
        // })
    }

    // cler error
    useEffect(()=>{
        setTimeout(()=>{
            setError("")
        },5000)
    }, [error])

    useEffect(() => {
        fetch(`https://tranquil-cove-79684.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    
    // saved to data base
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://tranquil-cove-79684.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res=> res.json())
            .then(data => console.log(data))
    }



    //  logout
     const Logout = () => {
         setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
          }).catch((err) => {
            setError(error.message)
          })
          .finally(() => {
            setIsLoading(false)
        })
     }
    //  tracker for crurent user
     useEffect(()=>{
        onAuthStateChanged(auth, (Signeduser) => {
            if (Signeduser) {
               setUser(Signeduser)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
          });
     }, [])


     return{
         signInWithGoogle,
         
         user,
         Logout,
         error,
         getPassWord,
         getEmail,
         SignInWithEmail,
         getName,
         getPhoto,
         admin,
         signUp,
         isLoading,
         setIsLoading,
         setError,
         setUser,
         setNameAndPhoto,
         saveUser
     }
}

export default useFirebase;