import { useEffect } from "react"
import EpisodeItem from "./EpisodeItem"

export default function Episodes({season}) {
    const [data,setData] = setState([])
    async function fetchEpisodes() {
        const res = await fetch(`https://api.tvmaze.com/seasons/${season}/episodes`)
        const data = await res.json()
        setData(data)
    }
    useEffect(()=>{
        fetchEpisodes()
    },[])
    return (
        <div className="flex flex-col">  
        {
            data.map((episode)=> {
                return <EpisodeItem episode={episode}/>
            })
        }
        </div>
    )
}