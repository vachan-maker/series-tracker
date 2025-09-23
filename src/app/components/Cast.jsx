import { useEffect, useState } from "react"
import CastItem from "./CastItem"
export default function Cast({id}) {
    const [data,setData] = useState([])
    async function fetchCast(id) {
        
        try {
        const res = await fetch (`https://api.tvmaze.com/shows/${id}/cast`)
        if(!res.ok) {
            throw new Error("Error fetching data from API")
        }
        const data = await res.json()
        const slicedData = data.slice(0,6)
        setData(slicedData)
        }
        catch(error) {
            console.error("Erroor")
        }
    }
    useEffect(()=>{
        fetchCast(id)
    },[id])
    return (
        <div className="flex flex-col mt-8">
            <h2 className="text-4xl mb-2">Cast</h2>
        <div className="flex flex-row sm:gap-2 lg:gap-6 overflow-y-auto">
        {data.map((item)=> {
            return (
                <CastItem castData={item} key={item.person.id}/>
            )
        })}
        </div>
        </div>
    )
}