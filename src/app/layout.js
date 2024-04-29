import Footer from "./componets/footer";
import Header from "./componets/header";
import "./globals.css";
import Providers from "./providers";

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
      <body >
        <Providers>
          <header>
            <Header />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer/>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
