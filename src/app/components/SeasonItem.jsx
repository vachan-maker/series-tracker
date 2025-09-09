export default function SeasonItem({data}) {
    return(
        <>
            <div className="flex flex-col items-center">
            <img src={data.image.medium} className="w-3/4"/>
            <h2>{`Season ${data.number}`}</h2>
            </div>
        </>
    )
}