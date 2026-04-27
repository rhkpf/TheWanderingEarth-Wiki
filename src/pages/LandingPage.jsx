import entries from "../data/entries"
import style from "../styles/landingPage.module.css"
import { useNavigate } from "react-router-dom"
import Card from "../components/card"
export default function LandingPage() {
    const nav = useNavigate()
    
    return(
        <div>
            <h1>The Wandering Earth Wiki</h1>
            <button className={style.wikiButton} onClick={()=>nav('/wiki')}>Browse Wiki</button>
            <h2>Core Events and Information</h2>
            <div className={style.cardContainer}>
                {entries.filter(page => page.topic == "core" ).map((page, index)=> <Card key={page.id} page={page} />)}
            </div>
            <h2>Key organisations</h2>
            <div className={style.cardContainer}>
                {entries.filter(page => page.topic == "organisations" ).map((page, index)=> <Card key={page.id} page={page} />)}
            </div>
        </div>
    )
}