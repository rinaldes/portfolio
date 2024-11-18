import { ChildType } from "@/types";
import ThemeProvider from "./theme";
import { BackToTop } from "@/components/ui/back-to-top";
import { CommandMenu } from "@/components/ui/command-menu";

const Providers = ({ children }: ChildType) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange={false}
  >
    <CommandMenu />
    {children}
    <div className="fixed bottom-6 right-6">
      <BackToTop />
    </div>
  </ThemeProvider>
);

export default Providers;
