import React, { useEffect } from "react";
import STYLE from "./CoroaneFunerare.module.css"
import { SearchForm } from "../../../../../components/HomePage/SearchForm/SearchForm";
import { IoIosArrowDown } from "react-icons/io"
import { TbAdjustmentsHorizontal } from "react-icons/tb"
import { ContentCardMax } from "../../../../../components/Content/ContentCardMax"
import { ContentCardMid } from "../../../../../components/Content/ContentCardMid"
import { ContentCardMin } from "../../../../../components/Content/ContentCardMin"
import { FacilitiesTab } from "../../../../../components/HomePage/FacilitiesTab/FacilitiesTab"
import { FacilitiesTabCarousel } from "../../../../../components/HomePage/FacilitiesTab/FacilitiesTabCarousel"
import { FreeDelivery } from "../../../../../components/HomePage/FreeDelivery/FreeDelivery"
import allItems from "../../../../../data/Items.json"
import items from "../../../../../data/Ocazii si Evenimente/Coroane funerare/CoroaneFunerare.json"

export function CoroaneFunerare() {

    useEffect(() => {
        const productMaximumSize = document.querySelectorAll(`.${STYLE.productMaximumSize}>*`)
        const productMid = document.querySelectorAll(`.${STYLE.productMid}>*`)
        const productMin = document.querySelectorAll(`.${STYLE.productMin}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const showMoreText = document.querySelectorAll(`.${STYLE.showMoreText}`)
        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMaximumSize.length - 1; i++) {
                if (i <= index) {
                    productMaximumSize[i].style.display = "flex"
                    productMid[i].style.display = "flex"
                    productMin[i].style.display = "flex"
                }
            }
            if (index >= productMaximumSize.length - 1) {
                index = productMaximumSize.length - 1
            }
            showMoreText[0].innerHTML = `Afiseaza ${index + 1} din ${productMaximumSize.length}`
            index = index + 12
        }
        showMore()
        button[0].addEventListener("click", showMore)

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>COROANE &nbsp;FUNERARE</div>
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
            <div className={STYLE.productMaximumSize}>
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
            <div className={STYLE.productMid}>
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
            <div className={STYLE.productMin}>
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
                <div className={STYLE.informationTitle}>Comandă Online Coroane Jerbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Servicii dedicate pentru momente delicate. Te ajutam sa fii mai aproape de cei dragi si sa le trimiti gandurile tale bune si urarile de condoleante. Poti comanda online buchete de flori, coroane funerare, jerbe sau cruci din flori. Florile sunt naturale, iar coroanele, jerbele sau crucile din flori pot fi livrate oriunde in tara, in mod gratuit.                    </div>
                    <div className={STYLE.informationContentTwo}>
                        In plus, puteti comanda online si trimite buchete de flori, coroane, jerbe sau cruci din flori din in strainatate. Coroanele funerare, crucile din flori, jerbele sau buchetele pot fi insotite de mesajele dvs de condoleante catre apropiati.
                    </div>
                </div>
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