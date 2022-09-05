import React, { useEffect } from "react"
import CSS from "./NewSummerSalesMin.module.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { CardContent } from "./CardContent"
import { item1, item2, item3, item4, item5, item6, item7, item8, item9, item10 } from "../NewSummerSalesItems";

export function NewSummerSalesMin() {

    useEffect(() => {

        const slide = document.querySelectorAll(`.${CSS.slides}`)
        const dotUne = document.querySelectorAll(`.${CSS.dotUne}`)
        const dotTwo = document.querySelectorAll(`.${CSS.dotTwo}`)
        const dotTrois = document.querySelectorAll(`.${CSS.dotTrois}`)
        const dotFour = document.querySelectorAll(`.${CSS.dotFour}`)
        const dotFive = document.querySelectorAll(`.${CSS.dotFive}`)
        const dotSix = document.querySelectorAll(`.${CSS.dotSix}`)
        const dotSeven = document.querySelectorAll(`.${CSS.dotSeven}`)
        const dotEight = document.querySelectorAll(`.${CSS.dotEight}`)
        const dotNeuf = document.querySelectorAll(`.${CSS.dotNeuf}`)
        const dotTen = document.querySelectorAll(`.${CSS.dotTen}`)
        const slideWidth = 4.16667
        const startSlide = 2.08333
        let x1
        let x2
        let startPoint
        let distance
        let index = 0

        dotUne[0].style.backgroundColor = "#559137"
        dotUne[0].style.borderColor = "#559137"

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

        dotUne[0].addEventListener('click', () => {
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

        dotTrois[0].addEventListener('click', () => {
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

        dotSix[0].addEventListener('click', () => {
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

        dotNeuf[0].addEventListener('click', () => {
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
                dotUne[0].style.backgroundColor = "#559137"
                dotUne[0].style.borderColor = "#559137"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotTrois[0].style.backgroundColor = "transparent"
                dotTrois[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSix[0].style.backgroundColor = "transparent"
                dotSix[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNeuf[0].style.backgroundColor = "transparent"
                dotNeuf[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 1) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "#559137"
                dotTwo[0].style.borderColor = "#559137"
                dotTrois[0].style.backgroundColor = "transparent"
                dotTrois[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSix[0].style.backgroundColor = "transparent"
                dotSix[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNeuf[0].style.backgroundColor = "transparent"
                dotNeuf[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 2) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotTrois[0].style.backgroundColor = "#559137"
                dotTrois[0].style.borderColor = "#559137"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSix[0].style.backgroundColor = "transparent"
                dotSix[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNeuf[0].style.backgroundColor = "transparent"
                dotNeuf[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 3) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotTrois[0].style.backgroundColor = "transparent"
                dotTrois[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "#559137"
                dotFour[0].style.borderColor = "#559137"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSix[0].style.backgroundColor = "transparent"
                dotSix[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNeuf[0].style.backgroundColor = "transparent"
                dotNeuf[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 4) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotTrois[0].style.backgroundColor = "transparent"
                dotTrois[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "#559137"
                dotFive[0].style.borderColor = "#559137"
                dotSix[0].style.backgroundColor = "transparent"
                dotSix[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNeuf[0].style.backgroundColor = "transparent"
                dotNeuf[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 5) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotTrois[0].style.backgroundColor = "transparent"
                dotTrois[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSix[0].style.backgroundColor = "#559137"
                dotSix[0].style.borderColor = "#559137"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNeuf[0].style.backgroundColor = "transparent"
                dotNeuf[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 6) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotTrois[0].style.backgroundColor = "transparent"
                dotTrois[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSix[0].style.backgroundColor = "transparent"
                dotSix[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "#559137"
                dotSeven[0].style.borderColor = "#559137"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNeuf[0].style.backgroundColor = "transparent"
                dotNeuf[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 7) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotTrois[0].style.backgroundColor = "transparent"
                dotTrois[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSix[0].style.backgroundColor = "transparent"
                dotSix[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "#559137"
                dotEight[0].style.borderColor = "#559137"
                dotNeuf[0].style.backgroundColor = "transparent"
                dotNeuf[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 8) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotTrois[0].style.backgroundColor = "transparent"
                dotTrois[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSix[0].style.backgroundColor = "transparent"
                dotSix[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNeuf[0].style.backgroundColor = "#559137"
                dotNeuf[0].style.borderColor = "#559137"
                dotTen[0].style.backgroundColor = "transparent"
                dotTen[0].style.borderColor = "#aaaa"
            } else if (index === 9) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotTrois[0].style.backgroundColor = "transparent"
                dotTrois[0].style.borderColor = "#aaaa"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
                dotSix[0].style.backgroundColor = "transparent"
                dotSix[0].style.borderColor = "#aaaa"
                dotSeven[0].style.backgroundColor = "transparent"
                dotSeven[0].style.borderColor = "#aaaa"
                dotEight[0].style.backgroundColor = "transparent"
                dotEight[0].style.borderColor = "#aaaa"
                dotNeuf[0].style.backgroundColor = "transparent"
                dotNeuf[0].style.borderColor = "#aaaa"
                dotTen[0].style.backgroundColor = "#559137"
                dotTen[0].style.borderColor = "#559137"
            }
        }
    })

    return (
        <>
            <h1 className={CSS.title}>Cele mai noi buchete de vara</h1>
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
                            <div className={CSS.dotUne}></div>
                            <div className={CSS.dotTwo} ></div>
                            <div className={CSS.dotTrois} ></div>
                            <div className={CSS.dotFour} ></div>
                            <div className={CSS.dotFive} ></div>
                            <div className={CSS.dotSix} ></div>
                            <div className={CSS.dotSeven} ></div>
                            <div className={CSS.dotEight} ></div>
                            <div className={CSS.dotNeuf} ></div>
                            <div className={CSS.dotTen} ></div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}













