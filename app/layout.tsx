import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESC, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Store`,
    default: APP_NAME,
  },
  description: APP_DESC,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute={"class"}
        enableSystem
        disableTransitionOnChange
        defaultTheme={"dark"}
      >
        <body className={`${inter.className} antialiased`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
