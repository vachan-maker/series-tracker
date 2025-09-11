'use client'
import SearchResults from "@/app/components/SearchResults";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function Search() {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const router = useRouter()
    const [isSingleShow,setIsSingleShow] = useState(false)
    async function searchShows(query) {
        try {
            setLoading(true)
            let res = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
            if (res.ok) {
                let show = await res.json()
                setData([{show}])
                setIsSingleShow(true)
                return
            }
            setIsSingleShow(false)
            res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            let data = await res.json()
            setData(data)

            if (!res.ok) {
                throw new Error("Error fetching data from API")
            }
            
            
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
    useEffect(()=>{
        if(!loading && data.length === 1) {

            router.push(`/shows/${data[0].show.id}`)
        }
    },[data,loading,router])
    // if (loading) return <h1>Loading</h1>
    //if there are more than a single show or multiple search results for the term , display them otherwise,navigate to the single show page
    if (!isSingleShow) return (
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