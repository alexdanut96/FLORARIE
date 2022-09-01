import React, { useEffect } from "react";
import CSS from "./NewSalesMax.module.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { CardContent } from "./CardContent";
import { item1, item2, item3, item4, item5, item6, item7, item8, item9, item10 } from "../NewestItems";


export function NewSalesMax() {

    useEffect(() => {

        const slide = document.querySelectorAll(`.${CSS.slides}`);
        const nextBtn = document.querySelectorAll(`.${CSS.rightBtn}`);
        const prevBtn = document.querySelectorAll(`.${CSS.leftButton}`);
        const dotOne = document.querySelectorAll(`.${CSS.dotOne}`)
        const dotTwo = document.querySelectorAll(`.${CSS.dotTwo}`)
        const dotThree = document.querySelectorAll(`.${CSS.dotThree}`)
        const slideWidth = 22.22222222222222
        const startSlide = 22.22222222222222
        let x1
        let x2
        let startPoint
        let distance
        let index = 0

        dotOne[0].style.backgroundColor = "#559137"
        dotOne[0].style.borderColor = "#559137"

        slide[0].addEventListener('transitionend', () => {
            if (index === 3) {
                slide[0].style.transition = 'none';
                index = 0;
                slide[0].style.transform = `translateX(${-startSlide}%)`;
                currentDot()
            }

            if (index === -1) {
                slide[0].style.transition = 'none';
                index = 2
                slide[0].style.transform = `translateX(${-(startSlide / 2 + slideWidth * index)}%)`;
                currentDot()
            }
        });

        const moveToNextSlide = () => {
            if (index >= 3) return
            if (index === 2) {
                index++
                slide[0].style.transition = '.35s ease'
                slide[0].style.transform = `translateX(${-(startSlide / 2 + slideWidth * index)}%)`
            } else if (index === 1) {
                index++
                slide[0].style.transition = '.35s ease'
                slide[0].style.transform = `translateX(${-(startSlide / 2 + slideWidth * index)}%)`
            } else {
                index++
                slide[0].style.transition = '.35s ease'
                slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            }
            currentDot()
        };

        const moveToPreviousSlide = () => {
            if (index <= -1) return
            if (index === 2) {
                index--
                slide[0].style.transition = '.35s ease'
                slide[0].style.transform = `translateX(${-(startSlide / 2 + slideWidth * index)}%)`
            } else if (index === 1) {
                index--
                slide[0].style.transition = '.35s ease'
                slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            } else {
                index--
                slide[0].style.transition = '.35s ease'
                slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            }
            currentDot()
        }

        nextBtn[0].addEventListener('click', moveToNextSlide)
        prevBtn[0].addEventListener('click', moveToPreviousSlide)

        dotOne[0].addEventListener('click', () => {
            index = 0
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        })

        dotTwo[0].addEventListener('click', () => {
            index = 1
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(startSlide + slideWidth * index)}%)`
            currentDot()
        })

        dotThree[0].addEventListener('click', () => {
            index = 2
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(startSlide / 2 + slideWidth * index)}%)`
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
            }
            if (index === 1) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "#559137"
                dotTwo[0].style.borderColor = "#559137"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
            }
            if (index === 2) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "#559137"
                dotThree[0].style.borderColor = "#559137"
            }
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
    })

    return (
        <>
            <h1 className={CSS.title}>Cele mai noi produse</h1>
            <section className={CSS.bestSellerCarousel}>
                <div className={CSS.sliderContainer}>
                    <section className={CSS.sliderSection}>
                        <div className={CSS.slidesContainer}>
                            <div className={CSS.slides}>

                                {/* ------------------------------ Last 4 clone Cards ------------------------------ */}
                                <CardContent {...item7} />
                                <CardContent {...item8} />
                                <CardContent {...item9} />
                                <CardContent {...item10} />

                                {/* ------------------------------ Content Cards ------------------------------ */}
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

                                {/* ------------------------------ first 4 clone Cards ------------------------------ */}
                                <CardContent {...item1} />
                                <CardContent {...item2} />
                                <CardContent {...item3} />
                                <CardContent {...item4} />

                            </div>
                        </div>
                        <button className={CSS.leftButton}><IoIosArrowBack /></button>
                        <button className={CSS.rightBtn}><IoIosArrowForward /></button>
                        <div className={CSS.dotsSlider}>
                            <div className={CSS.dotOne}></div>
                            <div className={CSS.dotTwo} ></div>
                            <div className={CSS.dotThree} ></div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}