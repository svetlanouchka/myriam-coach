export default function OffresLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <>
        <div className="bg-violet">
        {children}
        </div>

    </>
    );
}