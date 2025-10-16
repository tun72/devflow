// app/layout.jsx
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

export default function Layout({ children, ...props }: ThemeProviderProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
