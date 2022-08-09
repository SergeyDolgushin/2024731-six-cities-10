const AUTH_TOKEN_KEY_NAME = 'user-cix-cities-token';
const AUTH_EMAIL_KEY_NAME = 'user-cix-cities-email';
const USER_IMG_KEY_NAME = 'user-cix-cities-img';
const USER_ID_KEY_NAME = 'user-cix-cities-id';

export type Token = string;
export type UserInfo = {
  email: string,
  userImg: string,
  id: string,
};

const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

const getUserInfo = (): UserInfo => {
  const email = localStorage.getItem(AUTH_EMAIL_KEY_NAME);
  const userImg = localStorage.getItem(USER_IMG_KEY_NAME);
  const userId = localStorage.getItem(USER_ID_KEY_NAME);
  return {
    email: email ?? '',
    userImg: userImg ?? '',
    id: userId ?? '',
  };
};


const saveToken = (token: Token, email: string, userImg: string, userId: string): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
  localStorage.setItem(AUTH_EMAIL_KEY_NAME, email);
  localStorage.setItem(USER_IMG_KEY_NAME, userImg);
  localStorage.setItem(USER_ID_KEY_NAME, userId);
};

const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
  localStorage.removeItem(AUTH_EMAIL_KEY_NAME);
  localStorage.removeItem(USER_IMG_KEY_NAME);
  localStorage.removeItem(USER_ID_KEY_NAME);
};

export { getToken, saveToken, dropToken, getUserInfo };
