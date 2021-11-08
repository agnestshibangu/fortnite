import React from 'react'
import cards from './data-card'
import "../../style/SASS/components/home/cards.scss"

export default function Cards() {
    return (
        <div>
            
            <div className="cards-container">

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

            

        </div>

        





    )
}
