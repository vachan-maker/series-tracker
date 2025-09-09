import Image from "next/image"
export default function SeasonItem({data}) {
    return(
        <>
            <option value={data.number}>Season {data.number}</option>
        </>
    )
}