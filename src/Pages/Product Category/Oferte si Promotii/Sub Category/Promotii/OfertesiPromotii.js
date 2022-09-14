import React, { useEffect } from "react";
import STYLE from "./OfertesiPromotii.module.css"
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
import items from "../../../../../data/Items.json"

export function OfertsiPromotii() {

    useEffect(() => {
        const productMaximumSize = document.querySelectorAll(`.${STYLE.productMaximumSize}>*`)
        const productMediumSize = document.querySelectorAll(`.${STYLE.productMediumSize}>*`)
        const productMin = document.querySelectorAll(`.${STYLE.productMin}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const showMoreItems = document.querySelectorAll(`.${STYLE.showMoreItems}`)
        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMaximumSize.length - 1; i++) {
                if (i <= index) {
                    productMaximumSize[i].style.display = "flex"
                    productMediumSize[i].style.display = "flex"
                    productMin[i].style.display = "flex"
                }
            }
            if (index >= productMaximumSize.length - 1) {
                index = productMaximumSize.length - 1
            }
            showMoreItems[0].innerHTML = `Afiseaza ${index + 1} din ${productMaximumSize.length}`
            index = index + 12
        }
        showMore()
        button[0].addEventListener("click", showMore)

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>OFERTE &nbsp;SI &nbsp;PROMOTII</div>
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
            <div className={STYLE.productMaximumSize}>
                {items.filter((val) => {
                    if (val.discount) {
                        return val
                    }
                    return null
                }).map(item => (
                    <ContentCardMax key={item.productCode} {...item} />
                ))}
            </div>
            <div className={STYLE.productMediumSize}>
                {items.filter((val) => {
                    if (val.discount) {
                        return val
                    }
                    return null
                }).map(item => (
                    <ContentCardMid key={item.productCode} {...item} />
                ))}
            </div>
            <div className={STYLE.productMin}>
                {items.filter((val) => {
                    if (val.discount) {
                        return val
                    }
                    return null
                }).map(item => (
                    <ContentCardMin key={item.productCode} {...item} />
                ))}
            </div>
            <div className={STYLE.showMore}>
                <div className={STYLE.showMoreItems}></div>
                <div><button className={STYLE.button}>ARATA MAI MULT</button></div>
            </div>
            <div className={STYLE.information}>
                <div className={STYLE.informationTitle}>Comandă Online Oferte si Promoții cu Livrare la Domiciliu</div>
                {/* <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Atunci cand primesti cadou un buchet de orhidee sau o planta este ca si cum ai face o excursie in zona tropicala. Una dintre cele mai elegante flori, orhideea este un cadou care transforma orice incapere intr-una sic. Superbe, clasice si exotice, trei cuvinte frumoase care descriu varietatea de neegalat de plante si flori online disponibile la Floria. Comanda orhidee online de la Floria si vei beneficia de un serviciu de livrare flori excelent, oriunde in Romania. Alege din colectia noastra de orhidee albe sau roz un buchet deosebit, pe care sa il oferi unei persoane dragi tie.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Ne mandrim sa fim cea mai profesionista florarie online atat in Bucuresti cat si in toata tara. Se spune ca orhideele simbolizeaza dragoste, frumusete si rafinament. Aceste caracteristici se potrivesc perfect cu tulpina lunga si florile delicate ale acestei plante. Daca iti doresti sa faci un cadou elegant si care sa reziste mult, orhideele sunt o alegere potrivita si la moda pentru orice iubitoare de flori. De ce sa nu ii trimiti persoanei iubite un buchet de orhidee rafinat, chiar astazi, prin Floria? Sa comanzi flori online este simplu! Partea cea mai grea va fi alegerea buchetului!
                    </div>
                </div> */}
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