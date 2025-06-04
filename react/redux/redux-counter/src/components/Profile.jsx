import React from 'react';

const Profile = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      backgroundColor: '#f3f4f6',
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      backgroundColor: 'white',
      padding: '2rem 3rem',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    title: {
      fontSize: '2rem',
      color: '#1f2937',
      margin: 0,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>My Profile Page</h1>
      </div>
    </div>
  );
};

export default Profile;
