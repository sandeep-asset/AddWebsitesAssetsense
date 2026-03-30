import {  Routes, Route, Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import "./index.css";
import Brokers from "./BrokersPage/Pages/Brokers";

function App() {
  return (

    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Routes>
      {/* Toast Container */}
       <Route path="/" element={<Brokers/>}/>
    </Routes>
    </>
  );
}

export default App;