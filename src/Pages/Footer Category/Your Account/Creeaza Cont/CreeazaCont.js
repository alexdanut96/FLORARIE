import React, { useRef, useState } from "react";
import STYLE from "./CreeazaCont.module.css"
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";
import { SiGmail } from "react-icons/si"
import { BsFacebook } from "react-icons/bs"
import { BsArrowLeftShort } from "react-icons/bs"
import { useAuth } from "../../../../components/Header/Context/AuthContext";
import { useNavigate } from "react-router-dom";

export function CreeazaCont() {

    // const singUpButton = document.querySelectorAll(`.${STYLE.singUpButton}`)
    // const loginButton = document.querySelectorAll(`.${STYLE.loginButton}`)

    const [showSingupForm, setShowSingupForm] = useState(false)
    const [showSinginForm, setShowSinginForm] = useState(true)
    const [showResetPasswordForm, setShowResetPasswordForm] = useState(false)

    const singupEmailRef = useRef()
    const singupPasswordRef = useRef()
    const singupPasswordConfirmRef = useRef()
    const singinEmailRef = useRef()
    const singinPasswordRef = useRef()
    const resetPasswordRef = useRef()
    const { signup, login, logout, showEmail, resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    function ShowResetPswForm() {
        setShowResetPasswordForm(true)
        setShowSingupForm(true)
        setShowSinginForm(true)
    }

    function showSngupForm() {
        setShowSingupForm(true)
        setShowSinginForm(false)
        setShowResetPasswordForm(false)
    }

    function showSnginForm() {
        setShowSinginForm(true)
        setShowSingupForm(false)
        setShowResetPasswordForm(false)
    }

    async function singupSubmit(e) {
        e.preventDefault()

        if (singupPasswordRef.current.value !== singupPasswordConfirmRef.current.value) {
            return setError("Parolele sunt diferite!")
        }

        try {
            setError("")
            setLoading(true)
            await signup(singupEmailRef.current.value, singupPasswordRef.current.value)
            logout()
            showSngupForm()
            setSuccessMessage("Contul a fost creat cu succes!")
            singinEmailRef.current.value = ""
            singinPasswordRef.current.value = ""
        } catch {
            setSuccessMessage("")
            setError("Nu s-a putut crea contul!")
        }

        setLoading(false)
    }

    async function loginSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setSuccessMessage("")
            setLoading(true)
            await login(singinEmailRef.current.value, singinPasswordRef.current.value)
            showEmail()
            navigate("/")
        } catch {
            setError("Email și/sau parolă greșite!")
        }

        setLoading(false)
    }

    async function resetPassowrdSubmit(e) {
        e.preventDefault()
        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(resetPasswordRef.current.value)
            setMessage("Link-ul de restare al parolei a fost trimis pe adresa dvs. de email")
        } catch {
            setError("Failed to reset password")
        }
        setLoading(false)
    }

    return (
        <div className={STYLE.container}>
            {error &&
                <div className={STYLE.errorMessageContainer} >
                    <div className={STYLE.errorMessage}>{error}</div>
                </div>
            }
            {successMessage &&
                <div className={STYLE.successMessageContainer} >
                    <div className={STYLE.successMessage}>{successMessage}</div>
                </div>
            }
            <div className={STYLE.content}>
                <div className={STYLE.loginForm}>
                    <div className={STYLE.columnLeft}>
                        <div className={STYLE.title}>
                            Alege o opțiune de autentificare
                        </div>
                        <button
                            onClick={showSnginForm}
                            className={STYLE.singUpButton}
                            style={{ display: showSingupForm ? "block" : "none" }}
                        >
                            <div className={STYLE.buttonText}>Inregistreaza-te</div>
                        </button>
                        <button
                            onClick={showSngupForm}
                            className={STYLE.loginButton}
                            style={{ display: showSinginForm ? "block" : "none" }}
                        >
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
                    <div className={STYLE.columnRight}>

                        <form
                            className={STYLE.singUpForm}
                            style={{ display: !showSingupForm ? "block" : "none" }}
                            onSubmit={singupSubmit}>
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
                            <button
                                type="submit"
                                disabled={loading}
                                className={STYLE.singupFormButton}>
                                <div className={STYLE.sendButtonText}>Inregistreaza-te</div>
                            </button>
                        </form>


                        <form
                            className={STYLE.singInForm}
                            style={{ display: !showSinginForm ? "block" : "none" }}
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
                            <button
                                disabled={loading}
                                type="submit"
                                className={STYLE.authButton}>
                                <div className={STYLE.sendButtonText}>Autentificare</div>
                            </button>
                            <div
                                onClick={ShowResetPswForm}
                                className={STYLE.forgotPassword}>
                                <div>Mi-am uitat parola</div>
                            </div>
                            <div
                                onClick={showSnginForm}
                                className={STYLE.noAccount}>
                                <div>Nu ai un cont? Înregistrează-te</div>
                            </div>
                        </form>



                        <form
                            onSubmit={resetPassowrdSubmit}
                            style={{ display: showResetPasswordForm ? "block" : "none" }}
                            className={STYLE.forgotPasswordResetForm}>
                            <div className={STYLE.title}>
                                Primește codul de acces prin e-mail
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
                                    onClick={showSngupForm}
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

                            {message &&
                                <div className={STYLE.resetPassowrdMessageContainer} >
                                    <div className={STYLE.resetPasswordMessage}>{message}</div>
                                </div>
                            }
                        </form>


                    </div>
                </div>
            </div>
            <div className={STYLE.freeDelivery}>
                <FreeDelivery />
            </div>
        </div>
    )
}