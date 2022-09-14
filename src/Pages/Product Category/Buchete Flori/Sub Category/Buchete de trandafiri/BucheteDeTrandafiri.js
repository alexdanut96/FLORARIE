import React, { useEffect } from "react";
import STYLE from "./BucheteDeTrandafiri.module.css"
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
import items from "../../../../../data/Buchete flori/Buchete de trandafiri/BucheteDeTrandafiri.json"

export function BucheteDeTrandafiri() {

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
                <div className={STYLE.title}>BUCHETE &nbsp;DE &nbsp;TRANDAFIRI</div>
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
                <div className={STYLE.informationTitle}>Comanda Online Buchete de Trandafiri Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Livram buchete de flori cu trandafiri superbe oriunde in Romania!
                        Uneori singura floare care poate simboliza cu adevarat sentimentele tale sincere este trandafirul. Fie ca locuieste in acelasi oras cu tine sau chiar pe alt continent, cu un buchet de trandafiri vei transmite mereu ce nu poti spune in cuvinte. Alege buchetele de trandafiri pentru cadouri rafinate! Atunci cand ai un mesaj de transmis, un buchet de trandafiri te poate ajuta sa spui exact ceea ce simti. Trandafirii galbeni sunt un simbol clasic al prieteniei. Sunt potriviti pentru a fi daruiti unei prietene sau unei colege, pentru a-i arata cat de mult pretuiesti prietenia ei. Daca vei combina trandafiri galbeni cu flori portocalii sau roz, poti realiza un buchet care sa spuna "Ma gandesc la tine!" sau "Multumesc pentru ca imi esti alaturi!"                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Imagineaza-ti cat de surprinsa va fi atunci cand va primi de la tine un buchet de trandafiri colorati si veseli. Desigur, trandafirii rosii sunt perfecti pentru a-ti arata iubirea in orice zi a anului. Aniversare, zi de nastere, Ziua Indragostitilor sunt doar cateva ocazii in care un buchet de trandafiri rosii este un cadou potrivit. Trandafirii pot fi, de asemenea, combinati si cu alte flori minunate, cum ar fi crinii, garoafele sau irisii, care pot adauga rafinament oricarui aranjament. Fie ca esti in cautarea unui buchet clasic cu trandafiri rosii sau a unui aranjament mai modern, noi te putem ajuta sa faci alegerea potrivita, care sa aduca zambetul pe buze celei care il va primi! La noi gasesti buchete de trandafiri exceptionale!                    </div>
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