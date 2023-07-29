import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderOnline from "./pages/Order-Online/OrderOnline";
import Dining from "./pages/Dining/Dining";
import NightLife from "./pages/Nightlife/NightLife";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/nightlife-and-clubs" element={<NightLife />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
