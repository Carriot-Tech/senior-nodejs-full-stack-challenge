import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { login, logout } from "../services/auth.service";

const userAtom = atom(undefined);
const loadingAtom = atom(true);

export default function useUserClientSide() {
  const [user, setUser] = useAtom(userAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [error, setError] = useState(false);

  const isLoggedOut = !user || error;

  const handleLogin = (credentials: any) => {
    setLoading(true);
    return login(credentials).then((response: any) => {
      if (response.data?.data) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setUser(response.data.data);
      }
      return response.data.data;
    });
  };

  const handleLogout = () => {
    setLoading(true);
    return logout()
      .then(() => {
        localStorage.removeItem("user");
        setUser(undefined);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("user") || "{}");
    if (temp && temp.access_token) {
      setUser(temp);
    } else {
      setError(true);
    }
    setLoading(false);
  }, []);

  return {
    isLoading: loading,
    isLoggedOut,
    user,
    logout: handleLogout,
    login: handleLogin,
  };
}
