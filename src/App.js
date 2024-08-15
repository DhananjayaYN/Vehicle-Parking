//import './App.css';
//import NaviBar from "./Components/NaviBar"
//import Footer from "./Components/Footer";
//import SideBarUser from "./Components/SideBarUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomeCustomer from "./Pages/HomeCustomer";
import UserLogin from "./Pages/UserLogin";
import OwnerLogin from "./Pages/OwnerLogin";
import UserSignup from "./Pages/UserSignup";
import OwnerSignup from "./Pages/OwnerSignup";
import cParkingSpace from "./Pages/cParkingSpace";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route path="/customer" element={<HomeCustomer/>}></Route>
          <Route path="/userLogin" element={<UserLogin/>}></Route>
          <Route path="/ownerLogin" element={<OwnerLogin/>}></Route>
          <Route path="/userSignup" element={<UserSignup/>}></Route>
          <Route path="/ownerSignup" element={<OwnerSignup/>}></Route>
          <Route path="/cParkingSpace" element={<cParkingSpace/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
