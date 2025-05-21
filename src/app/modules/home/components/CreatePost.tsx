import React from 'react';
import { FaVideo, FaImages, FaSmile } from 'react-icons/fa';

// Placeholder for user data, replace with actual user data as needed
const MOCK_USER = {
  name: 'User', // Replace with actual user name
  avatar: 'https://via.placeholder.com/40', // Replace with actual user avatar
};

const CreatePost: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <img src={MOCK_USER.avatar} alt="User Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '0.5rem' }} />
        <input 
          type="text" 
          placeholder={`What's on your mind, ${MOCK_USER.name}?`} 
          style={{ flexGrow: 1, padding: '0.75rem', borderRadius: '20px', border: 'none', backgroundColor: '#f0f2f5' }} 
        />
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #e4e6eb', margin: '0.5rem 0' }} />
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <button style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color: '#65676b', fontWeight: 'bold' }}>
          <FaVideo style={{ marginRight: '0.5rem', color: 'red' }} /> Live video
        </button>
        <button style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color: '#65676b', fontWeight: 'bold' }}>
          <FaImages style={{ marginRight: '0.5rem', color: 'green' }} /> Photo/video
        </button>
        <button style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color: '#65676b', fontWeight: 'bold' }}>
          <FaSmile style={{ marginRight: '0.5rem', color: 'orange' }} /> Feeling/activity
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
