import "./globals.css";
import GradientBG from "./components/gradientBackground";

export default async function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <head />
      <body>
        <GradientBG />
        {children}
      </body>
    </html>
  );
}
