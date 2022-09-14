import React, { useEffect } from "react";
import STYLE from "./CosuriVazeSiAccesorii.module.css"
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
import items from "../../../../../data/Cadouri/Cosuri Vaze si Accesorii/CadouriVazeSiAccesorii.json"

export function CosuriVazeSiAccesorii() {

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
                <div className={STYLE.title}>COSURI, &nbsp;VAZE &nbsp;SI &nbsp;ACCESORII</div>
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
                <div className={STYLE.showMoreItems}></div>
                <div><button className={STYLE.button}>ARATA MAI MULT</button></div>
            </div>
            <div className={STYLE.information}>
                <div className={STYLE.informationTitle}>Comanda Online Cosuri, Vaze si Accesorii Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Vrei sa impresionezi pe cineva drag cu un buchet de flori superbe si proaspete care degaja un miros inconfundabil? Nimic mai simplu! Comanda flori online de la Floris, cea mai mare florarie online din Romania, care asigura servicii de calitate astfel incat clientii sa fie incantati de intreaga experienta. Iti recomandam ca atunci cand alegi sa faci o livrare flori acestea sa fie insotite de vaze, cosuri si accesorii, pentru un plus de atentie si eleganta. Nimic nu se compara cu diverse aranjamente florale create si stilizate de maestrii florari de la Floris, acompaniate de o vaza transparenta, de un cos de rachita sau de un invelis din materiale ecologice si elegante, cum ar fi hartia, plasa sau materialul textil, nu de celofan, pentru decorarea cat mai estetica a buchetului de flori. Trimite persoanelor speciale din viata ta buchete de flori proaspete, intr-un ambalaj de calitate, disponibil in mai multe culori, in functie de nuanta care se potriveste cel mai bine aranjamentelor comandate.                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Acestea vor fi insotite de o felicitare personalizata de tine, cu un mesaj special, prin care sa-ti exprimi sentimentele de dragoste si prietenie. Floris este o florarie online profesionista care asigura gratuit transportul oricarui buchet si se asigura ca destinatarul are parte de o surpriza veritabila. Trimite flori online premium, mereu proaspete, cu livrare rapida, prin curier propriu, in maximum doua ore in Bucuresti si cele mai importante orase din tara si in 24 de ore oriunde in strainatate. Produsele Floris sunt importate de la cei mai mari producatori din lume si sunt transportate in cele mai bune conditii, in camere frigorifice, cu temperaturi cuprinse intre 4 si 6 grade Celsius. Accesorizeaza aceste flori online cu vaze si cosuri de rachita cu burete OASIS, de diferite dimensiuni pentru un plus de efect si pentru o pastrare mai indelungata a prospetimii florilor. Trimite un gand de dragoste acelor persoane deosebite din viata ta prin serviciul de livrare flori online de la Floris si vei avea parte de recunostinta si bucuria lor.                    </div>
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