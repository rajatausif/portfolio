import React from 'react';
import homeAnime from '../../../assets/images/home_anime.gif'
import './logo.scss'


const HomeLogo =()=>{
   
    return(
        <>
        <div className="splash-image">
        <img src={homeAnime} alt="animation" className="home-anime"/>
         </div>
        </>
    )
}

export default HomeLogo