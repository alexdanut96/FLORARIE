import React, { useEffect } from "react";
import STYLE from "./BucheteDeCriniAsiatici.module.css"
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
import items from "../../../../../data/Buchete flori/Buchete de crini asiatici/BucheteDeCriniAsiatici.json"

export function BucheteDeCriniAsiatici() {

    useEffect(() => {
        const productMax = document.querySelectorAll(`.${STYLE.productMax}>*`)
        const productMedium = document.querySelectorAll(`.${STYLE.productMedium}>*`)
        const productMinSize = document.querySelectorAll(`.${STYLE.productMinSize}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const showMoreText = document.querySelectorAll(`.${STYLE.showMoreText}`)
        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMax.length - 1; i++) {
                if (i <= index) {
                    productMax[i].style.display = "flex"
                    productMedium[i].style.display = "flex"
                    productMinSize[i].style.display = "flex"
                }
            }
            if (index >= productMax.length - 1) {
                index = productMax.length - 1
            }
            showMoreText[0].innerHTML = `Afiseaza ${index + 1} din ${productMax.length}`
            index = index + 12
        }
        showMore()
        button[0].addEventListener("click", showMore)

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>BUCHETE &nbsp;DE &nbsp;CRINI &nbsp;ASIATICI</div>
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
            <div className={STYLE.productMax}>
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
            <div className={STYLE.productMedium}>
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
                <div className={STYLE.informationTitle}>Comanda Online Buchete de Crini Asiatici Superbe cu Livrare la Domiciliu</div>
                {/* <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Atunci cand primesti cadou un buchet de orhidee sau o planta este ca si cum ai face o excursie in zona tropicala. Una dintre cele mai elegante flori, orhideea este un cadou care transforma orice incapere intr-una sic. Superbe, clasice si exotice, trei cuvinte frumoase care descriu varietatea de neegalat de plante si flori online disponibile la Floris. Comanda orhidee online de la Floris si vei beneficia de un serviciu de livrare flori excelent, oriunde in Romania. Alege din colectia noastra de orhidee albe sau roz un buchet deosebit, pe care sa il oferi unei persoane dragi tie.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Ne mandrim sa fim cea mai profesionista florarie online atat in Bucuresti cat si in toata tara. Se spune ca orhideele simbolizeaza dragoste, frumusete si rafinament. Aceste caracteristici se potrivesc perfect cu tulpina lunga si florile delicate ale acestei plante. Daca iti doresti sa faci un cadou elegant si care sa reziste mult, orhideele sunt o alegere potrivita si la moda pentru orice iubitoare de flori. De ce sa nu ii trimiti persoanei iubite un buchet de orhidee rafinat, chiar astazi, prin Floris? Sa comanzi flori online este simplu! Partea cea mai grea va fi alegerea buchetului!
                    </div>
                </div> */}
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