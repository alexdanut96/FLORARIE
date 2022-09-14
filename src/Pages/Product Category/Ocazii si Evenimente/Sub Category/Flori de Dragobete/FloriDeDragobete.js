import React, { useEffect } from "react";
import STYLE from "./FloriDeDragobete.module.css"
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
import items from "../../../../../data/Ocazii si Evenimente/Flori de Dragobete/FloriDeDragobete.json"

export function FloriDeDragobete() {

    useEffect(() => {
        const productXsize = document.querySelectorAll(`.${STYLE.productXsize}>*`)
        const productMsize = document.querySelectorAll(`.${STYLE.productMsize}>*`)
        const productSsize = document.querySelectorAll(`.${STYLE.productSsize}>*`)
        const showMoreButton = document.querySelectorAll(`.${STYLE.showMoreButton}`)
        const showMoreText = document.querySelectorAll(`.${STYLE.showMoreText}`)
        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productXsize.length - 1; i++) {
                if (i <= index) {
                    productXsize[i].style.display = "flex"
                    productMsize[i].style.display = "flex"
                    productSsize[i].style.display = "flex"
                }
            }
            if (index >= productXsize.length - 1) {
                index = productXsize.length - 1
            }
            showMoreText[0].innerHTML = `Afiseaza ${index + 1} din ${productXsize.length}`
            index = index + 12
        }
        showMore()
        showMoreButton[0].addEventListener("click", showMore)

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>FLORI &nbsp;DE &nbsp;DRAGOBETE</div>
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
            <div className={STYLE.productXsize}>
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
            <div className={STYLE.productMsize}>
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
            <div className={STYLE.productSsize}>
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
                <div><button className={STYLE.showMoreButton}>ARATA MAI MULT</button></div>
            </div>
            <div className={STYLE.information}>
                <div className={STYLE.informationTitle}>Comandă Online Flori Dragobete cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Exista atat de multe momente in care ii poti arata jumatatii tale cat de mult o iubesti, iar o ocazie in plus este intotdeauna bine-venita. Daca ai sarit peste Ziua Indragostitilor, mai ai o ocazie sa sarbatoresti iubirea in stil romanesc, de Dragobete.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Noi cei de la Floris, am pregatit o colectie de buchete de flori de Dragobete ce include trandafiri rosii, lalele rosii, zambile, narcise si multe alte flori de primavara. Comanda flori Dragobete de la Floris.ro, cu livrare gratuita!
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