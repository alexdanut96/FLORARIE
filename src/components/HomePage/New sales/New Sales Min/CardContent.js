import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineCheck } from "react-icons/hi"
import { TbTruckDelivery } from "react-icons/tb"
import { VscHeart } from "react-icons/vsc"
import CARD from "./CardContent.module.css"
import { formatCurrency, newPrice } from "../../../../utilities/formatCurrency";

export function CardContent(
    { id, discount, productImage, title, price, inStock, deliveryTime, path }) {

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
                                    <div
                                        className={CARD.favorite}
                                        onClick={(e) => { e.preventDefault() }}>
                                        <button className={CARD.favoriteButton}>
                                            <VscHeart className={CARD.favoriteIcon} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={CARD.productNameShelf}>
                            <span className={CARD.productName}>{title}</span>
                        </div>
                        <div
                            style={{ paddingBottom: !inStock && "22px" }}
                            className={CARD.summaryPriceShelf}>
                            <div className={CARD.summaryPriceContainer}>
                                <div className={CARD.oldPrice}>
                                    <span className={CARD.price}>
                                        {discount && formatCurrency(price)}
                                    </span>
                                </div>
                                <div
                                    style={{
                                        marginBottom: discount ? "" : "18.4px",
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
                                    }}
                                    className={CARD.inStockItem}>
                                    <HiOutlineCheck className={CARD.inStockIcon} />
                                    In stoc
                                </span>
                                <div className={CARD.shelfStockShippingItem}>
                                    <div className={CARD.shippingItem}>
                                        <span><TbTruckDelivery className={CARD.shippingIcon} /></span>
                                        <span className={CARD.shippingText}>Livrare in 2-4 ore</span>
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