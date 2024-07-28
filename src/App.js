//import './App.css';
//import NaviBar from "./Components/NaviBar"
//import Footer from "./Components/Footer";
//import SideBarUser from "./Components/SideBarUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomeCustomer from "./Pages/HomeCustomer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route path="/customer" element={<HomeCustomer/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
