import { ChildType } from "@/types";
import ThemeProvider from "./theme";

const Providers = ({ children }: ChildType) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
    storageKey="theme"
  >
    {children}
  </ThemeProvider>
);

export default Providers;
