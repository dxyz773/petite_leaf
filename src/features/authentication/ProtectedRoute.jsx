import { useEffect } from "react";
import { useUser } from "../users/useUser";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );
  if (isLoading) return <Loading />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
