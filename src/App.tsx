import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Profile from "pages/profile";
import ProfileHeader from "pages/profile/ui/ProfileHeader";

import "./App.css";
import Landing from "./pages/landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="user" element={<ProfileHeader />} />
            <Route path="payment-methods" element={<ProfileHeader />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
