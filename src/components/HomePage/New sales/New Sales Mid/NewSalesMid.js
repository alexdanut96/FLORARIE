import React, { useEffect } from "react"
import CSS from "./NewSalesMid.module.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { CardContent } from "./CardContent"
import { item1, item2, item3, item4, item5, item6, item7, item8, item9, item10 } from "../NewestItems";

export function NewSalesMid() {

    useEffect(() => {

        const slide = document.querySelectorAll(`.${CSS.slides}`)
        const dotUne = document.querySelectorAll(`.${CSS.dotUne}`)
        const dotTwo = document.querySelectorAll(`.${CSS.dotTwo}`)
        const dotThree = document.querySelectorAll(`.${CSS.dotThree}`)
        const dotQuatre = document.querySelectorAll(`.${CSS.dotQuatre}`)
        const dotCinq = document.querySelectorAll(`.${CSS.dotCinq}`)
        const slideWidth1 = 7.14286
        let x1
        let x2
        let startPoint
        let distance
        let index1 = 0

        dotUne[0].style.backgroundColor = "#559137"
        dotUne[0].style.borderColor = "#559137"

        slide[0].addEventListener('transitionend', () => {
            if (index1 === 10) {
                slide[0].style.transition = 'none'
                index1 = 0
                slide[0].style.transform = `translateX(${-slideWidth1}%)`
                currentDot()
            }
            if (index1 === -2) {
                slide[0].style.transition = 'none'
                index1 = 8
                slide[0].style.transform = `translateX(${-(slideWidth1 + 4.7619 * index1)}%)`
                currentDot()
            }
        })

        const moveToNextSlide = () => {
            if (index1 >= 10) return
            index1 += 2
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth1 + 4.7619 * index1)}%)`
            currentDot()
        }

        const moveToPreviousSlide = () => {
            if (index1 <= -2) return
            index1 -= 2
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth1 + 4.7619 * index1)}%)`
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

        dotUne[0].addEventListener('click', () => {
            index1 = 0
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth1 + 4.7619 * index1)}%)`
            currentDot()
        })

        dotTwo[0].addEventListener('click', () => {
            index1 = 2
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth1 + 4.7619 * index1)}%)`
            currentDot()
        })

        dotThree[0].addEventListener('click', () => {
            index1 = 4
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth1 + 4.7619 * index1)}%)`
            currentDot()
        })

        dotQuatre[0].addEventListener('click', () => {
            index1 = 6
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth1 + 4.7619 * index1)}%)`
            currentDot()
        })
        dotCinq[0].addEventListener('click', () => {
            index1 = 8
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth1 + 4.7619 * index1)}%)`
            currentDot()
        })

        function currentDot() {
            if (index1 === 0) {
                dotUne[0].style.backgroundColor = "#559137"
                dotUne[0].style.borderColor = "#559137"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotQuatre[0].style.backgroundColor = "transparent"
                dotQuatre[0].style.borderColor = "#aaaa"
                dotCinq[0].style.backgroundColor = "transparent"
                dotCinq[0].style.borderColor = "#aaaa"
            } else if (index1 === 2) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "#559137"
                dotTwo[0].style.borderColor = "#559137"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotQuatre[0].style.backgroundColor = "transparent"
                dotQuatre[0].style.borderColor = "#aaaa"
                dotCinq[0].style.backgroundColor = "transparent"
                dotCinq[0].style.borderColor = "#aaaa"
            } else if (index1 === 4) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "#559137"
                dotThree[0].style.borderColor = "#559137"
                dotQuatre[0].style.backgroundColor = "transparent"
                dotQuatre[0].style.borderColor = "#aaaa"
                dotCinq[0].style.backgroundColor = "transparent"
                dotCinq[0].style.borderColor = "#aaaa"
            } else if (index1 === 6) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotQuatre[0].style.backgroundColor = "#559137"
                dotQuatre[0].style.borderColor = "#559137"
                dotCinq[0].style.backgroundColor = "transparent"
                dotCinq[0].style.borderColor = "#aaaa"
            } else if (index1 === 8) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotQuatre[0].style.backgroundColor = "transparent"
                dotQuatre[0].style.borderColor = "#aaaa"
                dotCinq[0].style.backgroundColor = "#559137"
                dotCinq[0].style.borderColor = "#559137"
            }
        }
    })

    return (
        <>
            <h1 className={CSS.title}>Cele mai noi produse</h1>
            <section className={CSS.bestSellerCarousel}>
                <div className={CSS.sliderContainer}>
                    <section className={CSS.sliderSection}>
                        <div className={CSS.slidesContainer}>
                            <div className={CSS.slides}>

                                {/* ------------------------------ Last 2 clone CardContent ------------------------------ */}
                                <CardContent {...item9} />
                                <CardContent {...item10} />

                                {/* ------------------------------ Content CardContent ------------------------------ */}
                                <CardContent {...item1} />
                                <CardContent {...item2} />
                                <CardContent {...item3} />
                                <CardContent {...item4} />
                                <CardContent {...item5} />
                                <CardContent {...item6} />
                                <CardContent {...item7} />
                                <CardContent {...item8} />
                                <CardContent {...item9} />
                                <CardContent {...item10} />

                                {/* ------------------------------ first 2 clone CardContent ------------------------------ */}
                                <CardContent {...item1} />
                                <CardContent {...item2} />

                            </div>
                        </div>
                        <button className={CSS.leftButton}><IoIosArrowBack /></button>
                        <button className={CSS.rightButton}><IoIosArrowForward /></button>
                        <div className={CSS.dotsSlider}>
                            <div className={CSS.dotUne}></div>
                            <div className={CSS.dotTwo} ></div>
                            <div className={CSS.dotThree} ></div>
                            <div className={CSS.dotQuatre} ></div>
                            <div className={CSS.dotCinq} ></div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}













