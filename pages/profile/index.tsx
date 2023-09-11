import { Typography } from "@mui/material";
import { useIsLogin } from "../../hooks/useIsLogin";

export default function Profile() {
  useIsLogin();

  return (
    <Typography variant="h1" textAlign="center" data-test-id="header">
      welcome to your profile
    </Typography>
  );
}
