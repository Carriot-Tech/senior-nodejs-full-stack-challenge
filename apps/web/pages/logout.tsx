import { useEffect } from "react";
import { withAuth } from "../components/withAuth";
import useUserClientSide from "../hooks/useUserClientSide";

function LogoutPage() {
  const { logout } = useUserClientSide();

  useEffect(() => {
    logout().then(() => {});
  }, []);

  return <div>Logout Page</div>;
}

export default withAuth(LogoutPage);
