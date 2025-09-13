import { Toaster } from "react-hot-toast";
import AuthProvider from "./_components/auth/context/AuthContext";
import "./globals.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fredoka", // registers CSS variable
});

export const metadata = {
  title: "Paper Stake",
  description: "Your favorite color betting platform",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fredoka.variable} bg-background-primary overflow-x-hidden`}
    >
      <body className="antialiased min-h-screen box-border bg-background-secondary sm:ml-10 sm:mr-10 font-sans overflow-x-hidden">
        <main>
          <AuthProvider>{children}</AuthProvider>
          <Toaster position="top-center" />
        </main>
      </body>
    </html>
  );
}
