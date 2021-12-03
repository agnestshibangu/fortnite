import React, {useState} from 'react'
import cards from './data-card'
import "../../style/SASS/components/home/cards.scss"
import "../../style/SASS/components/home/load-extra.scss"

export default function Cards() {

    const [showMore, setShowMore] = useState(false)

    const toggleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <div>
            
            {/* <div className="cards-container"> */}
            <div className={showMore? "cards-container full": "cards-container"}>
            {cards.map((card) => {
                const {id, img, date, title} = card; 
                return <article key={id}>
                <div className="card">
                    <img className="card-image" src={img} alt={title}/>
                    <div className="card-body">
                        <h4 className="date">{date}</h4>
                        <h1 className="title">{title}</h1>
                    </div>
                </div>
                </article>
            })}

            </div>

            <button className="btn-charger" onClick={toggleShowMore}>CHARGER LA SUITE</button>
            

        </div>

        





    )
}
