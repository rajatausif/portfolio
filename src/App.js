import {Routes,Route} from 'react-router-dom'
import Layout from './Component/Layout';
import Home from './Component/Home/Home'
import './App.scss';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Portfolio from './Component/portfolio/portfolio';
import Dashboard from './Component/Dashboard/auth';

function App() {
  return (
  <>
  <Routes>
  <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path='/about' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/portfolio' element={<Portfolio/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  </Route>
  </Routes> 
  </>  
  );
}

export default App;
