import { Suspense } from "react"
import SearchClient from "../components/SearchClient"
import SuspenseLoading from "../components/SuspenseLoading"
export default function Search() {
    return (
        <>
            <Suspense fallback={<SuspenseLoading/>}>
                <SearchClient/>
            </Suspense>
        </>
    )
}