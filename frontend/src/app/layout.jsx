import "../styles/globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "../utils/theme";

export const metadata = {
  title: "Plantopia",
  icons: {
    icon: "/assets/header-icon.svg",
    shortcut: "/assets/header-icon.svg",
    apple: "/assets/header-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
