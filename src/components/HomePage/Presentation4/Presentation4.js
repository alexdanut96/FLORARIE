import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import STYLE from "./Presentation4.module.css"
import { promo } from "../../../Pages/Product Category/Oferte si Promotii/Promo_items"
import { aranjamente_florale } from "../../../Pages/Product Category/Aranjamente Florale/Aranjamente-florale_items"

export function Presentation4() {

    useEffect(() => {
        const cardOne = document.querySelectorAll(`.${STYLE.cardOne}`)
        const cardTwo = document.querySelectorAll(`.${STYLE.cardTwo}`)
        const imageBackgroundOne = document.querySelectorAll(`.${STYLE.imageBackgroundOne}`)
        const imageBackgroundTwo = document.querySelectorAll(`.${STYLE.imageBackgroundTwo}`)


        cardOne[0].addEventListener("mouseenter", () => {
            imageBackgroundOne[0].style.transform = "scale(1.1)"
        })

        cardOne[0].addEventListener("mouseleave", () => {
            imageBackgroundOne[0].style.transform = "scale(1)"
        })
        cardTwo[0].addEventListener("mouseenter", () => {
            imageBackgroundTwo[0].style.transform = "scale(1.1)"
        })

        cardTwo[0].addEventListener("mouseleave", () => {
            imageBackgroundTwo[0].style.transform = "scale(1)"
        })

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.content}>
                <Link to={promo[0].path}>
                    <div className={STYLE.cardOne}>
                        <div className={STYLE.imageBackgroundOne}></div>
                        <div className={STYLE.imageBgContent}>
                            <div className={STYLE.title}>Fii partenerul nostru</div>
                            <div className={STYLE.text}>Fa parte din reteaua noastra de parteneri</div>
                            <div><button className={STYLE.orderButtonOne}>AFLA DETALII</button></div>
                        </div>
                    </div>
                </Link>

                <Link to={aranjamente_florale[2].path}>
                    <div className={STYLE.cardTwo}>
                        <div className={STYLE.imageBackgroundTwo}></div>
                        <div className={STYLE.imageBgContent}>
                            <div className={STYLE.title}>Servicii corporate</div>
                            <div className={STYLE.text}>Aranjamente pentru sali de sedinta si receptie</div>
                            <div><button className={STYLE.orderButtonTwo}>VEZI PRODUSE</button></div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>

    )
}