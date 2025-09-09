'use client'
import { useEffect, useState } from "react"
import SeasonItem from "./SeasonItem"

export default function Seasons({id}) {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    async function fetchSeasons(id) {
        setLoading(true)
        try {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
        if(!res.ok) {
            throw new Error("Error fetching data from API")
        }
        const data = await res.json()
        console.log("Seasons")
        console.log(data)
        setData(data)
        }catch(error) {
            console.error("Error")
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchSeasons(id)
    },[])
    return (
        <>
        <h2 className="text-4xl">Seasons</h2>
        <div className="flex flex-row flex-wrap mt-5 gap-8">
            {
                data.map((item,index) =>{
                   return <SeasonItem data={item} key={index}/>
                })
            }

        </div>
        </>
    )
}