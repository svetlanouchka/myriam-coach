'use client'
import { useRouter } from "next/navigation";

export default function Contact() {
    const router = useRouter();

    const handleSendContactForm = () => {
        console.log('Formulaire envoyé');
        router.push('/');
    }

    return (
        <>
        <div>
        <h1>Contact</h1>
        <button onClick={handleSendContactForm}>Valider le formulaire</button>

    </div>
            </>
    );
}