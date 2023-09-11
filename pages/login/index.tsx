import { LoginFields } from "../../components/login";
import { useIsLogin } from "../../hooks/useIsLogin";
export default function Login() {
  useIsLogin();
  return <LoginFields />;
}
