import React, { useEffect } from "react";
import STYLE from "./FacilitiesCarousel.module.css"
import { FacilitiesItems } from "./FacilitiesItems";

export function FacilitiesCarousel() {

    useEffect(() => {

        const slide = document.querySelectorAll(`.${STYLE.slides}`)
        const slides = document.querySelectorAll(`.${STYLE.slide}`)
        const slidesNumber = slides.length
        const slideWidth = 100 / slidesNumber
        var index = 0

        slide[0].addEventListener("transitionend", () => {
            if (index === slidesNumber - 1) {
                index = 0
                slide[0].style.transition = "none"
                slide[0].style.transform = `translateX(${-slideWidth * index}%)`
            }
        })

        function moveToNextSlide() {
            index++
            slide[0].style.transition = "0.35s ease"
            slide[0].style.transform = `translateX(${-slideWidth * index}%)`
        }

        const startSlide = () => {
            setInterval(() => {
                moveToNextSlide()
            }, 3500)
        }

        startSlide()
    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.slides}>
                <div className={STYLE.slide}>
                    {FacilitiesItems[0].icon}
                    <span className={STYLE.title}>{FacilitiesItems[0].title}</span>
                </div>
                <div className={STYLE.slide}>
                    {FacilitiesItems[1].icon}
                    <span className={STYLE.title}>{FacilitiesItems[1].title}</span>
                </div>
                <div className={STYLE.slide}>
                    {FacilitiesItems[2].icon}
                    <span className={STYLE.title}>{FacilitiesItems[2].title}</span>
                </div>
                <div className={STYLE.slide}>
                    {FacilitiesItems[0].icon}
                    <span className={STYLE.title}>{FacilitiesItems[0].title}</span>
                </div>
            </div>
        </div>
    )
}