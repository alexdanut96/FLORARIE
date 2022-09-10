import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import STYLE from "../User.module.css"
import { ImUserTie } from "react-icons/im"
import { BsArrowLeftShort } from "react-icons/bs"
import { useUserAccount } from "../../../components/Header/Context/UserAccountContext";
import { useAuth } from "../../../components/Header/Context/AuthContext";

export function UserAddress() {

    const { logout, hideEmail } = useAuth()
    const [logoutError, setLogoutError] = useState("")

    const {
        demo,
        removeAddress
    } = useUserAccount()

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

    async function handleLogout() {
        setLogoutError("")

        try {
            await logout()
            window.location.reload()
            hideEmail()
        } catch {
            if (logoutError) {
                setLogoutError("Deconectarea a esuat")
            }
        }
    }

    useEffect(() => {
        addressRef.current.style.color = "darkmagenta"
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
                                    onClick={handleLogout}
                                    style={{ color: "red" }}
                                    className={STYLE.propsEleven}>Deconecteaza-te
                                </div>


                            </div>
                        </div>
                    </div>













                    <div className={STYLE.columnTwo}>

                        <div
                            // style={{ display: address ? "block" : "none" }}
                            className={STYLE.propContainer}>
                            <Link style={{ color: "#559137" }} to="/account/profile">
                                <button className={STYLE.goBack}>
                                    <BsArrowLeftShort className={STYLE.arrowLeftIcon} />
                                    <div
                                    // onClick={() => showProfile(profileRef)}
                                    >
                                        Intoarcere</div>

                                </button>
                            </Link>

                            <div className={STYLE.propTitle}>
                                <div>Adrese</div>
                                <Link
                                    style={{ display: demo.city === "" ? "block" : "none" }}
                                    className={STYLE.addAddressButtonLink} to="/account/addresses/edit">
                                    <button
                                        type="submit"
                                        // disabled={loading}
                                        className={STYLE.addAddressButton}>
                                        <div className={STYLE.addAddressButtonText}>Adauga adresa</div>
                                    </button>
                                </Link>
                            </div>

                        </div>

                        <div
                            style={{ display: demo.city === "" ? "block" : "none" }}
                            className={STYLE.noAddressTitle}>Nu exista adrese adaugate!
                        </div>

                        <div
                            style={{ display: demo.city === "" ? "none" : "block" }}
                            className={STYLE.addressInfoContainer}>
                            <div className={STYLE.addressInfoContent}>
                                <div className={STYLE.addressData}>
                                    <div>Țară:&nbsp;</div>
                                    {demo ?
                                        <div>{demo.country}</div> : <div></div>
                                    }
                                </div>

                                <div className={STYLE.addressData}>
                                    <div>Oraș:&nbsp;</div>
                                    {demo ?
                                        <div>{demo.city}</div> : <div></div>
                                    }
                                </div>

                                <div className={STYLE.addressData}>
                                    <div>Sector:&nbsp;</div>
                                    {demo ?
                                        <div>{demo.sector}</div> : <div></div>
                                    }
                                </div>

                                <div className={STYLE.addressData}>
                                    <div>Stradă:&nbsp;</div>
                                    {demo ?
                                        <div>{demo.street}</div> : <div></div>
                                    }
                                </div>

                                <div className={STYLE.addressData}>
                                    <div>Număr:&nbsp;</div>
                                    {demo ?
                                        <div>{demo.streetNumber}</div> : <div></div>
                                    }
                                </div>

                                <div className={STYLE.addressData}>
                                    <div>Număr de telefon destinatar:&nbsp;</div>
                                    {demo ?
                                        <div>{demo.receiverPhoneNumber}</div> : <div></div>
                                    }
                                </div>

                                <div className={STYLE.addressData}>
                                    <div>Nume destinatar:&nbsp;</div>
                                    {demo ?
                                        <div>{demo.receiver}</div> : <div></div>
                                    }
                                </div>

                                <div className={STYLE.addressButtons}>
                                    <Link className={STYLE.editAddress} to="/account/addresses/edit">
                                        <button
                                            type="submit"
                                            // disabled={loading}
                                            className={STYLE.addAddressButton}>
                                            <div className={STYLE.addAddressButtonText}>Editează</div>
                                        </button>
                                    </Link>

                                    <button
                                        onClick={removeAddress}
                                        type="submit"
                                        // disabled={loading}
                                        className={STYLE.addAddressButton}>
                                        <div className={STYLE.addAddressButtonText}>Sterge adresa</div>
                                    </button>
                                </div>





                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}