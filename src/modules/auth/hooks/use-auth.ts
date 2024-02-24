import { decodeJwt } from "jose";
import useLocalStorage from "@rehooks/local-storage";
import { useMemo } from "react";

export const useAuth = () => {
  const [token, setToken] = useLocalStorage("token");

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

  const signIn = async () => {
    setToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
  };

  return {
    signIn,
    data,
  };
};
