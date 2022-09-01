import React, { useEffect } from "react";
import STYLE from "./BucheteDeAlstromeria.module.css"
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
import items from "../../../../../data/Buchete flori/Buchete de alstroemeria/BucheteDeAlstromeria.json"

export function BucheteDeAlstromeria() {

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
                <div className={STYLE.title}>BUCHETE &nbsp;DE &nbsp;ALSTROMERIA</div>
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
                <div className={STYLE.informationTitle}>Comanda Online Buchete de Alstroemeria Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Un buchet de alstroemeria este un mod minunat de a-ti arata recunostinta si afectiunea. Comanda astazi de la cea mai buna florarie online din Romania, un buchet de alstroemeria si beneficiezi de transport gratuit in 140 de orase din Romania. Stiai ca alstroemeria sunt cunoscute si sub denumirea de "crini peruvieni" si sunt printre florile care rezista cel mai mult? Indiferent daca alegi un buchet realizat exclusiv din alstroemeria sau alegi unul care sa includa aceste flori, este cadoul potrivit pentru orice ocazie. Aceste flori se gasesc in nuante uimitoare de roz, trandafiriu, galben, mov si multe alte culori. Petalele sunt, de obicei, brazdate de culori contrastante, desi nu toate florile de alstroemeria au petale cu dungi. Un buchet de alstroemeria roz poate semnifica feminitate, tinerete, dragoste si prosperitate.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Pentru botez si nunti se aleg, de obicei, aranjamente sau buchete de alstroemeria in nuante violacee, roz sau alb-crem. Aceste flori arata foarte bine in arajamente si rezista foarte mult. Florile de alstroemeria nu au parfum, dar au o durata de viata de aproximativ 2 saptamani. Ofera un buchet superb de alstroemeria pentru a-ti exprima devotamentul si afectiunea. Aceste flori exotice vor face o impresie pozitiva si vor colora ziua si zambetul celei care le va primi. Fiecare buchet comandat de pe site-ul Floris, va fi livrat cu atentie de curierii nostri proprii din Bucuresti sau de colaboratorii nostri locali. Livrare flori in maxim 2 ore, in peste 140 de orase din Romania sau international.
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