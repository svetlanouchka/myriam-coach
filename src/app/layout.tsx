// app/layout.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Myriam Saï Coach Motivation",
  description: "Myriam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <header
          style={{
            backgroundColor: "#14083d",
            color: "white",
            padding: "1rem",
          }}
        >
          <Header />
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}