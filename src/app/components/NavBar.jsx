import Link from "next/link"
export default function NavBar() {
    return (
            <header className="w-full py-4 border-gray-200 border-b-2 flex items-center justify-center">
                <nav>
                    <ul>
                        <li className="text-xl"><Link href="/">Binge Tracker</Link></li>
                    </ul>
                </nav>
            </header>
    )
}