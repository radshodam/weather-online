import Footer from "./components/Footer"
import Header from "./components/Header"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    )
}