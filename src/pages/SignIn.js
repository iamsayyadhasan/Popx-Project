import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function SignIn() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.endsWith('@gmail.com')) {
      alert('Only Gmail accounts are allowed!');
      return;
    }

    // ✅ Set user email into context (name can be dummy since we don’t collect it)
    setUser({
      fullName: 'Gmail User',
      email: email,
      companyName: '',
      phoneNumber: '',
    });

    navigate('/account-settings');
  };

  return (
    <div className="page">
      <h1>Sign in to your PopX account</h1>
      <p>Enter your email and password to access your PopX account securely.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Enter password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignIn;
