import { useState, useEffect } from "react"
import entries from "../data/entries"
import Card from "../components/card"
import style from "../styles/wikiPage.module.css"
export default function WikiPage() {
    const [pages, setPages] = useState([])
    const [userInput, setUserInput] = useState('')
    const [userSelect, setUserSelect] = useState('')
    return (
        <>
        <h1>The Wandering Earth Archive</h1>
        <div>
            <div className={style.topSectionContainer}>
                <input type="text" className={style.searchBar} onChange={(e)=> {if(e.target.value ==='') {setUserInput(e.target.value)}}}onKeyDown={(e)=>e.key === 'Enter' && setUserInput(e.target.value)}placeholder="search entries here..."/>
                <select onChange={(e)=>setUserSelect(e.target.value)} className={style.filterSelect}>
                        <option value="">All</option>
                        <option value="core">Core</option>
                        <option value="technology">Technology</option>
                        <option value="organisations">Organisations</option>
                        <option value="general">General</option>
                </select>
            </div>
            <div className={style.cardContainer} >
            {entries.filter(page=>userSelect === '' || page.topic === userSelect).filter(page=>userInput === '' || page.title.toLowerCase().includes(userInput.toLowerCase())).map((page,index)=><Card key={page.id} page={page} />)}
            </div>
        </div>
        </>
    )
}