import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const { data, signIn, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    if (email.value && password.value) {
      signIn(email.value, password.value);
    }
  };

  useEffect(() => {
    if (data) {
      return navigate("/profile");
    }
  }, [data, navigate]);

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
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </form>
    </>
  );
};
