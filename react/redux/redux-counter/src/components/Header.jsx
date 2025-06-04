import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Header = () => {
  const auth = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout())
  };

  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#1f2937',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    nav: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    button: {
      padding: '0.4rem 0.8rem',
      backgroundColor: '#f87171',
      border: 'none',
      borderRadius: '4px',
      color: 'white',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Auth</div>
      {
        auth &&
      <nav style={styles.nav}>
        <span style={styles.link}>My Products</span>
        <span style={styles.link}>My Sales</span>
        <button style={styles.button} onClick={handleLogout}>Logout</button>
      </nav>
}
    </header>
  );
};

export default Header;
