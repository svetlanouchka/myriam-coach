export default function AvisLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <>
        <div className="bg-gray-100">
        {children}
        </div>

    </>
    );
}