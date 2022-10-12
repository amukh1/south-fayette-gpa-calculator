import "./styles.css";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";

// routes
import Route_Home from "./routes/home";
import Splash from "./splash";

export default function App() {
  // const location = useLocation()
  return (
    <div className="App">
      <Splash />
      <Router>
        <Routes>
          <Route path="/" element={<Route_Home />} />
        </Routes>
      </Router>
    </div>
  );
}

function None() {
  let location = useLocation();
  return <div>{location.pathname}</div>;
}
