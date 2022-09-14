import React, { useEffect } from "react";
import STYLE from "./FloriDeIarna.module.css"
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
import items from "../../../../../data/Buchete flori/Flori de Iarna/FloriDeIarna.json"

export function FloriDeIarna() {

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
                <div className={STYLE.title}>FLORI &nbsp;DE &nbsp;IARNA</div>
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
                <div className={STYLE.informationTitle}>Comandă Online Flori Iarnă cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Chiar daca uneori traim cu impresia de iarna are doar flori de gheata, sunt suficiente flori frumoase care sunt in plin sezon iarna! Asa ca, te asteptam la noi sa iti comanzi cele mai frumoase flori de iarna. Fie ca iti plac florile in nuante de alb, precum amarylisul, crinii imperiali sau trandafirii, cele in nuante puternice, precum ilexul sau hypericum sau, de ce nu, cele neutre, ca brunia, noi avem ceva pentru tine! Daca vrei sa comanzi online buchete de iarna, noi avem cu siguranta buchetul perfect pentru tine! Plus ca, ajungem in maxim doua ore la tine si livram gratuit in 130 de orase din tara, asa ca nu mai trebuie sa te gandesti la preturi! Iar daca esti genul care pune pret pe calitate, te asiguram ca florile noastre de iarna sunt mereu proaspete, iar buchetele sunt facute de echpa noastra de decoratori profesionisti. Poti comanda online buchete de flori de iarna pentru cei dragi.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Plaseaza comanda in site, iar noi ne vom ocupa sa o livram direct la ei acasa. Poti cumpara chiar si aranjamente pentru masa de Craciun si pentru perioada sarbatorilor. Important e ca tu sa iti alegi florile preferate! Noi ne ocupam de restul. Sau, alege-ti combinatia de culori preferata. Daca iti place ocmbinatia clasica de Craciun, intre alb si rosu, iti putem face un buchet cu trandafiri albi, minirosa, ilex si hypericum rosu. Combinatii sunt o multime! Nu uita ca majoritatea florilor de iarna „imprumuta” din specificatiile sezonului. Multe dintre ele vor prefer temperaturi mai joase pentru a fi pastrate in conditii optime, asa ca ai grija sa nu le plasezi langa surse de caldura. Schimba-le in permanenta apa, o data pe zi, si taie-le coditele pentru a Evita formarea de bacterii. Florile trebuie curatate de frunze inainte de a fi puse in vaza
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