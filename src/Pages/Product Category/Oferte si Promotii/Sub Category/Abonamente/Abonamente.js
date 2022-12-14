import React, { useEffect } from "react";
import STYLE from "./Abonamente.module.css"
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
import { BestSellerCarousel } from "../../../../../components/HomePage/Best Seller Products/BestSellerCarousel/BestSellerCarousel";
import { BestSellerCarouselMid } from "../../../../../components/HomePage/Best Seller Products/BestSellerCarouselMid/BestSellerCarouselMid"
import { BestSellerCarouselMin } from "../../../../../components/HomePage/Best Seller Products/BestSellerCarouselMin/BestSellerCarouselMin";
import items from "../../../../../data/Items.json"

export function Abonamente() {

    useEffect(() => {
        const prodMaxSize = document.querySelectorAll(`.${STYLE.prodMaxSize}>*`)
        const productMediumSize = document.querySelectorAll(`.${STYLE.productMediumSize}>*`)
        const productMin = document.querySelectorAll(`.${STYLE.productMin}>*`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        const showMoreItems = document.querySelectorAll(`.${STYLE.showMoreItems}`)
        const bestSellerBigSize = document.querySelectorAll(`.${STYLE.bestSellerBigSize}>*`)
        const bestSellerMidSize = document.querySelectorAll(`.${STYLE.bestSellerMidSize}>*`)
        const bestSellerMinSize = document.querySelectorAll(`.${STYLE.bestSellerMinSize}>*`)
        let i
        let index = 11

        console.log(prodMaxSize[0])
        console.log(productMediumSize[0])
        console.log(productMin[0])
        console.log(button[0])
        console.log(showMoreItems[0])
        console.log(bestSellerBigSize[0])
        console.log(bestSellerMidSize[0])
        console.log(bestSellerMinSize[0])

        bestSellerBigSize[0].innerHTML = "Cele mai cumparate flori"
        bestSellerMidSize[0].innerHTML = "Cele mai cumparate flori"
        bestSellerMinSize[0].innerHTML = "Cele mai cumparate flori"

        function showMore() {
            for (i = 0; i <= prodMaxSize.length - 1; i++) {
                if (i <= index) {
                    prodMaxSize[i].style.display = "flex"
                    productMediumSize[i].style.display = "flex"
                    productMin[i].style.display = "flex"
                }
            }
            if (index >= prodMaxSize.length - 1) {
                index = prodMaxSize.length - 1
            }
            showMoreItems[0].innerHTML = `Afiseaza ${index + 1} din ${prodMaxSize.length}`
            index = index + 12
        }
        showMore()
        button[0].addEventListener("click", showMore)

    }, [])

    return (
        <div className={STYLE.container}>
            <div className={STYLE.searchForm}>
                <SearchForm />
            </div>
            <div className={STYLE.titleContent}>
                <div className={STYLE.title}>ABONAMENTE</div>
                <div className={STYLE.box}></div>
            </div>
            <div className={STYLE.faclitiesTabMin}>
                <FacilitiesCarousel items={FacilitiesItemsTwo} />
            </div>

            <FacilitiesMax />
            <div className={STYLE.bestSellerBigSize}>
                <BestSellerCarousel />
            </div>
            <div className={STYLE.bestSellerMidSize}>
                <BestSellerCarouselMid />
            </div>
            <div className={STYLE.bestSellerMinSize}>
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
            <div className={STYLE.prodMaxSize}>
                {items.filter((val) => {
                    if (val.productCode.includes("ABON")) {
                        return val
                    }
                    return null
                }).map(item => (
                    <ContentCardMax key={item.productCode} {...item} />
                ))}
            </div>
            <div className={STYLE.productMediumSize}>
                {items.filter((val) => {
                    if (val.productCode.includes("ABON")) {
                        return val
                    }
                    return null
                }).map(item => (
                    <ContentCardMid key={item.productCode} {...item} />
                ))}
            </div>
            <div className={STYLE.productMin}>
                {items.filter((val) => {
                    if (val.productCode.includes("ABON")) {
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
                <div className={STYLE.informationTitle}>Abonamente</div>
                <div className={STYLE.informationContent}>
                    <div className={STYLE.informationContentOne}>
                        <div>
                            Fie ca iti doresti sa iti rasplatesti sau sa iti motivezi angajatii sau pur si simplu vrei ca atmosfera de la birou sa fie completata de un aranjament deosebit, alege sa iti faci un abonament la Floris, iar noi vom avea grija sa nu duci lipsa de flori proaspete! Avem experienta de peste 5 ani in livrarea de flori online oriunde in Romania si am aratat calitatea serviciilor noastre de Craciun, 1 si 8 Martie, Ziua Indragostitilor sau orice alta ocazie.
                        </div>
                        <div>
                            Iti doresti sa impresionezi pe cineva cu flori livrate la usa in fiecare saptamana sau luna? Nimic mai simplu! Poti alege unul din abonamentele noastre, iar noi vom avea grija ca florile tale sa fie livrate proaspete la usa destinatarei atunci cand doresti. Buchetul sau aranjamentul de flori vor fi livrate cu grija de curierii nostri, alaturi de o felicitare pe care putem scrie un mesaj ales de tine.
                        </div>
                    </div>
                    <div className={STYLE.informationContentTwo}>
                        <div>
                            Livram flori online oriunde in Romania in numai 2 ore!                        </div>
                        <div>
                            Poate iti doresti sa bucuri pe cineva aflat la distanta? Pentru florarie online Floris nu este nicio problema sa livram buchete de flori la mii de kilometrii distanta. Intra pe pagina noastra ""Livrari flori internationale"" si vezi orasele in care livram flori gratuit, in numai 24 de ore!
                        </div>
                        <div>
                            Cu Floris este mai simplu ca niciodata sa le faci surprize celor dragi sau sa le multumesti partenerilor de afaceri! Comanda usor flori online sau alege un abonament, daca doresti sa trimiti flori regulat, iar noi iti garantam ca acestea vor ajunge la destinatie in stare impecabila!
                        </div>
                    </div>
                </div>
            </div>
            <SearchForm />
            <FreeDelivery />
        </div>

    )
}