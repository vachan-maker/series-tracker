export default function SearchBar({input,setInput}) {
    return (
        <>
        <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} className="border rounded-md px-2 py-2 w-2xl"/>
        </>
    )
}