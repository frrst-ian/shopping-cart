import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { routes } from "./Routes"; 
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
      </div>
    </Router>
  );
};

export default App;