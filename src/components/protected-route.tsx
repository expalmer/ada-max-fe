import { Navigate } from "react-router-dom";
import { useAuth } from "../modules/auth/hooks/use-auth";

type Props = {
  role: "user" | "admin";
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children, role }: Props) => {
  const auth = useAuth();
  if (!auth.data || !role) {
    return <Navigate to="/signIn" replace />;
  }

  return children;
};
