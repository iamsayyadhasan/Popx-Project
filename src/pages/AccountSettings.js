import { useContext } from 'react';
import { UserContext } from '../UserContext';

function AccountSettings() {
  const { user } = useContext(UserContext);

  return (
    <div className="page">
      <h1>Account Settings</h1>
      <div className="profile">
        <img 
          src="/User.jpg" 
          alt="Profile" 
          style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%' }} 
        />
        <h2>{user.fullName || 'No Name Provided'}</h2>
        <p>{user.email || 'No Email Provided'}</p>
      </div>
      <p style={{ textAlign: 'left' }}>
        Company Name: {user.companyName || 'N/A'} <br />
        Phone Number: {user.phoneNumber || 'N/A'}
      </p>
    </div>
  );
}

export default AccountSettings;
