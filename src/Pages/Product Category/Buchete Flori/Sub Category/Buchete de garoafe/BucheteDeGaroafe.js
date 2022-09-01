import React, { useEffect } from "react";
import STYLE from "./BucheteDeGaroafe.module.css"
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
import items from "../../../../../data/Buchete flori/Buchete de garoafe/BucheteDeGaroafe.json"

export function BucheteDeGaroafe() {

    useEffect(() => {
        const productMax = document.querySelectorAll(`.${STYLE.productMax}>*`)
        const productMid = document.querySelectorAll(`.${STYLE.productMid}>*`)
        const productMin = document.querySelectorAll(`.${STYLE.productMin}>*`)
        const showButton = document.querySelectorAll(`.${STYLE.showButton}`)
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
        showButton[0].addEventListener("click", showMore)

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>BUCHETE &nbsp;DE &nbsp;GAROAFE</div>
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
                <div><button className={STYLE.showButton}>ARATA MAI MULT</button></div>
            </div>
            <div className={STYLE.information}>
                <div className={STYLE.informationTitle}>Comanda Online Buchete de Garoafe Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Buchete de garoafe - Alege buchetul perfect, pentru a sarbatorii o ocazie speciala! Garoafele sunt cele mai potrivite flori pentru Ziua Mamei, aniversari sau zile de nastere. Comanda flori online este mai simplu! Garoafele sunt flori cultivate de mii de ani, iar fiecare culoare are propria semnificatie: roz este pentru dragoste de mama, rosu pentru pasiune si admiratie si alb pentru noroc. Comanda un buchet de garoafe online de pe site-ul Floris si vei beneficia de livrare in 2 ore, atat in Bucuresti cat si in principalele orase din tara. Stiai ca garoafele sunt florile oficiale de Ziua Mamei, inca din 1914? Iata trei motive pentru care sa daruiesti un buchet de garoafe unei persoane dragi tie.                    </div>
                    <div className={STYLE.informationContentTwo}>
                        In primul rand, pentru ca se gasesc intr-o varietate mare de culori, de la roz, galben, rosu, alb sau violet radiant. In al doilea rand, pentru ca multe garoafe au un parfum deosebit de cuisoare. Si nu in ultimul rand, pentru ca garoafele sunt printre florile care rezista cel mai mult, astfel destinatara se va bucura mult timp de cadou. Colorate, parfumate si de lunga durata, cum sa nu iubesti aceste flori? Floris iti ofera o colectie variata de buchete de garoafe potrivite pentru orice ocazie. Comanda flori online de la Floris! Livrare in 2 ore oriunde in Romania, transport gratuit si felicitare cadou, la orice buchet de flori comandat! Floris este cea mai mare florarie online.
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