export default function Show({ data }) {
    return (
        <div className="flex flex-row gap-4">
            <img src={data.image ? (data.image.original || data.image.medium) : ("https://dummyimage.com/210x295/cccccc/000000&text=No+Image")} className="w-3xs rounded" />
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl">{data.name}</h1>
                <p>{data.summary.replace(/<[^>]+>/g, "")}</p>
            </div>
        </div>
    )
}