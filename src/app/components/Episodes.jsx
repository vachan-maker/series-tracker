import { useEffect, useState } from "react"
import EpisodeItem from "./EpisodeItem"

export default function Episodes({season}) {
    const [data,setData] = useState([])
    async function fetchEpisodes() {
        try {
        const res = await fetch(`https://api.tvmaze.com/seasons/${season}/episodes`)
        if(!res.ok) {
            throw new Error("Error fetching data from API")

        }
        const data = await res.json()
        setData(data)
        }
        catch(error) {
            console.error("Error")
        }
    }
    useEffect(()=>{
        if(season) {
        fetchEpisodes(season)
        }
    },[season])
    return (
        <div className="flex flex-col">  
        {
            data.map((episode)=> {
                return <EpisodeItem episode={episode} key={episode.id}/>
            })
        }
        </div>
    )
}