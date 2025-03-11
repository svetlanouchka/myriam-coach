export default function Services ({
    params
}: {
    params: {
        slug: string[]
    }
}) {
    if(params.slug?.length ===2) {
        return (
            <div>
                <h1>Viewing Services {params.slug[0]} - {params.slug[1]}</h1>
            </div>
        )
    } else if(params.slug?.length ===1) {
        return (
            <div>
                <h1>Viewing Service {params.slug[0]}</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>Services</h1>
        </div>
    )
}