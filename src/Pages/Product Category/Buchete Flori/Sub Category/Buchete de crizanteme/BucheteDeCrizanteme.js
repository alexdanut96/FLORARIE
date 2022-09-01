import React, { useEffect } from "react";
import STYLE from "./BucheteDeCrizanteme.module.css"
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
import items from "../../../../../data/Buchete flori/Buchete de crizanteme/BucheteDeCrizanteme.json"

export function BucheteDeCrizanteme() {

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
                <div className={STYLE.title}>BUCHETE &nbsp;DE &nbsp;CRIZANTEME</div>
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
                <div className={STYLE.informationTitle}>Comanda Online Buchete de Crizanteme Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Aceste buchete de crizanteme dezvaluie o explozie de culoare, ceea ce le face perfecte pentru a insenina ziua cuiva. Comanda de la florarie online Floris buchete cu livrare in maxim 2 ore! Comanda simplu si rapid crizanteme online de la Floris. Poti alege dintr-o varietate mare de culori si aranjamente, potrivite pentru diferite ocazii. Indiferent de alegerea pe care o vei face, noi iti garantam ca buchetul va ajunge in stare perfecta la usa destinatarei (sau a ta), gata sa infloreasca si sa transmita bucurie celei care il va primi. Pe site-ul nostru vei gasi buchete de crizanteme albe, galbene, roz sau multicolore. Crizantemele sunt printre florile care rezista cel mai mult! Simbol al bogatiei, fidelitatii si adevarului, crizantemele cresc in gradinile din China de mai bine de 2000 de ani.                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Un buchet de crizanteme cadou va transmite, cu siguranta, bunele tale intentii sotiei, prietenei sau unor parteneri de afaceri. Indiferent ca ai nevoie de un buchet pentru o zi de nastere, o aniversare sau pentru a transmite "Bun venit!" pe lume unui nou-nascut, poti alege unul din colectia superba pregatita de expertii nostri florari. Ai nevoie urgent de un buchet de flori? Nicio problema, suna-ne si noi ti-l vom livra in maxim 2 ore, oriunde doresti! Suntem singura florarie online din Romania care livreaza flori in maxim 2 ore si care iti trimite o poza cu buchetul realizat pentru tine, inainte sa fie livrat. Totodata, putem livra buchete de flori si international in Europa, SUA, Asia sau Africa.
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