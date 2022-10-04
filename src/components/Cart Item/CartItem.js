import React, { useEffect, useState } from "react";
import STYLE from "./CartItem.module.css"
import { HiOutlineTrash } from "react-icons/hi"
import { Link } from "react-router-dom";
import { formatCurrency, newPrice } from "../../utilities/formatCurrency";
import items from "../../data/Items.json"
import { useModify } from "../Header/Context/AddToCartContext";
import { useShoppingCart } from "../Header/Context/ShoppingCartContext";

export function CartItem({ productCode, quantity }) {
    const { openTheCart } = useShoppingCart()
    const { removeFromCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        addToCartNotify,
        removeFromCartNotify
    } = useModify()
    const item = items.find(i => i.productCode === productCode)
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

    if (item === undefined) return null

    return (
        <div className={STYLE.container}>
            <div className={STYLE.itemContainer}>
                <Link
                    onClick={openTheCart}
                    to={item.path}>
                    <img
                        className={STYLE.image}
                        src={item.productImage}
                        alt="img" />
                </Link>
                <div className={STYLE.itemContainerContent}>
                    <div className={STYLE.title}>
                        {item.title}
                    </div>
                    <div className={STYLE.price}>
                        {item.discount ? formatCurrency(newPrice(item.price, item.discount)) : formatCurrency(item.price)}
                    </div>
                    <div className={STYLE.buttons}>
                        <div className={STYLE.addOrRemove}>
                            <button
                                disabled={isDisabled}
                                onClick={() => { setIsDisabled(true); setDecreaseIsLoading(true) }}>
                                -
                            </button>
                            <button
                                disabled={isDisabled}
                                onClick={() => { setIsDisabled(true); setIncreaseIsLoading(true) }}>
                                +
                            </button>
                        </div>
                        <div className={STYLE.removeButton}>
                            <button
                                onClick={() => setRemoveLoading(true)}
                            >
                                {!removeLoading && <HiOutlineTrash className={STYLE.bin} />}
                                {removeLoading && <span className={STYLE.secondLoader}></span>}
                            </button>
                        </div>
                    </div>
                    <div className={STYLE.quantityAndFinalPrice}>
                        <div className={STYLE.itemQuantity}>
                            {quantity > 0 && (
                                <div style={{ display: "flex", width: "25px", height: "25px" }}>

                                    {(!increaseIsLoading && !decreaseIsLoading) && <div>x{quantity}</div>}
                                    {(increaseIsLoading || decreaseIsLoading) && <span className={STYLE.secondLoader}></span>}
                                    {/* x{quantity} */}
                                </div>
                            )}
                        </div>
                        <div>
                            {item.discount ? formatCurrency(newPrice(item.price, item.discount) * quantity) : formatCurrency(item.price * quantity)}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}