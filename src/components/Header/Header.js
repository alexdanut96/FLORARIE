import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo_white.jpg"
import STYLE from "./Header.module.css"
import { FiHeart } from "react-icons/fi"
import { FaRegUser } from "react-icons/fa"
import { BiShoppingBag } from "react-icons/bi"
import { BsFillPencilFill } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { VscClose } from "react-icons/vsc"
import { AiOutlineMenu } from "react-icons/ai"
import { MdOutlineArrowForward } from "react-icons/md"
import { useCartValue, useOpenTheCart } from "./Context/ShoppingCartContext";
import { useMenuValue, useOpenTheMenu } from "./Context/ShoppingCartContext";
import { useModify } from "./Context/AddToCartContext";
import { useSendTerm, useButtonTerm, useInputText, useClickButton, useDeleteTerm, useCheckIsTrue, useIsTrueValue, useWindowWidthCheck } from "./Context/StateContext";

export function Header() {

    const { cartQuantity } = useModify()

    const getTerm = useSendTerm()
    const showButton = useButtonTerm()
    const inputTerm = useInputText()
    const clickButton = useClickButton()
    const deleteTerm = useDeleteTerm()
    const checkIsTrue = useCheckIsTrue()
    const IsTrue = useIsTrueValue()
    const setToFalse = useWindowWidthCheck()
    const openTheCartBox = useOpenTheCart()
    const openTheMenuBox = useOpenTheMenu()
    const isOpen = useCartValue()
    const isOpenMenu = useMenuValue()
    let InputContainerRef = useRef()
    // const term = useInputTerm()

    useEffect(() => {

        const searchFormContainer = document.querySelectorAll(`.${STYLE.searchFormContainer}`)
        const searchBoxContent = document.querySelectorAll(`.${STYLE.searchBoxContent}`)
        const deleteSearchInput = document.querySelectorAll(`.${STYLE.deleteSearchInput}`)
        const searchInput = document.querySelectorAll(`.${STYLE.searchInput}`)
        const searchInputMinSize = document.querySelectorAll(`.${STYLE.searchInputMinSize}`)
        const cartFormButton = document.querySelectorAll(`.${STYLE.cartFormButton}`)
        const background = document.querySelectorAll(`#${STYLE.absoluteBackground}`)
        const backgroundMenu = document.querySelectorAll(`#${STYLE.absoluteBackgroundMenu}`)
        const menuButton = document.querySelectorAll(`.${STYLE.menuButton}`)
        const body = document.querySelectorAll("body")

        window.addEventListener("resize", setToFalse)
        document.addEventListener("click", click)
        searchFormContainer[0].addEventListener("mouseenter", enter)
        searchFormContainer[0].addEventListener("mouseleave", leave)
        deleteSearchInput[0].addEventListener("click", deleteSearchText)
        cartFormButton[0].addEventListener("click", setBackground(isOpen))
        menuButton[0].addEventListener("click", setBackgroundMenu(isOpenMenu))

        searchInputMinSize[0].focus()

        function setBackground(isOpen) {
            if (isOpen) {
                body[0].style.overflow = "hidden"
                background[0].style.display = "flex"
            } else {
                body[0].style.overflow = "auto"
                background[0].style.display = "none"
            }
        }

        function setBackgroundMenu(isOpenMenu) {
            cartFormButton[0].removeEventListener("click", setBackground(isOpen))
            if (isOpenMenu) {
                body[0].style.overflow = "hidden"
                backgroundMenu[0].style.display = "flex"
            } else {
                body[0].style.overflow = "auto"
                backgroundMenu[0].style.display = "none"
                cartFormButton[0].addEventListener("click", setBackground(isOpen))
            }
        }

        function enter() {
            searchBoxContent[0].style.transform = "translateX(0)"

        }

        function leave() {
            if (!inputTerm) {
                searchBoxContent[0].style.transform = "translateX(-100%)"

            }
        }

        function click(event) {
            if (InputContainerRef.current.contains(event.target)) {
                searchFormContainer[0].removeEventListener("mouseenter", enter)
                searchFormContainer[0].removeEventListener("mouseleave", leave)
            } else if (!InputContainerRef.current.contains(event.target)) {
                if (showButton) {
                    searchBoxContent[0].style.transform = "translateX(-100%)"
                    searchFormContainer[0].addEventListener("mouseenter", enter)
                    searchFormContainer[0].addEventListener("mouseleave", leave)
                }
            }
        }

        function deleteSearchText() {
            searchInput[0].focus()
            searchInput[0].value = ""
            deleteSearchInput[0].style.color = "transparent"
            deleteSearchInput[0].style.cursor = "default"
        }

        if (!inputTerm) {
            deleteSearchInput[0].style.color = "transparent"
            deleteSearchInput[0].style.cursor = "default"
        } else {
            deleteSearchInput[0].style.color = "black"
            deleteSearchInput[0].style.cursor = "pointer"
        }

        if (window.innerWidth >= 1024) {
            searchInputMinSize[0].value = searchInput[0].value
        }

    })


    return (
        <div className={STYLE.container}>
            <div
                onClick={openTheCartBox}
                id={STYLE.absoluteBackground}>
            </div>
            <div
                onClick={openTheMenuBox}
                id={STYLE.absoluteBackgroundMenu}>
            </div>
            <div
                className={STYLE.topMinSize}>Livrare in toata tara in 2-4 ore.
            </div>

            <div className={STYLE.middle}>
                <div
                    style={{ display: IsTrue ? "flex" : "none" }}
                    className={STYLE.searchContainerMinSize}>
                    <div className={STYLE.searchContentMinSize}>
                        <input
                            className={STYLE.searchInputMinSize}
                            type="text"
                            placeholder="Ce flori cauti?"
                            onChange={getTerm}
                            onKeyDown={showButton}
                        />

                        <Link
                            to={`/search/${inputTerm}`}
                            className={STYLE.enterButtonDiv}
                            style={{ display: inputTerm === "" ? "none" : "flex" }}
                            onClick={clickButton}>
                            <button className={STYLE.enterButton}>
                                <MdOutlineArrowForward />
                            </button>
                        </Link>


                        <button
                            className={STYLE.enterButton}
                            style={{ display: inputTerm === "" ? "inline-block" : "none" }}>
                            <MdOutlineArrowForward />
                        </button>

                    </div>
                </div>
                <div className={STYLE.middleContent}>

                    <div className={STYLE.searchFormMinSize}>
                        <button
                            onClick={openTheMenuBox}
                            className={STYLE.menuButton}>
                            <AiOutlineMenu />
                        </button>
                        <button
                            className={STYLE.showButton}
                            onClick={checkIsTrue}>
                            <BsSearch />
                            <div className={STYLE.iconText}>Cauta</div>
                        </button>
                    </div>


                    <div
                        ref={InputContainerRef}
                        className={STYLE.searchFormContainer}>



                        <div className={STYLE.searchIconContainer}>

                            <Link
                                to={`/search/${inputTerm}`}
                                style={{ display: inputTerm === "" ? "none" : "inline-block", textDecoration: "none" }}>
                                <button
                                    className={STYLE.formButton}
                                    onClick={clickButton}>
                                    <BsSearch />
                                    <div className={STYLE.iconText}>Cauta</div>
                                </button>
                            </Link>

                            <div style={{ display: inputTerm === "" ? "inline-block" : "none" }}>
                                <button
                                    className={STYLE.formButton}>
                                    <BsSearch />
                                    <div className={STYLE.iconText}>Cauta</div>
                                </button>
                            </div>
                        </div>


                        <div className={STYLE.inputContainer}>
                            <div className={STYLE.searchBoxContent}>
                                <input

                                    className={STYLE.searchInput}
                                    type="text"
                                    placeholder="Ce flori cauti?"
                                    onChange={getTerm}
                                    onKeyDown={showButton}
                                />

                                <button
                                    className={STYLE.deleteSearchInput}
                                    onClick={deleteTerm}
                                >
                                    <VscClose />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={STYLE.logoContainer}>
                        <Link to="/"><img className={STYLE.logo} src={logo} alt="logo" /></Link>
                    </div>

                    <div className={STYLE.userForm}>

                        <button
                            className={STYLE.formButton}>
                            <FaRegUser />
                            <div className={STYLE.iconText}>Login</div>
                        </button>
                        <button
                            className={STYLE.formButton}>
                            <FiHeart />
                            <div className={STYLE.iconText}>Favorite</div>
                        </button>
                        <button
                            onClick={openTheCartBox}
                            className={STYLE.cartFormButton}>
                            <BiShoppingBag />
                            <div className={STYLE.iconText}>Cos</div>
                            {cartQuantity > 0 &&
                                <div className={STYLE.itemCount}>
                                    <div>{cartQuantity}</div>
                                </div>}
                        </button>

                    </div>
                </div>

            </div>
            <div className={STYLE.bottomMinSize}>
                <div className={STYLE.text}>
                    <div>Cauta orasul de livrare &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <BsFillPencilFill />
                </div>
            </div>
        </div >
    )
}