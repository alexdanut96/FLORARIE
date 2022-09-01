import React, { useEffect } from "react"
import STYLE from "../../../../../Product Category/SubCategory.module.css"
import { Collapsible } from "../../../../../../components/Collapsible/Collapsible"
import { Facilities } from "../../../../../../components/HomePage/Facilities/Facilities"
import { FacilitiesItems } from "../../../../../../components/HomePage/Facilities/FacilitiesItems"
import { FacilitiesCarousel } from "../../../../../../components/HomePage/Facilities/FacilitiesCarousel"
import { VscHeart } from "react-icons/vsc"
import { HiOutlineCheck } from "react-icons/hi"
import { TbTruckDelivery } from "react-icons/tb"
import { BucheteFloriCardComponents } from "../../Category Card Components/CategoryCardComponents"
import { FreeDelivery } from "../../../../../../components/HomePage/FreeDelivery/FreeDelivery"
import { SearchForm } from "../../../../../../components/HomePage/SearchForm/SearchForm"
import { NewSalesMax } from "../../../../../../components/HomePage/New sales/New Sales Max/NewSalesMax"
import { NewSalesMid } from "../../../../../../components/HomePage/New sales/New Sales Mid/NewSalesMid"
import { NewSalesMin } from "../../../../../../components/HomePage/New sales/New Sales Min/NewSalesMin"
import { BestSellerCarousel } from "../../../../../../components/HomePage/Best Seller Products/BestSellerCarousel/BestSellerCarousel"
import { BestSellerCarouselMid } from "../../../../../../components/HomePage/Best Seller Products/BestSellerCarouselMid/BestSellerCarouselMid"
import { BestSellerCarouselMin } from "../../../../../../components/HomePage/Best Seller Products/BestSellerCarouselMin/BestSellerCarouselMin"

export function BuchetCuBujoriSiEucalipt() {
    // function zoom() {
    //     const container = document.querySelector(`#${containerimage}`)
    //     const image = document.querySelector(`#${imageZoom}`)

    //     if (container) {

    //         container.addEventListener("mousemove", (e) => {
    //             const x = e.clientX - e.target.offsetLeft / 10
    //             const y = e.clientY - e.target.offsetTop / 10

    //             image.style.transformOrigin = `${x}px ${y}px`
    //             image.style.transform = "scale(1.5)"
    //         })
    //         container.addEventListener("mouseleave", () => {
    //             image.style.transformOrigin = "center"
    //             image.style.transform = "scale(1)"
    //         })
    //     }
    // }

    useEffect(() => {
        const bestSellerMaxSize = document.querySelectorAll(`.${STYLE.bestSellerMaxSize}>*`)
        const bestSellerMidSize = document.querySelectorAll(`.${STYLE.bestSellerMidSize}>*`)
        const bestSellerMinSize = document.querySelectorAll(`.${STYLE.bestSellerMinSize}>*`)
        console.log(bestSellerMaxSize)


        bestSellerMaxSize[0].innerHTML = "Cele mai vandute"
        bestSellerMidSize[0].innerHTML = "Cele mai vandute"
        bestSellerMinSize[0].innerHTML = "Cele mai vandute"
    })



    const [description, setDescription] = React.useState(true)
    const [composition, setComposition] = React.useState(false)
    const [important, setImportant] = React.useState(false)
    function onDescription() {
        setDescription(true)
        setComposition(false)
        setImportant(false)
    }
    function onComposition() {
        setComposition(true)
        setDescription(false)
        setImportant(false)
    }
    function onImportant() {
        setImportant(true)
        setDescription(false)
        setComposition(false)
    }

    return (
        <div className={STYLE.container}>
            <div className={STYLE.rowOne}>
                <div className={STYLE.rowOneColumnOne}>
                    <div id={STYLE.containerImage}>
                        <img id={STYLE.image} src={BucheteFloriCardComponents[2].productImageBs} alt="img" />
                        <div
                            style={{ display: !BucheteFloriCardComponents[2].inStock && "none" }}
                            className={STYLE.inStock}>
                            <HiOutlineCheck />
                            <div className={STYLE.inStockText}>In stoc</div>
                        </div>
                        <div className={STYLE.discount}>
                            <span
                                style={{ display: BucheteFloriCardComponents[2].discount ? "flex" : "none" }}
                                className={STYLE.savingsPercentage}>
                                {BucheteFloriCardComponents[2].discount}
                            </span>
                        </div>
                        <div className={STYLE.favoriteButton}>
                            <VscHeart />
                        </div>
                    </div>
                </div>
                <div className={STYLE.rowOneColumnTwo}>
                    <div className={STYLE.productName}>{BucheteFloriCardComponents[2].title}</div>
                    <div
                        style={{ display: !BucheteFloriCardComponents[2].deliveryTime && "none" }}
                        className={STYLE.delivery}>
                        <TbTruckDelivery />
                        <div className={STYLE.deliveryText}>Livrare in 2-4 ore</div>
                    </div>
                    <div className={STYLE.price}>
                        <div className={STYLE.oldPrice}>{BucheteFloriCardComponents[2].oldPrice}</div>
                        <div
                            style={{ color: !BucheteFloriCardComponents[2].oldPrice && "black" }}
                            className={STYLE.currentPrice}>
                            {BucheteFloriCardComponents[2].currentPrice}
                        </div>
                    </div>
                    <div className={STYLE.addToCart}>
                        <button className={STYLE.addToCartButton}>Adauga in cos</button>
                        <VscHeart />
                    </div>
                    <div
                        style={{ display: !BucheteFloriCardComponents[2].accountBenefitsDescription && "none" }}
                        className={STYLE.promotionInfo}>
                        Fa-ti cont, comanda de minim 500 ron si devii automat Client Silver in &nbsp;
                        <a href="/" target="_blank" rel="noreferrer">Club Floris</a>
                        . Obtii discount de 10% si alte beneficii.&nbsp;
                        <a href="/" target="_blank" rel="noreferrer">VEZI DETALII</a>
                    </div>
                    <div className={STYLE.facilitiesMaxSize}>
                        < Facilities
                            icon={FacilitiesItems[0].icon}
                            title={FacilitiesItems[0].title}
                            content={FacilitiesItems[0].content}
                        />
                        < Facilities
                            icon={FacilitiesItems[1].icon}
                            title={FacilitiesItems[1].title}
                            content={FacilitiesItems[1].content}
                        />
                        < Facilities
                            icon={FacilitiesItems[2].icon}
                            title={FacilitiesItems[2].title}
                            content={FacilitiesItems[2].content}
                        />
                    </div>
                    <div className={STYLE.facilitiesMinSize}>
                        <FacilitiesCarousel />
                    </div>
                </div>
            </div>

            <div className={STYLE.rowTwo}>
                <div className={STYLE.rowTwoColumnOne}>
                    <div className={STYLE.aboutProductMaxSize}>
                        <div className={STYLE.title}>
                            <div
                                onClick={onDescription}
                                className={description ? STYLE.descriptionColor : STYLE.descriptionColorHidden}>
                                Descriere
                            </div>
                            <div
                                onClick={onComposition}
                                className={composition ? STYLE.compositionColor : STYLE.compositionColorHidden}>
                                Compozitie
                            </div>
                            <div
                                onClick={onImportant}
                                className={important ? STYLE.importantColor : STYLE.importantColorHidden}>
                                Important
                            </div>
                        </div>
                        <div className={description ? STYLE.description : STYLE.descriptionHidden}>
                            {BucheteFloriCardComponents[2].aboutProduct.description}
                        </div>
                        <div className={composition ? STYLE.composition : STYLE.compositionHidden}>
                            {BucheteFloriCardComponents[2].aboutProduct.composition}
                        </div>
                        <div className={important ? STYLE.important : STYLE.importantHidden}>
                            {BucheteFloriCardComponents[2].aboutProduct.important}
                        </div>
                    </div>
                    <div className={STYLE.aboutProductMinSize}>
                        <Collapsible label="Descriere">
                            <div>{BucheteFloriCardComponents[2].aboutProduct.description}</div>
                        </Collapsible>
                        <Collapsible label="Compozitie">
                            <div>{BucheteFloriCardComponents[2].aboutProduct.composition}</div>
                        </Collapsible>
                        <Collapsible label="Important">
                            <div>
                                {BucheteFloriCardComponents[2].aboutProduct.important}
                            </div>
                        </Collapsible>
                    </div>
                </div>
                <div className={STYLE.rowTwoColumnTwo}>
                    {BucheteFloriCardComponents[2].furtherInformation}
                </div>
            </div>
            <SearchForm />
            <NewSalesMax />
            <NewSalesMid />
            <NewSalesMin />
            <div className={STYLE.bestSellerMaxSize}>
                <BestSellerCarousel />
            </div>
            <div className={STYLE.bestSellerMidSize}>
                <BestSellerCarouselMid />
            </div>
            <div className={STYLE.bestSellerMinSize}>
                <BestSellerCarouselMin />
            </div>
            <FreeDelivery />
        </div>
    )
}


















