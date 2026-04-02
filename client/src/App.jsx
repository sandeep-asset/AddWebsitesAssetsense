import {  Routes, Route, Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import "./index.css";
import Brokers from "./BrokersPage/Pages/Brokers";
import StickyWatsapp from "./BrokersPage/components/stickywatsapp";
import OwnersPage from "./OwnerPage/pages/OwnersPage";

function App() {
  return (

    <>
    <StickyWatsapp/>
    <Toaster position="top-right" reverseOrder={false} />
    <Routes>
      {/* Toast Container */}
       <Route path="/" element={<Brokers/>}/>
       <Route path="/business_partners" element={<Brokers/>}/>
       <Route path="/property_owners" element={<OwnersPage/>}/>
       
    </Routes>
    </>
  );
}

export default App;