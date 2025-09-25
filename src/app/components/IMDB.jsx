import { SiImdb } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function ({imdbID}) {
    return (
        <Link href={`https://imdb.com/title/${imdbID}`}>
            <SiImdb size={32}/>
        </Link>
    )
}