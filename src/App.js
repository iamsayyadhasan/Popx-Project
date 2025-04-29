import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import CreateAccount from './pages/CreateAccount';
import SignIn from './pages/SignIn';
import AccountSettings from './pages/AccountSettings';
import { UserContext } from './UserContext';
import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/account-settings" element={<AccountSettings />} />
            </Routes>
          </div>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
