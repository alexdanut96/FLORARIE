import React, { useContext, useState } from "react";

const ShoppingCartContext = React.createContext()
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false)

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function openTheMenu() {
        setMenuIsOpen(!menuIsOpen)
    }

    function openTheCart() {
        setIsOpen(!isOpen)
    }

    const value = {
        openTheCart,
        openTheMenu,
        isOpen,
        menuIsOpen
    }


    return (
        <ShoppingCartContext.Provider value={value}>
            {children}
        </ShoppingCartContext.Provider>
    )
}