import { getUser, validateToken } from '../sdk';

export const checkToken = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const res = await validateToken(token);
    if (res) {
      const user = await getUser(token);
      return user;
    }
  }

  return false;
};
