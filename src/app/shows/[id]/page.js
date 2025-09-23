'use client'
import { use, useEffect, useState } from "react"
import Seasons from "@/app/components/Seasons"
import Cast from "@/app/components/Cast"
import Show from "@/app/components/Show"
import NavBar from "@/app/components/NavBar"
export default function Shows({ params }) {
    const { id } = use(params)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    async function getShowDetails(id) {
        setLoading(false)
        try {
            setLoading(true)
            const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
            console.log(res)
            if (!res.ok) {
                throw new Error("Error fetching data from API")
            }
            const data = await res.json()
            console.log(data)
            setData(data)
            console.log(data)

        } catch (error) {
            console.error(error)
            return []
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getShowDetails(id)
    }, [id])
    if (loading) return <p>Loading Data</p>
    if (!data) return ""
    return (
        <>
            {!loading && (<>
                <NavBar/>
                <div className="flex flex-col lg:max-w-8/12 px-4 mx-auto my-0 pt-8">
                    <Show data={data}/>
                    <Cast id={data.id} />
                    <Seasons id={data.id} />
                </div>
            </>)}
        </>
    )
}