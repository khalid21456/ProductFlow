export default function AddLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="h-20 bg-green-500 shadow-amber-200"></div>
            <div>{children}</div>
        </>
    );
}

    