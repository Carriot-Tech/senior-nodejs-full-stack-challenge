import api from "./api";

export function login({ email, password }: any): Promise<any> {
  return api.post("auth/sign-in", {
    email,
    password,
  });
}

export function logout() {
  return new Promise((resolve, reject) => {
    resolve("");
  });
}

export function register({ email, password }: any) {
  return api.post("auth/sign-up", {
    email,
    password,
  });
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user") || "{}");
}
