'use client'
import { useEffect, useState } from "react"
import SeasonItem from "./SeasonItem"
import Episodes from "./Episodes"

export default function Seasons({ id }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [season, setSeason] = useState("")
    async function fetchSeasons(id) {
        setLoading(true)
        try {
            const res = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
            if (!res.ok) {
                throw new Error("Error fetching data from API")
            }
            const data = await res.json()
            console.log("Seasons")
            console.log(data)
            setData(data)
            if (data.length > 0) {
                setSeason(data[0].id)
            }
        } catch (error) {
            console.error("Error")
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchSeasons(id)
    }, [id])
    return (
        <>
            <div className="mt-10 mb-5">
                <h2 className="text-4xl mb-2">Seasons & Episodes</h2>
                <b className="mb-2 mt-4">Select Season</b>
            </div>
            <select className="bg-slate-100 px-4 py-3 w-1/2 rounded" value={season} onChange={(e) => { setSeason(e.target.value) }}>
                {
                    data.map((item, index) => {
                        return <SeasonItem data={item} key={index} />
                    })
                }

            </select>
            <Episodes season={season} />
        </>
    )
}