import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Flyerone from '../pages/Flyers/Flyerone';
import Secondflyer from '../pages/Flyers/Flyertwo';
import Language from '../pages/Login/Language';
import LoginOptions from '../pages/Login/LoginOptions';
import LocationChoose from '../pages/Login/CreateUser/LocationChoose';
import ChoosePhone from '../pages/Login/CreateUser/EnterPhone';
import OtpOption from '../pages/Login/CreateUser/OtpOption';
import PersonalDetails from '../pages/Login/CreateUser/PersonalDetails';
import OtpScreen from '../pages/Login/CreateUser/OtpScreen.';
import LoginPhone from '../pages/Login/LoginPhone';
import HomeOne from '../pages/Home/HomeOne';
import YognaCard from '../pages/Login/YognaCard/YognaCard';

const AppRouter = () =>{
    return(
       
       <Routes>
          <Route path="/" element={<Flyerone/>}/>
          <Route path="/secondFlyer" element={<Secondflyer/>}/>
          <Route path="/Language" element={<Language/>}/>
          <Route path="/LoginOptions" element={<LoginOptions/>}/>
          <Route path="/LocationChoose" element ={<LocationChoose/>}/>
          <Route path="/ChoosePhone/:state/:district/:pincode" element ={<ChoosePhone/>}/>
          <Route path="/OtpOption/:state/:district/:pincode/:phone" element={<OtpOption/>}/>
          <Route path="/PersonalDetails/:state/:district/:pincode/:phone" element={<PersonalDetails/>}/>
          <Route path="/OtpScreen/:state/:district/:pincode/:phone" element={<OtpScreen/>}/>
          <Route path="/LoginPhone" element={<LoginPhone/>}/>
          <Route path="/HomeOne" element={<HomeOne/>}/>
          <Route path ="/YognaCard" element={<YognaCard/>}/>
       </Routes>
       
    )
    
}
export default AppRouter;