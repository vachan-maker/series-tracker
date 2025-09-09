export default function EpisodeItem({episode, seasonNumber}) {
    return (
        <div className="flex flex-col py-4 mb-4">
          <h2 className="text-xl">S{seasonNumber}.{episode.number} - {episode.name}</h2>
          <p>{episode.summary.replace(/<[^>]+>/g, "")}</p>
        </div>
    )
}