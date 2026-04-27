import { useParams } from "react-router-dom";
import entries from "../data/entries";
import style from "../styles/clickPage.module.css"
export default function ClickPage() {
  const { id } = useParams()
    console.log("id from url:", id, typeof id)
    const page = entries.find(entry => entry.id === Number(id))
    console.log("found page:", page)
    return (
        <>
                    <h1>{page.title}</h1>

        <div className={style.clickContainer}>
            <img src={page.image} className={style.clickImage}/>
            <p className={style.information}>{page.information}</p>
        </div>
        </>
    )
}