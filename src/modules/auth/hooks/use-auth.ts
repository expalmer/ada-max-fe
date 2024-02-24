import { useMemo, useState } from "react";

import { AxiosError } from "axios";
import { decodeJwt } from "jose";
import { postSingIn } from "../../../api/api";
import useLocalStorage from "@rehooks/local-storage";

export const useAuth = () => {
  const [token, setToken] = useLocalStorage("token");
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const data = useMemo(() => {
    if (token) {
      try {
        return decodeJwt(token);
      } catch (error) {
        console.log("invalid token");
        return null;
      }
    }
    return null;
  }, [token]);

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const { data } = await postSingIn(email, password);
      setToken(data.token);
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || "Something went wrong");
    }
    setIsLoading(false);
  };

  const signOut = () => {
    setToken(null);
  };

  return {
    signIn,
    signOut,
    data,
    error,
    isLoading,
  };
};
