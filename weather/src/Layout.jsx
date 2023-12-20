import BgAnimationCover from "./components/BgAnimationCover"
import Footer from "./components/Footer"
import Header from "./components/Header"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <BgAnimationCover />
            <main className="min-h-screen max-w-9xl mx-auto select-none">{children}</main>
            <Footer />
        </>
    )
}