import Link from "next/link"
import Search from "./Search"

const Header = () => {
    return <header>
        <Link href="/" className="brand">Blogreat</Link>
        <Search />
    </header>
}

export default Header