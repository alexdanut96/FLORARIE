import React, { useEffect } from "react";
import STYLE from "./OcaziiSiEvenimente.module.css"
import { Link } from "react-router-dom";
import { ocazii_si_evenimente_column1, ocazii_si_evenimente_column3 } from "./Ocazii_si_evenimente_items";
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
import { FacilitiesCarousel } from "../../../components/HomePage/Facilities/FacilitiesCarousel";
import { FacilitiesItemsTwo } from "../../../components/HomePage/Facilities/FacilitiesItemsTwo";
import { FacilitiesMax } from "../../../components/HomePage/FacilitiesTab/FacilitiesMax";
import allItems from "../../../data/Items.json"
import items1 from "../../../data/Ocazii si Evenimente/Aranjamente si Brazi de Craciun/AranjamenteSiBraziDeCraciun.json"
import items2 from "../../../data/Ocazii si Evenimente/Buchete La Multi Ani/BucheteLaMultiAni.json"
import items3 from "../../../data/Ocazii si Evenimente/Coroane funerare/CoroaneFunerare.json"
import items4 from "../../../data/Ocazii si Evenimente/Flori 1 Martie/FloriUnuMartie.json"
import items5 from "../../../data/Ocazii si Evenimente/Flori 8 Martie/FloriOptMartie.json"
import items6 from "../../../data/Ocazii si Evenimente/Flori Constantin si Elena/FloriConstantinSiElena.json"
import items7 from "../../../data/Ocazii si Evenimente/Flori Florii/FloriFlorii.json"
import items8 from "../../../data/Ocazii si Evenimente/Flori Halloween/FloriHalloween.json"
import items9 from "../../../data/Ocazii si Evenimente/Flori Onomastica/FloriOnomastica.json"
import items10 from "../../../data/Ocazii si Evenimente/Flori Sfanta Ana/FloriSfantaAna.json"
import items11 from "../../../data/Ocazii si Evenimente/Flori Sfanta Maria/FloriSfantaMaria.json"
import items12 from "../../../data/Ocazii si Evenimente/Flori Sfantul Alexandru/FloriSfantulAlexandru.json"
import items13 from "../../../data/Ocazii si Evenimente/Flori Sfantul Andrei/FloriSfantulAndrei.json"
import items14 from "../../../data/Ocazii si Evenimente/Flori Sfantul Dumitru/FloriSfantulDumitru.json"
import items15 from "../../../data/Ocazii si Evenimente/Flori Sfantul Gheorghe/FloriSfantulGheorghe.json"
import items16 from "../../../data/Ocazii si Evenimente/Flori Sfantul Ioan/FloriSfantulIoan.json"
import items17 from "../../../data/Ocazii si Evenimente/Flori Sfantul Nicolae/FloriSfantulNicolae.json"
import items18 from "../../../data/Ocazii si Evenimente/Flori Sfantul Stefan/FloriSfantulStefan.json"
import items19 from "../../../data/Ocazii si Evenimente/Flori Valentines Day/ValentinesDay.json"
import items20 from "../../../data/Ocazii si Evenimente/Flori de Dragobete/FloriDeDragobete.json"
import items21 from "../../../data/Ocazii si Evenimente/Flori pentru nunta/FloriPentruNunta.json"
import items22 from "../../../data/Ocazii si Evenimente/Ocazii speciale/OcaziiSpeciale.json"
import items23 from "../../../data/Ocazii si Evenimente/Sfintii Mihail si Gavril/SfintiiMihailSiGavril.json"

export function OcaziiSiEvenimente() {

    useEffect(() => {
        const categoryOne = document.querySelectorAll(`.${STYLE.categoryOne}`)
        const categoryTwo = document.querySelectorAll(`.${STYLE.categoryTwo}`)
        const categoryThree = document.querySelectorAll(`.${STYLE.categoryThree}`)
        const categoryFour = document.querySelectorAll(`.${STYLE.categoryFour}`)
        const categoryFive = document.querySelectorAll(`.${STYLE.categoryFive}`)
        const categorySix = document.querySelectorAll(`.${STYLE.categorySix}`)
        const imageBackgroundUnu = document.querySelectorAll(`.${STYLE.imageBackgroundUnu}`)
        const imageBackgroundTwo = document.querySelectorAll(`.${STYLE.imageBackgroundTwo}`)
        const imageBackgroundThree = document.querySelectorAll(`.${STYLE.imageBackgroundThree}`)
        const imageBackgroundFour = document.querySelectorAll(`.${STYLE.imageBackgroundFour}`)
        const imageBackgroundFive = document.querySelectorAll(`.${STYLE.imageBackgroundFive}`)
        const imageBackgroundSeize = document.querySelectorAll(`.${STYLE.imageBackgroundSeize}`)
        const productMax = document.querySelectorAll(`.${STYLE.productMax}>*`)
        const productMid = document.querySelectorAll(`.${STYLE.productMid}>*`)
        const productMin = document.querySelectorAll(`.${STYLE.productMin}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const showMoreTxt = document.querySelectorAll(`.${STYLE.showMoreTxt}`)
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
            showMoreTxt[0].innerHTML = `Afiseaza ${index + 1} din ${productMax.length}`
            index = index + 12
        }
        showMore()

        console.log(imageBackgroundUnu[0])

        button[0].addEventListener("click", showMore)

        categoryOne[0].addEventListener("mouseenter", () => {
            imageBackgroundUnu[0].style.transform = "scale(1.1)"
        })

        categoryOne[0].addEventListener("mouseleave", () => {
            imageBackgroundUnu[0].style.transform = "scale(1)"
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
            imageBackgroundFour[0].style.transform = "scale(1.1)"
        })

        categoryFour[0].addEventListener("mouseleave", () => {
            imageBackgroundFour[0].style.transform = "scale(1)"
        })
        categoryFive[0].addEventListener("mouseenter", () => {
            imageBackgroundFive[0].style.transform = "scale(1.1)"
        })

        categoryFive[0].addEventListener("mouseleave", () => {
            imageBackgroundFive[0].style.transform = "scale(1)"
        })
        categorySix[0].addEventListener("mouseenter", () => {
            imageBackgroundSeize[0].style.transform = "scale(1.1)"
        })

        categorySix[0].addEventListener("mouseleave", () => {
            imageBackgroundSeize[0].style.transform = "scale(1)"
        })

    }, [])

    return (
        <div className={STYLE.container}>
            <div className={STYLE.searchForm}>
                <SearchForm />
            </div>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>OCAZII&nbsp;SI&nbsp;EVENIMENTE</div>
                <div className={STYLE.box}></div>
            </div>
            <div className={STYLE.categoryContainer}>
                <div className={STYLE.categoryContent}>
                    <Link to={ocazii_si_evenimente_column1[0].path} className={STYLE.categoryOne}>
                        <div className={STYLE.imageBackgroundUnu}></div>
                        <div className={STYLE.categoryTitle}><div>Flori onomastica</div></div>
                    </Link>
                    <Link to={ocazii_si_evenimente_column1[2].path} className={STYLE.categoryTwo}>
                        <div className={STYLE.imageBackgroundTwo}></div>
                        <div className={STYLE.categoryTitle}><div>Ocazii speciale</div></div>
                    </Link>
                    <Link to={ocazii_si_evenimente_column1[4].path} className={STYLE.categoryThree}>
                        <div className={STYLE.imageBackgroundThree}></div>
                        <div className={STYLE.categoryTitle}><div>Flori pentru nunta</div></div>
                    </Link>
                    <Link to={ocazii_si_evenimente_column1[1].path} className={STYLE.categoryFour}>
                        <div className={STYLE.imageBackgroundFour}></div>
                        <div className={STYLE.categoryTitle}><div>Buchete La Multi Ani</div></div>
                    </Link>
                    <Link to={ocazii_si_evenimente_column3[5].path} className={STYLE.categoryFive}>
                        <div className={STYLE.imageBackgroundFive}></div>
                        <div className={STYLE.categoryTitle}><div>Craciun</div></div>
                    </Link>
                    <Link to={ocazii_si_evenimente_column1[5].path} className={STYLE.categorySix}>
                        <div className={STYLE.imageBackgroundSeize}></div>
                        <div className={STYLE.categoryTitle}><div>Flori Halloween</div></div>
                    </Link>
                </div>
            </div>
            <div className={STYLE.faclitiesTabMin}>
                <FacilitiesCarousel items={FacilitiesItemsTwo} />
            </div>

            <FacilitiesMax />
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
                    for (let i = 0; i <= items21.length - 1; i++) {
                        if (allItm.productCode === items21[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items22.length - 1; i++) {
                        if (allItm.productCode === items22[i]) {
                            return (
                                <ContentCardMax key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items23.length - 1; i++) {
                        if (allItm.productCode === items23[i]) {
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
                    for (let i = 0; i <= items21.length - 1; i++) {
                        if (allItm.productCode === items21[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items22.length - 1; i++) {
                        if (allItm.productCode === items22[i]) {
                            return (
                                <ContentCardMid key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items23.length - 1; i++) {
                        if (allItm.productCode === items23[i]) {
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
                    for (let i = 0; i <= items21.length - 1; i++) {
                        if (allItm.productCode === items21[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items22.length - 1; i++) {
                        if (allItm.productCode === items22[i]) {
                            return (
                                <ContentCardMin key={allItm.productCode} {...allItm} />
                            )
                        }
                    }
                    for (let i = 0; i <= items23.length - 1; i++) {
                        if (allItm.productCode === items23[i]) {
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
                <div><button className={STYLE.button}>ARATA MAI MULT</button></div>
            </div>
            <div className={STYLE.information}>
                <div className={STYLE.informationTitle}>Comanda Online Buchete de Flori Superbe cu Livrare la Domiciliu</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        Avem flori proaspete care creeaza buchete deosebite, accesibile ca pret, tocmai pentru a te ajuta sa faci un cadou deosebit. Iar daca esti departe de ea, poti comanda online, iar in 2 ore ea va tine in brate buchetul de flori ales de tine. La Floris gasesti buchete de flori potrivite pentru orice ocazie.
                        Fie ca vrei sa-ti surprinzi persoana iubita cu un buchet de flori sau să sa faci o surpriza mamei, surorii sau unei prietene, alege buchetul de flori potrivit ocaziei. Un buchet de flori poate transmite cat de mult o iubesti, cat de mult iti lipseste sau poate spune un sincer "multumesc" atunci cand tu nu poti.
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        Buchete flori deosebite de la Floris- cauti un buchet de flori? - in floraria noastra vei gasi cu siguranta buchete de flori deosebite pentru orice ocazie speciala din viata ta! Iti oferim consultanta de luni pana duminica pentru a alege cele mai potrivite buchete flori pentru zi de nastere, pentru a multumi cuiva, pentru la multi ani, buchete cu flori exotice sau romantice, buchete cu flori de sezon, buchete de marimi mici, mari sau impresionante.
                    </div>
                </div>
            </div>
            <SearchForm />
            <FreeDelivery />
        </div>
    )
}







