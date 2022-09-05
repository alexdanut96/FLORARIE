import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import STYLE from "./PopularCategoryMin.module.css"
import trandafiri from "./trandafiri.jpg"
import frezii from "./frezii.jpg"
import hortensii from "./hortensii.jpg"
import { buchete_flori_column1, buchete_flori_column2 } from "../../../Pages/Product Category/Buchete Flori/Buchete_flori_items";

export function PopularCategoryMin() {

    useEffect(() => {

        const slide = document.querySelectorAll(`.${STYLE.itemSlides}`)
        const dotOne = document.querySelectorAll(`.${STYLE.dotOne}`)
        const dotTwo = document.querySelectorAll(`.${STYLE.dotTwo}`)
        const dotThree = document.querySelectorAll(`.${STYLE.dotThree}`)

        const slideWidth = 10
        const startSlide = 5
        let x1
        let x2
        let startPoint
        let distance
        let index = 0

        dotOne[0].style.backgroundColor = "#559137"
        dotOne[0].style.borderColor = "#559137"

        slide[0].addEventListener('transitionend', () => {
            if (index === 3) {
                slide[0].style.transition = 'none'
                index = 0
                slide[0].style.transform = `translateX(${-startSlide}%)`
                currentDot()
            }
            if (index === -1) {
                slide[0].style.transition = 'none'
                index = 2
                slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
                currentDot()
            }
        })

        const moveToNextSlide = () => {
            if (index >= 3) return
            index++
            slide[0].style.transition = '.35s ease'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        }

        const moveToPreviousSlide = () => {
            if (index <= -1) return
            index--
            slide[0].style.transition = '.35s ease'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        }

        slide[0].addEventListener("touchstart", dragStart)
        slide[0].addEventListener("touchmove", dragMove)
        slide[0].addEventListener("touchend", dragEnd)

        function dragStart(e) {
            x1 = e.touches[0].clientX
            startPoint = e.touches[0].clientX
            document.onmousemove = dragMove
            document.onmouseup = dragEnd
        }

        function dragMove(e) {
            x2 = x1 - e.touches[0].clientX
            distance = startPoint - e.touches[0].clientX
            x1 = e.touches[0].clientX
            slide[0].style.transition = 'none'
            slide[0].style.left = `${slide[0].offsetLeft - x2}px`
        }

        function dragEnd() {
            if (distance < -44) {
                slide[0].style.left = `${0}px`
                moveToPreviousSlide()
            } else if (distance > 44) {
                slide[0].style.left = `${0}px`
                moveToNextSlide()
            } else {
                slide[0].style.left = `${0}px`
            }
            document.onmouseup = null
            document.onmousemove = null
        }

        dotOne[0].addEventListener('click', () => {
            index = 0
            slide[0].style.transition = '.35s ease'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        })


        dotTwo[0].addEventListener('click', () => {
            index = 1
            slide[0].style.transition = '.35s ease'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        })

        dotThree[0].addEventListener('click', () => {
            index = 2
            slide[0].style.transition = '.35s ease'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        })


        function currentDot() {
            if (index === 0) {
                dotOne[0].style.backgroundColor = "#559137"
                dotOne[0].style.borderColor = "#559137"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"

            } else if (index === 1) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "#559137"
                dotTwo[0].style.borderColor = "#559137"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"

            } else if (index === 2) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "#559137"
                dotThree[0].style.borderColor = "#559137"

            } else if (index === 3) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"

            } else if (index === 4) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"

            }
        }
    })


    return (
        <div className={STYLE.container}>
            <h1 className={STYLE.categoryTitle}>Categorii populare</h1>
            <div className={STYLE.slider}>
                <div className={STYLE.itemSlides}>
                    <Link to={buchete_flori_column1[6].path} className={STYLE.slide}>
                        <div className={STYLE.image}><img className={STYLE.img} src={hortensii} alt="img" /></div>
                        <div className={STYLE.title}>Hortensii</div>
                        <div><button className={STYLE.orderButtonThree}>VEZI COLECTIA</button></div>
                    </Link>
                    <Link to={buchete_flori_column1[1].path} className={STYLE.slide}>
                        <div className={STYLE.image}><img className={STYLE.img} src={trandafiri} alt="img" /></div>
                        <div className={STYLE.title}>Trandafiri</div>
                        <div><button className={STYLE.orderButtonOne}>VEZI COLECTIA</button></div>
                    </Link>
                    <Link to={buchete_flori_column2[3].path} className={STYLE.slide}>
                        <div className={STYLE.image}><img className={STYLE.img} src={frezii} alt="img" /></div>
                        <div className={STYLE.title}>Iris</div>
                        <div><button className={STYLE.orderButtonTwo}>VEZI COLECTIA</button></div>
                    </Link>
                    <Link to={buchete_flori_column1[6].path} className={STYLE.slide}>
                        <div className={STYLE.image}><img className={STYLE.img} src={hortensii} alt="img" /></div>
                        <div className={STYLE.title}>Hortensii</div>
                        <div><button className={STYLE.orderButtonThree}>VEZI COLECTIA</button></div>
                    </Link>
                    <Link to={buchete_flori_column1[1].path} className={STYLE.slide}>
                        <div className={STYLE.image}><img className={STYLE.img} src={trandafiri} alt="img" /></div>
                        <div className={STYLE.title}>Trandafiri</div>
                        <div><button className={STYLE.orderButtonOne}>VEZI COLECTIA</button></div>
                    </Link>
                </div>
            </div>
            <div className={STYLE.dotsSlider}>
                <div className={STYLE.dotOne}></div>
                <div className={STYLE.dotTwo} ></div>
                <div className={STYLE.dotThree} ></div>
            </div>
        </div>
    )
}