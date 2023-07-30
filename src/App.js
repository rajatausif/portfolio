import {Routes,Route} from 'react-router-dom'
import Layout from './Component/Layout';
import Home from './Component/Home/Home'
import './App.scss';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact'

function App() {
  return (
  <>
  <Routes>
  <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path='/about' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  </Route>
  </Routes> 
  </>  
  );
}

export default App;
