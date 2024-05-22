import { signOut } from "firebase/auth";
import { useFirebase } from '../components/firebaseContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
export default function Logout ({setIsLogin}){
    const auth=useFirebase();
    const navigate=useNavigate();
    const logoutUser = async () => {
        signOut(auth.auth)
          .then(() => {
            setIsLogin(false);
            sessionStorage.clear('token');
            navigate('/');
          })
          .catch((error) => {
            console.error(error);
          });

      };
    useEffect(() => {
        logoutUser();
      }, [auth]);
    return (
        <div>
            
        </div>
    );  
}