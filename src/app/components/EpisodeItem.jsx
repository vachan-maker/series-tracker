export default function EpisodeItem({episode}) {
    return (
        <div className="flex flex-col py-4 my-4 w-9/12 border-2 border-slate-200 p-3 rounded">
          <h2 className="text-xl mb-2 font-bold">S{episode.season}.{episode.number} - {episode.name}</h2>
          <p>{episode.summary.replace(/<[^>]+>/g, "")}</p>
        </div>
    )
}