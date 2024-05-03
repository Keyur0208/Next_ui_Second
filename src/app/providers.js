import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}
