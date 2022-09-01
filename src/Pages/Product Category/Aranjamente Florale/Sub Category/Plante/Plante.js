import React, { useEffect } from "react";
import STYLE from "./Plante.module.css"
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
import items from "../../../../../data/Aranjamente florale/Plante/Plante.json"

export function Plante() {

    useEffect(() => {
        const productMax = document.querySelectorAll(`.${STYLE.productMax}>*`)
        const productMid = document.querySelectorAll(`.${STYLE.productMid}>*`)
        const productMin = document.querySelectorAll(`.${STYLE.productMin}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const showMoreText = document.querySelectorAll(`.${STYLE.showMoreText}`)
        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMax.length - 1; i++) {
                if (i <= index) {
                    productMax[i].style.display = "flex"
                    productMid[i].style.display = "flex"
                    productMin[i].style.display = "flex"
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
                <div className={STYLE.title}>PLANTE</div>
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
                <div className={STYLE.informationTitle}>Comanda Online Plante si Flori de Apartament Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Fie ca vorbesti despre o ocazie speciala sau pur si simplu atunci cand mergi in vizita si nu stii ce sa iei cadou, la Floris gasesti cadoul potrivit: plante de apartament. Alege o planta in ghiveci din colectia noastra, iar noi iti vom livra florile gratuit! Suntem singura florarie online din Romania care iti livreaza flori online oriunde in Romania, in numai 2 ore de la plasarea comenzii. Coloreaza spatiul de locuit cu flori de camera! Plantele in ghiveci au imbogatit vietile noastre si au colorat spatiile de locuit, inca din timpuri stravechi. Arheologii au descoperit picturi antice egiptene ce reprezentau plante care cresteau in interior sau in alte vase de ceramica. De la trandafiri in ghiveci, violete de parma, begonie, precum si alte flori in ghiveci, toate le poti comanda online de la florarie online Floris.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Deoarece Floris are o colectie atat de bogata de flori de interior, poti gasi oricand un cadou potrivit pentru o anumita ocazie. Plantele de apartament sunt preferate de oricine, deoarece pot rezista mult timp. Comanda flori online de la Floris pentru a insenina ziua cuiva drag tie! Plantele de apartament adauga o pata de culoare si eleganta oricarei camere. Unele dintre ele infloresc tot anul si aproape toate sunt usor de ingrijit. Nu a fost niciodata mai simplu si usor sa oferi plante de apartament celor dragi tie, chiar si daca se afla la o distanta de cativa kilometri. Comanda o orhidee eleganta, o gardenie parfumata, violete de parma delicate sau un bambus care sa aduca noroc. Indiferent de marimea plantei de apartament, aceasta va fi livrata cu grija la destinatie. Cu Floris, poti face o surpriza placuta oricui, oferind flori online superbe si parfumate!
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