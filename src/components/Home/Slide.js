import React from 'react'
import "../../style/SASS/components/home/slide.scss"
import { BsPlayCircle } from 'react-icons/bs';

export default function Slide() {
    return (
        <div>

            <div className="slides">

                {/* premier slide */}
                <div class="slide first">
                    <div className="infos infos-slide1">
                        <p className="season-title">SAISON 8</p>
                        <img className="incubation-title" src="https://cdn2.unrealengine.com/cubed-logo-fr-1142x163-32d26b7f6921.png" alt="incubation-title" />
                        <h3 className="text-info">PASSE DE COMBAT</h3>
                        <button className="btn-jouez">JOUEZ GRATUITEMENT !</button>
                    </div>
                    <div className="box-shadow-pink"></div>
                    <img className="season-bug" src="https://cdn2.unrealengine.com/season-bug-fr-200x200-ff6fc702df6e.png" alt="badge-c2s8" />
                    <div className="infos infos-slide1">
                    </div>
                    <img className="slide-1" src="https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-home-page-battle-pass-promo-bg-mobile-2262x3583-59942ecdc31e.jpg" alt="">
                    </img>
                </div>

                {/* second slide */}
                <div class="slide second">
                    <img className="season-bug bug2" src="https://cdn2.unrealengine.com/season-bug-fr-200x200-ff6fc702df6e.png" alt="badge-c2s8" />
                    <div className="infos infos-slide2">
                        <h3 className="season-title">SAISON 8</h3>
                        <img className="incubation-title" src="https://cdn2.unrealengine.com/cubed-logo-fr-1142x163-32d26b7f6921.png" alt="incubation-title" />

                    </div>
                    <div className="box-shadow-pink box-shadow-pink2"></div>

                    <div className="container-bottom-slide2">
                        <div className="inner-container">
                            <h3 className="h3-slide-2">REGARDEZ LA BANDE ANNONCE</h3>
                            <BsPlayCircle className="play-icon"/>
                        </div>
                        <button className="btn-jouez btn-jouez2">JOUEZ GRATUITEMENT !</button>
                    </div>


                    <img className="slide-2" src="https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-overview-page-key-art-bg-mobile-752x1190-23c9e7a57edb.jpg" alt=""></img>

                </div>



            </div>

            <div className="radio-buttons">
                <button className="radio-button radio-btn-1" />
                <button className="radio-button radio-btn-2" />
            </div>


        </div>
    )
}
