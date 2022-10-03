import React, { useContext, useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

const Modify = React.createContext()
export function useModify() {
    return useContext(Modify)
}

export function AddToCartContext({ children }) {

    const [addToFavorites, setAddToFavorite] = useState(false)

    const [favoriteItems, setFavoriteItems] = useLocalStorage("favorite-items", [])

    const [cartItems, setCartItems] = useLocalStorage("shopping-cart", [])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    const favAmount = favoriteItems.reduce(
        (amount, item) => item.amount + amount,
        0
    )

    function addToWishlistButton() {
        setAddToFavorite(true)
    }

    function removeFromWishlistButton() {
        setAddToFavorite(false)
    }

    function getFavItemValue(productCode) {
        return favoriteItems.find(item => item.productCode === productCode)?.value || false
    }

    function addToWishlist(productCode) {
        setAddToFavorite(true)
        setFavoriteItems(currItems => {
            if (currItems.find(item => item.productCode === productCode) === undefined) {
                return [...currItems, { productCode, value: true }]
            } else {
                return currItems.map(item => {
                    if (item.productCode === productCode) {
                        return { ...item }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromWishlist(productCode) {
        setAddToFavorite(false)
        setFavoriteItems(currItems => {
            return currItems.filter(item => item.productCode !== productCode)
        })
    }

    function getItemQuantity(productCode) {
        return cartItems.find(item => item.productCode === productCode)?.quantity || 0
    }


    function increaseCartQuantity(productCode) {
        setCartItems(currItems => {
            if (currItems.find(item => item.productCode === productCode) === undefined) {
                return [...currItems, { productCode, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.productCode === productCode) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(productCode) {
        setCartItems(currItems => {
            if (currItems.find(item => item.productCode === productCode)?.quantity === 1) {
                return currItems.filter(item => item.productCode !== productCode)
            } else {
                return currItems.map(item => {
                    if (item.productCode === productCode) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(productCode) {
        setCartItems(currItems => {
            return currItems.filter(item => item.productCode !== productCode)
        })
    }


    return (

        <Modify.Provider value={{
            cartItems,
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            addToWishlistButton,
            removeFromWishlistButton,
            addToWishlist,
            removeFromWishlist,
            getFavItemValue,
            cartQuantity,
            favAmount,
            addToFavorites,
            favoriteItems,
        }}>
            {children}
        </Modify.Provider>

    )
}