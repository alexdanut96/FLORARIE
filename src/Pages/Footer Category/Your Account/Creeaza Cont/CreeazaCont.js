import React, { useEffect } from "react";
import STYLE from "./CreeazaCont.module.css"
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";
import { SiGmail } from "react-icons/si"
import { BsFacebook } from "react-icons/bs"
import { BsArrowLeftShort } from "react-icons/bs"

export function CreeazaCont() {

    useEffect(() => {

        const loginButtonHidden = document.querySelectorAll(`.${STYLE.loginButtonHidden}`)
        const loginButton = document.querySelectorAll(`.${STYLE.loginButton}`)
        const boxPassword = document.querySelectorAll(`.${STYLE.boxPassword}`)
        const forgotPassword = document.querySelectorAll(`.${STYLE.forgotPassword}`)
        const sendButton = document.querySelectorAll(`.${STYLE.sendButton}`)
        const authButton = document.querySelectorAll(`.${STYLE.authButton}`)
        const noAccount = document.querySelectorAll(`.${STYLE.noAccount}`)
        const forgotPasswordForm = document.querySelectorAll(`.${STYLE.forgotPasswordForm}`)
        const forgotPasswordFormLeft = document.querySelectorAll(`.${STYLE.forgotPasswordFormLeft}`)

        forgotPasswordForm[0].style.display = "none"

        loginButton[0].addEventListener("click", () => {
            loginButton[0].style.display = "none"
            loginButtonHidden[0].style.display = "block"
            boxPassword[0].style.display = "block"
            forgotPassword[0].style.display = "flex"
            authButton[0].style.display = "block"
            sendButton[0].style.display = "none"
            noAccount[0].style.display = "flex"
        })

        loginButtonHidden[0].addEventListener("click", () => {
            loginButtonHidden[0].style.display = "none"
            loginButton[0].style.display = "block"
            boxPassword[0].style.display = "none"
            forgotPassword[0].style.display = "none"
            authButton[0].style.display = "none"
            sendButton[0].style.display = "block"
            noAccount[0].style.display = "none"
            noAccount[0].style.display = "none"
            forgotPasswordForm[0].style.display = "none"
        })

        forgotPassword[0].addEventListener("click", () => {
            forgotPassword[0].style.display = "none"
            loginButton[0].style.display = "block"
            forgotPasswordForm[0].style.display = "flex"
            boxPassword[0].style.display = "none"
            noAccount[0].style.display = "none"
            authButton[0].style.display = "none"
        })

        forgotPasswordFormLeft[0].addEventListener("click", () => {
            boxPassword[0].style.display = "block"
            forgotPasswordForm[0].style.display = "none"
            authButton[0].style.display = "block"
            loginButton[0].style.display = "none"
            forgotPassword[0].style.display = "flex"
            noAccount[0].style.display = "flex"
        })

        noAccount[0].addEventListener("click", () => {
            forgotPassword[0].style.display = "none"
            loginButton[0].style.display = "block"
            forgotPasswordForm[0].style.display = "flex"
            boxPassword[0].style.display = "none"
            noAccount[0].style.display = "none"
            authButton[0].style.display = "none"
        })


    })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.content}>
                <div className={STYLE.loginForm}>
                    <div className={STYLE.columnLeft}>
                        <div className={STYLE.title}>
                            Alege o opțiune de autentificare
                        </div>
                        <button className={STYLE.loginButtonHidden}>
                            <div className={STYLE.buttonText}>Primeste codul de acces prin e-mail</div>
                        </button>
                        <button className={STYLE.loginButton}>
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
                        <div className={STYLE.title}>
                            Primește codul de acces prin e-mail
                        </div>
                        <input className={STYLE.emailBox} type="text" placeholder="Ex: example@gmail.com" />
                        <input className={STYLE.boxPassword} type="password" placeholder="Adauga-ti parola" />

                        <div className={STYLE.forgotPassword}>
                            <button>Mi-am uitat parola</button>
                        </div>
                        <div className={STYLE.forgotPasswordForm}>
                            <button className={STYLE.forgotPasswordFormLeft}>
                                <BsArrowLeftShort />
                                <div>Inapoi</div>
                            </button>
                            <button className={STYLE.forgotPasswordFormRight}>Trimite</button>
                        </div>


                        <button className={STYLE.sendButton}>
                            <div className={STYLE.sendButtonText}>Trimite</div>
                        </button>
                        <button className={STYLE.authButton}>
                            <div className={STYLE.sendButtonText}>Autentificare</div>
                        </button>
                        <div className={STYLE.noAccount}>
                            <button>Nu ai un cont? Înregistrează-te</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={STYLE.freeDelivery}>
                <FreeDelivery />
            </div>
        </div>



    )
}