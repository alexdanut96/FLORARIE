import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { HiOutlineCheck } from "react-icons/hi"
import { TbTruckDelivery } from "react-icons/tb"
import { VscHeart } from "react-icons/vsc"
import CARD from "./CardContent.module.css"
import { formatCurrency, newPrice } from "../../../../utilities/formatCurrency";
import { useModify } from "../../../Header/Context/AddToCartContext";
import { useAuth } from "../../../Header/Context/AuthContext";

export function CardContent(
    { id, discount, productImage, title, price, inStock, deliveryTime, path, productCode }) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        getFavItemValue
    } = useModify()
    const quantity = getItemQuantity(productCode)
    const value = getFavItemValue(productCode)
    const { userEmail } = useAuth()
    const [increaseIsLoading, setIncreaseIsLoading] = useState(false)
    const [decreaseIsLoading, setDecreaseIsLoading] = useState(false)
    const [removeLoading, setRemoveLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)


    useEffect(() => {
        if (increaseIsLoading) {
            increaseCartQuantity(productCode)
            setIncreaseIsLoading(false)
        } else if (decreaseIsLoading) {
            decreaseCartQuantity(productCode)
            setDecreaseIsLoading(false)
        } else if (removeLoading) {
            removeFromCart(productCode)
            setRemoveLoading(false)
        }
    }, [increaseIsLoading, decreaseIsLoading, removeLoading])

    useEffect(() => {
        if (isDisabled) {
            setIsDisabled(false)
        }
    }, [isDisabled])



    useEffect(() => {

        const addToCartButton = document.querySelectorAll(`.${CARD.addToCartButton}`)


        addToCartButton[0].addEventListener("click", () => {
            console.log("show")
        })

    })

    return (
        <div className={CARD.cardContainer}>
            <div className={CARD.content}>
                <Link to={path} className={CARD.productSummary}>
                    <article className={CARD.productSummaryArticle}>
                        <div className={CARD.stackContainer}>
                            <img className={CARD.productImage} src={productImage} alt="img" />
                            <div className={CARD.stackItem}>
                                <div className={CARD.discountWishlistShelf}>
                                    <div className={CARD.discount}>
                                        <span
                                            style={{ display: discount ? "flex" : "none" }}
                                            className={CARD.savingsPercentage}>
                                            -{discount}%
                                        </span>
                                    </div>
                                    {userEmail ?
                                        <div className={CARD.favorite} onClick={(e) => { e.preventDefault() }}>
                                            <button
                                                onClick={() => addToWishlist(productCode)}
                                                style={{ display: !value ? "block" : "none" }}
                                                className={CARD.favoriteButton}>
                                                <VscHeart className={CARD.favoriteIconUnchecked} />
                                            </button>
                                            <button
                                                onClick={() => removeFromWishlist(productCode)}
                                                style={{ display: value ? "block" : "none" }}
                                                className={CARD.favoriteButton}>
                                                <VscHeart className={CARD.favoriteIconChecked} />
                                            </button>
                                        </div> :
                                        <div className={CARD.favorite} onClick={(e) => { e.preventDefault() }}>
                                            <button
                                                className={CARD.favoriteButton}>
                                                <VscHeart className={CARD.favoriteIconUnchecked} />
                                            </button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={CARD.productNameShelf}>
                            <span className={CARD.productName}>{title}</span>
                        </div>
                        <div className={CARD.summaryPriceShelf}>
                            <div className={CARD.summaryPriceContainer}>
                                <div className={CARD.oldPrice}>
                                    <span className={CARD.price}>
                                        {discount && formatCurrency(price)}
                                    </span>
                                </div>
                                <div
                                    style={{
                                        marginLeft: discount && "0.5rem",
                                        color: discount ? "" : "black",
                                    }}
                                    className={CARD.currentPrice}>
                                    <span className={CARD.price}>
                                        {discount ? formatCurrency(newPrice(price, discount)) : formatCurrency(price)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={CARD.StockShippingContainer}>
                            <div
                                style={{ justifyContent: (!inStock || !deliveryTime) && "center" }}
                                className={CARD.shelfStockShipping}>
                                <span
                                    style={{ display: inStock ? "flex" : "none" }}
                                    className={CARD.inStockItem}>
                                    <HiOutlineCheck className={CARD.inStockIcon} />
                                    In stoc
                                </span>
                                <div
                                    className={CARD.shelfStockShippingItem}
                                    style={{ display: deliveryTime ? "flex" : "none" }}>
                                    <div className={CARD.shippingItem}>
                                        <span ><TbTruckDelivery className={CARD.shippingIcon} /></span>
                                        <span className={CARD.shippingText}>Livrare in 2-4 ore</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={CARD.addToCartShelf}>
                            <div onClick={(e) => { e.preventDefault() }}>
                                <button
                                    className={CARD.addToCartButton}
                                    onClick={() => setIncreaseIsLoading(true)}
                                    style={{ display: quantity === 0 ? "flex" : "none" }}
                                >
                                    {!increaseIsLoading && <span className={CARD.addToCartButtonText}>Adauga in cos</span>}
                                    {increaseIsLoading && <span className={CARD.loader}></span>}
                                </button>
                                <div
                                    style={{ display: quantity !== 0 ? "block" : "none" }}
                                >
                                    <div className={CARD.addOrRemoveItem}>
                                        <button
                                            disabled={isDisabled}
                                            onClick={() => { setIsDisabled(true); setDecreaseIsLoading(true) }}
                                            className={CARD.minusButton}>
                                            -
                                        </button>
                                        <div className={CARD.countText}>
                                            <div className={CARD.itemNumber}>
                                                {(!increaseIsLoading && !decreaseIsLoading) && quantity}
                                                {(increaseIsLoading || decreaseIsLoading) && <span className={CARD.secondLoader}></span>}
                                            </div>
                                            <div>in cos</div>
                                        </div>
                                        <button
                                            disabled={isDisabled}
                                            onClick={() => { setIsDisabled(true); setIncreaseIsLoading(true) }}
                                            className={CARD.plusButton}>
                                            +
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => setRemoveLoading(true)}
                                            className={CARD.removeButtom}>
                                            {!removeLoading && <div>goleste cosul</div>}
                                            {removeLoading && <span className={CARD.loader}></span>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </Link>

            </div>
        </div>
    )
}