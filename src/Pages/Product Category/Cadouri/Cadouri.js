import React, { useEffect } from "react";
import STYLE from "./Cadouri.module.css"
import { Link } from "react-router-dom";
import { cadouri } from "./Cadouri_items";
import { SearchForm } from "../../../components/HomePage/SearchForm/SearchForm";
import { FacilitiesTab } from "../../../components/HomePage/FacilitiesTab/FacilitiesTab";
import { FacilitiesTabCarousel } from "../../../components/HomePage/FacilitiesTab/FacilitiesTabCarousel";
import { BestSellerCarousel } from "../../../components/HomePage/Best Seller Products/BestSellerCarousel/BestSellerCarousel";
import { BestSellerCarouselMid } from "../../../components/HomePage/Best Seller Products/BestSellerCarouselMid/BestSellerCarouselMid";
import { BestSellerCarouselMin } from "../../../components/HomePage/Best Seller Products/BestSellerCarouselMin/BestSellerCarouselMin";
import { ContentCardMax } from "../../../components/Content/ContentCardMax"
import { ContentCardMid } from "../../../components/Content/ContentCardMid"
import { ContentCardMin } from "../../../components/Content/ContentCardMin"
import { FreeDelivery } from "../../../components/HomePage/FreeDelivery/FreeDelivery";
import { IoIosArrowDown } from "react-icons/io"
import { TbAdjustmentsHorizontal } from "react-icons/tb"
import allItems from "../../../data/Items.json"
import items1 from "../../../data/Cadouri/Cadouri speciale/CadouriSpeciale.json"
import items2 from "../../../data//Cadouri/Cosuri Vaze si Accesorii/CadouriVazeSiAccesorii.json"
import items3 from "../../../data/Cadouri/Dulciuri/Dulciuri.json"
import items4 from "../../../data/Cadouri/Jucarii si Cadouri/JocuriSiCadouri.json"
import items5 from "../../../data/Cadouri/Parfumuri/Parfumuri.json"
import items6 from "../../../data/Cadouri/Sampanie/Sampanie.json"

export function Cadouri() {

    useEffect(() => {
        const categoryOne = document.querySelectorAll(`.${STYLE.categoryOne}`)
        const categoryTwo = document.querySelectorAll(`.${STYLE.categoryTwo}`)
        const categoryThree = document.querySelectorAll(`.${STYLE.categoryThree}`)
        const categoryFour = document.querySelectorAll(`.${STYLE.categoryFour}`)
        const categoryFive = document.querySelectorAll(`.${STYLE.categoryFive}`)
        const categorySix = document.querySelectorAll(`.${STYLE.categorySix}`)
        const imageBackgroundUne = document.querySelectorAll(`.${STYLE.imageBackgroundUne}`)
        const imageBackgroundTwo = document.querySelectorAll(`.${STYLE.imageBackgroundTwo}`)
        const imageBackgroundThree = document.querySelectorAll(`.${STYLE.imageBackgroundThree}`)
        const imageBackgroundQuatre = document.querySelectorAll(`.${STYLE.imageBackgroundQuatre}`)
        const imageBackgroundCinq = document.querySelectorAll(`.${STYLE.imageBackgroundCinq}`)
        const imageBackgroundSix = document.querySelectorAll(`.${STYLE.imageBackgroundSix}`)
        const productMax = document.querySelectorAll(`.${STYLE.productMax}>*`)
        const productMid = document.querySelectorAll(`.${STYLE.productMid}>*`)
        const productMin = document.querySelectorAll(`.${STYLE.productMin}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const showMoreText = document.querySelectorAll(`.${STYLE.showMoreText}`)
        const bestSellerProducts = document.querySelectorAll(`.${STYLE.bestSellerProducts}>*`)
        const bestSellerProductsMid = document.querySelectorAll(`.${STYLE.bestSellerProductsMid}>*`)
        const bestSellerProductsMin = document.querySelectorAll(`.${STYLE.bestSellerProductsMin}>*`)

        bestSellerProducts[0].innerHTML = "Cele mai cumparate flori"
        bestSellerProductsMid[0].innerHTML = "Cele mai cumparate flori"
        bestSellerProductsMin[0].innerHTML = "Cele mai cumparate flori"

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

        categoryOne[0].addEventListener("mouseenter", () => {
            imageBackgroundUne[0].style.transform = "scale(1.1)"
        })

        categoryOne[0].addEventListener("mouseleave", () => {
            imageBackgroundUne[0].style.transform = "scale(1)"
        })
        categoryTwo[0].addEventListener("mouseenter", () => {
            imageBackgroundTwo[0].style.transform = "scale(1.1)"
        })

        categoryTwo[0].addEventListener("mouseleave", () => {
            imageBackgroundTwo[0].style.transform = "scale(1)"
        })
        categoryThree[0].addEventListener("mouseenter", () => {
            imageBackgroundThree[0].style.transform = "scale(1.1)"
        })

        categoryThree[0].addEventListener("mouseleave", () => {
            imageBackgroundThree[0].style.transform = "scale(1)"
        })
        categoryFour[0].addEventListener("mouseenter", () => {
            imageBackgroundQuatre[0].style.transform = "scale(1.1)"
        })

        categoryFour[0].addEventListener("mouseleave", () => {
            imageBackgroundQuatre[0].style.transform = "scale(1)"
        })
        categoryFive[0].addEventListener("mouseenter", () => {
            imageBackgroundCinq[0].style.transform = "scale(1.1)"
        })

        categoryFive[0].addEventListener("mouseleave", () => {
            imageBackgroundCinq[0].style.transform = "scale(1)"
        })
        categorySix[0].addEventListener("mouseenter", () => {
            imageBackgroundSix[0].style.transform = "scale(1.1)"
        })

        categorySix[0].addEventListener("mouseleave", () => {
            imageBackgroundSix[0].style.transform = "scale(1)"
        })

    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.searchForm}>
                <SearchForm />
            </div>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>CADOURI</div>
                <div className={STYLE.box}></div>
            </div>
            <div className={STYLE.categoryContainer}>
                <div className={STYLE.categoryContent}>
                    <Link to={cadouri[2].path} className={STYLE.categoryOne}>
                        <div className={STYLE.imageBackgroundUne}></div>
                        <div className={STYLE.categoryTitle}><div>Dulciuri</div></div>
                    </Link>
                    <Link to={cadouri[1].path} className={STYLE.categoryTwo}>
                        <div className={STYLE.imageBackgroundTwo}></div>
                        <div className={STYLE.categoryTitle}><div>Parfumuri</div></div>
                    </Link>
                    <Link to={cadouri[3].path} className={STYLE.categoryThree}>
                        <div className={STYLE.imageBackgroundThree}></div>
                        <div className={STYLE.categoryTitle}><div>Sampanie</div></div>
                    </Link>
                    <Link to={cadouri[4].path} className={STYLE.categoryFour}>
                        <div className={STYLE.imageBackgroundQuatre}></div>
                        <div className={STYLE.categoryTitle}><div>Jucarii</div></div>
                    </Link>
                    <Link to={cadouri[0].path} className={STYLE.categoryFive}>
                        <div className={STYLE.imageBackgroundCinq}></div>
                        <div className={STYLE.categoryTitle}><div>Cadouri Speciale</div></div>
                    </Link>
                    <Link to={cadouri[5].path} className={STYLE.categorySix}>
                        <div className={STYLE.imageBackgroundSix}></div>
                        <div className={STYLE.categoryTitle}><div>Accesorii</div></div>
                    </Link>
                </div>
            </div>
            <div className={STYLE.faclitiesTabMax}>
                <FacilitiesTab />
            </div>
            <div className={STYLE.faclitiesTabMin}>
                <FacilitiesTabCarousel />
            </div>
            <div className={STYLE.bestSellerProducts}>
                <BestSellerCarousel />
            </div>
            <div className={STYLE.bestSellerProductsMid}>
                <BestSellerCarouselMid />
            </div>
            <div className={STYLE.bestSellerProductsMin}>
                <BestSellerCarouselMin />
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
                    for (let i = 0; i <= items1.length - 1; i++) {
                        if (allItm.productCode === items1[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items2.length - 1; i++) {
                        if (allItm.productCode === items2[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items3.length - 1; i++) {
                        if (allItm.productCode === items3[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items4.length - 1; i++) {
                        if (allItm.productCode === items4[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items5.length - 1; i++) {
                        if (allItm.productCode === items5[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items6.length - 1; i++) {
                        if (allItm.productCode === items6[i]) {
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
                    for (let i = 0; i <= items1.length - 1; i++) {
                        if (allItm.productCode === items1[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items2.length - 1; i++) {
                        if (allItm.productCode === items2[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items3.length - 1; i++) {
                        if (allItm.productCode === items3[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items4.length - 1; i++) {
                        if (allItm.productCode === items4[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items5.length - 1; i++) {
                        if (allItm.productCode === items5[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items6.length - 1; i++) {
                        if (allItm.productCode === items6[i]) {
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
                    for (let i = 0; i <= items1.length - 1; i++) {
                        if (allItm.productCode === items1[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items2.length - 1; i++) {
                        if (allItm.productCode === items2[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items3.length - 1; i++) {
                        if (allItm.productCode === items3[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items4.length - 1; i++) {
                        if (allItm.productCode === items4[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items5.length - 1; i++) {
                        if (allItm.productCode === items5[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items6.length - 1; i++) {
                        if (allItm.productCode === items6[i]) {
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
                <div className={STYLE.informationTitle}>Comanda Online Buchete de Flori Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Avem flori proaspete care creeaza buchete deosebite, accesibile ca pret, tocmai pentru a te ajuta sa faci un cadou deosebit. Iar daca esti departe de ea, poti comanda online, iar in 2 ore ea va tine in brate buchetul de flori ales de tine. La Floria gasesti buchete de flori potrivite pentru orice ocazie.
                        Fie ca vrei sa-ti surprinzi persoana iubita cu un buchet de flori sau să sa faci o surpriza mamei, surorii sau unei prietene, alege buchetul de flori potrivit ocaziei. Un buchet de flori poate transmite cat de mult o iubesti, cat de mult iti lipseste sau poate spune un sincer "multumesc" atunci cand tu nu poti.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Buchete flori deosebite de la Floria- cauti un buchet de flori? - in floraria noastra vei gasi cu siguranta buchete de flori deosebite pentru orice ocazie speciala din viata ta! Iti oferim consultanta de luni pana duminica pentru a alege cele mai potrivite buchete flori pentru zi de nastere, pentru a multumi cuiva, pentru la multi ani, buchete cu flori exotice sau romantice, buchete cu flori de sezon, buchete de marimi mici, mari sau impresionante.
                    </div>
                </div>
            </div>
            <SearchForm />
            <FreeDelivery />
        </div>
    )
}







