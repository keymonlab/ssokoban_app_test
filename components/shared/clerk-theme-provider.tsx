"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ClerkThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine which theme to use
  const currentTheme = mounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : "dark";
  const isDark = currentTheme === "dark";

  return (
    <ClerkProvider
      appearance={{
        baseTheme: isDark ? dark : undefined,
        variables: isDark
          ? {
              colorPrimary: "#3b82f6",
              colorBackground: "#000000",
              colorInputBackground: "#18181b",
              colorInputText: "#ffffff",
            }
          : {
              colorPrimary: "#3b82f6",
              colorBackground: "#ffffff",
              colorInputBackground: "#f4f4f5",
              colorInputText: "#000000",
            },
        elements: {
          formButtonPrimary:
            "bg-primary text-primary-foreground hover:bg-primary/90",
          card: "bg-background",
          headerTitle: "text-foreground",
          headerSubtitle: "text-muted-foreground",
          socialButtonsBlockButton:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          formFieldLabel: "text-foreground",
          formFieldInput: "bg-input border-input text-foreground",
          footerActionLink: "text-primary hover:text-primary/80",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
