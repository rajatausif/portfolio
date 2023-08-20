import { useEffect, useState } from "react";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import Home from "./DasHome";
import Login from "../Login/Login";


const Dashboard =()=>{
    const [user,setUse]=useState(null)
    const auth = getAuth();

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUse(user)
            }else{
                setUse(null)
            }
        })
    })
    return(
     <div >
      {user ? <Home/> : <Login/> }
        </div>
    )
}
export default Dashboard;