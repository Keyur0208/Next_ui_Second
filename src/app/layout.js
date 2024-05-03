import Footer from "./componets/footer";
import Header from "./componets/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import AOSInit from "./aos";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "STARTD - TFZ",
  description: "Created By Keyur Pansuriya",
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`} >
        <Providers>
          <header>
            <Header />
          </header>
          <main>
            {children}
            <AOSInit />
          </main>
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
