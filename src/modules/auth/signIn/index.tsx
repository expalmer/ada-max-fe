import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    if (email.value && password.value) {
      auth.signIn();
    }
  };

  useEffect(() => {
    if (auth.data) {
      console.log("signed");
      return navigate("/profile");
    }
  }, [auth.data, navigate]);

  return (
    <>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="email" name="email" required />
        </p>
        <p>
          <input type="password" name="password" required />
        </p>
        <p>
          <button type="submit">Sign In</button>
        </p>
      </form>
    </>
  );
};
