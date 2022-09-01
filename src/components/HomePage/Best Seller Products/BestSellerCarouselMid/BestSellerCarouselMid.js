import React, { useEffect } from "react"
import CSS from "./BestSellerCarouselMid.module.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { CardContentMid } from "./CardContentMid"
import { item1, item2, item3, item4, item5, item6, item7, item8, item9, item10 } from "../BestSellerItems";

export function BestSellerCarouselMid() {

    useEffect(() => {

        const slide = document.querySelectorAll(`.${CSS.slides}`)
        const dotOne = document.querySelectorAll(`.${CSS.dotOne}`)
        const dotTwo = document.querySelectorAll(`.${CSS.dotTwo}`)
        const dotThree = document.querySelectorAll(`.${CSS.dotThree}`)
        const dotFour = document.querySelectorAll(`.${CSS.dotFour}`)
        const dotFive = document.querySelectorAll(`.${CSS.dotFive}`)
        const slideWidth1 = 7.14286
        let x1
        let x2
        let startPoint
        let distance
        let index1 = 0

        dotOne[0].style.backgroundColor = "#559137"
        dotOne[0].style.borderColor = "#559137"

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
            if (distance < -100) {
                slide[0].style.left = `${0}px`
                moveToPreviousSlide()
            } else if (distance > 100) {
                slide[0].style.left = `${0}px`
                moveToNextSlide()
            } else {
                slide[0].style.left = `${0}px`
            }
            document.onmouseup = null
            document.onmousemove = null
        }

        dotOne[0].addEventListener('click', () => {
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

        dotFour[0].addEventListener('click', () => {
            index1 = 6
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth1 + 4.7619 * index1)}%)`
            currentDot()
        })
        dotFive[0].addEventListener('click', () => {
            index1 = 8
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth1 + 4.7619 * index1)}%)`
            currentDot()
        })

        function currentDot() {
            if (index1 === 0) {
                dotOne[0].style.backgroundColor = "#559137"
                dotOne[0].style.borderColor = "#559137"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
            } else if (index1 === 2) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "#559137"
                dotTwo[0].style.borderColor = "#559137"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
            } else if (index1 === 4) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "#559137"
                dotThree[0].style.borderColor = "#559137"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
            } else if (index1 === 6) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "#559137"
                dotFour[0].style.borderColor = "#559137"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
            } else if (index1 === 8) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "#559137"
                dotFive[0].style.borderColor = "#559137"
            }
        }
    })

    return (
        <>
            <h1 className={CSS.title}>Cele mai vandute buchete</h1>
            <section className={CSS.bestSellerCarousel}>
                <div className={CSS.sliderContainer}>
                    <section className={CSS.sliderSection}>
                        <div className={CSS.slidesContainer}>
                            <div className={CSS.slides}>

                                {/* ------------------------------ Last 2 clone CardContentMid ------------------------------ */}

                                <CardContentMid {...item9} />
                                <CardContentMid {...item10} />

                                {/* ------------------------------ Content CardContentMid ------------------------------ */}
                                <CardContentMid {...item1} />
                                <CardContentMid {...item2} />
                                <CardContentMid {...item3} />
                                <CardContentMid {...item4} />
                                <CardContentMid {...item5} />
                                <CardContentMid {...item6} />
                                <CardContentMid {...item7} />
                                <CardContentMid {...item8} />
                                <CardContentMid {...item9} />
                                <CardContentMid {...item10} />

                                {/* ------------------------------ first 2 clone CardContentMid ------------------------------ */}
                                <CardContentMid {...item1} />
                                <CardContentMid {...item2} />

                            </div>
                        </div>
                        <button className={CSS.leftButton}><IoIosArrowBack /></button>
                        <button className={CSS.rightButton}><IoIosArrowForward /></button>
                        <div className={CSS.dotsSlider}>
                            <div className={CSS.dotOne}></div>
                            <div className={CSS.dotTwo} ></div>
                            <div className={CSS.dotThree} ></div>
                            <div className={CSS.dotFour} ></div>
                            <div className={CSS.dotFive} ></div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}













