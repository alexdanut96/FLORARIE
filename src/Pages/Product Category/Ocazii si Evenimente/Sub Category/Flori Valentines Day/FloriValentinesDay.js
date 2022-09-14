import React, { useEffect } from "react";
import STYLE from "./FloriValentinesDay.module.css"
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
import items from "../../../../../data/Ocazii si Evenimente/Flori Valentines Day/ValentinesDay.json"

export function FloriValentinesDay() {

    useEffect(() => {
        const productMaxSize = document.querySelectorAll(`.${STYLE.productMaxSize}>*`)
        const productMidSize = document.querySelectorAll(`.${STYLE.productMidSize}>*`)
        const productMin = document.querySelectorAll(`.${STYLE.productMin}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const showMoreText = document.querySelectorAll(`.${STYLE.showMoreText}`)
        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMaxSize.length - 1; i++) {
                if (i <= index) {
                    productMaxSize[i].style.display = "flex"
                    productMidSize[i].style.display = "flex"
                    productMin[i].style.display = "flex"
                }
            }
            if (index >= productMaxSize.length - 1) {
                index = productMaxSize.length - 1
            }
            showMoreText[0].innerHTML = `Afiseaza ${index + 1} din ${productMaxSize.length}`
            index = index + 12
        }
        showMore()
        button[0].addEventListener("click", showMore)

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>FLORI &nbsp;VALENTINES &nbsp;DAY</div>
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
            <div className={STYLE.productMaxSize}>
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
                <div className={STYLE.showMoreText}></div>
                <div><button className={STYLE.button}>ARATA MAI MULT</button></div>
            </div>
            <div className={STYLE.information}>
                <div className={STYLE.informationTitle}>Comandă Online Flori Valentine's Day cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        <div>
                            Niciun cadou de Valentine’s Day nu este complet fara un buchet de flori. Florile de Ziua Indragostitilor sunt un simbol al dragostei, deci nu trebuie sa lipseasca, indiferent care este planul ulterior. Daca vrei sa comanzi flori de Sf. Valentin, cea mai la indemana solutie este Floris! Floris iti ofera de Sfantul Valentin buchete de flori deosebite la un pret imbatabil.
                        </div>
                        <div>
                            Sărbătorește ziua dragostei cu cele mai frumoase flori care au fost aranjate de florăria noastră intr-un buchet deosebit. Flori de dragoste livrate direct la domiciliul, la inima ei! Sf. Valentin este o zi cu totul specială!
                        </div>
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        <div>
                            Asa cum te-am obisnuit, livrarea pentru flori de Valentine's Day este gratuita atat in Bucuresti, Timisoara, Iasi, Oradea, Sibiu, Constanta cat si in celelalte orase pe care le acoperim, in doar 2-4 ore. Probabil ca i-ai oferit de mai multe ori flori iubitei tale. Dar niciodata un buchet de flori atat de frumos precum cel pe care i-l vei oferi de Ziua Indragostitilor, acum, pe 14 februarie.
                        </div>
                        <div>
                            Comanda Flori de Valentine’s Day de la Floris. Livrare gratuita.
                        </div>
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