import React, { useEffect } from "react";
import STYLE from "./JucariiSiCadouri.module.css"
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
import items from "../../../../../data/Cadouri/Jucarii si Cadouri/JocuriSiCadouri.json"

export function JucariiSiCadouri() {

    useEffect(() => {
        const productMaximumSize = document.querySelectorAll(`.${STYLE.productMaximumSize}>*`)
        const productMidSize = document.querySelectorAll(`.${STYLE.productMidSize}>*`)
        const productMin = document.querySelectorAll(`.${STYLE.productMin}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const showMoreItems = document.querySelectorAll(`.${STYLE.showMoreItems}`)
        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMaximumSize.length - 1; i++) {
                if (i <= index) {
                    productMaximumSize[i].style.display = "flex"
                    productMidSize[i].style.display = "flex"
                    productMin[i].style.display = "flex"
                }
            }
            if (index >= productMaximumSize.length - 1) {
                index = productMaximumSize.length - 1
            }
            showMoreItems[0].innerHTML = `Afiseaza ${index + 1} din ${productMaximumSize.length}`
            index = index + 12
        }
        showMore()
        button[0].addEventListener("click", showMore)

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>JUCARII &nbsp;SI &nbsp;CADOURI</div>
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
                <div className={STYLE.showMoreItems}></div>
                <div><button className={STYLE.button}>ARATA MAI MULT</button></div>
            </div>
            <div className={STYLE.information}>
                <div className={STYLE.informationTitle}>Comanda Online Jucarii Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Sarbatoreste o zi de nastere sau venirea unui copil pe lume cu un ursulet de plus cadou. Alaturi de flori online sau bomboane poate fi un cadou potrivit pentru aceste ocazii. Iar daca ai nevoie de un cadou urgent, trebuie sa stii ca florarie online Floria iti livreaza orice comanda in maxim 2 ore, oriunde in Romania! Probabil ca nu exista motiv de bucurie mai mare decat venirea unui copil pe lume. Transmite gandurile tale bune si felicitarile tale parintilor printr-un buchet de flori alaturi de un ursulet. Pe site-ul nostru vei gasi o selectie vasta de cadouri pentru a celebra venirea pe lume a unui copil sau o zi de nastere. Fie ca vorbim de o fetita sau un baietel, cu siguranta vei gasi un cadou unic cu care sa o surprinzi pe proaspata mamica.                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Cosurile sunt, de asemenea, un cadou potrivit pentru un nou nascut. Alaturi de acestea poti opta si pentru ceva dulce care sa incante papilele gustative ale parintilor. In plus, daca vei achizitiona ursuletul WWF alaturi de un buchet de flori, vom dona intreaga suma de bani pentru protejarea habitatului ursilor bruni din Romania. Floria alaturi de WWF Romania au lansat campanie "Gentlemen cu natura", prin care Floria va dona 1% din valoarea buchetelor de flori catre WWF Romania, pentru protejarea naturii. Indiferent de ocazie, un buchet de flori alaturi de un ursulet poate fi un cadou potrivit. Alege flori online realizate cu atentie de designerii de la Floria, pentru a face ziua mai frumoasa cuiva drag tie!                    </div>
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