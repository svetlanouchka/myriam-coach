import Link from "next/link";

export default function QuizPage() {
    return (
    <div>
        <h1>Quiz List</h1>
        <Link href="quizz/1">Quiz 1</Link>
        <Link href="quizz/2">Quiz 2</Link>
        <Link href="quizz/3">Quiz 3</Link>
    </div>
    );
}   