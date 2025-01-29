import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Cart } from "./components/Cart";
import { HomePage } from "./components/Homepage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
