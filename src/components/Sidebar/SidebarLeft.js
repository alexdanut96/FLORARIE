import React from "react"
import { Link } from "react-router-dom"
import STYLE from "./SidebarLeft.module.css"
import { VscClose } from "react-icons/vsc"
import { Collapsible } from "../Collapsible/Collapsible"
import { navBarItems } from "../../navbar-components/NavBarItems"
import { promo } from "../../Pages/Product Category/Oferte si Promotii/Promo_items"
import logo from "../../images/logo_white.jpg"
import { useShoppingCart } from "../Header/Context/ShoppingCartContext"
import { FooterCardComponents } from "../../Pages/Footer Category/Footer Card Components/FooterCardComponents"
import { useAuth } from "../Header/Context/AuthContext"

export function SidebarLeft() {

    const { openTheMenu, menuIsOpen } = useShoppingCart()
    const { currentUser, userEmail, } = useAuth()

    return (
        <div
            style={{ transform: menuIsOpen ? "translateX(0%)" : "translateX(-100%)" }}
            className={STYLE.container}>
            <div className={STYLE.sidebarTop}>
                <Link onClick={openTheMenu} to="/"><img src={logo} alt="logo" /></Link>
                <button
                    onClick={openTheMenu}
                    className={STYLE.closeButton}>
                    <VscClose />
                </button>


            </div>
            <div className={STYLE.sidebarPromo}>
                {promo.map(item => {
                    return (
                        <Link to={item.path} onClick={openTheMenu} key={item.id}><div>{item.name}</div></Link>
                    )
                })}
            </div>
            <div className={STYLE.sidebarCategory}>
                {navBarItems.map(item1 => {
                    return (
                        <Collapsible key={item1.id} label={item1.name}>
                            {item1.subRoutes.map(item2 => {
                                return (
                                    <Link to={item2.path} onClick={openTheMenu} key={item2.id}><div>{item2.name}</div></Link>
                                )
                            })}
                        </Collapsible>
                    )
                })}
            </div>
            <div className={STYLE.sidebarBottom} >
                {!userEmail ?
                    <Link
                        className={STYLE.logoutAccount}
                        onClick={openTheMenu} to={FooterCardComponents[5].path}>Cont
                    </Link> :
                    <Link
                        onClick={openTheMenu}
                        to="/account/profile"
                        className={STYLE.userAccoutEmail}>
                        <div className={STYLE.greetings}>Salut,</div>
                        <div className={STYLE.userAccount}>{currentUser.email}!</div>
                    </Link>
                }
            </div>

        </div>
    )
}