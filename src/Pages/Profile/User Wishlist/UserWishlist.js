import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import STYLE from "../User.module.css"
import { ImUserTie } from "react-icons/im"
import { BsArrowLeftShort } from "react-icons/bs"
import { ContentCardMax } from "../../../components/Content/ContentCardMax";
import { ContentCardMid } from "../../../components/Content/ContentCardMid";
import { ContentCardMin } from "../../../components/Content/ContentCardMin";
import allItems from "../../../data/Items.json"
import { useModify } from "../../../components/Header/Context/AddToCartContext";

export function Wishlist() {

    const { favoriteItems } = useModify()

    const profileRef = useRef()
    const addressRef = useRef()
    const orderRef = useRef()
    const cardRef = useRef()
    const settingsRef = useRef()
    const calendarRef = useRef()
    const authRef = useRef()
    const clubRef = useRef()
    const myCompaniesRef = useRef()
    const wishlistRef = useRef()

    useEffect(() => {

        const productMax = document.querySelectorAll(`.${STYLE.productMax}>*`)
        const productMid = document.querySelectorAll(`.${STYLE.productMid}>*`)
        const productMin = document.querySelectorAll(`.${STYLE.productMin}>*`)
        const showMoreText = document.querySelectorAll(`.${STYLE.showMoreText}`)
        const button = document.querySelectorAll(`.${STYLE.button}`)
        let i
        let index = 11

        function showMore() {
            for (i = 0; i <= productMax.length - 1; i++) {
                if (i <= index) {
                    productMax[i].style.display = "flex"
                    productMid[i].style.display = "flex"
                    productMid[i].style.justifyContent = "center"
                    productMin[i].style.display = "flex"
                }
            }
            if (index >= productMax.length - 1) {
                index = productMax.length - 1
            }
            showMoreText[0].innerHTML = `Afiseaza ${index + 1} din ${productMax.length}`
            index = index + 12
        }
        showMore()

        button[0].addEventListener("click", showMore)
    })

    useEffect(() => {
        wishlistRef.current.style.color = "darkmagenta"
    })

    return (

        < div className={STYLE.area} >
            <div className={STYLE.container}>
                <div className={STYLE.content}>

                    <div className={STYLE.columnOne}>
                        <div className={STYLE.columnOneContent}>
                            <div className={STYLE.profileTitle}>
                                <ImUserTie className={STYLE.userIcon} />
                                <div className={STYLE.title}>Salut!</div>
                            </div>
                            <div className={STYLE.accountProps}>

                                <Link
                                    to="/account/profile"
                                    ref={profileRef}
                                    className={STYLE.propsOne}>Profil
                                </Link>
                                <Link
                                    to="/account/addresses"
                                    ref={addressRef}
                                    className={STYLE.propsTwo}>Adrese
                                </Link>
                                <Link
                                    to="/account/orders"
                                    ref={orderRef}
                                    className={STYLE.propsThree}>Comenzile mele
                                </Link>
                                <Link
                                    to="/account/cards"
                                    ref={cardRef}
                                    className={STYLE.propsFour}>Carduri de credit
                                </Link>
                                <Link
                                    to="/account/notification-settings"
                                    ref={settingsRef}
                                    className={STYLE.propsFive}>Setari notificari
                                </Link>
                                <Link
                                    to="/account/calendar"
                                    ref={calendarRef}
                                    className={STYLE.propsSix}>Calendar
                                </Link>
                                <Link
                                    to="/account/authentication"
                                    ref={authRef}
                                    className={STYLE.propsSeven}>Autentificare
                                </Link>
                                <Link
                                    to="/account/Club"
                                    ref={clubRef}
                                    className={STYLE.propsEight}>Club
                                </Link>
                                <Link
                                    to="/account/my-companies"
                                    ref={myCompaniesRef}
                                    className={STYLE.propsNine}>Companiile mele
                                </Link>
                                <Link
                                    to="/account/wishlist"
                                    ref={wishlistRef}
                                    className={STYLE.propsTen}>My Whishlist
                                </Link>
                                <div
                                    style={{ color: "red" }}
                                    className={STYLE.propsEleven}>Deconecteaza-te
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className={STYLE.columnTwo}>

                        <div
                            className={STYLE.propContainer}>
                            <Link to="/account/profile">
                                <button className={STYLE.goBack}>
                                    <BsArrowLeftShort className={STYLE.arrowLeftIcon} />
                                    <div
                                    >Intoarcere</div>
                                </button>
                            </Link>
                            <div className={STYLE.propTitle}>
                                <div>My Whishlist</div>
                            </div>


                            <div className={STYLE.productMax}>

                                {
                                    favoriteItems.map(item => {
                                        const found = allItems.find(element => {
                                            return element.productCode === item.productCode
                                        })
                                        return <ContentCardMax key={found.productCode} {...found} />

                                    })

                                }

                            </div>

                            <div className={STYLE.productMid}>

                                {
                                    favoriteItems.map(item => {
                                        const found = allItems.find(element => {
                                            return element.productCode === item.productCode
                                        })
                                        return <ContentCardMid key={found.productCode} {...found} />

                                    })

                                }

                            </div>

                            <div className={STYLE.productMin}>

                                {
                                    favoriteItems.map(item => {
                                        const found = allItems.find(element => {
                                            return element.productCode === item.productCode
                                        })
                                        return <ContentCardMin key={found.productCode} {...found} />

                                    })

                                }

                            </div>


                            <div className={STYLE.showMore}>
                                <div className={STYLE.showMoreText}></div>
                                <div><button className={STYLE.button}>ARATA MAI MULT</button></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}