import React, { useEffect } from "react";
import STYLE from "./SearchBar.module.css"
import { SearchForm } from "../../HomePage/SearchForm/SearchForm";
import { ContentCardMax } from "../../Content/ContentCardMax";
import { ContentCardMid } from "../../Content/ContentCardMid";
import { ContentCardMin } from "../../Content/ContentCardMin"
import items from "../../../data/Items.json"
import { FreeDelivery } from "../../HomePage/FreeDelivery/FreeDelivery";
import { IoIosArrowDown } from "react-icons/io"
import { TbAdjustmentsHorizontal } from "react-icons/tb"
import { FacilitiesTab } from "../../HomePage/FacilitiesTab/FacilitiesTab";
import { FacilitiesTabCarousel } from "../../HomePage/FacilitiesTab/FacilitiesTabCarousel";
import { useInputTerm } from "../Context/StateContext";
import { NewSalesMax } from "../../HomePage/New sales/New Sales Max/NewSalesMax"
import { NewSalesMid } from "../../HomePage/New sales/New Sales Mid/NewSalesMid"
import { NewSalesMin } from "../../HomePage/New sales/New Sales Min/NewSalesMin"

export function SearchBar() {

    const term = useInputTerm()

    useEffect(() => {
        const productMaxSize = document.querySelectorAll(`.${STYLE.productMaxSize}>*`)
        const productMidSize = document.querySelectorAll(`.${STYLE.productMidSize}>*`)
        const productMinSize = document.querySelectorAll(`.${STYLE.productMinSize}>*`)
        const showMoreButton = document.querySelectorAll(`.${STYLE.showMoreButton}`)
        const showMoreText = document.querySelectorAll(`.${STYLE.showMoreText}`)
        const productSearchFilter = document.querySelectorAll(`.${STYLE.productSearchFilter}`)
        const showMoreContainer = document.querySelectorAll(`.${STYLE.showMore}`)
        const newSales = document.querySelectorAll(`.${STYLE.newSales}`)
        const noResult = document.querySelectorAll(`.${STYLE.noResult}`)
        const titleContent = document.querySelectorAll(`.${STYLE.titleContent}`)

        console.log(term)

        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMaxSize.length - 1; i++) {
                if (i <= index) {
                    productMaxSize[i].style.display = "flex"
                    productMidSize[i].style.display = "flex"
                    productMinSize[i].style.display = "flex"
                }
            }
            if (index >= productMaxSize.length - 1) {
                index = productMaxSize.length - 1
            }
            showMoreText[0].innerHTML = `Afiseaza ${index + 1} din ${productMaxSize.length}`
            index = index + 12
        }
        showMore()

        showMoreButton[0].addEventListener("click", showMore)

        if (productMaxSize.length === 0) {
            productSearchFilter[0].style.display = "none"
        } else {
            productSearchFilter[0].style.display = "flex"
        }

        if (productMaxSize.length === 0) {
            showMoreContainer[0].style.display = "none"
        } else {
            showMoreContainer[0].style.display = "flex"
        }

        if (productMaxSize.length === 0) {
            newSales[0].style.display = "block"
        } else {
            newSales[0].style.display = "none"
        }

        if (productMaxSize.length === 0) {
            noResult[0].style.display = "flex"
        } else {
            noResult[0].style.display = "none"
        }

        if (productMaxSize.length === 0) {
            titleContent[0].style.display = "none"
        } else {
            titleContent[0].style.display = "flex"
        }

    })



    return (

        <div className={STYLE.container}>
            <div className={STYLE.titleContent}>
                <div className={STYLE.titleContainer}>
                    <div className={STYLE.title}>Rezultate pentru:</div>
                    <div className={STYLE.title}>" {term} "</div>
                </div>
            </div>
            <div className={STYLE.searchForm}>
                <SearchForm />
            </div>
            <div className={STYLE.noResult}>
                <div>
                    Nu s-au gasit rezultate pentru: " <span>{term}</span> "
                </div>
            </div>
            <div className={STYLE.productSearchFilter}>
                <div className={STYLE.filterTextandIcon}>
                    <div className={STYLE.filterText}>Sorteaza dupa</div>
                    <IoIosArrowDown className={STYLE.arrowDownIcon} />
                </div>
                <div>
                    <button className={STYLE.filterButton}>
                        <TbAdjustmentsHorizontal className={STYLE.adjustIcon} />
                        <div className={STYLE.buttonText}>Filtreaza</div>
                    </button>
                </div>
            </div>
            <div className={STYLE.productMaxSize}>

                {items.map((val) => {
                    if (val.title.toLowerCase().includes(term.toLowerCase())) {
                        return <ContentCardMax key={val.id} {...val} />
                    }
                    return null
                })}





            </div>
            <div className={STYLE.productMidSize}>

                {items.map((val) => {
                    if (term === "") {
                        return null
                    } else if (val.title.toLowerCase().includes(term.toLowerCase())) {
                        return <ContentCardMid key={val.id} {...val} />
                    }
                    return null
                })}

            </div>
            <div className={STYLE.productMinSize}>

                {items.map((val) => {
                    if (term === "") {
                        return null
                    } else if (val.title.toLowerCase().includes(term.toLowerCase())) {
                        return <ContentCardMin key={val.id} {...val} />
                    }
                    return null
                })}

            </div>
            <div className={STYLE.showMore}>
                <div className={STYLE.showMoreText}></div>
                <div><button className={STYLE.showMoreButton}>ARATA MAI MULT</button></div>
            </div>
            <div className={STYLE.newSales}>
                <NewSalesMax />
            </div>
            <div className={STYLE.newSales}>
                <NewSalesMid />
            </div>
            <div className={STYLE.newSales}>
                <NewSalesMin />
            </div>
            <div className={STYLE.faclitiesTabMax}>
                <FacilitiesTab />
            </div>
            <div className={STYLE.faclitiesTabMin}>
                <FacilitiesTabCarousel />
            </div>
            <SearchForm />
            <FreeDelivery />
        </div>

    )

}


// {items.filter((val) => {
//     if (term === "") {
//         return null
//     } else if (val.title.toLowerCase().includes(term.toLowerCase())) {
//         return val
//     }
//     return null
// }).map(item => (
//     <ContentCardMax key={item.id} {...item} />
// ))}







