import GenreItem from "./GenreItem"

export default function Genres({genre}) {
    return (
        <div className="flex flex-row gap-2">
            {genre.map((item,index)=>{
                return <GenreItem key={index} item={item}/>
            })}
        </div>
    )
}