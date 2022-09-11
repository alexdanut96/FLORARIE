import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import STYLE from "../User.module.css"
import { ImUserTie } from "react-icons/im"
import { BsArrowLeftShort } from "react-icons/bs"
import { useUserAccount } from "../../../components/Header/Context/UserAccountContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../components/Header/Context/AuthContext";

export function UserAddressesEdit() {

    const { logout, hideEmail } = useAuth()
    const [logoutError, setLogoutError] = useState("")
    const navigate = useNavigate()

    const {
        setDemoData,
        demo,
        editFormData,
        getUserData,
        setFormData,
        showStreetError,
        showReceiverPhoneNumberError,
        removeStreetError,
        removeStreetNumberError,
        removeReceiverPhoneNumberError,
        removeReceiverError,
        streetError,
        receiverPhoneNumberError,
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
    const countryInputRef = useRef()
    const cityInputRef = useRef()
    const sectorInputRef = useRef()
    const streetRef = useRef()
    const streetNumberRef = useRef()
    const receiverPhoneNumberRef = useRef()
    const receiverRef = useRef()


    function handleChange(event) {
        const { name, value } = event.target
        removeStreetError()
        removeStreetNumberError()
        removeReceiverPhoneNumberError()
        removeReceiverError()
        getUserData(name, value)

        if (
            streetRef.current.value.trim().length === 0 ||
            receiverPhoneNumberRef.current.value.trim().length === 0
        ) {
            if (streetRef.current.value.trim().length === 0) {
                streetRef.current.style.border = "1px solid red"
                showStreetError()
            } else {
                streetRef.current.style.border = "1px solid #ddd"
            }

            if (receiverPhoneNumberRef.current.value.trim().length === 0) {
                receiverPhoneNumberRef.current.style.border = "1px solid red"
                showReceiverPhoneNumberError()


            } else {
                receiverPhoneNumberRef.current.style.border = "1px solid #ddd"
            }

            return null

        } else {
            streetRef.current.style.border = "1px solid #ddd"
            receiverPhoneNumberRef.current.style.border = "1px solid #ddd"
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (
            streetRef.current.value.trim().length === 0 ||
            receiverPhoneNumberRef.current.value.trim().length === 0
        ) {
            if (streetRef.current.value.trim().length === 0) {
                streetRef.current.style.border = "1px solid red"
                showStreetError()
                document.querySelector(`#${STYLE.jumpToStreetInput}`).scrollIntoView({
                    behavior: 'smooth'
                })
            } else {
                streetRef.current.style.border = "1px solid #ddd"
            }

            if (receiverPhoneNumberRef.current.value.trim().length === 0) {
                receiverPhoneNumberRef.current.style.border = "1px solid red"
                showReceiverPhoneNumberError()
                if (streetRef.current.value.trim().length === 0) {
                    document.querySelector(`#${STYLE.jumpToStreetInput}`).scrollIntoView({
                        behavior: 'smooth'
                    })
                } else {
                    document.querySelector(`#${STYLE.jumpToStreetReceiverPhoneNumber}`).scrollIntoView({
                        behavior: 'smooth'
                    })
                }
            } else {
                receiverPhoneNumberRef.current.style.border = "1px solid #ddd"
            }

            return null

        } else {
            streetRef.current.style.border = "1px solid #ddd"
            receiverPhoneNumberRef.current.style.border = "1px solid #ddd"
            setDemoData()
            // window.location.href = "/account/addresses"
            navigate("/account/addresses")
            countryInputRef.current.value = demo.country
            cityInputRef.current.value = demo.city
            sectorInputRef.current.value = demo.sector
            streetRef.current.value = demo.street
            streetNumberRef.current.value = demo.streetNumber
            receiverPhoneNumberRef.current.value = demo.receiverPhoneNumber
            receiverRef.current.value = demo.receiver
        }
    }

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

    function resetData() {
        setFormData()
        streetRef.current.style.border = "1px solid #ddd"
        streetNumberRef.current.style.border = "1px solid #ddd"
        receiverPhoneNumberRef.current.style.border = "1px solid #ddd"
        receiverRef.current.style.border = "1px solid #ddd"
        removeStreetError()
        removeStreetNumberError()
        removeReceiverPhoneNumberError()
        removeReceiverError()
    }

    useEffect(() => {
        addressRef.current.style.color = "darkmagenta"
    })

    useEffect(() => {
        resetData()
    }, [])


    return (

        < div className={STYLE.area} >
            <div className={STYLE.container}>
                <div className={STYLE.content}>

                    <div className={STYLE.columnOne}>
                        <div className={STYLE.columnOneContent}>
                            <div className={STYLE.profileTitle}>
                                <ImUserTie className={STYLE.userIcon} />
                                {demo.lastName ?
                                    <div className={STYLE.title}>Salut, {demo.lastName}!</div>
                                    :
                                    <div className={STYLE.title}>Salut!</div>
                                }

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
                            className={STYLE.propContainer}>

                            <Link style={{ color: "#559137" }} to="/account/addresses">
                                <button
                                    className={STYLE.goBack}>
                                    <BsArrowLeftShort className={STYLE.arrowLeftIcon} />
                                    <div>Adrese</div>
                                </button>
                            </Link>



                            <div
                                className={STYLE.propTitle}>
                                <div>Adaugă adresă</div>
                            </div>

                            <div
                                className={STYLE.profileEditContainer}>
                                <form className={STYLE.profileEditContent}
                                    onSubmit={handleSubmit}
                                >

                                    <div>
                                        <label htmlFor="favColor">Țară</label>
                                        <br />
                                        <select

                                            onChange={handleChange}
                                            className={STYLE.input}
                                            value={editFormData.country}
                                            name="country"
                                            ref={countryInputRef}
                                        >
                                            <option className={STYLE.optionalChoice} value="" ></option>
                                            <option className={STYLE.maleOption} value="Romania">Romania</option>
                                        </select>
                                    </div>



                                    <div>
                                        <label htmlFor="favColor">Oraș</label>
                                        <br />
                                        <select

                                            onChange={handleChange}

                                            className={STYLE.input}
                                            value={editFormData.city}
                                            name="city"
                                            ref={cityInputRef}
                                        >
                                            <option className={STYLE.optionalChoice} value="" ></option>
                                            <option className={STYLE.maleOption} value="Bucuresti">Bucuresti</option>
                                        </select>
                                    </div>

                                    <div id={STYLE.jumpToStreetInput}>
                                        <label htmlFor="favColor">Sector</label>
                                        <br />
                                        <select
                                            onChange={handleChange}
                                            className={STYLE.input}
                                            value={editFormData.sector}
                                            name="sector"
                                            ref={sectorInputRef}
                                        >
                                            <option className={STYLE.optionalChoice} value="" ></option>
                                            <option className={STYLE.maleOption} value="Sector 1">Sector 1</option>
                                            <option className={STYLE.maleOption} value="Sector 2">Sector 2</option>
                                            <option className={STYLE.maleOption} value="Sector 3">Sector 3</option>
                                            <option className={STYLE.maleOption} value="Sector 4">Sector 4</option>
                                            <option className={STYLE.maleOption} value="Sector 5">Sector 5</option>

                                        </select>
                                    </div>

                                    <div>
                                        <div>Stradă</div>
                                        <input
                                            onChange={handleChange}

                                            ref={streetRef}
                                            className={STYLE.input}
                                            value={editFormData.street}
                                            name="street"
                                            type="text"
                                        // required
                                        />

                                        <div className={STYLE.dataErrorMessage}>
                                            {streetError}
                                        </div>
                                    </div>

                                    <div id={STYLE.jumpToStreetReceiverPhoneNumber}>
                                        <div>Număr</div>
                                        <input
                                            onChange={handleChange}
                                            ref={streetNumberRef}
                                            className={STYLE.input}
                                            value={editFormData.streetNumber}
                                            name="streetNumber"
                                            type="text"
                                        // required
                                        />

                                        <div className={STYLE.error}></div>
                                    </div>

                                    <div>
                                        <div>Număr de telefon destinatar</div>
                                        <input
                                            onChange={handleChange}
                                            ref={receiverPhoneNumberRef}
                                            className={STYLE.input}
                                            value={editFormData.receiverPhoneNumber}
                                            name="receiverPhoneNumber"
                                            type="text"
                                        // required
                                        />

                                        <div className={STYLE.dataErrorMessage}>
                                            {receiverPhoneNumberError}
                                        </div>
                                    </div>

                                    <div>
                                        <div>Nume destinatar</div>
                                        <input
                                            onChange={handleChange}
                                            ref={receiverRef}
                                            className={STYLE.input}
                                            value={editFormData.receiver}
                                            name="receiver"
                                            type="text"
                                        // required
                                        />

                                        <div className={STYLE.dataErrorMessage}></div>
                                    </div>



                                    <button
                                        type="submit"
                                        // disabled={loading}
                                        className={STYLE.submitButton}>
                                        <div className={STYLE.submitButtonText}>Adaugă adresă</div>
                                    </button>


                                </form>

                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >

    )
}