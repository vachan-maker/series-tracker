export default function CastItem({castData}) {
    return (
        <div className="flex flex-col items-center">
            {castData.person.image?(castData.character.image.medium?(
                <img src={castData.character.image.medium}/>
            ):(castData.person.image.medium)
            ):(<h1>IMage not found</h1>)}
            <p>{castData.person.name}</p>
            <p>{castData.character.name}</p>
        </div>
    )
}