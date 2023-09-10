import { SnackbarProvider } from "notistack";
import { ThemeRegistry } from "../ThemeRegistry";

interface IProps {
  children: React.ReactNode;
}
export function Providers({ children }: IProps) {
  return (
    <ThemeRegistry>
      <SnackbarProvider>{children}</SnackbarProvider>
    </ThemeRegistry>
  );
}
