'use client'
import SearchResults from "@/app/components/SearchResults";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function Search() {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    async function searchShows(query) {
        try {
            setLoading(true)
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            if (!res.ok) {
                throw new Error("Failed to fetch data!")
            }
            const data = await res.json()
            setData(data)
            console.log(data)
        } catch (error) {
            console.error(error)
            return []
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        searchShows(query)
    }, [query])
    if (loading) return <h1>Loading</h1>
    return (
        <div className="w-full h-full flex flex-col items-center pt-10 gap-14">
            <ul>
                {data.map((item) => {
                    return <li key={item.show.id} className="flex flex-row mb-4"><SearchResults item={item} />
                    </li>
                })}
            </ul>
        </div>
    )

}