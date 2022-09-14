import React, { useEffect } from "react";
import STYLE from "./FloriOptMartie.module.css"
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
import items from "../../../../../data/Ocazii si Evenimente/Flori 8 Martie/FloriOptMartie.json"

export function FloriOptMartie() {

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
                <div className={STYLE.title}>FLORI &nbsp;8 &nbsp;MARTIE</div>
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
                <div className={STYLE.informationTitle}>Comandă Online Flori 8 Martie cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        <div>
                            Ziua Mamei nu poate trece neobservata. Daca esti in cautarea buchetului de flori perfect pentru Ziua Mamei, poti alege cu incredere recomandarile specialistilor Floris.
                        </div>
                        <div>
                            Alege buchete de flori pentru 8 Martie şi dăruieşte-le mamei, iubitei, soţiei sau unei prietene.
                        </div>
                        <div>
                            Floris - florarie online iți pune la dispoziție cele mai frumoase flori și cadouri în ziua de 8 martie. Alege-l pe cel potrivit în funcție de personalitatea destinatarei.
                        </div>
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        <div>
                            Alege flori pentru mama si arata-i ca e cea mai importanta femeie din viata ta. Beneficiezi de Livrare Gratuita pentru buchete de flori de 8 martie .
                        </div>
                        <div>
                            Comanda online flori pentru mama, cadouri gandite pentru cea mai minunata fiinta. Data de 8 martie este un moment perfect pentru a face o surpriza mamei tale, mai ales alaturi de specialistii Floris.
                        </div>
                        <div>
                            Comanda cu incredere flori pentru mama, flori 8 martie pentru mama, ai livrare gratuita oriunde in Romania chiar de 8 martie
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