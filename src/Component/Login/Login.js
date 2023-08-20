import { singInWithGoogle } from "../../firebase";

const Login =()=>{
    return(
     <div className="dashboard">
        <button onClick={singInWithGoogle}>
         sing with google
        </button>
        </div>
    )
}
export default Login;