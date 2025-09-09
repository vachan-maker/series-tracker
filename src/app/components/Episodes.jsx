import { useEffect, useState } from "react"
import EpisodeItem from "./EpisodeItem"

export default function Episodes({season}) {
    const [data,setData] = useState([])
    async function fetchEpisodes() {
        const res = await fetch(`https://api.tvmaze.com/seasons/${season}/episodes`)
        const data = await res.json()
        setData(data)
    }
    useEffect(()=>{
        fetchEpisodes(season)
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