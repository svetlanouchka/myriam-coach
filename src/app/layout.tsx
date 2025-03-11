import Header from "./components/Header";

export const metadata = {
    title: "Myriam Saï Coach Motivation",
    description: "Myriam",};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <html lang="fr">
        <body>
        <header
        style={{
            backgroundColor: "black",
            color: "white",
            padding: "1rem",}}
        >
            <Header />
        </header>
        <main>{children}</main>
        <footer
        style={{
            backgroundColor: "black",
            color: "white",
            padding: "1rem",
        }}>Footer</footer>
        </body>
    </html>
    );
}