import React, { useContext } from "react";

const OpenTheCartFunction = React.createContext()
const OpenTheMenuFunction = React.createContext()
const CartValue = React.createContext()
const MenuValue = React.createContext()
const WindowWidthCheck = React.createContext()

export function useOpenTheCart() {
    return useContext(OpenTheCartFunction)
}

export function useOpenTheMenu() {
    return useContext(OpenTheMenuFunction)
}

export function useCartValue() {
    return useContext(CartValue)
}

export function useMenuValue() {
    return useContext(MenuValue)
}

export function useWindowWidthCart() {
    return useContext(WindowWidthCheck)
}

export function ShoppingCartContext({ children }) {

    window.addEventListener("resize", checkWindowWidth)


    const [isOpen, setIsOpen] = React.useState(false)
    const [menuIsOpen, setMenuIsOpen] = React.useState(false)

    function openTheMenu() {
        setMenuIsOpen(!menuIsOpen)
    }

    function openTheCart() {
        setIsOpen(!isOpen)
    }

    function checkWindowWidth() {
        if (window.innerWidth >= 1024) {
            setMenuIsOpen(false)
        }
    }


    return (
        <OpenTheCartFunction.Provider value={openTheCart}>
            <OpenTheMenuFunction.Provider value={openTheMenu}>
                <CartValue.Provider value={isOpen}>
                    <MenuValue.Provider value={menuIsOpen}>
                        <WindowWidthCheck.Provider value={checkWindowWidth}>
                            {children}
                        </WindowWidthCheck.Provider>
                    </MenuValue.Provider>
                </CartValue.Provider>
            </OpenTheMenuFunction.Provider>
        </OpenTheCartFunction.Provider>
    )
}