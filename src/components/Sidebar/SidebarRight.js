import React from "react"
import STYLE from "./SidebarRight.module.css"
import { VscClose } from "react-icons/vsc"
import { useCartValue, useOpenTheCart } from "../Header/Context/ShoppingCartContext"
import { useModify } from "../Header/Context/AddToCartContext"
import { CartItem } from "../Cart Item/CartItem"
import { formatCurrency, newPrice } from "../../utilities/formatCurrency"
import items from "../../data/Items.json"

export function SidebarRight() {

    const { cartItems } = useModify()
    const closeTheCartBox = useOpenTheCart()
    const isOpen = useCartValue()

    return (
        <>
            <div
                style={{ transform: isOpen ? "translateX(0%)" : "translateX(100%)" }}
                className={STYLE.titleContainer}>
                <div className={STYLE.title}>
                    <div>Cos de cumparaturi</div>
                    <VscClose
                        onClick={closeTheCartBox}
                        className={STYLE.closeButton} />
                </div>

            </div>

            <div
                style={{ transform: isOpen ? "translateX(0%)" : "translateX(100%)" }}
                className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.itemContainer}>
                        {cartItems.map(item => (
                            <CartItem key={item.productCode} {...item} />
                        ))}
                    </div>



                    {cartItems.length === 0 &&
                        <div className={STYLE.noResults}>Nu aveti niciun produs in cos</div>
                    }
                </div>

            </div>
            <div
                style={{ transform: isOpen ? "translateX(0%)" : "translateX(100%)" }}
                className={STYLE.checkout}>
                <div className={STYLE.totalSumContainer}>
                    <div className={STYLE.totalSum}>
                        Total:{" "}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = items.find(i => i.productCode === cartItem.productCode)
                                return total + (item?.discount ? newPrice(item.price, item.discount) : item.price || 0) * cartItem.quantity
                            }, 0)
                        )}
                    </div>
                </div>
                {cartItems.length !== 0 &&
                    <div className={STYLE.orderButtonContainer}>
                        <button className={STYLE.orderButton}>Finalizeaza comanda</button>
                    </div>
                }
            </div>
        </>
    )
}