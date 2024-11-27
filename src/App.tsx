import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NotFound from "pages/NotFound";
import Landing from "pages/landing";
import Profile from "pages/profile";
import { QueryClientProvider } from "pages/profile/providers";
import PaymentMethods from "pages/profile/ui/PaymentMethods";
import ProfileInfo from "pages/profile/ui/ProfileInfo";
import ProfileNotFound from "pages/profile/ui/ProfileNotFound";
import User from "pages/profile/ui/User";

import "./App.css";

function App() {
  return (
    <QueryClientProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/profile" element={<Profile />}>
              <Route index element={<ProfileInfo />} />
              <Route path="user" element={<User />} />
              <Route path="payment-methods" element={<PaymentMethods />} />
              <Route path="*" element={<ProfileNotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
