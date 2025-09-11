export default function CastItem({castData}) {
    return (
        <div className="flex flex-col items-center">
            <img src={castData.person.image.medium?(
                castData.person.image.medium
            ):("https://dummyimage.com/210x295/cccccc/000000&text=No+Image")}/>
            <p>{castData.person.name}</p>
            <p>{castData.character.name}</p>
        </div>
    )
}