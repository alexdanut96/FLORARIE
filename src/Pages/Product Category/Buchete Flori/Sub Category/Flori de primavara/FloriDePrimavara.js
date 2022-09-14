import React, { useEffect } from "react";
import STYLE from "./FloriDePrimavara.module.css"
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
import items from "../../../../../data/Buchete flori/Flori de Primavara/FloriDePrimavara.json"

export function FloriDePrimavara() {

    useEffect(() => {
        const productMaximum = document.querySelectorAll(`.${STYLE.productMaximum}>*`)
        const productMedium = document.querySelectorAll(`.${STYLE.productMedium}>*`)
        const productMinimum = document.querySelectorAll(`.${STYLE.productMinimum}>*`)
        const showButton = document.querySelectorAll(`.${STYLE.showButton}`)
        const showMoreTxt = document.querySelectorAll(`.${STYLE.showMoreTxt}`)
        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMaximum.length - 1; i++) {
                if (i <= index) {
                    productMaximum[i].style.display = "flex"
                    productMedium[i].style.display = "flex"
                    productMinimum[i].style.display = "flex"
                }
            }
            if (index >= productMaximum.length - 1) {
                index = productMaximum.length - 1
            }
            showMoreTxt[0].innerHTML = `Afiseaza ${index + 1} din ${productMaximum.length}`
            index = index + 12
        }
        showMore()
        showButton[0].addEventListener("click", showMore)

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>FLORI &nbsp;DE &nbsp;PRIMAVARA</div>
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
            <div className={STYLE.productMaximum}>
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
            <div className={STYLE.productMedium}>
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
            <div className={STYLE.productMinimum}>
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
                <div className={STYLE.showMoreTxt}></div>
                <div><button className={STYLE.showButton}>ARATA MAI MULT</button></div>
            </div>
            <div className={STYLE.information}>
                <div className={STYLE.informationTitle}>Comanda online Flori Primavara cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        <div>
                            DOAR pana la finalul lunii mai primesti 15% reducere la buchetele si aranjamentele din aceasta colectie. Adauga codul PRIMAVARA22 in ultimul pas al comenzii!
                        </div>
                        <div>
                            Cumpara online cele mai frumoase flori de primavara. Primavara ne rasfata cu o multitudine de culori si arome. Cele mai colorate flori, cele mai parfumate, dar si cele mai delicate sunt florile de primavara. La Floris.ro gasesti buchete de flori de primavara asa cum iti doresti! Avand preturi variate, poti alege buchetul tau favorit din colectia noastra. Se stie ca, atunci cand este vorba de buchete de flori de primavara, inaginatia nu are limite! Gasesti cele mai interesante si frumoase combinatii, care sa iti incante privirea si sa iti infrumuseteze casa! Acum poti cumpara online flori de primavara, la preturi bune, pe care sa le ai acasa, la birou sau oriunde altundeva iti doresti! Stim ca iti place aroma zambilelor sau a freziilor, precum si culorile lalelelor. De ce sa nu le punem impreuna intr-un buchet frumos de flori de primavara? Nuante de galben, rosu, violet, roz sau portocaliu pot lumina o intreaga incapere.
                        </div>
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Trebuie doar sa cumperi online si ai acasa cele mai frumoase flori de primavara. Poti alege chiar un cos sau un aranjament dupa bunul tau plac. Gasesti atat de multe tipul de flori de primavara online! Alege unul din buchete de flori din colectia de primavara sau spune-ne cum ar arata buchetul tau favorit si noi il facem pentru tine! Lalele galbene, rosii, albe sau mov? Sau poate zambile si frezii parfumate? Ce ai spune de ceva mai deosebit? Cand ti-ai cumparat ultima data anemone? Bucura-te de primavara cu un buchet de flori alese! Cumpara flori de primavara online, in cele mai diverse combinatii de culori si flori! Uita-te peste colectia noastra si alege-ti buchete favorite din flori de primavara! Poti cumpara la orice ora, vom fi la tine! In timpul zilei, livrarile se fac intr-un maxim de doua ore, in 140 de orase din tara. In plus, serviciul de livrare este gratuit in 130 de orase!
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