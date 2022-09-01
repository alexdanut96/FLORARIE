import React, { useEffect } from "react";
import STYLE from "../Sliders/TopSlider.module.css"
import { Link } from "react-router-dom";
import { TopSliderItems } from "./TopSliderItems";

export function TopSlider() {

    useEffect(() => {

        const slide = document.querySelectorAll(`.${STYLE.slides}`)
        const slides = document.querySelectorAll(`.${STYLE.slide}`)
        const dotOne = document.querySelectorAll(`.${STYLE.dotOne}`)
        const dotTwo = document.querySelectorAll(`.${STYLE.dotTwo}`)
        const dotThree = document.querySelectorAll(`.${STYLE.dotThree}`)
        const dotFour = document.querySelectorAll(`.${STYLE.dotFour}`)
        const slidesNumber = slides.length
        const slideWidth = 100 / slidesNumber
        var slideId
        var index = 1
        let x1
        let x2
        let startPoint
        let distance

        dotOne[0].style.backgroundColor = "#559137"
        dotOne[0].style.borderColor = "#559137"
        slide[0].style.transform = `translateX(${-slideWidth}%)`

        // console.log(slides.indexOf(slides[0]))

        slide[0].addEventListener("transitionend", () => {
            if (index === slidesNumber - 1) {
                index = 1
                slide[0].style.transition = "none"
                slide[0].style.transform = `translateX(${-slideWidth * index}%)`
                currentDot()
            }
            if (index === 0) {
                index = 4
                slide[0].style.transition = "none"
                slide[0].style.transform = `translateX(${-slideWidth * index}%)`
                currentDot()
            }
        })


        dotOne[0].addEventListener('click', () => {
            index = 1
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth * index)}%)`
            clearInterval(slideId);
            startSlide()
            currentDot()
        })

        dotTwo[0].addEventListener('click', () => {
            index = 2
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth * index)}%)`
            clearInterval(slideId);
            startSlide()
            currentDot()
        })

        dotThree[0].addEventListener('click', () => {
            index = 3
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth * index)}%)`
            clearInterval(slideId);
            startSlide()
            currentDot()
        })

        dotFour[0].addEventListener('click', () => {
            index = 4
            slide[0].style.transition = '.35s ease-out'
            slide[0].style.transform = `translateX(${-(slideWidth * index)}%)`
            clearInterval(slideId);
            startSlide()
            currentDot()
        })

        function moveToNextSlide() {
            index++
            slide[0].style.transition = "0.35s ease"
            slide[0].style.transform = `translateX(${-slideWidth * index}%)`
            currentDot()
        }

        function moveToPreviousSlide() {
            index--
            slide[0].style.transition = "0.35s ease"
            slide[0].style.transform = `translateX(${-slideWidth * index}%)`
            currentDot()
        }

        const startSlide = () => {
            slideId = setInterval(() => {
                moveToNextSlide()
            }, 4500)
        }
        startSlide()

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
                clearInterval(slideId);
                startSlide()
                distance = null
            } else if (distance > 100) {
                slide[0].style.left = `${0}px`
                moveToNextSlide()
                clearInterval(slideId);
                startSlide()
                distance = null
            } else {
                slide[0].style.left = `${0}px`
                clearInterval(slideId);
                startSlide()
                distance = null
            }
            document.onmouseup = null
            document.onmousemove = null
        }

        function currentDot() {
            if (index === 1) {
                dotOne[0].style.backgroundColor = "#559137"
                dotOne[0].style.borderColor = "#559137"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "white"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "white"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "white"
            }
            if (index === 2) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "white"
                dotTwo[0].style.backgroundColor = "#559137"
                dotTwo[0].style.borderColor = "#559137"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "white"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "white"
            }
            if (index === 3) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "white"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "white"
                dotThree[0].style.backgroundColor = "#559137"
                dotThree[0].style.borderColor = "#559137"
                dotFour[0].style.backgroundColor = "transparent"
                dotFour[0].style.borderColor = "white"
            }
            if (index === 4) {
                dotOne[0].style.backgroundColor = "transparent"
                dotOne[0].style.borderColor = "white"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "white"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "white"
                dotFour[0].style.backgroundColor = "#559137"
                dotFour[0].style.borderColor = "#559137"
            }
        }

        // startSlide()
    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.slides}>
                <Link to={TopSliderItems[3].path} className={STYLE.slide}>
                    <div
                        style={TopSliderItems[3].image}
                        className={STYLE.imageFour}>
                        <div className={STYLE.imageContainer}>
                            <div className={STYLE.title}>{TopSliderItems[3].title}</div>
                            <div className={STYLE.orderButton}><button>COMANDA</button></div>
                        </div>
                    </div>
                </Link>
                <Link to={TopSliderItems[0].path} className={STYLE.slide}>
                    <div
                        style={TopSliderItems[0].image}
                        className={STYLE.imageOne}>
                        <div className={STYLE.imageContainer}>
                            <div className={STYLE.title}>{TopSliderItems[0].title}</div>
                            <div className={STYLE.orderButton}><button>COMANDA</button></div>
                        </div>
                    </div>
                </Link>
                <Link to={TopSliderItems[1].path} className={STYLE.slide}>
                    <div
                        style={TopSliderItems[1].image}
                        className={STYLE.imageTwo}>
                        <div className={STYLE.imageContainer}>
                            <div className={STYLE.title}>{TopSliderItems[1].title}</div>
                            <div className={STYLE.orderButton}><button>COMANDA</button></div>
                        </div>
                    </div>
                </Link>
                <Link to={TopSliderItems[2].path} className={STYLE.slide}>
                    <div
                        style={TopSliderItems[2].image}
                        className={STYLE.imageThree}>
                        <div className={STYLE.imageContainer}>
                            <div className={STYLE.title}>{TopSliderItems[2].title}</div>
                            <div className={STYLE.orderButton}><button>COMANDA</button></div>
                        </div>
                    </div>
                </Link>
                <Link to={TopSliderItems[3].path} className={STYLE.slide}>
                    <div
                        style={TopSliderItems[3].image}
                        className={STYLE.imageFour}>
                        <div className={STYLE.imageContainer}>
                            <div className={STYLE.title}>{TopSliderItems[3].title}</div>
                            <div className={STYLE.orderButton}><button>COMANDA</button></div>
                        </div>
                    </div>
                </Link>
                <Link to={TopSliderItems[0].path} className={STYLE.slide}>
                    <div
                        style={TopSliderItems[0].image}
                        className={STYLE.imageOne}>
                        <div className={STYLE.imageContainer}>
                            <div className={STYLE.title}>{TopSliderItems[0].title}</div>
                            <div className={STYLE.orderButton}><button>COMANDA</button></div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={STYLE.dotsSlider}>
                <div className={STYLE.dotOne}></div>
                <div className={STYLE.dotTwo} ></div>
                <div className={STYLE.dotThree} ></div>
                <div className={STYLE.dotFour} ></div>
            </div>
        </div>
    )
}