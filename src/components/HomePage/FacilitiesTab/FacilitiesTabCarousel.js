import React, { useEffect } from "react";
import STYLE from "./FacilitiesTabCarousel.module.css"
import { FacilitiesItems } from "../Facilities/FacilitiesItems";

export function FacilitiesTabCarousel() {

    useEffect(() => {

        const slide = document.querySelectorAll(`.${STYLE.allSlides}`)
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
            <div className={STYLE.allSlides}>
                <div className={STYLE.slide}>
                    {FacilitiesItems[1].icon}
                    <span className={STYLE.title}>{FacilitiesItems[1].title}</span>
                </div>
                <div className={STYLE.slide}>
                    {FacilitiesItems[2].icon}
                    <span className={STYLE.title}>{FacilitiesItems[2].title}</span>
                </div>
                <div className={STYLE.slide}>
                    {FacilitiesItems[4].icon}
                    <span className={STYLE.title}>{FacilitiesItems[4].title}</span>
                </div>
                <div className={STYLE.slide}>
                    {FacilitiesItems[5].icon}
                    <span className={STYLE.title}>{FacilitiesItems[5].title}</span>
                </div>
                <div className={STYLE.slide}>
                    {FacilitiesItems[3].icon}
                    <span className={STYLE.title}>{FacilitiesItems[3].title}</span>
                </div>
                <div className={STYLE.slide}>
                    {FacilitiesItems[1].icon}
                    <span className={STYLE.title}>{FacilitiesItems[1].title}</span>
                </div>
            </div>
        </div>
    )
}