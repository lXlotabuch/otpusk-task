import './App.css';
import { Form } from './components/Form/Form';
import { useCallback, useEffect } from 'react';
import { checkToken } from './utils/getToken';
import { useDispatch } from 'react-redux';
import { logIn } from './store/auth/action';

function App() {
  const dispatch = useDispatch();

  const setUser = useCallback(async () => {
    const auth = await checkToken();
    if (auth) {
      dispatch(logIn(auth.email.email));
    }
  }, [dispatch]);

  useEffect(() => {
    setUser();
  }, [setUser]);

  return (
    <div className='App'>
      <Form />
    </div>
  );
}

export default App;
