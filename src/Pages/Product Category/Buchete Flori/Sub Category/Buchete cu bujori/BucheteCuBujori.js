import React, { useEffect } from "react";
import STYLE from "./BucheteCuBujori.module.css"
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
import items from "../../../../../data/Buchete flori/Buchete cu Bujori/BucheteCuBujori.json"

export function BucheteCuBujori() {

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
                <div className={STYLE.title}>BUCHETE &nbsp;CU &nbsp;BUJORI</div>
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
                <div className={STYLE.informationTitle}>Comanda Online Buchete de Bujori Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        <div>
                            Cauti cele mai rafinate flori ale primaverii? Noi iti recomandam bujorii! Fie ca sunt albi, roz sau burgundy, bujorii sunt printer cele mai iubite si mai apreciate flori. Poti darui un buchet simplu, doar din bujori sau poti alege un buchet care integreaza perfect bujorii alaturi de alte flori.
                        </div>
                        <div>
                            Sezonul bujorilor incepe in mai si ii gasesti pana la finalul verii.
                        </div>
                        <div>
                            Sunt potriviti mai ales pentru ocazii romantice, cu insemnatate sau pentru a fi daruiti persoanelor rafinate, delicate
                        </div>
                        <div>
                            Nu numai ca au un aspect deosebit, insa bujorii au, de regula, si un parfum minunat. Alege un astfel de buchet sau de aranjament daca vrei sa impresionezi cu adevarat.
                        </div>
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        <div>
                            Bujorul simbolizeaza bunastarea, prosperitatea si, oferit, se spune ca aduce noroc, castiguri financiare si reflecta compasiunea.
                        </div>
                        <div>
                            Insa simbolistica lor poate fi diferita si in functie de culoare. Astfel, bujorii albi ar simboliza sfiala sau rusinea, tocmai de aceea sunt deseori oferiti atunci cand vrei sa ceri iertare sau sa spui ca iti pare rau.
                        </div>
                        <div>
                            Bujorii roz oferiti in dar simbolizeaza bunastarea, prosperitatea si norocul. Un buchet de bujori roz ar fi, probabil, cel mai frumos “talisman norocos”.
                        </div>
                        <div>
                            Chiar daca mai putin populari, bujorii rosii reprezinta dragostea, pasiunea si respectul, ceea ce ii face perfecti pentru a fi oferiti partenerei de viata, ca alternativa la buchetele clasice de trandafiri.
                        </div>
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