import React, { useEffect } from "react";
import STYLE from "./Dulciuri.module.css"
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
import items from "../../../../../data/Cadouri/Dulciuri/Dulciuri.json"

export function Dulciuri() {

    useEffect(() => {
        const productMaxSize = document.querySelectorAll(`.${STYLE.productMaxSize}>*`)
        const productMediumSize = document.querySelectorAll(`.${STYLE.productMediumSize}>*`)
        const productMin = document.querySelectorAll(`.${STYLE.productMin}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const moreItems = document.querySelectorAll(`.${STYLE.moreItems}`)
        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMaxSize.length - 1; i++) {
                if (i <= index) {
                    productMaxSize[i].style.display = "flex"
                    productMediumSize[i].style.display = "flex"
                    productMin[i].style.display = "flex"
                }
            }
            if (index >= productMaxSize.length - 1) {
                index = productMaxSize.length - 1
            }
            moreItems[0].innerHTML = `Afiseaza ${index + 1} din ${productMaxSize.length}`
            index = index + 12
        }
        showMore()
        button[0].addEventListener("click", showMore)

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>DULCIURI</div>
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
            <div className={STYLE.productMediumSize}>
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
                <div className={STYLE.moreItems}></div>
                <div><button className={STYLE.button}>ARATA MAI MULT</button></div>
            </div>
            <div className={STYLE.information}>
                <div className={STYLE.informationTitle}>Comanda Online Dulciuri Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Indulceste viata persoanelor dragi cu un cadou deosebit de la Floris, florarie online cu experienta vasta in acest domeniu. Suntem de peste 5 ani lideri de piata, cu servicii recunoscute si apreciate de toti clientii nostri. Apeleaza la noi pentru a infrumuseta viata unui prieten, a unei rude sau a unui partener de afaceri cu un buchet de flori proaspete, insotit de o surpriza dulce. Poti alege varianta unei cutii de bomboane de ciocolata I Love Milka, Raffaello sau Merci sau poti plusa cu un tort Mousse cu capsune sau cu un tort de ciocolata Trois Mousse, decorat cu fructe gustoase si aspectuoase. Asiguram transportul gratuit pentru orice comanda, prin curier propriu, pentru a ne asigura ca produsele noastre sunt livrate in cele mai bune conditii, astfel incat destinatarul sa aiba parte de o experienta cu adevarat placuta. Fie ca e vorba de aniversarea iubitei tale sau de un eveniment care merita sarbatorit cu fast, apeleaza la o florarie online care stie sa faca o bucurie veritabila.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Prin serviciul livrare flori de la Floris, buchetele de flori comandate, dar dulciurile comandate, vor ajunge in numai 2 ore oriunde in Bucuresti si in cele mai importante orase din Romania. In fiecare zi, livram flori online proaspete, care infrumuseteaza orice spatiu, fie el de acasa sau de la birou. Comanda produsele noastre atunci cand ai nevoie de un partener serios si profesionist, care sa insenineze ziua unei persoane dragi. Datorita buchetelor de flori mereu proaspete, a livrarii rapide, dar si a designului deosebit, Floris a devenit Furnizor al Casei Regale a Romaniei. Titlul a fost acordat de către Alteța Sa Principesa Margareta, în cadrul unei ceremonii ținute la Palatul Elisabeta, ca semn al recunoașterii calității produselor și serviciilor oferite de Floris.
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