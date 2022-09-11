import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import STYLE from "../User.module.css"
import { ImUserTie } from "react-icons/im"
import { BsArrowLeftShort } from "react-icons/bs"
import { useUserAccount } from "../../../components/Header/Context/UserAccountContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../components/Header/Context/AuthContext";

export function UserProfileEdit() {

    const { logout, hideEmail } = useAuth()
    const [logoutError, setLogoutError] = useState("")
    const navigate = useNavigate()

    const {
        setDemoData,
        demo,
        editFormData,
        getUserData,
        setFormData,
        setFnameError,
        setLnameError,
        removeFnameError,
        removeLnameError, lastNameError,
        firstNameError } = useUserAccount()

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
    const editLastNameRef = useRef()
    const editFirstNameRef = useRef()
    const editPhoneNumberRef = useRef()
    const editBirthdayRef = useRef()
    const optionInputRef = useRef()

    function handleChange(event) {
        const { name, value } = event.target
        removeFnameError()
        removeLnameError()
        getUserData(name, value)

        if (editFirstNameRef.current.value.trim().length === 0 || editLastNameRef.current.value.trim().length === 0) {
            if (editFirstNameRef.current.value.trim().length === 0) {
                editFirstNameRef.current.style.border = "1px solid red"
                setFnameError()
            } else {
                editFirstNameRef.current.style.border = "1px solid #ddd"
            }

            if (editLastNameRef.current.value.trim().length === 0) {
                editLastNameRef.current.style.border = "1px solid red"
                setLnameError()
            } else {
                editLastNameRef.current.style.border = "1px solid #ddd"
            }

            return null

        } else {
            editFirstNameRef.current.style.border = "1px solid #ddd"
            editLastNameRef.current.style.border = "1px solid #ddd"
        }
    }


    function handleSubmit(event) {
        event.preventDefault()
        if (editFirstNameRef.current.value.trim().length === 0 || editLastNameRef.current.value.trim().length === 0) {
            if (editFirstNameRef.current.value.trim().length === 0 && editLastNameRef.current.value.trim().length === 0) {
                document.querySelector(`#${STYLE.jumpToLastName}`).scrollIntoView({
                    behavior: 'smooth'
                })
            }
            if (editFirstNameRef.current.value.trim().length === 0) {
                editFirstNameRef.current.style.border = "1px solid red"
                setFnameError()
                if (editLastNameRef.current.value.trim().length !== 0) {
                    document.querySelector(`#${STYLE.jumpToFirstName}`).scrollIntoView({
                        behavior: 'smooth'
                    })
                }

            } else {
                editFirstNameRef.current.style.border = "1px solid #ddd"
            }

            if (editLastNameRef.current.value.trim().length === 0) {
                editLastNameRef.current.style.border = "1px solid red"
                setLnameError()
                if (editFirstNameRef.current.value.trim().length !== 0) {
                    document.querySelector(`#${STYLE.jumpToLastName}`).scrollIntoView({
                        behavior: 'smooth'
                    })
                }

            } else {
                editLastNameRef.current.style.border = "1px solid #ddd"
            }
            return null

        } else {
            editFirstNameRef.current.style.border = "1px solid #ddd"
            editLastNameRef.current.style.border = "1px solid #ddd"
            setDemoData()
            // window.location.href = "/account/profile"
            navigate("/account/profile")
            editLastNameRef.current.value = demo.lastName
            editFirstNameRef.current.value = demo.firstName
            editPhoneNumberRef.current.value = demo.phoneNumber
            editBirthdayRef.current.value = demo.birthday
            optionInputRef.current.value = demo.gender
        }
    }

    function resetData() {
        setFormData()
        editFirstNameRef.current.style.border = "1px solid #ddd"
        editLastNameRef.current.style.border = "1px solid #ddd"
        removeFnameError()
        removeLnameError()
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

    useEffect(() => {
        profileRef.current.style.color = "darkmagenta"
    })

    useEffect(() => {
        resetData()
    }, [])

    return (

        <div className={STYLE.area}>
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

                        <Link style={{ color: "#559137" }} to="/account/profile">
                            <button
                                className={STYLE.goBack}>
                                <BsArrowLeftShort className={STYLE.arrowLeftIcon} />
                                <div>Profil</div>
                            </button>
                        </Link>


                        <div
                            id={STYLE.jumpToLastName}
                            className={STYLE.propTitle}>
                            <div >Editează profilul</div>
                        </div>

                        <div
                            className={STYLE.profileEditContainer}>

                            <form className={STYLE.profileEditContent}
                                onSubmit={handleSubmit}
                            >

                                <div>
                                    <div id={STYLE.jumpToFirstName}>Prenume *</div>
                                    <input
                                        onChange={handleChange}
                                        ref={editLastNameRef}
                                        className={STYLE.lastNameInput}
                                        value={editFormData.lastName}
                                        name="lastName"
                                        type="text"
                                    />

                                    <div className={STYLE.dataErrorMessage}>
                                        {lastNameError}
                                    </div>

                                </div>

                                <div>
                                    <div>Nume *</div>
                                    <input
                                        onChange={handleChange}
                                        ref={editFirstNameRef}
                                        className={STYLE.firstNameInput}
                                        value={editFormData.firstName}
                                        name="firstName"
                                        type="text"
                                    />

                                    <div className={STYLE.dataErrorMessage}>
                                        {firstNameError}
                                    </div>
                                </div>
                                <div>
                                    <div>Numar</div>
                                    <input
                                        onChange={handleChange}
                                        ref={editPhoneNumberRef}
                                        className={STYLE.phoneNumberInput}
                                        value={editFormData.phoneNumber}
                                        name="phoneNumber"
                                        type="text" />
                                </div>

                                <div>
                                    <label htmlFor="favColor">Gen</label>
                                    <br />
                                    <select
                                        onChange={handleChange}
                                        className={STYLE.genderInput}
                                        value={editFormData.gender}
                                        name="gender"
                                        ref={optionInputRef}
                                        style={{ appearance: "menulist-button" }}
                                    >
                                        <option className={STYLE.optionalChoice} value="" ></option>
                                        <option className={STYLE.maleOption} value="Masculin">Masculin</option>
                                        <option className={STYLE.femaleOption} value="Feminin">Feminin</option>

                                    </select>
                                </div>
                                <div>
                                    <div>Data nașterii</div>
                                    <input
                                        onChange={handleChange}
                                        ref={editBirthdayRef}
                                        className={STYLE.birthdayInput}
                                        value={editFormData.birthday}
                                        name="birthday"
                                        type="date" />
                                </div>

                                <button
                                    type="submit"
                                    // disabled={loading}
                                    className={STYLE.submitButton}>
                                    <div className={STYLE.submitButtonText}>Salveaza</div>
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}