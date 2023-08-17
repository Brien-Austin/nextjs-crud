import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center rounded-md text-white bg-black px-8 py-3">
            <Link className="font-bold text-xl" href="/">Database</Link>
            <Link className="bg-white font-semibold text-black p-2 rounded" href="/addDestination">Add Destination</Link>
        </nav>
    )
}