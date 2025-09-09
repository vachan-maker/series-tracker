import Image from "next/image"
export default function SeasonItem({data}) {
    return(
        <>
            <option value={data.id}>Season {data.number}</option>
        </>
    )
}