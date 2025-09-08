'use client'
import { use, useEffect, useState } from "react"
export default function Shows({params}) {
    const { id }= use(params)
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    async function getShowDetails(id) {
        setLoading(false)
        try {
            setLoading(true)
            const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
            if(!res.ok) {
                throw new Error("Error fetching data from API")
            }
            const data = await res.json()
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
    return (
        <>
        </>
    )
}