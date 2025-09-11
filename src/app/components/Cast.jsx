import { useEffect, useState } from "react"
export default function Cast({id}) {
    async function fetchCast(id) {
        const [data,setData] = useState([])
        try {
        const res = await fetch (`https://api.tvmaze.com/shows/${id}/cast`)
        if(!res.ok) {
            throw new Error("Error fetching data from API")
        }
        const data = await res.json()
        const slicedData = data.slice[0,6]
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
        <>
        {data.map((item)=> {
            return (
                <h1>{item.person.name}</h1>
            )
        })}

        </>
    )
}