import { auth,storage,db } from "../../firebase";
import { useRef } from "react";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from "firebase/firestore/lite";




const Home =()=>{
    const form = useRef()


    const submitPortfolio =(e)=>{
      e.preventDefault();
      const name = form.current[0]?.value;
      const description=form.current[1]?.value;
      const url=form.current[2]?.value;
      const image=form.current[3]?.files[0];

      const storageRef = ref(storage ,`portfolio/${image.name}`);
      uploadBytes(storageRef,image).then(
        (snapshot)=>{
          getDownloadURL(snapshot.ref).then((getDownloadURL)=>{
           saveportfolio({
            name,
            description,
            url,
            image:getDownloadURL
           })
          },(error)=>{
            console.log(error)
            saveportfolio({
              name,
              description,
              url,
              image:getDownloadURL
             })
            })
        },(error)=>{
          console.log(error)
          saveportfolio({
            name,
            description,
            url,
            image:getDownloadURL
           })
        }
      )
    }
    const saveportfolio=async(portfolio)=>{
   console.log(portfolio);
     try{
      await addDoc(collection(db,'portfolio'),portfolio)
      window.location.reload(false)
     }catch(error){
      alert("failed to add portfolio")
     }
    }
    return(
     <div className="dashboard">
      <form ref={form} onSubmit={submitPortfolio}>
        <p><input type="text" placeholder="Name"/></p>
        <p><textarea placeholder="dascription"/></p>
        <p><input type="text" placeholder="Url"/></p>
        <p><input type="file" placeholder="Image"/></p>
        <button type="submit">submit</button>
        <button onClick={()=>auth.signOut()}>sign out</button>
      </form>
        </div>
    )
}
export default Home;