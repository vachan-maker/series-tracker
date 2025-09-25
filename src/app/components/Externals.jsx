import { SiImdb } from "@icons-pack/react-simple-icons"
import Link from "next/link"
import IMDB from "./IMDB"
import TMDB from "./TMDB"
export default function Externals({externals}) {
    return (
        <div className="flex flex-row">
            {externals.imdb && <IMDB imdbID={externals.imdb}/>}
        </div>
    )
}