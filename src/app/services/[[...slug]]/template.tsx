'use client';

import { useState } from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [info, setInfo] = useState('');
    return (
        <>
            {children}
            <input style={{border: '1px solid'}} value={info} onChange={(e) => setInfo(e.target.value)} />
        </>
    
    );
}