import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function CreateAccount() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.endsWith('@gmail.com')) {
      alert('Only Gmail addresses are allowed!');
      return;
    }

    // ✅ Save user information into context
    setUser({
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      companyName: companyName,
    });

    navigate('/account-settings');
  };

  return (
    <div className="page">
      <h1>Create your PopX account</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required 
        />
        <input 
          type="text" 
          placeholder="Phone Number" 
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required 
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <input 
          type="text" 
          placeholder="Company Name" 
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        
        <div style={{ marginTop: '15px', textAlign: 'left' }}>
          <p>Are you an Agency?</p>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <label>
              <input type="radio" name="agency" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="agency" value="no" /> No
            </label>
          </div>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
