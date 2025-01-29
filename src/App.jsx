import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { routes } from "./Routes";
import { Github } from "lucide-react";
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
        <div className="footer">
          <a href="https://github.com/frrst-ian">
            <Github className="github-icon" size={26} />
          </a>
          <p>Made by Ian Forrest</p>
        </div>
      </div>
    </Router>
  );
};

export default App;
