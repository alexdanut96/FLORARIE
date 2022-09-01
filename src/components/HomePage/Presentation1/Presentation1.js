import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import STYLE from "./Presentation1.module.css"
import image from "./image.jpg"
import { ocazii_si_evenimente_column1 } from "../../../Pages/Product Category/Ocazii si Evenimente/Ocazii_si_evenimente_items"

export function Presentation1() {

    useEffect(() => {
        const content = document.querySelectorAll(`.${STYLE.content}`)
        const img = document.querySelectorAll(`.${STYLE.img}`)
        const description = document.querySelectorAll(`.${STYLE.description}`)
        const orderButton = document.querySelectorAll(`.${STYLE.orderButton}`)

        content[0].addEventListener("mouseenter", () => {
            img[0].style.transform = "scale(1.1)"
        })

        content[0].addEventListener("mouseleave", () => {
            img[0].style.transform = "scale(1)"
        })
        description[0].addEventListener("mouseenter", () => {
            orderButton[0].style.backgroundColor = "#f7f7f7"
        })

        description[0].addEventListener("mouseleave", () => {
            orderButton[0].style.backgroundColor = "white"
        })


    })

    return (
        <Link to={ocazii_si_evenimente_column1[0].path} style={{ textDecoration: "none" }}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.imageContainer}>
                        <div className={STYLE.image}>
                            <img className={STYLE.img} src={image} alt="img" />
                        </div>
                    </div>
                    <div className={STYLE.description}>
                        <div className={STYLE.title}>Prospetime garantata</div>
                        <div className={STYLE.text}>Cele mai proaspete flori |import Olanda| Pana la 10 zile in vaza</div>
                        <div>
                            <button className={STYLE.orderButton}>COMANDA</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}