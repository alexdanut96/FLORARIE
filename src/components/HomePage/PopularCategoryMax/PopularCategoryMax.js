import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import STYLE from "./PopularCategoryMax.module.css"
import trandafiri from "./trandafiri.jpg"
import frezii from "./frezii.jpg"
import hortensii from "./hortensii.jpg"
import { buchete_flori_column1, buchete_flori_column2 } from "../../../Pages/Product Category/Buchete Flori/Buchete_flori_items";

export function PopularCategoryMax() {

    useEffect(() => {

        const cardOne = document.querySelectorAll(`.${STYLE.cardOne}`)
        const cardTwo = document.querySelectorAll(`.${STYLE.cardTwo}`)
        const cardThree = document.querySelectorAll(`.${STYLE.cardThree}`)
        const imgOne = document.querySelectorAll(`.${STYLE.imgOne}`)
        const imgTwo = document.querySelectorAll(`.${STYLE.imgTwo}`)
        const imgTrois = document.querySelectorAll(`.${STYLE.imgTrois}`)

        cardOne[0].addEventListener("mouseenter", () => {
            imgOne[0].style.transform = "scale(1.1)"
        })

        cardOne[0].addEventListener("mouseleave", () => {
            imgOne[0].style.transform = "scale(1)"
        })

        cardTwo[0].addEventListener("mouseenter", () => {
            imgTwo[0].style.transform = "scale(1.1)"
        })

        cardTwo[0].addEventListener("mouseleave", () => {
            imgTwo[0].style.transform = "scale(1)"
        })

        cardThree[0].addEventListener("mouseenter", () => {
            imgTrois[0].style.transform = "scale(1.1)"
        })

        cardThree[0].addEventListener("mouseleave", () => {
            imgTrois[0].style.transform = "scale(1)"
        })

    })

    return (
        <div className={STYLE.container}>
            <h1 className={STYLE.categoryTitle}>Categorii populare</h1>
            <div className={STYLE.content}>

                <Link to={buchete_flori_column1[1].path} className={STYLE.cardOne}>
                    <div className={STYLE.image}><img className={STYLE.imgOne} src={trandafiri} alt="img" /></div>
                    <div className={STYLE.title}>Trandafiri</div>
                    <div><button className={STYLE.orderButtonOne}>VEZI COLECTIA</button></div>
                </Link>


                <Link to={buchete_flori_column2[3].path} className={STYLE.cardTwo}>
                    <div className={STYLE.image}><img className={STYLE.imgTwo} src={frezii} alt="img" /></div>
                    <div className={STYLE.title}>Iris</div>
                    <div><button className={STYLE.orderButtonTwo}>VEZI COLECTIA</button></div>
                </Link>


                <Link to={buchete_flori_column1[6].path} className={STYLE.cardThree}>
                    <div className={STYLE.image}><img className={STYLE.imgTrois} src={hortensii} alt="img" /></div>
                    <div className={STYLE.title}>Hortensii</div>
                    <div><button className={STYLE.orderButtonThree}>VEZI COLECTIA</button></div>
                </Link>

            </div>
        </div>
    )
}
