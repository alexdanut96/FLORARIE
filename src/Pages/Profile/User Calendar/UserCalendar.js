import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import STYLE from "../User.module.css"
import { ImUserTie } from "react-icons/im"
import { BsArrowLeftShort } from "react-icons/bs"

export function Calendar() {

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
        calendarRef.current.style.color = "darkmagenta"
    })

    return (

        <div className={STYLE.area}>
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
                            // style={{ display: calendar ? "block" : "none" }}
                            className={STYLE.propContainer}>
                            <Link to="/account/profile">
                                <button className={STYLE.goBack}>
                                    <BsArrowLeftShort className={STYLE.arrowLeftIcon} />
                                    <div
                                    // onClick={() => showProfile(profileRef)}
                                    >
                                        Intoarcere</div>
                                </button>
                            </Link>
                            <div className={STYLE.propTitle}>
                                <div>Calendar</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}