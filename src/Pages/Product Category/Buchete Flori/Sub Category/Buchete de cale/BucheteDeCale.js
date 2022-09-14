import React, { useEffect } from "react";
import STYLE from "./BucheteDeCale.module.css"
import { SearchForm } from "../../../../../components/HomePage/SearchForm/SearchForm";
import { IoIosArrowDown } from "react-icons/io"
import { TbAdjustmentsHorizontal } from "react-icons/tb"
import { ContentCardMax } from "../../../../../components/Content/ContentCardMax"
import { ContentCardMid } from "../../../../../components/Content/ContentCardMid"
import { ContentCardMin } from "../../../../../components/Content/ContentCardMin"
import { FreeDelivery } from "../../../../../components/HomePage/FreeDelivery/FreeDelivery"
import { FacilitiesCarousel } from "../../../../../components/HomePage/Facilities/FacilitiesCarousel";
import { FacilitiesItemsTwo } from "../../../../../components/HomePage/Facilities/FacilitiesItemsTwo";
import { FacilitiesMax } from "../../../../../components/HomePage/FacilitiesTab/FacilitiesMax";

import allItems from "../../../../../data/Items.json"
import items from "../../../../../data/Buchete flori/Buchete de cale/BucheteDeCale.json"

export function BucheteDeCale() {

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
                <div className={STYLE.title}>BUCHETE &nbsp;DE &nbsp;CALE</div>
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
                <div className={STYLE.informationTitle}>Comanda Online Buchete de Cale Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Livram gratuit buchete de cale in 140 de orase din Romania! Alege un buchet de cale superb din colectia noastra de flori online, ce include cale roz, mov, albe, galbene si portocalii. Alege buchete superbe de la "Cea mai buna florarie online din Romania!" Calele sunt flori superbe, fara nicio indoiala! Au un mod unic de a exprima iubire, prietenie si afectiune, ceea ce le face potrivite pentru a o impresiona de Ziua Indragostitilor sau pentru a adauga o nota eleganta unei nunti. Exista femei care prefera sa primeasca un buchet de cale, mai degraba decat un buchet de trandafiri, deoarece considera ca acestea sunt un cadou unic. Calele sunt, de obicei, albe, insa se gasesc intr-o variatate mare de culori, includiv galben, roz, verde, violet, portocaliu sau negru.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        In timp ce albul semnifica puritate si inocenta, roz este asociat cu admiratie si apreciere. Movul, de obicei, este asociat cu regalitatea, dar denota si pasiune. Galbenul poarta o multitudine de semnificatii, dar este cel mai adesea asociat cu recunostinta. Calele negre care au un aspect izbitor si dramatic, poarta o anumita eleganta si mister. Desi sunt mai mult un mov inchis, decat negru, sunt foarte apreciate de doamne si domnisoare pentru aspectul lor sic. Calele sunt un cadou deosebit si unic pentru ocazii speciale. Indiferent de ocazie, calele vor incanta si vor aduce zambetul pe buzele destinatarei. Trimite un buchet de cale unei persoane dragi tie, chiar astazi, prin florarie online Floris.
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