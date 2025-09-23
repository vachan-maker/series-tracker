export default function SearchResults({ item }) {
    console.log("Item passed from parent",item)
    if(!item || item.length === 0) return <h1>No Results</h1>
    return (
        <>
            {item.show.image ? (<img src={item.show.image.medium} alt={item.show.name} className="mr-4 rounded hover:shadow-2xl" />) : <img src="https://dummyimage.com/210x295/cccccc/000000&text=No+Image" />}
            <div className="flex flex-col gap-2">
                <a href={`/shows/${item.show.id}`} className="hover:underline underline-offset-4"><h2 className="text-2xl">{item.show.name}</h2></a>
                <p><b>Premiered On: </b> {item.show.premiered}</p>
                <p><b>Ended On: </b>{item.show.ended}</p>
                {item.show.summary ? (<p className="line-clamp-3 max-w-lg">{item.show.summary.replace(/<[^>]+>/g, "")}</p>) : ("No description")}
            </div>
        </>
    )
}