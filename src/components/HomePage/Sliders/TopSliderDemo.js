import React, { useEffect } from "react";
import STYLE from "../Sliders/TopSliderDemo.module.css"
import { Link } from "react-router-dom";
import { TopSliderItems } from "./TopSliderItems";

export function TopSliderDemo() {



    var slideId
    var index = 1


    function moveToNextSlide() {
        const slide = document.querySelectorAll(`.${STYLE.slides}`)
        const slides = document.querySelectorAll(`.${STYLE.slide}`)
        const slidesNumber = slides.length
        const slideWidth = 100 / slidesNumber
        index++
        slide[0].style.transition = "0.35s ease"
        slide[0].style.transform = `translateX(${-slideWidth * index}%)`


        slide[0].addEventListener("transitionend", () => {
            if (index === slidesNumber - 1) {
                index = 1
                slide[0].style.transition = "none"
                slide[0].style.transform = `translateX(${-slideWidth * index}%)`
                // currentDot()
            }
            if (index === 0) {
                index = 4
                slide[0].style.transition = "none"
                slide[0].style.transform = `translateX(${-slideWidth * index}%)`
                // currentDot()
            }
        })
        // currentDot()
    }



    const startSlide = () => {
        slideId = setInterval(() => {
            moveToNextSlide()
        }, 4500)
    }

    useEffect(() => {
        startSlide()
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