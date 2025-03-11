import { Metadata } from "next"

export const genreateMetadata = ({ params }: { params: { id: string } }): Metadata => {
    return {
        title: `Quiz ${params.id}`,
        description: `Quiz ${params.id} description`,
    }
}

export default function QuizOne ({ 
    params 
}: { 
    params: { id: string } 
}) {
    return <h1> Quiz One {params.id}</h1>
}
