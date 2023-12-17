export default function Layout({ children }) {
    return (
        <>
            <p>header</p>
            <main>{children}</main>
            <p> Footer </p>
        </>
    )
}