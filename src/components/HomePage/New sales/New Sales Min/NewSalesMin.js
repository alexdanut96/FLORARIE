import React, { useEffect } from "react"
import CSS from "./NewSalesMin.module.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { CardContent } from "./CardContent"
import { item1, item2, item3, item4, item5, item6, item7, item8, item9, item10 } from "../NewestItems";

export function NewSalesMin() {

    useEffect(() => {

        const slide = document.querySelectorAll(`.${CSS.slides}`)
        const dotOne = document.querySelectorAll(`.${CSS.dotOne}`)
        const dotTwo = document.querySelectorAll(`.${CSS.dotTwo}`)
        const dotThree = document.querySelectorAll(`.${CSS.dotThree}`)
        const dotFour = document.querySelectorAll(`.${CSS.dotFour}`)
        const dotFive = document.querySelectorAll(`.${CSS.dotFive}`)
        const dotSei = document.querySelectorAll(`.${CSS.dotSei}`)
        const dotSeven = document.querySelectorAll(`.${CSS.dotSeven}`)
        const dotEight = document.querySelectorAll(`.${CSS.dotEight}`)
        const dotNove = document.querySelectorAll(`.${CSS.dotNove}`)
        const dotTen = document.querySelectorAll(`.${CSS.dotTen}`)
        const slideWidth = 4.16667
        const startSlide = 2.08333
        let x1
        let x2
        let startPoint
        let distance
        let index = 0

        dotOne[0].style.backgroundColor = "#559137"
        dotOne[0].style.borderColor = "#559137"

        slide[0].addEventListener('transitionend', () => {
            if (index === 10) {
                slide[0].style.transition = 'none'
                index = 0
                slide[0].style.transform = `translateX(${-startSlide}%)`
                currentDot()
            }
            if (index === -1) {
                slide[0].style.transition = 'none'
                index = 9
                slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
                currentDot()
            }
        })

        const moveToNextSlide = () => {
            if (index >= 10) return
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

        dotFour[0].addEventListener('click', () => {
            index = 3
            slide[0].style.transition = '.35s ease'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        })
        dotFive[0].addEventListener('click', () => {
            index = 4
            slide[0].style.transition = '.35s ease'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        })

        dotSei[0].addEventListener('click', () => {
            index = 5
            slide[0].style.transition = '.35s ease'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        })

        dotSeven[0].addEventListener('click', () => {
            index = 6
            slide[0].style.transition = '.35s ease'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        })

        dotEight[0].addEventListener('click', () => {
            index = 7
            slide[0].style.transition = '.35s ease'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        })

        dotNove[0].addEventListener('click', () => {
            index = 8
            slide[0].style.transition = '.35s ease'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        })

        dotTen[0].addEventListener('click', () => {
            index = 9
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
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSei[0].style.backgroundColor = "transparent"
                dotSei[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNove[0].style.backgroundColor = "transparent"
                dotNove[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 1) {
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
                dotSei[0].style.backgroundColor = "transparent"
                dotSei[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNove[0].style.backgroundColor = "transparent"
                dotNove[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 2) {
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
                dotSei[0].style.backgroundColor = "transparent"
                dotSei[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNove[0].style.backgroundColor = "transparent"
                dotNove[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 3) {
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
                dotSei[0].style.backgroundColor = "transparent"
                dotSei[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNove[0].style.backgroundColor = "transparent"
                dotNove[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 4) {
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
                dotSei[0].style.backgroundColor = "transparent"
                dotSei[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNove[0].style.backgroundColor = "transparent"
                dotNove[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 5) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSei[0].style.backgroundColor = "#559137"
                dotSei[0].style.borderColor = "#559137"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNove[0].style.backgroundColor = "transparent"
                dotNove[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 6) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSei[0].style.backgroundColor = "transparent"
                dotSei[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "#559137"
                dotSeven[0].style.borderColor = "#559137"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNove[0].style.backgroundColor = "transparent"
                dotNove[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 7) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSei[0].style.backgroundColor = "transparent"
                dotSei[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "#559137"
                dotEight[0].style.borderColor = "#559137"
                dotNove[0].style.backgroundColor = "transparent"
                dotNove[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 8) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSei[0].style.backgroundColor = "transparent"
                dotSei[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNove[0].style.backgroundColor = "#559137"
                dotNove[0].style.borderColor = "#559137"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 9) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSei[0].style.backgroundColor = "transparent"
                dotSei[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNove[0].style.backgroundColor = "transparent"
                dotNove[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "#559137"
                dotTen[0].style.borderColor = "#559137"
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

                                {/* ------------------------------ Last clone CardContent ------------------------------ */}
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

                                {/* ------------------------------ first clone CardContent ------------------------------ */}
                                <CardContent {...item1} />

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
                            <div className={CSS.dotSei} ></div>
                            <div className={CSS.dotSeven} ></div>
                            <div className={CSS.dotEight} ></div>
                            <div className={CSS.dotNove} ></div>
                            <div className={CSS.dotTen} ></div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}













