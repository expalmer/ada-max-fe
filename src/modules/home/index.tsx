import { Link } from "react-router-dom";
import { useAuth } from "../auth/hooks/use-auth";

export const Home = () => {
  const auth = useAuth();
  console.log({ auth });
  return (
    <>
      <h1>Home</h1>
      <Link to="/backstage">Backstage</Link>
    </>
  );
};
