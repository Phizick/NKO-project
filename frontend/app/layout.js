import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  )
}
