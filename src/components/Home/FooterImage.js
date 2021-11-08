import React from 'react'
import "../../style/SASS/components/home/image-footer.scss"
import FortniteLogo from "../../style/logos/FortniteLogo.svg"


export default function FooterImage() {
    return (
        <div className="image-footer-container">
            <div className="infos-container">
                <img className="fortnite-logo-footer-img" src={FortniteLogo} alt='logo-fortnite' />
                <img className="incubation-title-footer-img" src="https://cdn2.unrealengine.com/cubed-logo-fr-1142x163-32d26b7f6921.png" alt="incubation-title" />
                <span className="text-info-footer-img">PASSE DE COMBAT</span>
                <button className="btn-jouez-footer-img">JOUEZ GRATUITEMENT !</button>
            </div>
            <img className="footer-image" src="https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-home-page-battle-pass-promo-footer-bg-mobile-1500x2099-fcf0fa878cce.png"
                alt="" />
        </div>
    )
}
