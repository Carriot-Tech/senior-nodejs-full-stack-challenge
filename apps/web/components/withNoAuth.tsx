import router from "next/router";
import useUserClientSide from "../hooks/useUserClientSide";
import { Loading } from "./Loading";

export function withNoAuth(Component: any) {
  const NoAuth = () => {
    const { isLoggedOut, isLoading } = useUserClientSide();

    if (isLoading) {
      return <Loading />;
    }

    if (!isLoggedOut) {
      router.push("/");
      return <Loading />;
    }
    return <Component></Component>;
  };

  return NoAuth;
}
