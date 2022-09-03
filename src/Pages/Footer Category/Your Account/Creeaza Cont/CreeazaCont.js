import React, { useRef, useState } from "react";
import STYLE from "./CreeazaCont.module.css"
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";
import { SiGmail } from "react-icons/si"
import { BsFacebook } from "react-icons/bs"
import { BsArrowLeftShort } from "react-icons/bs"
import { useAuth } from "../../../../components/Header/Context/AuthContext";
import { useNavigate } from "react-router-dom";

export function CreeazaCont() {

    // const singUpForm = document.querySelectorAll(`.${STYLE.singUpForm}`)
    // const singInForm = document.querySelectorAll(`.${STYLE.singInForm}`)
    const singUpButton = document.querySelectorAll(`.${STYLE.singUpButton}`)
    const loginButton = document.querySelectorAll(`.${STYLE.loginButton}`)
    // const singupFormButton = document.querySelectorAll(`.${STYLE.singupFormButton}`)

    console.log(singUpButton[0])
    console.log(loginButton[0])

    const singupEmailRef = useRef()
    const singupPasswordRef = useRef()
    const singupPasswordConfirmRef = useRef()
    const singinEmailRef = useRef()
    const singinPasswordRef = useRef()
    const { signup, login } = useAuth()
    const [error, setError] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(true)
    const navigate = useNavigate()

    async function singupSubmit(e) {
        e.preventDefault()

        if (singupPasswordRef.current.value !== singupPasswordConfirmRef.current.value) {
            return setError("Ai adaugat parole diferite!")
        }

        try {
            setError("")
            setLoading(true)
            await signup(singupEmailRef.current.value, singupPasswordRef.current.value)
            setIsOpen(!isOpen)
            setSuccessMessage("Contul a fost creat cu succes!")
            singupEmailRef.current.value = ""
            singupPasswordRef.current.value = ""
            singupPasswordConfirmRef.current.value = ""
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
            navigate("/")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    // useEffect(() => {

    //     const singUpButton = document.querySelectorAll(`.${STYLE.singUpButton}`)
    //     const loginButton = document.querySelectorAll(`.${STYLE.loginButton}`)
    //     const boxPassword = document.querySelectorAll(`.${STYLE.boxPassword}`)
    //     const forgotPassword = document.querySelectorAll(`.${STYLE.forgotPassword}`)
    //     const sendButton = document.querySelectorAll(`.${STYLE.sendButton}`)
    //     const authButton = document.querySelectorAll(`.${STYLE.authButton}`)
    //     const noAccount = document.querySelectorAll(`.${STYLE.noAccount}`)
    //     const forgotPasswordForm = document.querySelectorAll(`.${STYLE.forgotPasswordForm}`)
    //     const forgotPasswordFormLeft = document.querySelectorAll(`.${STYLE.forgotPasswordFormLeft}`)

    //     forgotPasswordForm[0].style.display = "none"

    //     loginButton[0].addEventListener("click", () => {
    //         loginButton[0].style.display = "none"
    //         singUpButton[0].style.display = "block"
    //         boxPassword[0].style.display = "block"
    //         forgotPassword[0].style.display = "flex"
    //         authButton[0].style.display = "block"
    //         sendButton[0].style.display = "none"
    //         noAccount[0].style.display = "flex"
    //     })

    //     singUpButton[0].addEventListener("click", () => {
    //         singUpButton[0].style.display = "none"
    //         loginButton[0].style.display = "block"
    //         boxPassword[0].style.display = "none"
    //         forgotPassword[0].style.display = "none"
    //         authButton[0].style.display = "none"
    //         sendButton[0].style.display = "block"
    //         noAccount[0].style.display = "none"
    //         noAccount[0].style.display = "none"
    //         forgotPasswordForm[0].style.display = "none"
    //     })

    //     forgotPassword[0].addEventListener("click", () => {
    //         forgotPassword[0].style.display = "none"
    //         loginButton[0].style.display = "block"
    //         forgotPasswordForm[0].style.display = "flex"
    //         boxPassword[0].style.display = "none"
    //         noAccount[0].style.display = "none"
    //         authButton[0].style.display = "none"
    //     })

    //     forgotPasswordFormLeft[0].addEventListener("click", () => {
    //         boxPassword[0].style.display = "block"
    //         forgotPasswordForm[0].style.display = "none"
    //         authButton[0].style.display = "block"
    //         loginButton[0].style.display = "none"
    //         forgotPassword[0].style.display = "flex"
    //         noAccount[0].style.display = "flex"
    //     })

    //     noAccount[0].addEventListener("click", () => {
    //         forgotPassword[0].style.display = "none"
    //         loginButton[0].style.display = "block"
    //         forgotPasswordForm[0].style.display = "flex"
    //         boxPassword[0].style.display = "none"
    //         noAccount[0].style.display = "none"
    //         authButton[0].style.display = "none"
    //     })


    // })

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
                            onClick={() => setIsOpen(!isOpen)}
                            className={STYLE.singUpButton}
                            style={{ display: isOpen ? "none" : "block" }}
                        >
                            <div className={STYLE.buttonText}>Inregistreaza-te</div>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={STYLE.loginButton}
                            style={{ display: isOpen ? "block" : "none" }}
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
                            style={{ display: isOpen ? "block" : "none" }}
                            onSubmit={singupSubmit}>
                            <div className={STYLE.title}>
                                Inregistreaza-te
                            </div>
                            <input
                                className={STYLE.emailBox}
                                type="email"
                                placeholder="Ex: example@gmail.com"
                                ref={singupEmailRef}
                            />
                            <input
                                className={STYLE.boxPassword}
                                type="password"
                                placeholder="Adauga-ti parola"
                                ref={singupPasswordRef}
                            />
                            <input
                                className={STYLE.boxPasswordConfirmation}
                                type="password"
                                placeholder="Confirma parola"
                                ref={singupPasswordConfirmRef}
                            />
                            <button disabled={loading} className={STYLE.singupFormButton}>
                                <div className={STYLE.sendButtonText}>Inregistreaza-te</div>
                            </button>
                        </form>


                        <form
                            className={STYLE.singInForm}
                            style={{ display: isOpen ? "none" : "block" }}
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
                            />
                            <input
                                className={STYLE.boxPassword}
                                type="password"
                                placeholder="Adauga-ti parola"
                                ref={singinPasswordRef}
                            />
                            <button className={STYLE.authButton}>
                                <div className={STYLE.sendButtonText}>Autentificare</div>
                            </button>
                            <div className={STYLE.forgotPassword}>
                                <button>Mi-am uitat parola</button>
                            </div>
                            <div className={STYLE.noAccount}>
                                <button>Nu ai un cont? Înregistrează-te</button>
                            </div>
                        </form>



                        <form className={STYLE.forgotPasswordResetForm}>
                            <div className={STYLE.title}>
                                Primește codul de acces prin e-mail
                            </div>
                            <input
                                className={STYLE.emailBox}
                                type="email"
                                placeholder="Ex: example@gmail.com"
                            />
                            <div className={STYLE.forgotPasswordForm}>
                                <button className={STYLE.forgotPasswordFormLeft}>
                                    <BsArrowLeftShort />
                                    <div>Inapoi</div>
                                </button>
                                <button className={STYLE.forgotPasswordFormRight}>Trimite</button>
                            </div>
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