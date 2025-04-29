import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  
  return (
    <div className="page">
      <h1>Welcome to PopX</h1>
      <p>Join us to explore the latest trends and connect with a vibrant community!.</p>
      <button onClick={() => navigate('/create-account')}>Create Account</button>
      <button onClick={() => navigate('/signin')}>Already Registered? Login</button>
    </div>
  );
}

export default Welcome;
