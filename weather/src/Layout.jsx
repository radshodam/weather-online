export default function Layout({ children }) {
    return (
        <>
            <p>header</p>
            <main className="min-h-screen">{children}</main>
            <p> Footer </p>
        </>
    )
}