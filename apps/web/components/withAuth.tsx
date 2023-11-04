import router from "next/router";
import useUserClientSide from "../hooks/useUserClientSide";
import { Loading } from "./Loading";

export function withAuth(Component: any) {
  const Auth = () => {
    const { isLoggedOut, isLoading } = useUserClientSide();

    if (isLoading) {
      return <Loading />;
    }

    if (isLoggedOut) {
      router.push("/login");
      return <Loading />;
    }

    return <Component></Component>;
  };

  return Auth;
}
