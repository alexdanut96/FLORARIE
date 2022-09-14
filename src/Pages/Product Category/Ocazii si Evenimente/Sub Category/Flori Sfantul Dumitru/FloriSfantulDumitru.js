import React, { useEffect } from "react";
import STYLE from "./FloriSfantulDumitru.module.css"
import { SearchForm } from "../../../../../components/HomePage/SearchForm/SearchForm";
import { IoIosArrowDown } from "react-icons/io"
import { TbAdjustmentsHorizontal } from "react-icons/tb"
import { ContentCardMax } from "../../../../../components/Content/ContentCardMax"
import { ContentCardMid } from "../../../../../components/Content/ContentCardMid"
import { ContentCardMin } from "../../../../../components/Content/ContentCardMin"
import { FacilitiesCarousel } from "../../../../../components/HomePage/Facilities/FacilitiesCarousel";
import { FacilitiesItemsTwo } from "../../../../../components/HomePage/Facilities/FacilitiesItemsTwo";
import { FacilitiesMax } from "../../../../../components/HomePage/FacilitiesTab/FacilitiesMax";
import { FreeDelivery } from "../../../../../components/HomePage/FreeDelivery/FreeDelivery"
import allItems from "../../../../../data/Items.json"
import items from "../../../../../data/Ocazii si Evenimente/Flori Sfantul Dumitru/FloriSfantulDumitru.json"

export function FloriSfantulDumitru() {

    useEffect(() => {
        const productMaxSize = document.querySelectorAll(`.${STYLE.productMaxSize}>*`)
        const productMidSize = document.querySelectorAll(`.${STYLE.productMidSize}>*`)
        const productMinSize = document.querySelectorAll(`.${STYLE.productMinSize}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const showMoreText = document.querySelectorAll(`.${STYLE.showMoreText}`)
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
        button[0].addEventListener("click", showMore)

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>FLORI &nbsp;SFANTUL &nbsp;DUMITRU</div>
                <div className={STYLE.box}></div>
            </div>
            <div className={STYLE.searchForm}>
                <SearchForm />
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
                {allItems.map(allItm => {
                    for (let i = 0; i <= items.length - 1; i++) {
                        if (allItm.productCode === items[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    return null
                })}
            </div>
            <div className={STYLE.productMidSize}>
                {allItems.map(allItm => {
                    for (let i = 0; i <= items.length - 1; i++) {
                        if (allItm.productCode === items[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    return null
                })}
            </div>
            <div className={STYLE.productMinSize}>
                {allItems.map(allItm => {
                    for (let i = 0; i <= items.length - 1; i++) {
                        if (allItm.productCode === items[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    return null
                })}
            </div>
            <div className={STYLE.showMore}>
                <div className={STYLE.showMoreText}></div>
                <div><button className={STYLE.button}>ARATA MAI MULT</button></div>
            </div>
            <div className={STYLE.information}>
                <div className={STYLE.informationTitle}>Comandă Online Flori de Sfântul Dumitru cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Se spune despre Sfântul Dumitru că este ultima, și cea mai însemnată, sărbătoare a toamnei. Conform tradițiilor pastorale, însă, aceasta marchează începutul iernii. Pe lângă superstiții și activități specifice, sărbătoarea Sfântului Dumitru e și un motiv de bucurie.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Pentru cei care își sărbătoresc ziua numelui pe 26 octombrie, am pregătit o colecție specială de buchete de flori și aranjamente, cu cele mai frumoase flori de toamnă. Colecția specială de Sfântul Dumitru este, deci, una plină de culoare.
                    </div>
                </div>
            </div>
            <div className={STYLE.faclitiesTabMin}>
                <FacilitiesCarousel items={FacilitiesItemsTwo} />
            </div>

            <FacilitiesMax />
            <SearchForm />
            <FreeDelivery />
        </div>

    )
}