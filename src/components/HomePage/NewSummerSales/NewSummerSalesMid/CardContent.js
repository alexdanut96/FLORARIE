import React from "react";
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
        addToWishlist,
        removeFromWishlist,
        getFavItemValue
    } = useModify()
    const value = getFavItemValue(productCode)

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
                            <div
                                className={CARD.summaryPriceContainer}>
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
                            <div className={CARD.shelfStockShipping}>
                                <span
                                    style={{
                                        display: inStock ? "flex" : "none",
                                        marginTop: deliveryTime ? 0 : "17.6px",
                                    }}
                                    className={CARD.inStockItem}>
                                    <HiOutlineCheck className={CARD.inStockIcon} />
                                    In stoc
                                </span>
                                <div
                                    className={CARD.shelfStockShippingItem}
                                    style={{ marginTop: inStock ? 0 : "22px" }}>
                                    <div className={CARD.shippingItem}>
                                        <span
                                            style={{ display: deliveryTime ? "flex" : "none" }}>
                                            <TbTruckDelivery className={CARD.shippingIcon} />
                                        </span>
                                        <span
                                            style={{ display: deliveryTime ? "flex" : "none" }}
                                            className={CARD.shippingText}>
                                            Livrare in 2-4 ore
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={CARD.addToCartShelf}>
                            <button
                                className={CARD.addToCartButton}
                                onClick={(e) => { e.preventDefault() }}>
                                <span className={CARD.addToCartButtonText}>Adauga in cos</span>
                            </button>
                        </div>
                    </article>
                </Link>

            </div>
        </div>
    )
}