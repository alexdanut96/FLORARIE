import React, { useEffect } from "react";
import STYLE from "./BucheteDeGerbera.module.css"
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
import items from "../../../../../data/Buchete flori/Buchete de gerbera/BucheteDeGerbera.json"

export function BucheteDeGerbera() {

    useEffect(() => {
        const productMax = document.querySelectorAll(`.${STYLE.productMax}>*`)
        const productMid = document.querySelectorAll(`.${STYLE.productMid}>*`)
        const productMinnim = document.querySelectorAll(`.${STYLE.productMinnim}>*`)
        const showMoreBtn = document.querySelectorAll(`.${STYLE.showMoreBtn}`)
        const showMoreText = document.querySelectorAll(`.${STYLE.showMoreText}`)
        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMax.length - 1; i++) {
                if (i <= index) {
                    productMax[i].style.display = "flex"
                    productMid[i].style.display = "flex"
                    productMinnim[i].style.display = "flex"
                }
            }
            if (index >= productMax.length - 1) {
                index = productMax.length - 1
            }
            showMoreText[0].innerHTML = `Afiseaza ${index + 1} din ${productMax.length}`
            index = index + 12
        }
        showMore()
        showMoreBtn[0].addEventListener("click", showMore)

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>BUCHETE &nbsp;DE &nbsp;GERBERA</div>
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
            <div className={STYLE.productMinnim}>
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
                <div><button className={STYLE.showMoreBtn}>ARATA MAI MULT</button></div>
            </div>
            <div className={STYLE.information}>
                <div className={STYLE.informationTitle}>Comanda Online Buchete de Gerbera Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Perfecte pentru orice ocazie, comanda buchete de gerbera online pentru a spune "Multumesc!", "Sa te faci bine repede!" sau fara niciun motiv. Alege dintr-o selectie vasta de flori online cu livrare rapida. Cum se face ca un buchet de gerbera reuseste sa aduca zambetul pe buze, chiar si celor mai morocanosi dintre noi? Gerbera sunt surorile mai mici ale Florii Soarelui si se gasesc intr-o varietate mare de culori, inclusiv roz neon, galben stralucitor, piersica delicioasa, lavanda sau rosu regal. Centrul florii poate fi de aproape orice culoare si, de multe ori, o singura floare are petale de culori diferite, ceea ce le face cu adevarat unice. Cauti un cadou care sa radieze de fericire si voie buna? Trimite un buchet de flori gerbera prin Floris.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Un aranjament sau un buchet de gerbera este potrivit pentru orice eveniment vesel. Un buchet de gerbera este potrivit pentru a transmite "Multumesc!", "Sa ai o zi frumoasa!" sau alte urari de bine. Gerbera simbolizeaza inocenta, simplitate si bucurie, ceea ce le face un cadou potrivit pentru aproape orice ocazie. Nu exista cadou mai vesel decat un buchet de gerbera. Atunci cand aranjezi cateva gerbera intr-un buchet colorat este ca si cum ai trimite o cutie plina de fericire. Si tu poti face ziua mai frumoasa cuiva, comandand simplu si rapid flori online de la cea mai buna florarie online, Floris. Beneficiezi de livrare in maxim 2 ore, aproape oriunde in Romania, si transport gratuit la orice buchet de flori comandat!
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