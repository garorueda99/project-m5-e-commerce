// Libraries
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../actions';
import { fetchCart } from '../components/helpers/fetch-functions';
import { useHistory } from 'react-router-dom';
export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState('idle');
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();
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

      .catch(function (error) {
        if (error.status == 404) {
          history.push('/404');
        } else {
          history.push('/technical-issue');
        }
      });
    fetchCart().then((data) => {
      dispatch(loadCart(data));
    });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
