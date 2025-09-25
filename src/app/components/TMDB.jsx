import { SiThemoviedatabase } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function ({tmdbID}) {
    return (
        <Link href={`https://imdb.com/title/${tmdbID}`}>
            <SiThemoviedatabase size={32}/>
        </Link>
    )
}