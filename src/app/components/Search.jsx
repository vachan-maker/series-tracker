export default function Search() {
    async function handleSearch(query) {
        try {
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        if(!res.ok) {
            throw new Error("Failed to fetch data!")
        }
        const data = await res.json()
        return data
        }catch(error) {
            console.error(error)
            return []
        }

        

    }
    return (
        <>
            <input type="text" onChange={(e)=>handleSearch(e.target.value)}/>
        </>
    )
}