'use client'
import { use, useEffect, useState } from "react"
export default function Shows({params}) {
    const { id }= use(params)
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState("")
    async function getShowDetails(id) {
        setLoading(false)
        try {
            setLoading(true)
            const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
            console.log(res)
            if(!res.ok) {
                throw new Error("Error fetching data from API")
            }
            const data = await res.json()
            console.log(data)
            setData(data)
            console.log(data)

        }catch(error) {
            console.error(error)
            return []
        }finally {
            setLoading(false)
        }
    }
    useEffect(()=>{
        getShowDetails(id)
    },[id])
    if (loading) return <p>Loading Data</p>
    if (!data) return <p>Data not found</p>
    return (
        <>
        {!loading && (<div className="flex flex-col max-w-8/12 mx-auto my-0 pt-8">
        {/* z */}
        <div className="flex flex-col">
        <div className="flex flex-row">
        <img src={data.image?(data.image.original || data.image.medium):("https://dummyimage.com/210x295/cccccc/000000&text=No+Image")} className="w-3xs rounded"/>
        <h1 className="text-4xl">{data.name}</h1>
        </div>
        </div>
        
        <p>{data.summary.replace(/<[^>]+>/g, "")}</p>
        </div>)}
        </>
    )
}