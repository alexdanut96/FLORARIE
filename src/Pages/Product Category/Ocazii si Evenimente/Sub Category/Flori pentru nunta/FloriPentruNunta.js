import React, { useEffect } from "react";
import STYLE from "./FloriPentruNunta.module.css"
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
import items from "../../../../../data/Ocazii si Evenimente/Flori pentru nunta/FloriPentruNunta.json"

export function FloriPentruNunta() {

    useEffect(() => {
        const productMaximumSize = document.querySelectorAll(`.${STYLE.productMaximumSize}>*`)
        const productMidSize = document.querySelectorAll(`.${STYLE.productMidSize}>*`)
        const productMinSize = document.querySelectorAll(`.${STYLE.productMinSize}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const showMoreText = document.querySelectorAll(`.${STYLE.showMoreText}`)
        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMaximumSize.length - 1; i++) {
                if (i <= index) {
                    productMaximumSize[i].style.display = "flex"
                    productMidSize[i].style.display = "flex"
                    productMinSize[i].style.display = "flex"
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
                <div className={STYLE.title}>FLORI &nbsp;PENTRU &nbsp;NUNTA</div>
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
                <div className={STYLE.informationTitle}>Comandă Online Flori Nuntă si Botez cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Expertii de la florarie online Floris sunt gata sa te ajute sa gasesti florile potrivite pentru cea mai frumoasa zi din viata ta. Poti alege dintr-o colectie variata de lumanari de nunta sau lumanari de botez, aranjamente pentru masa mirilor si nunta. Indiferent de cand iti planifici nunta sau botezul, la noi vei gasi florile potrivite. De la flori de sezon, pana la aranjamente cu flori pastelate sau exotice, florile pentru nunta ta vor fi gata sa incante privirile invitatilor. Cei peste 200.000 de clienti multumiti de Floris reprezinta garantia ta, ca florile vor fi proaspete si vor arata impecabil! Cu atat de multe nuante, texturi, stiluri si modele, florile adauga o frumusete naturala si un strop de creativitate unica nuntii tale.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Buchetul de mireasa este, probabil, cea mai importanta alegere, iar multe mirese moderne sunt de acord ca alegerea dintr-o selectie de flori online reprezinta o economie de timp si efort. Colectia de flori pentru nunta la de la Floris este locul de unde poti incepe. Alege din colectia noastra vasta de flori pentru nunta, buchete si aranjamente care sa se potriveasca cu stilul si bugetul tau. Chiar daca vei alege buchete de flori online vei beneficia de experienta specialistilor nostrii, care te vor consilia pentru alegerea florilor potrivite. Noi cei de la Floris suntem dedicati atunci cand vine vorba de cel mai important eveniment din viata ta si vom avea grija ca totul sa arate impecabil. Doar contacteaza-ne si noi ne vom ocupa de restul!
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