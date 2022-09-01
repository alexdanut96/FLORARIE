import React from "react"
import { Link } from "react-router-dom"
import { FooterCardComponents } from "../../Pages/Footer Category/Footer Card Components/FooterCardComponents"
import logo from "../../images/logo_white.jpg"
import googlePlayImg from "../../images/google-play.png"
import appStoreImg from "../../images/app-store.png"
import { BsTelephone } from "react-icons/bs"
import { Collapsible } from "../Collapsible/Collapsible"
import STYLE from "./Footer.module.css"

export function Footer() {

    return (
        <>
            <div className={STYLE.maxSizeContainer}>
                <div className={STYLE.downloadApp}>
                    <div className={STYLE.downloadAppTitle}>Descarca aplicatia Floris</div>
                    <div
                        className={STYLE.downloadAppLinks}>
                        <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer">
                            <img
                                className={STYLE.googlePlayImage}
                                src={googlePlayImg} alt="img" />
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                            <img
                                className={STYLE.appStoreImage}
                                src={appStoreImg} alt="img" />
                        </a>
                    </div>
                </div>
                <div className={STYLE.navigationCategories}>
                    <div className={STYLE.utilities}>
                        <div className={STYLE.aboutUtility}>
                            <div className={STYLE.utilityTitle}>Despre Floris</div>
                            <div className={STYLE.titles}>
                                <div className={STYLE.title}><Link to={FooterCardComponents[0].path}>Despre noi</Link></div>
                                <div className={STYLE.title}><Link to={FooterCardComponents[1].path}>Avantajele clientilor</Link></div>
                                <div className={STYLE.title}><Link to={FooterCardComponents[2].path}>Confidentialitate</Link></div>
                                <div className={STYLE.title}><Link to={FooterCardComponents[3].path}>Termeni si conditii</Link></div>
                                <div className={STYLE.title}><Link to={FooterCardComponents[4].path}>Detalii Contact</Link></div>
                            </div>
                        </div>
                        <div className={STYLE.accountUtility}>
                            <div className={STYLE.utilityTitle}>Contul tau</div>
                            <div className={STYLE.titles}>
                                <div className={STYLE.title}><Link to={FooterCardComponents[5].path}>Creeaza cont</Link></div>
                                <div className={STYLE.title}><Link to={FooterCardComponents[6].path}>Program de fidelitate</Link></div>
                                <div className={STYLE.title}><Link to={FooterCardComponents[7].path}>Am uitat parola</Link></div>
                            </div>
                        </div>
                        <div className={STYLE.helpUtility}>
                            <div className={STYLE.utilityTitle}>Ajutor la cumparaturi</div>
                            <div className={STYLE.titles}>
                                <div className={STYLE.title}><Link to={FooterCardComponents[8].path}>Cum cumpar</Link></div>
                                <div className={STYLE.title}><Link to={FooterCardComponents[9].path}>Cum platesc</Link></div>
                                <div className={STYLE.title}><Link to={FooterCardComponents[10].path}>Florariile Floris</Link></div>
                                <div className={STYLE.title}><Link to={FooterCardComponents[11].path}>Informatii despre livrare</Link></div>
                                <div className={STYLE.title}><Link to={FooterCardComponents[12].path}>Politica de returnare</Link></div>
                            </div>
                        </div>
                        <div className={STYLE.linksUtility}>
                            <div className={STYLE.utilityTitle}>Link-uri utile</div>
                            <div className={STYLE.titles}>
                                <div className={STYLE.title}><Link to={FooterCardComponents[13].path}>F.A.Q.</Link></div>
                                <div className={STYLE.title}>
                                    <a
                                        href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO?ref=footer_4_5"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Solutionarea online a litigiilor
                                    </a>
                                </div>
                                <div className={STYLE.title}>
                                    <a href="https://anpc.ro/" target="_blank" rel="noreferrer">A.N.P.C.</a>
                                </div>
                                <div className={STYLE.title}><Link to={FooterCardComponents[16].path}>Fii partener Floris</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className={STYLE.socialMedia}>
                        <div>Urmareste-ne</div>
                        <div className={STYLE.socialMediaButtons}>
                            <a className={STYLE.facebookButton} href="https://www.facebook.com/" target="_blank" rel="noreferrer" >
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a className={STYLE.instagramButton} href="https://www.instagram.com/" target="_blank" rel="noreferrer" >
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a className={STYLE.twitterButton} href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className={STYLE.youtubeButton} href="https://youtube.com/" target="_blank" rel="noreferrer">
                                <i className="fa fa-youtube-play"></i>
                            </a>
                        </div>
                        <img className={STYLE.logo} src={logo} alt="logoFooter" />

                    </div>
                </div>
                <div className={STYLE.bottom}>
                    <div>© 2011 - 2022 Floris. All rights reserved</div>
                    <div>made by alexandrudanut design</div>
                </div>
            </div>


            <div className={STYLE.minSizeContainer}>
                <div className={STYLE.phoneLogo}>
                    <img src={logo} alt="logoFooter" />
                    <div className={STYLE.socialMediaIcons}>
                        <a className={STYLE.facebookButton} href="https://www.facebook.com/" target="_blank" rel="noreferrer" >
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a className={STYLE.instagramButton} href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a className={STYLE.twitterButton} href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className={STYLE.youtubeButton} href="https://youtube.com/" target="_blank" rel="noreferrer">
                            <i className="fa fa-youtube-play"></i>
                        </a>
                    </div>
                    <div className={STYLE.phoneNumber}>
                        <BsTelephone />
                        <div>(+40) 767 061 115</div>
                    </div>
                </div>
                <div>
                    <Collapsible label="Despre Floris">
                        <Link to={FooterCardComponents[0].path}><div>Despre noi</div></Link>
                        <Link to={FooterCardComponents[1].path}><div>Avantajele clientilor</div></Link>
                        <Link to={FooterCardComponents[2].path}><div>Confidentialitate</div></Link>
                        <Link to={FooterCardComponents[3].path}><div>Termeni si conditii</div></Link>
                        <Link to={FooterCardComponents[4].path}><div>Detalii Contact</div></Link>
                    </Collapsible>

                    <Collapsible label="Contul Tau">
                        <Link to={FooterCardComponents[5].path}><div>Creeaza cont</div></Link>
                        <Link to={FooterCardComponents[6].path}><div>Program de fidelitate</div></Link>
                        <Link to={FooterCardComponents[7].path}><div>Am uitat parola</div></Link>
                    </Collapsible>

                    <Collapsible label="Ajutor la cumparaturi">
                        <Link to={FooterCardComponents[8].path}><div>Cum cumpar</div></Link>
                        <Link to={FooterCardComponents[9].path}><div>Cum platesc</div></Link>
                        <Link to={FooterCardComponents[10].path}><div>Florariile Floris</div></Link>
                        <Link to={FooterCardComponents[11].path}><div>Informatii despre livrare</div></Link>
                        <Link to={FooterCardComponents[12].path}><div>Politica de returnare</div></Link>
                    </Collapsible>

                    <Collapsible label="Link-uri utile">
                        <Link to={FooterCardComponents[13].path}><div>F.A.Q.</div></Link>
                        <Link to={FooterCardComponents[14].path}><div>Solutionarea online a litigiilor</div></Link>
                        <Link to={FooterCardComponents[15].path}><div>A.N.P.C.</div></Link>
                        <Link to={FooterCardComponents[16].path}><div>Fii partener Floris</div></Link>
                    </Collapsible>
                </div>
                <div className={STYLE.bottom}>
                    {/* <div className={STYLE.line}><hr /></div> */}
                    <div>© 2011 - 2022 Floris. All rights reserved</div>
                    <div>made by alexandrudanut design</div>
                </div>

            </div>
        </>
    )
}

