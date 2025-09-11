'use client'
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import SearchResults from "./SearchResults"
import SearchBar from "./SearchBar"
export default function Search() {
    const [input, setInput] = useState("")
    return (
        <>
            <SearchBar input={input} setInput={setInput}/>
        </>
    )
}