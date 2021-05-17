import './App.css';
import { useCallback, useEffect } from 'react';
import { checkToken } from './utils/getToken';
import { useDispatch } from 'react-redux';
import { logIn } from './store/auth/action';
import { useHistory } from 'react-router-dom';
import { Router } from './components/Router/Router';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const setUser = useCallback(async () => {
    const auth = await checkToken();
    if (auth) {
      dispatch(logIn(auth.email.email));
      history.push('/');
    }
  }, [dispatch, history]);

  useEffect(() => {
    setUser();
  }, [setUser]);

  return (
    <div className='App'>
      <Router />
    </div>
  );
}

export default App;
