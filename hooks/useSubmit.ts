import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { type UserSignup, useAuth } from "../store/useAuth";

export function useSubmit() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { user_information: defaultValues, login, signup } = useAuth();

  const submit = async (data: Partial<UserSignup>) => {
    try {
      const res = await fetch("/api/signup-form", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        const promise = new Promise(resolve => {
          setTimeout(() => {
            resolve("");
          }, 500);
        });
        enqueueSnackbar("submit data success", { variant: "success" });

        await promise;
        signup(data);
        login();
        router.replace("/profile");
      } else {
        throw new Error("status code: " + res.status);
      }
    } catch (err: any) {
      enqueueSnackbar("user is ban", { variant: "error" });
    }
  };

  return { submit, defaultValues };
}
