// Libraries
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../actions';
export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState('idle');
  const dispatch = useDispatch();
  React.useEffect(() => {
    fetch('/api/me/profile', { method: 'GET' })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Unable to retrieve user profile');
        }
      })
      .then((data) => {
        setCurrentUser(data);
        setStatus('idle');
      })

      .catch((error) => {
        console.error('Error:', error);
      });
    dispatch(fetchCart());
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
