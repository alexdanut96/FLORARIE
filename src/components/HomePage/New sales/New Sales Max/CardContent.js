import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineCheck } from "react-icons/hi"
import { TbTruckDelivery } from "react-icons/tb"
import { VscHeart } from "react-icons/vsc"
import CARD from "./CardContent.module.css"
import { formatCurrency, newPrice } from "../../../../utilities/formatCurrency";
import { useModify } from "../../../Header/Context/AddToCartContext";

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

    useEffect(() => {

        const addToCartBtn = document.querySelectorAll(`.${CARD.addToCartBtn}`)
        // const plusButton = document.querySelectorAll(`.${CARD.plusButton}`)
        // const minusButton = document.querySelectorAll(`.${CARD.minusButton}`)
        // const removeButtom = document.querySelectorAll(`.${CARD.removeButtom}`)

        addToCartBtn[0].addEventListener("click", () => {
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
                                    </div>
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
                                    className={CARD.addToCartBtn}
                                    onClick={() => increaseCartQuantity(productCode)}
                                    style={{ display: quantity === 0 ? "flex" : "none" }}
                                >
                                    <span className={CARD.addToCartButtonText}>Adauga in cos</span>
                                </button>
                                <div
                                    style={{ display: quantity !== 0 ? "block" : "none" }}
                                >
                                    <div className={CARD.addOrRemoveItem}>
                                        <button
                                            onClick={() => decreaseCartQuantity(productCode)}
                                            className={CARD.minusButton}>
                                            -
                                        </button>
                                        <div className={CARD.countText}>
                                            <div className={CARD.itemNumber}>
                                                {quantity}
                                            </div>
                                            <div>in cos</div>
                                        </div>
                                        <button
                                            onClick={() => increaseCartQuantity(productCode)}
                                            className={CARD.plusButton}>
                                            +
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => removeFromCart(productCode)}
                                            className={CARD.removeButtom}>
                                            goleste cosul
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