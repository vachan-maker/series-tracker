import Externals from "./Externals";
import Genres from "./Genres";

export default function Show({ data }) {
    return (
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-4">
            <img src={data.image ? (data.image.original || data.image.medium) : ("https://dummyimage.com/210x295/cccccc/000000&text=No+Image")} className="w-[60%] h-auto lg:w-3xs rounded" />
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl text-center lg:text-left">{data.name}</h1>
                <p>{data.summary.replace(/<[^>]+>/g, "")}</p>
                <Genres genre={data.genres}/>
                <Externals externals={data.externals}/>
            </div>
        </div>
    )
}