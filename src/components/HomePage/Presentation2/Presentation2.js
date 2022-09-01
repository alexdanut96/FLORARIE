import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import STYLE from "./Presentation2.module.css"
import { navBarItems } from "../../../navbar-components/NavBarItems"
import { cadouri } from "../../../Pages/Product Category/Cadouri/Cadouri_items"

export function Presentation2() {

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
                <Link to={navBarItems[0].path}>
                    <div className={STYLE.cardOne}>
                        <div className={STYLE.imageBackgroundOne}></div>
                        <div className={STYLE.imageBgContent}>
                            <div className={STYLE.title}>Design Premium</div>
                            <div className={STYLE.text}>Buchete de flori realizate de floristi de renume</div>
                            <div><button className={STYLE.orderButtonOne}>COMANDA</button></div>
                        </div>
                    </div>
                </Link>
                <Link to={cadouri[0].path}>
                    <div className={STYLE.cardTwo}>
                        <div className={STYLE.imageBackgroundTwo}></div>
                        <div className={STYLE.imageBgContent}>
                            <div className={STYLE.title}>Cadouri Sfanta Maria</div>
                            <div className={STYLE.text}>Cadouri pentru 15 august</div>
                            <div><button className={STYLE.orderButtonTwo}>COMANDA</button></div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    )
}