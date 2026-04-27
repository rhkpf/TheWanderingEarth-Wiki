import cardStyle from "../styles/card.module.css"
import { useNavigate } from "react-router-dom"
export default function Card({page}) {
    const nav = useNavigate()
     return(
                <div className={cardStyle.card} onClick={()=>nav(`/wiki/${page.id}`)}>
                    <p className={cardStyle.title}>{page.title}</p>
                    <img src={page.image} alt="image of page" className={cardStyle.image}/>
                    <p className={cardStyle.topic} >{page.topic}</p>
                </div>
            )
}