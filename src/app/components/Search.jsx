'use client'
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
export default function Search() {
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    const [input, setInput] = useState("")
    const [isActive,setIsActive] = useState(false)


    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()
    async function searchShows(query) {
        try {
            setLoading(true)
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            if (!res.ok) {
                throw new Error("Failed to fetch data!")
            }
            const data = await res.json()
            return data
        } catch (error) {
            console.error(error)
            return []
        }
        finally {
            setLoading(false)
        }
    }
    function updateSearchParams(query) {
        const params = new URLSearchParams(searchParams)
        if (query) {
            params.set('query', query)
        }
        else {
            params.delete('query')
        }
        replace(`${pathName}?${params.toString()}`);
    }
    async function handleSearch(query) {
        updateSearchParams(query)
        const data = await searchShows(query)
        setResults(data)
        console.log(data)

    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (input.trim() !== "") {
                handleSearch(input)
            } else {
                updateSearchParams("")
                setResults([])
            }
        }, 1000)
        return () => clearTimeout(timeout)
    }, [input])
    return (
        <>
            <div className="">
            <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} className="border rounded-md px-2 py-2 w-2xl"/>
            </div>
            {loading && <h1>Loading Data....</h1>}
                {!loading && results.length > 0 && (
                    <ul>
                    {results.map((item) => {
                        return <li key={item.show.id} className="flex flex-row mb-4">
                            {item.show.image?(<img src={item.show.image.medium} alt={item.show.name} className="mr-4 rounded hover:shadow-2xl" />):<img src="https://dummyimage.com/210x295/cccccc/000000&text=No+Image"/>}
                            <div className="flex flex-col gap-2">
                            <a href={`/shows/${item.show.id}`} className="hover:underline underline-offset-4"><h2 className="text-2xl">{item.show.name}</h2></a>
                            <p><b>Premiered On: </b> {item.show.premiered}</p>
                            <p><b>Ended On: </b>{item.show.ended}</p>
                            {item.show.summary?(<p className="line-clamp-3 max-w-lg">{item.show.summary.replace(/<[^>]+>/g, "")}</p>):("")}
                            </div>
                            </li>
                    })}
                    </ul>
                )}
        </>
    )
}