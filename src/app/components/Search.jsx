'use client'
import { useSearchParams, usePathname,useRouter } from "next/navigation"
import { useState } from "react"
export default function Search() {
    const [loading,setLoading] = useState(false)
    const [results,setResults] = useState([])


    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()
    async function searchShows(query) {
        try {
        setLoading(true)
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
        finally {
            setLoading(false)
        }
    }
    function updateSearchParams(query) {
        const params = new URLSearchParams(searchParams)
        if(query) {
            params.set('query',query)
        }
        else {
            params.delete('query')
        }
        replace(`${pathName}?${params.toString()}`);
    }
    async function handleSearch(query) {
        updateSearchParams(query)
        const data =  await searchShows(query)
        setResults(data)
        console.log(data)

    }
    return (
        <>
            <input type="text" onChange={(e)=>handleSearch(e.target.value)}/>
            {loading && <h1>Loading Data....</h1>}
        </>
    )
}