import { useRouter } from "next/router";
import { useAuth } from "../store/useAuth";
import { useEffect } from "react";

export function useIsLogin() {
  const router = useRouter();
  const { isLogin } = useAuth();

  useEffect(() => {
    let mount = true;

    if (mount) {
      if (!isLogin) {
        router.push("/login");
      } else {
        if (router.pathname === "login") {
          router.replace("/profile");
        }
      }
    }

    return () => {
      mount = false;
    };
  }, [isLogin]);
}
