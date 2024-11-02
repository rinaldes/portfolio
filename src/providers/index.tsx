import { ChildType } from "@/types";
import ThemeProvider from "./theme";

const Providers = ({ children }: ChildType) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    forcedTheme="dark"
    enableSystem={false}
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>
);

export default Providers;
