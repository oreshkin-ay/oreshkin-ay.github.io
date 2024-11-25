import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Profile from "pages/profile";

import "./App.css";
import Landing from "./pages/landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
