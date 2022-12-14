import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo_white.jpg"
import STYLE from "./Header.module.css"
import { FiHeart } from "react-icons/fi"
import { FaRegUser } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { BsFacebook } from "react-icons/bs"
import { BiShoppingBag } from "react-icons/bi"
import { BsArrowLeftShort } from "react-icons/bs"
import { BsFillPencilFill } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { VscClose } from "react-icons/vsc"
import { AiOutlineMenu } from "react-icons/ai"
import { MdOutlineArrowForward } from "react-icons/md"
import { useShoppingCart } from "./Context/ShoppingCartContext";
import { useModify } from "./Context/AddToCartContext";
import { useAuth } from "./Context/AuthContext";
import { useSearch } from "./Context/SearchContext";


export function Header() {

    const minInputRef = useRef()
    const maxInputRef = useRef()
    const maxSearchBtnRef = useRef()
    const accountFormRef = useRef()
    const searchContainerMinSizeRef = useRef()
    const singupEmailRef = useRef()
    const singupPasswordRef = useRef()
    const singupPasswordConfirmRef = useRef()
    const singinEmailRef = useRef()
    const singinPasswordRef = useRef()
    const resetPasswordRef = useRef()
    let InputContainerRef = useRef()

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [singupError, setSingupError] = useState("")
    const [loginError, setLoginError] = useState("")
    const [logoutError, setLogoutError] = useState("")
    const [singupSuccess, setSingupSuccess] = useState("")
    const [loginSuccess, setLoginSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const [showSingupForm, setShowSingupForm] = useState(false)
    const [showSinginForm, setShowSinginForm] = useState(false)
    const [showResetPasswordForm, setShowResetPasswordForm] = useState(false)
    const [loginBtnIsOpen, setLoginBtnIsOpen] = useState(false)
    const [resetPasswordMessage, setResetPasswordMessage] = useState("")
    const [resetPasswordError, setResetPasswordError] = useState("")
    const [openSearchBar, setOpenSearchBar] = useState(false)

    const { cartQuantity } = useModify()
    const { deleteTerm, handleSearch, deleteSearchText, showCloseBtn } = useSearch()
    const { openTheCart, openTheMenu, isOpen, menuIsOpen } = useShoppingCart()
    const { signup, login, logout, currentUser, userEmail, showEmail, hideEmail, resetPassword } = useAuth()


    function backToSingup() {
        setShowSingupForm(!showSingupForm)
        setShowSinginForm(!showSinginForm)
    }

    function showUserChoices() {
        setShowSingupForm(false)
        setShowSinginForm(false)
        setShowResetPasswordForm(false)
    }

    function ShowResetPswForm() {
        setShowResetPasswordForm(true)
        setShowSingupForm(false)
        setShowSinginForm(false)
    }

    function HideResetPswForm() {
        setShowResetPasswordForm(false)
        setShowSinginForm(true)
    }

    async function singupSubmit(e) {
        e.preventDefault()

        if (singupPasswordRef.current.value !== singupPasswordConfirmRef.current.value) {
            return setSingupError("Parolele sunt diferite!")
        }

        try {
            setSingupError("")
            setLoading(true)
            await signup(singupEmailRef.current.value, singupPasswordRef.current.value)
            logout()
            setShowSingupForm(false)
            setShowSinginForm(true)
            setSingupSuccess("Contul a fost creat cu succes!")

            singinEmailRef.current.value = ""
            singinPasswordRef.current.value = ""
        } catch {
            setSingupSuccess("")
            setSingupError("Nu s-a putut crea contul!")
        }
        setLoading(false)
    }

    async function loginSubmit(e) {
        e.preventDefault()

        try {
            setLoginError("")
            setLoginSuccess("")
            setLoading(true)
            await login(singinEmailRef.current.value, singinPasswordRef.current.value)
            window.location.reload()
            setSingupSuccess("")
            setLoginBtnIsOpen(false)
            setLoginSuccess("Te-ai logat cu succes!")
            showEmail()
        } catch {
            setLoginError("Email ??i/sau parol?? gre??ite!")
        }
        setLoading(false)
    }

    async function handleLogout() {
        setLogoutError("")

        try {
            await logout()
            window.location.reload()
            setLoginBtnIsOpen(false)
            hideEmail()
            setShowSingupForm(false)
            setShowSinginForm(false)
        } catch {
            if (logoutError) {
                setLogoutError("Deconectarea a esuat")
            }
        }
    }

    async function resetPassowrdSubmit(e) {
        e.preventDefault()
        try {
            setResetPasswordMessage("")
            setResetPasswordError("")
            setLoading(true)
            await resetPassword(resetPasswordRef.current.value)
            setResetPasswordMessage("Link-ul de restare al parolei a fost trimis pe adresa dvs. de email")
        } catch {
            setResetPasswordError("Adresa de e-mail introdusa nu a fost gasita!")
        }
        setLoading(false)
    }

    useEffect(() => {

        const searchFormContainer = document.querySelectorAll(`.${STYLE.searchFormContainer}`)
        const searchBoxContent = document.querySelectorAll(`.${STYLE.searchBoxContent}`)
        const searchInputMinSize = document.querySelectorAll(`.${STYLE.searchInputMinSize}`)
        const cartFormButton = document.querySelectorAll(`.${STYLE.cartFormButton}`)
        const background = document.querySelectorAll(`#${STYLE.absoluteBackground}`)
        const backgroundMenu = document.querySelectorAll(`#${STYLE.absoluteBackgroundMenu}`)
        const menuButton = document.querySelectorAll(`.${STYLE.menuButton}`)
        const body = document.querySelectorAll("body")

        document.addEventListener("click", click)
        searchFormContainer[0].addEventListener("mouseenter", enter)
        searchFormContainer[0].addEventListener("mouseleave", leave)
        cartFormButton[0].addEventListener("click", setBackground(isOpen))
        menuButton[0].addEventListener("click", setBackgroundMenu(menuIsOpen))

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

        function setBackgroundMenu(menuIsOpen) {
            cartFormButton[0].removeEventListener("click", setBackground(isOpen))
            if (menuIsOpen) {
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
            if (!showCloseBtn) {
                searchBoxContent[0].style.transform = "translateX(-100%)"
            }
        }

        function click(event) {
            if (InputContainerRef.current.contains(event.target)) {
                searchFormContainer[0].removeEventListener("mouseenter", enter)
                searchFormContainer[0].removeEventListener("mouseleave", leave)
            } else if (!InputContainerRef.current.contains(event.target)) {
                searchBoxContent[0].style.transform = "translateX(-100%)"
                searchFormContainer[0].addEventListener("mouseenter", enter)
                searchFormContainer[0].addEventListener("mouseleave", leave)
            }
        }

    })

    useEffect(() => {
        if (!showSingupForm) {
            setSingupError("")
        }

        if (!showSinginForm) {
            setLoginError("")
            setLoginSuccess("")
        }

        if (!showSingupForm && !showSinginForm) {
            setLoginSuccess("")
            setSingupSuccess("")
        }

        if (loginError) {
            setSingupSuccess("")
        }

        if (!showResetPasswordForm) {
            setResetPasswordMessage("")
            setResetPasswordError("")
        }
    }, [showSingupForm, showSinginForm, loginError, showResetPasswordForm])

    useEffect(() => {
        let handler = (event) => {
            if (!accountFormRef.current.contains(event.target)) {
                setLoginBtnIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    useEffect(() => {
        let handler = (event) => {
            if (!searchContainerMinSizeRef.current.contains(event.target)) {
                setOpenSearchBar(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    useEffect(() => {
        let handler = () => {
            setWindowWidth(window.innerWidth)
            if (windowWidth >= 1024) {
                setOpenSearchBar(false)
            }
        }
        window.addEventListener("resize", handler)

        return () => {
            window.removeEventListener("resize", handler)
        }
    }, [windowWidth])


    return (
        <div className={STYLE.container}>
            <div
                onClick={openTheCart}
                id={STYLE.absoluteBackground}>
            </div>
            <div
                onClick={openTheMenu}
                id={STYLE.absoluteBackgroundMenu}>
            </div>
            <div
                className={STYLE.topMinSize}>Livrare in toata tara in 2-4 ore.
            </div>

            <div className={STYLE.middle}>
                <form
                    ref={searchContainerMinSizeRef}
                    style={{ display: openSearchBar ? "flex" : "none" }}
                    className={STYLE.searchContainerMinSize}>

                    <div className={STYLE.searchContentMinSize}>
                        <input
                            ref={minInputRef}
                            className={STYLE.searchInputMinSize}
                            type="text"
                            placeholder="Ce flori cauti?"
                        />

                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                handleSearch(minInputRef)
                            }}
                            className={STYLE.enterButton}
                        >
                            <MdOutlineArrowForward />
                        </button>


                    </div>
                </form>
                <div className={STYLE.middleContent}>

                    <div className={STYLE.searchFormMinSize}>
                        <button
                            onClick={openTheMenu}
                            className={STYLE.menuButton}>
                            <AiOutlineMenu />
                        </button>
                        <button
                            className={STYLE.showButton}
                            onClick={() => setOpenSearchBar(!openSearchBar)}>
                            <BsSearch />
                            <div className={STYLE.iconText}>Cauta</div>
                        </button>
                    </div>


                    <form
                        ref={InputContainerRef}
                        className={STYLE.searchFormContainer}>

                        <div className={STYLE.searchIconContainer}>

                            <div >
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleSearch(maxInputRef)
                                    }}
                                    className={STYLE.formButton}>
                                    <BsSearch />
                                    <div className={STYLE.iconText}>Cauta</div>
                                </button>
                            </div>
                        </div>

                        <div className={STYLE.inputContainer}>
                            <div className={STYLE.searchBoxContent}>
                                <input
                                    ref={maxInputRef}
                                    className={STYLE.searchInput}
                                    type="text"
                                    placeholder="Ce flori cauti?"
                                    onChange={() => deleteSearchText(maxInputRef)}
                                />

                                <div
                                    style={{ color: showCloseBtn ? "black" : "transparent" }}
                                    ref={maxSearchBtnRef}
                                    className={STYLE.deleteSearchInput}
                                    onClick={() => deleteTerm(maxInputRef)}

                                >
                                    <VscClose />
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className={STYLE.logoContainer}>
                        <Link to="/"><img className={STYLE.logo} src={logo} alt="logo" /></Link>
                    </div>
                    <div className={STYLE.userForm}>
                        <div className={STYLE.loginButtonContainer}>
                            <button

                                id={STYLE.loginButton}
                                className={STYLE.formButton}
                                onClick={() => setLoginBtnIsOpen(!loginBtnIsOpen)}
                            >
                                <FaRegUser />
                                <span className={STYLE.iconText}>
                                    {userEmail ?
                                        "Salut, " +
                                        currentUser.email : "Login"}
                                </span>
                            </button>

















                            {!userEmail ?
                                <div
                                    ref={accountFormRef}
                                    className={STYLE.loginContainer}
                                    style={{ display: loginBtnIsOpen ? "block" : "none" }}>
                                    <div className={STYLE.shape}></div>
                                    <div
                                        style={{
                                            display: showSingupForm || showSinginForm || showResetPasswordForm ? "none" : "flex",
                                        }}

                                        className={STYLE.columnLeft}>
                                        <div className={STYLE.title}>
                                            Alege o op??iune de autentificare
                                        </div>
                                        <button
                                            onClick={() => setShowSingupForm(!showSingupForm)}
                                            className={STYLE.singUpButton}
                                        >
                                            <div className={STYLE.buttonText}>Inregistreaza-te</div>
                                        </button>
                                        <button
                                            onClick={() => setShowSinginForm(!showSinginForm)}
                                            className={STYLE.loginButton}>
                                            <div className={STYLE.buttonText}>Autentifica-te cu e-mailul si parola</div>
                                        </button>
                                        <button className={STYLE.googleButton}>
                                            <SiGmail className={STYLE.googleIcon} />
                                            <div className={STYLE.buttonText}>
                                                Inregistreaza-te cu <strong>Google</strong>
                                            </div>
                                        </button>
                                        <button className={STYLE.facebookButton}>
                                            <BsFacebook className={STYLE.facebookIcon} />
                                            <div className={STYLE.buttonText}>Inregistreaza-te cu <strong>Facebook</strong></div>
                                        </button>
                                    </div>

                                    <form
                                        className={STYLE.singUpForm}
                                        style={{ display: showSingupForm ? "block" : "none" }}
                                        onSubmit={singupSubmit}
                                    >
                                        <div className={STYLE.title}>
                                            Inregistreaza-te
                                        </div>

                                        <input
                                            className={STYLE.emailBox}
                                            type="email"
                                            placeholder="Ex: example@gmail.com"
                                            ref={singupEmailRef}
                                            required
                                        />
                                        <input
                                            className={STYLE.boxPassword}
                                            type="password"
                                            placeholder="Adauga-ti parola"
                                            ref={singupPasswordRef}
                                            required
                                        />
                                        <input
                                            className={STYLE.boxPasswordConfirmation}
                                            type="password"
                                            placeholder="Confirma parola"
                                            ref={singupPasswordConfirmRef}
                                            required
                                        />
                                        <div className={STYLE.forgotPasswordForm}>
                                            <div

                                                onClick={showUserChoices}
                                                className={STYLE.forgotPasswordFormLeft}>
                                                <BsArrowLeftShort />
                                                <div>Inapoi</div>
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className={STYLE.forgotPasswordFormRight}>Inregistreaza-te
                                            </button>
                                        </div>
                                    </form>


                                    <form
                                        className={STYLE.singInForm}
                                        style={{ display: showSinginForm ? "block" : "none" }}
                                        onSubmit={loginSubmit}
                                    >
                                        <div className={STYLE.title}>
                                            Autentifica-te cu e-mailul si parola
                                        </div>
                                        <input
                                            className={STYLE.emailBox}
                                            type="email"
                                            placeholder="Ex: example@gmail.com"
                                            ref={singinEmailRef}
                                            required
                                        />
                                        <input
                                            className={STYLE.boxPassword}
                                            type="password"
                                            placeholder="Adauga-ti parola"
                                            ref={singinPasswordRef}
                                            required
                                        />
                                        <div
                                            onClick={ShowResetPswForm}
                                            className={STYLE.forgotPassword}>
                                            <div>Mi-am uitat parola</div>
                                        </div>
                                        <div className={STYLE.forgotPasswordForm}>
                                            <div
                                                onClick={showUserChoices}
                                                className={STYLE.forgotPasswordFormLeft}>
                                                <BsArrowLeftShort />
                                                <div>Inapoi</div>
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className={STYLE.forgotPasswordFormRight}>Trimite
                                            </button>
                                        </div>
                                        <div
                                            onClick={backToSingup}
                                            className={STYLE.noAccount}>
                                            <div>Nu ai un cont? ??nregistreaz??-te</div>
                                        </div>
                                    </form>


                                    <form
                                        onSubmit={resetPassowrdSubmit}
                                        style={{ display: showResetPasswordForm ? "block" : "none" }}
                                        className={STYLE.forgotPasswordResetForm}>
                                        <div className={STYLE.title}>
                                            Prime??te codul de acces prin e-mail
                                        </div>
                                        <input
                                            ref={resetPasswordRef}
                                            className={STYLE.emailBox}
                                            type="email"
                                            placeholder="Ex: example@gmail.com"
                                            required
                                        />
                                        <div className={STYLE.forgotPasswordForm}>
                                            <div
                                                onClick={HideResetPswForm}
                                                className={STYLE.forgotPasswordFormLeft}>
                                                <BsArrowLeftShort />
                                                <div>Inapoi</div>
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className={STYLE.forgotPasswordFormRight}>Trimite
                                            </button>
                                        </div>
                                    </form>


                                    {singupError &&
                                        <div className={STYLE.errorMessageContainer} >
                                            <div className={STYLE.errorMessage}>{singupError}</div>
                                        </div>
                                    }

                                    {loginError &&
                                        <div className={STYLE.errorMessageContainer} >
                                            <div className={STYLE.errorMessage}>{loginError}</div>
                                        </div>
                                    }
                                    {singupSuccess &&
                                        <div className={STYLE.successMessageContainer} >
                                            <div className={STYLE.successMessage}>{singupSuccess}</div>
                                        </div>
                                    }

                                    {loginSuccess &&
                                        <div className={STYLE.successMessageContainer} >
                                            <div className={STYLE.successMessage}>{loginSuccess}</div>
                                        </div>
                                    }

                                    {resetPasswordMessage &&
                                        <div className={STYLE.successMessageContainer} >
                                            <div className={STYLE.successMessage}>{resetPasswordMessage}</div>
                                        </div>
                                    }

                                    {resetPasswordError &&
                                        <div className={STYLE.errorMessageContainer} >
                                            <div className={STYLE.errorMessage}>{resetPasswordError}</div>
                                        </div>
                                    }


                                </div> :
                                <div
                                    ref={accountFormRef}
                                    className={STYLE.loginContainer}
                                    style={{ display: loginBtnIsOpen ? "block" : "none" }}>
                                    <div className={STYLE.shape}></div>
                                    <div className={STYLE.title}>Contul meu</div>
                                    <div className={STYLE.myAccountContainer}>
                                        <Link
                                            onClick={() => setLoginBtnIsOpen(false)}
                                            to="/account/profile" className={STYLE.myProfile}>Profilul meu
                                        </Link>
                                        <Link
                                            onClick={() => setLoginBtnIsOpen(false)}
                                            to="/account/addresses" className={STYLE.myProfile}>Adrese
                                        </Link>
                                        <Link
                                            onClick={() => setLoginBtnIsOpen(false)}
                                            to="/account/orders" className={STYLE.myProfile}>Comenzile mele
                                        </Link>
                                        <Link
                                            onClick={() => setLoginBtnIsOpen(false)}
                                            to="/account/cards" className={STYLE.myProfile}>Carduri de credit
                                        </Link>
                                        <Link
                                            onClick={() => setLoginBtnIsOpen(false)}
                                            to="/account/notification-settings" className={STYLE.myProfile}>Setari notificari</Link>
                                        <Link
                                            onClick={() => setLoginBtnIsOpen(false)}
                                            to="/account/calendar" className={STYLE.myProfile}>Calendar
                                        </Link>
                                        <Link
                                            onClick={() => setLoginBtnIsOpen(false)}
                                            to="/account/authentication" className={STYLE.myProfile}>Autentificare
                                        </Link>
                                        <Link
                                            onClick={() => setLoginBtnIsOpen(false)}
                                            to="/account/Club" className={STYLE.myProfile}>Club
                                        </Link>
                                        <Link
                                            onClick={() => setLoginBtnIsOpen(false)}
                                            to="/account/my-companies" className={STYLE.myProfile}>Companiile mele
                                        </Link>
                                        <Link
                                            onClick={() => setLoginBtnIsOpen(false)}
                                            to="/account/wishlist" className={STYLE.myProfile}>Lista de favorite
                                        </Link>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className={STYLE.logoutButton}>Deconecteaza-te</button>
                                </div>
                            }













                        </div>
                        {userEmail ?

                            <button className={STYLE.formButton}>
                                <Link className={STYLE.favoriteLink} to="/account/wishlist">
                                    <FiHeart />
                                    <div className={STYLE.iconText}>Favorite</div>
                                </Link>
                            </button>
                            :
                            <button
                                className={STYLE.formButton}>
                                <Link className={STYLE.favoriteLink} to="/login">
                                    <FiHeart />
                                    <div className={STYLE.iconText}>Favorite</div>
                                </Link>
                            </button>

                        }


                        <button
                            onClick={openTheCart}
                            className={STYLE.cartFormButton}>
                            <div className={STYLE.cartItemContainer}>
                                <BiShoppingBag />
                                {cartQuantity > 0 &&
                                    <div className={STYLE.itemCount}>
                                        <div>{cartQuantity}</div>
                                    </div>}
                            </div>
                            <div className={STYLE.iconText}>Cos</div>

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