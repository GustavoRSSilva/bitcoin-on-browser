import CryptoJS from 'crypto-js';
import { saveItem, getItem } from './storage';

const IS_VALID = 'isValid';
const PASSWORD = 'password';

const USER = 'p';

const SECRET = process.env.SECRET || 'secret_key';

const getUser = async () => {
  const ciphertext = await getItem(USER);
  if (!ciphertext) {
    return null;
  }

  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

//  save user
const saveUser = data => {
  //  encrypt the user data
  const encryptData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    SECRET,
  ).toString();
  saveItem(USER, encryptData);
};

//  fetch user by key
const getUserKey = (user, key = null) => (user ? user[key] : null);

//  fetch user by key
const setUserKey = (key, value) => {
  let user = getUser();
  if (!user) {
    user = {};
  }
  user[key] = value;
  return saveUser(user);
};

//  On session start, we will invalidate the user session
//  in order to force him to login back into the extension
export const invalidateUserSession = () => {
  const user = getUser();

  if (!user) {
    return null;
  }

  user[IS_VALID] = false;
  return saveUser(user);
};

//  returns if the user is valid or not
export const isUserValid = () => getUserKey(IS_VALID);

export const setUserPassword = password => {
  setUserKey(IS_VALID, true);
  setUserKey(PASSWORD, password);
};

export const isUserCreated = () =>
  getUser().then(user => getUserKey(user, PASSWORD));
