import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from '../styles/Home.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={styles.body}>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  )
}
