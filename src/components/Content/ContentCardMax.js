import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { HiOutlineCheck } from "react-icons/hi"
import { TbTruckDelivery } from "react-icons/tb"
import { VscHeart } from "react-icons/vsc"
import STYLE from "./ContentCardMax.module.css"
import { formatCurrency, newPrice } from "../../utilities/formatCurrency"
import { useModify } from "../../components/Header/Context/AddToCartContext";
import { useAuth } from "../Header/Context/AuthContext"
// import { lazy, Suspense } from "react"

//   function AddToCart({ id, discount, productImage, title, price, inStock, deliveryTime, path, productCode }) {

//     const {
//         getItemQuantity,
//         increaseCartQuantity,
//         decreaseCartQuantity,
//         removeFromCart,
//         addToWishlist,
//         removeFromWishlist,
//         getFavItemValue,
//     } = useModify()
//     const quantity = getItemQuantity(productCode)
//     const value = getFavItemValue(productCode)
//     const { userEmail } = useAuth()

//     return (
//         <div
//             style={{ display: quantity !== 0 ? "block" : "none" }}
//         >
//             <div className={STYLE.addOrRemoveItem}>
//                 <button
//                     onClick={() => decreaseCartQuantity(productCode)}
//                     className={STYLE.minusButton}>
//                     -
//                 </button>
//                 <div className={STYLE.countText}>
//                     <div className={STYLE.itemNumber}>
//                         {quantity}
//                     </div>
//                     <div>in cos</div>
//                 </div>
//                 <button
//                     onClick={() => increaseCartQuantity(productCode)}
//                     className={STYLE.plusButton}>
//                     +
//                 </button>
//             </div>
//             <div>
//                 <button
//                     onClick={() => removeFromCart(productCode)}
//                     className={STYLE.removeButtom}>
//                     goleste cosul
//                 </button>
//             </div>
//         </div>
//     )
// }

export function ContentCardMax(
    { id, discount, productImage, title, price, inStock, deliveryTime, path, productCode }) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        getFavItemValue,
        addToCartNotify,
        removeFromCartNotify
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
            if (quantity === 0) {
                addToCartNotify()
            }
        } else if (decreaseIsLoading) {
            decreaseCartQuantity(productCode)
            setDecreaseIsLoading(false)
            if (quantity === 1) {
                removeFromCartNotify()
            }
        } else if (removeLoading) {
            removeFromCart(productCode)
            setRemoveLoading(false)
            if (quantity !== 0) {
                removeFromCartNotify()
            }
        }
    }, [increaseIsLoading, decreaseIsLoading, removeLoading])

    useEffect(() => {
        if (isDisabled) {
            setIsDisabled(false)
        }
    }, [isDisabled])


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
                                    {userEmail ?
                                        <div className={STYLE.favorite} onClick={(e) => { e.preventDefault() }}>
                                            <button
                                                onClick={() => addToWishlist(productCode)}
                                                style={{ display: !value ? "block" : "none" }}
                                                className={STYLE.favoriteButton}>
                                                <VscHeart className={STYLE.favoriteIconUnchecked} />
                                            </button>
                                            <button
                                                onClick={() => removeFromWishlist(productCode)}
                                                style={{ display: value ? "block" : "none" }}
                                                className={STYLE.favoriteButton}>
                                                <VscHeart className={STYLE.favoriteIconChecked} />
                                            </button>
                                        </div> :
                                        <div className={STYLE.favorite} onClick={(e) => { e.preventDefault() }}>
                                            <button
                                                className={STYLE.favoriteButton}>
                                                <VscHeart className={STYLE.favoriteIconUnchecked} />
                                            </button>
                                        </div>
                                    }

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
                                    onClick={() => { setIncreaseIsLoading(true) }}
                                    disabled={increaseIsLoading}
                                    style={{ display: quantity === 0 ? "flex" : "none" }}
                                >
                                    {!increaseIsLoading && <span className={STYLE.addToCartButtonText}>Adauga in cos</span>}
                                    {increaseIsLoading && <span className={STYLE.loader}></span>}
                                </button>


                                <div
                                    style={{ display: quantity !== 0 ? "block" : "none" }}
                                >
                                    <div className={STYLE.addOrRemoveItem}>
                                        <button
                                            disabled={isDisabled}
                                            onClick={() => { setIsDisabled(true); setDecreaseIsLoading(true) }}
                                            className={STYLE.minusButton}>
                                            <div>-</div>

                                        </button>
                                        <div className={STYLE.countText}>
                                            <div className={STYLE.itemNumber}>
                                                {(!increaseIsLoading && !decreaseIsLoading) && quantity}
                                                {(increaseIsLoading || decreaseIsLoading) && <span className={STYLE.secondLoader}></span>}
                                            </div>
                                            <div>in cos</div>
                                        </div>


                                        <button
                                            disabled={isDisabled}
                                            onClick={() => { setIsDisabled(true); setIncreaseIsLoading(true) }}
                                            className={STYLE.plusButton}>
                                            +
                                        </button>

                                    </div>
                                    <div>
                                        <button
                                            onClick={() => setRemoveLoading(true)}
                                            className={STYLE.removeButtom}>
                                            {!removeLoading && <div>goleste cosul</div>}
                                            {removeLoading && <span className={STYLE.loader}></span>}

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