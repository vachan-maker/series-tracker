import { useState } from "react"
import { useRouter } from "next/navigation"
export default function SearchBar({}) {
    const [input,setInput] = useState("")
    const router = useRouter()
    function handleSearch(input) {
        if (input.trim() == "") return ;


        router.push(`search?q=${encodeURIComponent(input)}`)
    }
    function handleKeyDown(event) {
        if(event.key == 'Enter') {
            handleSearch(input)
        }
    }

    return (
        <>
        <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} className="border rounded-md px-2 py-2 w-2xl" onKeyDown={(e)=>handleKeyDown(e)}/>
        </>
    )
}