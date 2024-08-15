//import './App.css';
//import NaviBar from "./Components/NaviBar"
//import Footer from "./Components/Footer";
//import SideBarUser from "./Components/SideBarUser";
//---------Nimesh--------
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomeCustomer from "./Pages/HomeCustomer";
//---------Nimantha--------
import BussReg from "./Pages/BussReg";
//---------Sahan------------
import UserLogin from "./Pages/Login/UserLogin";
import OwnerLogin from "./Pages/Login/OwnerLogin";
import UserSignup from "./Pages/Login/UserSignup";
import OwnerSignup from "./Pages/Login/OwnerSignup";
import CParkingSpace from "./Pages/cParkingSpace";
//---------Hansa------------
import CustomerPage from './Pages/CustomerPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route path="/customer" element={<HomeCustomer/>}></Route>
          <Route path="/owner" element={<BussReg/>}></Route>
          <Route path="/userLogin" element={<UserLogin/>}></Route>
          <Route path="/ownerLogin" element={<OwnerLogin/>}></Route>
          <Route path="/userSignup" element={<UserSignup/>}></Route>
          <Route path="/ownerSignup" element={<OwnerSignup/>}></Route>
          <Route path="/cParkingSpace" element={<CParkingSpace/>}></Route> 
          <Route path="/customer/select-vehicle" element={<CustomerPage/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
