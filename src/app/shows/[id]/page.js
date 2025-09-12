import SearchResults from "@/app/components/SearchResults"
import Seasons from "@/app/components/Seasons"
import Cast from "@/app/components/Cast"
import Show from "@/app/components/Show"
export default async function({params}) {
    const { id } = params
    console.log(id)
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    console.log(res)
    if (!res.ok) throw new Error("Failed to fetch show")
    const data = await res.json()
    return (
        <div className="flex flex-col max-w-8/12 mx-auto my-0 pt-8">
      <Show data={data} />
      <Cast id={data.id} />
      <Seasons id={data.id} />
    </div>
    )
}