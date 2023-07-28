import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-online" element={<h1>Order - online</h1>} />
          <Route path="/dining" element={<h1>dining</h1>} />
          <Route
            path="/nightlife-and-clubs"
            element={<h1>nightlife-and-clubs</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
