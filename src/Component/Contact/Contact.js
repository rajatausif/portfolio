import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLatter';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import './Contact.scss'

const Contact =()=>{
    const [letterClass, setLetterClass] = useState('text-animate')

    const Form=useRef()

    useEffect(()=>{
      setTimeout(()=>{
        setLetterClass('text-animate-hover')
      },3000)
    },[])
     
   
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sr4c3gd', 'template_8nybvmi', Form.current, 'qkHfT1J0ifEavRhuA')
        .then((result) => {
           alert('Message successfully sent!');
        }, (error) => {
           alert('Failed to send the message, please try again');
        });
    };

    return(  
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
            <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
          <form ref={Form} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
              <input type='text' name="name" placeholder="Name" required/>
              </li>
              <li className='half'>
              <input type='email' name="email" placeholder="Email" required/>
              </li>
              <li>
                <input type='text' placeholder='Subject' name="Subject" required/>
              </li>
              <li> 
                <textarea placeholder='Message' name='message' required></textarea>
              </li>

              <li>
                <input type="submit" className='flat-button' value='SEND'
              />
              </li>
            </ul>
          </form>
          </div>

            </div>
            <div className='info-map'>
              Tausif Raja,
              <br/>
              C-6 block-C sector-53 <br/>
              noida, Utter pradesh,india
              <br/>
              <span>Tausifrl555@gmail.come</span>
            </div>
            <div className="map-wrap">
          <MapContainer center={[28.592184, 77.364789]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.592184, 77.364789]}>
              <Popup>Tausif lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
        <Loader type="pacmen"/>``
        </div>
        </>
    )
}

export default Contact;