import React, { useEffect } from "react";
import STYLE from "./FloriDeVara.module.css"
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
import items from "../../../../../data/Buchete flori/Flori de Vara/FloriDeVara.json"

export function FloriDeVara() {

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
                <div className={STYLE.title}>FLORI &nbsp;DE &nbsp;VARA</div>
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
                <div className={STYLE.informationTitle}>Comandă Online Flori Vară cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        La Floris.ro gasesti cele mai frumoase flori de vara! Alege din colectia noastra de buchete si aranjamente! Ai nenumarate tipuri de flori si culori pentru a-ti alege buchetul perfect de flori de vara, la pretul pe care ti-l doresti! Cu preturi care pornesc de la 140 de lei, ai buchete de flori de vara felurite: buchete de Hortensia, cale, orhidee, irisi, crini, dar si nelipsitii trandafiri, gerbera sau garoafe. De obicei, atunci cand vine vorba de buchete de flori de vara, vei gasi o cromatica bogata, fresh. Sunt buchete perfecte ca sa iti insenineze si colore ziua! Cumpara online flori de vara! E mai simplu asa! Suntem la tine in maxim doua ore in majoritatea oraselor din tara! Iar livrarea este gratuita in majoritatea cazurilor, asa ca nu trebuie sa te gandesti la pret! Fa o surpriza frumoasa cuiva si comanda un buchet cu cele mai frumoase flori de vara! Iti vei face si tie o bucurie!                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Poti alege nuante calde de roz sau galben, sau nuante puternice de rosu si portocaliu. Lasa-te pe mana specialistilor de la Flori si buchetul tau va fi cu siguranta unul deosebit! Pentru a gasi cele mai frumoase flori de vara trebuie doar sa cauti online! Floris.ro are o selectie bogata de flori si culori, dar si servicii pe masura! Ne gasesti in toata tara si ajungem la tine, sau la cei dragi, intr-un maxim de doua ore! Nu mai astepta sa faci o surpriza cuiva drag! Poti incepe acum! Noi iti recomandam mai ales buchetele de Hortensia, care sunt cu adevarat deosebite! In plus, de aceasta floare ne putem bucura doar vara, cand este in plin sezon, asa ca ai un motiv in plus sa oferi flori! Asteptam comada ta online! Nu mai sta pe ganduri! Fa un gest frumos pentru cineva astazi!                    </div>
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