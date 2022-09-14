import React, { useEffect } from "react";
import STYLE from "./BucheteFlori.module.css"
import { Link } from "react-router-dom";
import { buchete_flori_column1, buchete_flori_column2, buchete_flori_column3 } from "./Buchete_flori_items"
import { SearchForm } from "../../../components/HomePage/SearchForm/SearchForm";
import { BestSellerCarousel } from "../../../components/HomePage/Best Seller Products/BestSellerCarousel/BestSellerCarousel";
import { BestSellerCarouselMid } from "../../../components/HomePage/Best Seller Products/BestSellerCarouselMid/BestSellerCarouselMid";
import { BestSellerCarouselMin } from "../../../components/HomePage/Best Seller Products/BestSellerCarouselMin/BestSellerCarouselMin";
import { ContentCardMax } from "../../../components/Content/ContentCardMax"
import { ContentCardMid } from "../../../components/Content/ContentCardMid"
import { ContentCardMin } from "../../../components/Content/ContentCardMin"
import { FreeDelivery } from "../../../components/HomePage/FreeDelivery/FreeDelivery";
import { IoIosArrowDown } from "react-icons/io"
import { TbAdjustmentsHorizontal } from "react-icons/tb"
import { FacilitiesMax } from "../../../components/HomePage/FacilitiesTab/FacilitiesMax";
import { FacilitiesCarousel } from "../../../components/HomePage/Facilities/FacilitiesCarousel";
import { FacilitiesItemsTwo } from "../../../components/HomePage/Facilities/FacilitiesItemsTwo";
import allItems from "../../../data/Items.json"
import items1 from "../../../data/Buchete flori/Buchete Mireasa/BucheteDeMireasa.json"
import items2 from "../../../data/Buchete flori/Buchete ambalate in cutie/BucheteAmbalateInCutie.json"
import items3 from "../../../data/Buchete flori/Buchete cu Bujori/BucheteCuBujori.json"
import items4 from "../../../data/Buchete flori/Buchete cu Hortensie/BucheteDeHortensie.json"
import items5 from "../../../data/Buchete flori/Buchete de alstroemeria/BucheteDeAlstromeria.json"
import items6 from "../../../data/Buchete flori/Buchete de cale/BucheteDeCale.json"
import items7 from "../../../data/Buchete flori/Buchete de crini asiatici/BucheteDeCriniAsiatici.json"
import items8 from "../../../data/Buchete flori/Buchete de crini imperiali/BucheteDeCriniImperiali.json"
import items9 from "../../../data/Buchete flori/Buchete de crizanteme/BucheteDeCrizanteme.json"
import items10 from "../../../data/Buchete flori/Buchete de garoafe/BucheteDeGaroafe.json"
import items11 from "../../../data/Buchete flori/Buchete de gerbera/BucheteDeGerbera.json"
import items12 from "../../../data/Buchete flori/Buchete de iris/BucheteDeIris.json"
import items13 from "../../../data/Buchete flori/Buchete de lalele/BucheteDeLalele.json"
import items14 from "../../../data/Buchete flori/Buchete de lisianthus/BucheteDeLisianthus.json"
import items15 from "../../../data/Buchete flori/Buchete de minirosa/BucheteDeMinirosa.json"
import items16 from "../../../data/Buchete flori/Buchete de orhidee/BucheteDeOrhidee.json"
import items17 from "../../../data/Buchete flori/Buchete de trandafiri/BucheteDeTrandafiri.json"
import items18 from "../../../data/Buchete flori/Flori de Iarna/FloriDeIarna.json"
import items19 from "../../../data/Buchete flori/Flori de Primavara/FloriDePrimavara.json"
import items20 from "../../../data/Buchete flori/Flori de Vara/FloriDeVara.json"

export function BucheteFlori() {

    useEffect(() => {
        const categoryUne = document.querySelectorAll(`.${STYLE.categoryUne}`)
        const categoryTwo = document.querySelectorAll(`.${STYLE.categoryTwo}`)
        const categoryThree = document.querySelectorAll(`.${STYLE.categoryThree}`)
        const categoryQuatre = document.querySelectorAll(`.${STYLE.categoryQuatre}`)
        const categoryFive = document.querySelectorAll(`.${STYLE.categoryFive}`)
        const categorySix = document.querySelectorAll(`.${STYLE.categorySix}`)
        const imageBackgroundOne = document.querySelectorAll(`.${STYLE.imageBackgroundOne}`)
        const imageBackgroundTwo = document.querySelectorAll(`.${STYLE.imageBackgroundTwo}`)
        const imageBackgroundThree = document.querySelectorAll(`.${STYLE.imageBackgroundThree}`)
        const imageBackgroundFour = document.querySelectorAll(`.${STYLE.imageBackgroundFour}`)
        const imageBackgroundFive = document.querySelectorAll(`.${STYLE.imageBackgroundFive}`)
        const imageBackgroundSix = document.querySelectorAll(`.${STYLE.imageBackgroundSix}`)
        const productMax = document.querySelectorAll(`.${STYLE.productMax}>*`)
        const productMid = document.querySelectorAll(`.${STYLE.productMid}>*`)
        const productMinSize = document.querySelectorAll(`.${STYLE.productMinSize}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const showMoreTxT = document.querySelectorAll(`.${STYLE.showMoreTxT}`)

        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMax.length - 1; i++) {
                if (i <= index) {
                    productMax[i].style.display = "flex"
                    productMid[i].style.display = "flex"
                    productMinSize[i].style.display = "flex"
                }
            }
            if (index >= productMax.length - 1) {
                index = productMax.length - 1
            }
            showMoreTxT[0].innerHTML = `Afiseaza ${index + 1} din ${productMax.length}`
            index = index + 12
        }
        showMore()

        button[0].addEventListener("click", showMore)

        categoryUne[0].addEventListener("mouseenter", () => {
            imageBackgroundOne[0].style.transform = "scale(1.1)"
        })

        categoryUne[0].addEventListener("mouseleave", () => {
            imageBackgroundOne[0].style.transform = "scale(1)"
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
        categoryQuatre[0].addEventListener("mouseenter", () => {
            imageBackgroundFour[0].style.transform = "scale(1.1)"
        })

        categoryQuatre[0].addEventListener("mouseleave", () => {
            imageBackgroundFour[0].style.transform = "scale(1)"
        })
        categoryFive[0].addEventListener("mouseenter", () => {
            imageBackgroundFive[0].style.transform = "scale(1.1)"
        })

        categoryFive[0].addEventListener("mouseleave", () => {
            imageBackgroundFive[0].style.transform = "scale(1)"
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
                <div className={STYLE.title}>BUCHETE &nbsp;DE &nbsp;FLORI</div>
                <div className={STYLE.box}></div>
            </div>
            <div className={STYLE.categoryContainer}>
                <div className={STYLE.categoryContent}>
                    <Link to={buchete_flori_column1[1].path} className={STYLE.categoryUne}>
                        <div className={STYLE.imageBackgroundOne}></div>
                        <div className={STYLE.categoryTitle}><div>Buchete de trandafiri</div></div>
                    </Link>
                    <Link to={buchete_flori_column2[3].path} className={STYLE.categoryTwo}>
                        <div className={STYLE.imageBackgroundTwo}></div>
                        <div className={STYLE.categoryTitle}><div>Buchete de iris</div></div>
                    </Link>
                    <Link to={buchete_flori_column1[3].path} className={STYLE.categoryThree}>
                        <div className={STYLE.imageBackgroundThree}></div>
                        <div className={STYLE.categoryTitle}><div>Buchete de minirosa</div></div>
                    </Link>
                    <Link to={buchete_flori_column1[2].path} className={STYLE.categoryQuatre}>
                        <div className={STYLE.imageBackgroundFour}></div>
                        <div className={STYLE.categoryTitle}><div>Buchete de lalele</div></div>
                    </Link>
                    <Link to={buchete_flori_column3[5].path} className={STYLE.categoryFive}>
                        <div className={STYLE.imageBackgroundFive}></div>
                        <div className={STYLE.categoryTitle}><div>Buchete de bujori</div></div>
                    </Link>
                    <Link to={buchete_flori_column1[6].path} className={STYLE.categorySix}>
                        <div className={STYLE.imageBackgroundSix}></div>
                        <div className={STYLE.categoryTitle}><div>Buchete de hortensie</div></div>
                    </Link>
                </div>
            </div>

            <div className={STYLE.faclitiesTabMin}>
                <FacilitiesCarousel items={FacilitiesItemsTwo} />
            </div>

            <FacilitiesMax />

            <BestSellerCarousel />
            <BestSellerCarouselMid />
            <BestSellerCarouselMin />
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
                    for (let i = 0; i <= items7.length - 1; i++) {
                        if (allItm.productCode === items7[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items8.length - 1; i++) {
                        if (allItm.productCode === items8[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items9.length - 1; i++) {
                        if (allItm.productCode === items9[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items10.length - 1; i++) {
                        if (allItm.productCode === items10[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items11.length - 1; i++) {
                        if (allItm.productCode === items11[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items12.length - 1; i++) {
                        if (allItm.productCode === items12[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items13.length - 1; i++) {
                        if (allItm.productCode === items13[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items14.length - 1; i++) {
                        if (allItm.productCode === items14[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items15.length - 1; i++) {
                        if (allItm.productCode === items15[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items16.length - 1; i++) {
                        if (allItm.productCode === items16[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items17.length - 1; i++) {
                        if (allItm.productCode === items17[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items18.length - 1; i++) {
                        if (allItm.productCode === items18[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items19.length - 1; i++) {
                        if (allItm.productCode === items19[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items20.length - 1; i++) {
                        if (allItm.productCode === items20[i]) {
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
                    for (let i = 0; i <= items7.length - 1; i++) {
                        if (allItm.productCode === items7[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items8.length - 1; i++) {
                        if (allItm.productCode === items8[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items9.length - 1; i++) {
                        if (allItm.productCode === items9[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items10.length - 1; i++) {
                        if (allItm.productCode === items10[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items11.length - 1; i++) {
                        if (allItm.productCode === items11[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items12.length - 1; i++) {
                        if (allItm.productCode === items12[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items13.length - 1; i++) {
                        if (allItm.productCode === items13[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items14.length - 1; i++) {
                        if (allItm.productCode === items14[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items15.length - 1; i++) {
                        if (allItm.productCode === items15[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items16.length - 1; i++) {
                        if (allItm.productCode === items16[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items17.length - 1; i++) {
                        if (allItm.productCode === items17[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items18.length - 1; i++) {
                        if (allItm.productCode === items18[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items19.length - 1; i++) {
                        if (allItm.productCode === items19[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items20.length - 1; i++) {
                        if (allItm.productCode === items20[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    return null
                })}
            </div>
            <div className={STYLE.productMinSize}>
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
                    for (let i = 0; i <= items7.length - 1; i++) {
                        if (allItm.productCode === items7[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items8.length - 1; i++) {
                        if (allItm.productCode === items8[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items9.length - 1; i++) {
                        if (allItm.productCode === items9[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items10.length - 1; i++) {
                        if (allItm.productCode === items10[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items11.length - 1; i++) {
                        if (allItm.productCode === items11[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items12.length - 1; i++) {
                        if (allItm.productCode === items12[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items13.length - 1; i++) {
                        if (allItm.productCode === items13[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items14.length - 1; i++) {
                        if (allItm.productCode === items14[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items15.length - 1; i++) {
                        if (allItm.productCode === items15[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items16.length - 1; i++) {
                        if (allItm.productCode === items16[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items17.length - 1; i++) {
                        if (allItm.productCode === items17[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items18.length - 1; i++) {
                        if (allItm.productCode === items18[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items19.length - 1; i++) {
                        if (allItm.productCode === items19[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items20.length - 1; i++) {
                        if (allItm.productCode === items20[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    return null
                })}
            </div>
            <div className={STYLE.showMore}>
                <div className={STYLE.showMoreTxT}></div>
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







