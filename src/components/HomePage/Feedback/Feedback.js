import React, { useEffect } from "react";
import STYLE from "./Feedback.module.css"
import { CommentsItems } from "./CommentsItems"
import { ImUserTie } from "react-icons/im"

export function Feedback() {

    useEffect(() => {

        const slide = document.querySelectorAll(`.${STYLE.slides}`)
        const dotOne = document.querySelectorAll(`.${STYLE.dotOne}`)
        const dotTwo = document.querySelectorAll(`.${STYLE.dotTwo}`)
        const dotThree = document.querySelectorAll(`.${STYLE.dotThree}`)
        const dotFour = document.querySelectorAll(`.${STYLE.dotFour}`)
        const dotFive = document.querySelectorAll(`.${STYLE.dotFive}`)
        const slideWidth1 = 14.2857
        let x1
        let x2
        let startPoint
        let distance
        let index1 = 1

        dotOne[0].style.backgroundColor = "#559137"
        dotOne[0].style.borderColor = "#559137"

        slide[0].addEventListener('transitionend', () => {
            if (index1 === 6) {
                slide[0].style.transition = 'none'
                index1 = 1
                slide[0].style.transform = `translateX(${-slideWidth1}%)`
                currentDot()
            }
            if (index1 === 0) {
                slide[0].style.transition = 'none'
                index1 = 5
                slide[0].style.transform = `translateX(${-(slideWidth1 * index1)}%)`
                currentDot()
            }
        })

        const moveToNextSlide = () => {
            if (index1 >= 6) return
            index1++
            slide[0].style.transition = '.50s ease'
            slide[0].style.transform = `translateX(${-(slideWidth1 * index1)}%)`
            currentDot()
        }

        const moveToPreviousSlide = () => {
            if (index1 <= 0) return
            index1--
            slide[0].style.transition = '.50s ease'
            slide[0].style.transform = `translateX(${-(slideWidth1 * index1)}%)`
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
            distance = 0
            document.onmouseup = null
            document.onmousemove = null
        }

        dotOne[0].addEventListener('click', () => {
            index1 = 1
            slide[0].style.transition = '.50s ease'
            slide[0].style.transform = `translateX(${-(slideWidth1 * index1)}%)`
            currentDot()
        })

        dotTwo[0].addEventListener('click', () => {
            index1 = 2
            slide[0].style.transition = '.50s ease'
            slide[0].style.transform = `translateX(${-(slideWidth1 * index1)}%)`
            currentDot()
        })

        dotThree[0].addEventListener('click', () => {
            index1 = 3
            slide[0].style.transition = '.50s ease'
            slide[0].style.transform = `translateX(${-(slideWidth1 * index1)}%)`
            currentDot()
        })

        dotFour[0].addEventListener('click', () => {
            index1 = 4
            slide[0].style.transition = '.50s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth1 * index1)}%)`
            currentDot()
        })
        dotFive[0].addEventListener('click', () => {
            index1 = 5
            slide[0].style.transition = '.50s ease'
            slide[0].style.transform = `translateX(${-(slideWidth1 * index1)}%)`
            currentDot()
        })

        function currentDot() {
            if (index1 === 1) {
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
            } else if (index1 === 3) {
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
            } else if (index1 === 4) {
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
            } else if (index1 === 5) {
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
    }, [])

    return (
        <div className={STYLE.container}>
            <div className={STYLE.background}>
                <div className={STYLE.content}>
                    <div className={STYLE.cardOne}>
                        <div className={STYLE.imageBgContent}>
                            <div className={STYLE.title}>
                                Aboneaza-te la newsletter-ul Floris si primesti 15% discount la prima comanda
                            </div>
                            <input className={STYLE.emailBox} type="text" placeholder="Adresa de email..." />
                            <div><button className={STYLE.orderButton}>MA ABONEZ</button></div>
                        </div>
                    </div>
                    <div className={STYLE.cardTwo}>
                        <div className={STYLE.slider}>
                            <div className={STYLE.slides}>
                                <div className={STYLE.slide}>
                                    <div className={STYLE.top}>
                                        <ImUserTie className={STYLE.icon} />
                                        <div className={STYLE.customerName}>{CommentsItems[4].name}</div>
                                    </div>
                                    <div className={STYLE.customerComment}>{CommentsItems[4].comment}</div>
                                </div>
                                <div className={STYLE.slide}>
                                    <div className={STYLE.top}>
                                        <ImUserTie className={STYLE.icon} />
                                        <div className={STYLE.customerName}>{CommentsItems[0].name}</div>
                                    </div>
                                    <div className={STYLE.customerComment}>{CommentsItems[0].comment}</div>
                                </div>
                                <div className={STYLE.slide}>
                                    <div className={STYLE.top}>
                                        <ImUserTie className={STYLE.icon} />
                                        <div className={STYLE.customerName}>{CommentsItems[1].name}</div>
                                    </div>
                                    <div className={STYLE.customerComment}>{CommentsItems[1].comment}</div>
                                </div>
                                <div className={STYLE.slide}>
                                    <div className={STYLE.top}>
                                        <ImUserTie className={STYLE.icon} />
                                        <div className={STYLE.customerName}>{CommentsItems[2].name}</div>
                                    </div>
                                    <div className={STYLE.customerComment}>{CommentsItems[2].comment}</div>
                                </div>
                                <div className={STYLE.slide}>
                                    <div className={STYLE.top}>
                                        <ImUserTie className={STYLE.icon} />
                                        <div className={STYLE.customerName}>{CommentsItems[3].name}</div>
                                    </div>
                                    <div className={STYLE.customerComment}>{CommentsItems[3].comment}</div>
                                </div>
                                <div className={STYLE.slide}>
                                    <div className={STYLE.top}>
                                        <ImUserTie className={STYLE.icon} />
                                        <div className={STYLE.customerName}>{CommentsItems[4].name}</div>
                                    </div>
                                    <div className={STYLE.customerComment}>{CommentsItems[4].comment}</div>
                                </div>
                                <div className={STYLE.slide}>
                                    <div className={STYLE.top}>
                                        <ImUserTie className={STYLE.icon} />
                                        <div className={STYLE.customerName}>{CommentsItems[0].name}</div>
                                    </div>
                                    <div className={STYLE.customerComment}>{CommentsItems[0].comment}</div>
                                </div>
                            </div>
                        </div>
                        <div className={STYLE.dotsSlider}>
                            <div className={STYLE.dotOne}></div>
                            <div className={STYLE.dotTwo} ></div>
                            <div className={STYLE.dotThree} ></div>
                            <div className={STYLE.dotFour} ></div>
                            <div className={STYLE.dotFive} ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}