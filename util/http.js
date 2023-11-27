import axios from "axios";
const BACKEND_URL =
  "https://project-one-mobile-b24d6-default-rtdb.firebaseio.com";
const API_KEY = "AIzaSyChTFUWBHGXKwn73idhHKjC_vmsKMxBD40";
export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}
export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
export function storePhones(phonesData) {
  try {
    return axios.post(BACKEND_URL + "/phones.json", phonesData);
  } catch (error) {
    console.error("Error storing phones:", error);
    throw new Error("Failed to store phones");
  }
}

export function fetchPhones() {
  axios.get(BACKEND_URL + "/phones.json");
}
