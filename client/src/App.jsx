import {  Routes, Route, Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import "./index.css";
import Brokers from "./BrokersPage/Pages/Brokers";
import StickyWatsapp from "./BrokersPage/components/stickywatsapp";
import OwnersPage from "./OwnerPage/pages/OwnersPage";
import PropPage from "./Propinfluencer/pages/PropPage";
import HomePage from "./pages/Home";
import ScrollTopButton from "./pages/ScrollTopButton";

function App() {
  return (

    <>
    <StickyWatsapp/>
    <Toaster position="top-right" reverseOrder={false} />
     <ScrollTopButton/>
    <Routes>
      {/* Toast Container */}
       <Route path="/" element={<HomePage/>}/>
       <Route path="/prop-influencers" element={<PropPage/>}/>
       <Route path="/business-partner" element={<Brokers/>}/>
       <Route path="/property-owners" element={<OwnersPage/>}/>
       
       
    </Routes>
    </>
  );
}

export default App;