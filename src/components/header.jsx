import { Link } from "react-router-dom"
import style from "../styles/header.module.css"
export default function HeaderBar() {
    return(
        <>
        <nav className = {style.headerBarContainer}>
            <Link to="/">Home</Link>
            <Link to="/wiki">Archive</Link>
            <Link to="/ref">References</Link>
        </nav>
        </>
    )
}