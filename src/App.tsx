import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NotFound from "pages/NotFound";
import Profile from "pages/profile";
import ProfileInfo from "pages/profile/ui/ProfileInfo";
import ProfileNotFound from "pages/profile/ui/ProfileNotFound";

import "./App.css";
import Landing from "./pages/landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<ProfileInfo />} />
            <Route path="user" element={<ProfileInfo />} />
            <Route path="payment-methods" element={<ProfileInfo />} />
            <Route path="*" element={<ProfileNotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
