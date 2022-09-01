import React from "react";
import STYLE from "./CartItem.module.css"
import { HiOutlineTrash } from "react-icons/hi"
import { Link } from "react-router-dom";
import { formatCurrency, newPrice } from "../../utilities/formatCurrency";
import items from "../../data/Items.json"
import { useModify } from "../Header/Context/AddToCartContext";
import { useOpenTheCart } from "../Header/Context/ShoppingCartContext";

export function CartItem({ productCode, quantity }) {
    const isOpen = useOpenTheCart()
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useModify()
    const item = items.find(i => i.productCode === productCode)
    if (item === undefined) return null

    return (
        <div className={STYLE.container}>
            <div className={STYLE.itemContainer}>
                <Link
                    onClick={isOpen}
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
                            <button onClick={() => decreaseCartQuantity(productCode)}>-</button>
                            <button onClick={() => increaseCartQuantity(productCode)}>+</button>
                        </div>
                        <div className={STYLE.removeButton}>
                            <button onClick={() => removeFromCart(productCode)}><HiOutlineTrash className={STYLE.bin} /></button>
                        </div>
                    </div>
                    <div className={STYLE.quantityAndFinalPrice}>
                        <div className={STYLE.itemQuantity}>
                            {quantity > 0 && (
                                <div>
                                    x{quantity}
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