
import './App.css';
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Header from "./Pages/Header/Header";
import AboutUs from './Pages/AboutUs/AboutUs';
import Training  from "./Pages/Training/Training";
import Pricing from './Pages/Pricing/Pricing';
import Login from './Pages/Login/Login'
import TrainerSection from "./Pages/TrainerSection/TrainerSection";
import Registration from "./Pages/Registration/Registration";
import Home from './Pages/Home/Home';

import Team from './Pages/Team/'
import Card from './Pages/Card/card';

function App() {
  return (

    <BrowserRouter>
    {/* <Header/> */}
     <Routes>
   
     <Route path='/' element={<Login/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/training' element={<Training/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/trainer' element={<TrainerSection/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/card' element={<Card />} />

     </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
