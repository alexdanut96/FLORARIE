import React from "react"
import { Link } from "react-router-dom"
import { HiOutlineCheck } from "react-icons/hi"
import { TbTruckDelivery } from "react-icons/tb"
import { VscHeart } from "react-icons/vsc"
import STYLE from "./ContentCardMax.module.css"
import { formatCurrency, newPrice } from "../../utilities/formatCurrency"
import { useModify } from "../../components/Header/Context/AddToCartContext";

export function ContentCardMax(
    { id, discount, productImage, title, price, inStock, deliveryTime, path, productCode }) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useModify()
    const quantity = getItemQuantity(productCode)

    return (
        <div className={STYLE.cardContainer}>
            <div className={STYLE.content}>
                <Link to={path} className={STYLE.productSummary}>
                    <article className={STYLE.productSummaryArticle}>
                        <div className={STYLE.stackContainer}>
                            <img className={STYLE.productImage} src={productImage} alt="img" />
                            <div className={STYLE.stackItem}>
                                <div className={STYLE.discountWishlistShelf}>
                                    <div className={STYLE.discount}>
                                        <span
                                            style={{ display: discount ? "flex" : "none" }}
                                            className={STYLE.savingsPercentage}>
                                            -{discount}%
                                        </span>
                                    </div>
                                    <div className={STYLE.favorite} onClick={(e) => { e.preventDefault() }}>
                                        <button className={STYLE.favoriteButton}>
                                            <VscHeart className={STYLE.favoriteIcon} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={STYLE.productNameShelf}>
                            <span className={STYLE.productName}>{title}</span>
                        </div>
                        <div className={STYLE.summaryPriceShelf}>
                            <div className={STYLE.summaryPriceContainer}>
                                <div className={STYLE.oldPrice}>
                                    <span className={STYLE.price}>
                                        {discount && formatCurrency(price)}
                                    </span>
                                </div>
                                <div
                                    style={{
                                        color: discount ? "" : "black",
                                        marginLeft: discount && "0.5rem"
                                    }}
                                    className={STYLE.currentPrice}>
                                    <span className={STYLE.price}>
                                        {discount ? formatCurrency(newPrice(price, discount)) : formatCurrency(price)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={STYLE.StockShippingContainer}>
                            <div
                                style={{ justifyContent: (!inStock || !deliveryTime) && "center" }}
                                className={STYLE.shelfStockShipping}>
                                <span
                                    style={{ display: inStock ? "flex" : "none" }}
                                    className={STYLE.inStockItem}>
                                    <HiOutlineCheck className={STYLE.inStockIcon} />
                                    In stoc
                                </span>
                                <div
                                    className={STYLE.shelfStockShippingItem}
                                    style={{ display: deliveryTime ? "flex" : "none" }}>
                                    <div className={STYLE.shippingItem}>
                                        <span ><TbTruckDelivery className={STYLE.shippingIcon} /></span>
                                        <span className={STYLE.shippingText}>Livrare in 2-4 ore</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={STYLE.addToCartShelf}>
                            <div onClick={(e) => { e.preventDefault() }}>
                                <button
                                    className={STYLE.addToCartButton}
                                    onClick={() => increaseCartQuantity(productCode)}
                                    style={{ display: quantity === 0 ? "flex" : "none" }}
                                >
                                    <span className={STYLE.addToCartButtonText}>Adauga in cos</span>
                                </button>
                                <div
                                    style={{ display: quantity !== 0 ? "block" : "none" }}
                                >
                                    <div className={STYLE.addOrRemoveItem}>
                                        <button
                                            onClick={() => decreaseCartQuantity(productCode)}
                                            className={STYLE.minusButton}>
                                            -
                                        </button>
                                        <div className={STYLE.countText}>
                                            <div className={STYLE.itemNumber}>
                                                {quantity}
                                            </div>
                                            <div>in cos</div>
                                        </div>
                                        <button
                                            onClick={() => increaseCartQuantity(productCode)}
                                            className={STYLE.plusButton}>
                                            +
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => removeFromCart(productCode)}
                                            className={STYLE.removeButtom}>
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