import Footer from "./components/Footer"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0, fontFamily:'system-ui'}}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
