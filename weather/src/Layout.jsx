import BgAnimationCover from "./components/BgAnimationCover"
import Footer from "./components/Footer"
import Header from "./components/Header"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <BgAnimationCover />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    )
}