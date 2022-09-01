import React from "react";
import { Link } from "react-router-dom"
import STYLE from "./FiiPartener.module.css"
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";
import image from "./image.jpg"
import { FaCheck } from "react-icons/fa"

export function FiiPartener() {

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>Fii partener Floris</div>
                        <div className={STYLE.categoryContainer}>
                            <div className={STYLE.categoryTitle}>Despre Floris</div>
                            <div className={STYLE.category}>
                                <Link to={FooterCardComponents[0].path}>Despre noi</Link>
                                <Link to={FooterCardComponents[1].path}>Avantajele clientilor</Link>
                                <Link to={FooterCardComponents[2].path}>Confidentialitate</Link>
                                <Link to={FooterCardComponents[3].path}>Termeni si Conditii</Link>
                                <Link to={FooterCardComponents[4].path}>Detalii Contact</Link>
                            </div>
                            <div className={STYLE.categoryTitle}>Contul tau</div>
                            <div className={STYLE.category}>
                                <Link to={FooterCardComponents[5].path}>Creeaza cont</Link>
                                <Link to={FooterCardComponents[6].path}>Program de fidelitate</Link>
                                <Link to={FooterCardComponents[7].path}>Am uitat parola</Link>
                            </div>
                            <div className={STYLE.categoryTitle}>Ajutor la cumparaturi</div>
                            <div className={STYLE.category}>
                                <Link to={FooterCardComponents[8].path}>Cum cumpar</Link>
                                <Link to={FooterCardComponents[9].path}>Cum platesc</Link>
                                <Link to={FooterCardComponents[10].path}>Florariile Floris</Link>
                                <Link to={FooterCardComponents[11].path}>Informatii despre livrare</Link>
                                <Link to={FooterCardComponents[12].path}>Politica de returnare</Link>
                            </div>
                            <div className={STYLE.categoryTitle}>Link-uri utile</div>
                            <div className={STYLE.category}>
                                <Link to={FooterCardComponents[13].path}>F.A.Q.</Link>
                                <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO?ref=footer_4_5">Solutionarea online a litigiilor</a>
                                <a href="https://anpc.ro/">A.N.P.C.</a>
                                <Link to={FooterCardComponents[16].path}>
                                    <div className={STYLE.selectedCategory}>
                                        Fii partener Floris
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={STYLE.columnTwo}>
                        <div>Fii partener Floris</div>

                        <div className={STYLE.rowOne}>
                            <div className={STYLE.leftHalf}>
                                <div className={STYLE.leftHalfTitle}>Fii partener Floris</div>
                                <div className={STYLE.leftHalfContent}>
                                    Ai o florărie modernă, într-o zonă centrală, care oferă servicii şi produse de calitate clienţilor săi? Ești plătitor de TVA și ai acces la Internet? Ai experiență în domeniu și vrei să fii partenerul celei mai profitabile florării online?
                                </div>
                            </div>
                            <div className={STYLE.rightHalf}>
                                <img className={STYLE.image} src={image} alt="img" />
                            </div>
                        </div>

                        <div className={STYLE.rowTwo}>
                            <div className={STYLE.rowTwoTitle}>Intră în rețeaua Floris!</div>
                            <div>Floris.ro, cea mai mare florărie online din România, caută colaboratori în toate oraşele din ţară. Fii unul dintre ei şi profită de avantajele afilierii la o afacere de succes:</div>
                            <div className={STYLE.rowTwoContent}>
                                <div className={STYLE.rowTwoRightHalf}>
                                    <div>
                                        <FaCheck className={STYLE.checkIcon} />
                                        <div>
                                            Platformă online uşor de folosit, prin care se pot efectua comenzi sigure, din orice colţ al lumii;
                                        </div>
                                    </div>
                                    <div>
                                        <FaCheck className={STYLE.checkIcon} />
                                        <div>
                                            Primeşti un comision avantajos;
                                        </div>
                                    </div>
                                </div>
                                <div className={STYLE.rowTwoLefttHalf}>
                                    <div>
                                        <FaCheck className={STYLE.checkIcon} />
                                        <div>
                                            Vinzi mai mult, fără să suporţi costuri suplimentare de promovare;
                                        </div>
                                    </div>
                                    <div>
                                        <FaCheck className={STYLE.checkIcon} />
                                        <div>
                                            Numele tău va fi asociat cu un brand puternic, lider de piaţă.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={STYLE.rowThree}>
                            <div className={STYLE.rowThreeLeftHalf}>
                                <div className={STYLE.rowThreeTitle}>
                                    Despre noi
                                </div>
                                <div className={STYLE.rowThreeLeftContent}>
                                    Floris a câștigat de sase ori titlul “Florăria Anului”, la Gala Premiilor eCommerce (2010, 2013, 2014, 2015, 2016 si 2017), de doua ori titlul 'Cea mai buna florarie online si cel mai bun magazin online din Romania' (2016 si 2017), precum și premiul pentru Cel mai bun SEO al unui magazin online, în 2019. Floris are peste 100.000 de clienţi mulţumiţi, în mai mult de 130 de orașe din România şi din toată lumea. Din 2010, Floris este prima florărie din România care creează buchete și colecții unice, în acord cu tendinţele internaţionale din modă. În plus, oferă transport gratuit și livrare în maximum 2 ore de la efectuarea comenzii.
                                </div>
                            </div>
                            <div className={STYLE.rowThreeRightHalf}>
                                <div className={STYLE.rowThreeTitle}>
                                    Completeaza formularul si vei fi contactat in maxim 24h de unul dintre specialistii Floris
                                </div>
                                <div className={STYLE.rowThreeRightContent}>
                                    <div>Nume:</div>
                                    <input className={STYLE.formInput} type="text" placeholder="Nume:" />
                                    <div>Email:</div>
                                    <input className={STYLE.formInput} type="text" placeholder="Email:" />
                                    <div>Telefon:</div>
                                    <input className={STYLE.formInput} type="text" placeholder="Telefon:" />
                                    <div>Oras:</div>
                                    <input className={STYLE.formInput} type="text" placeholder="Oras:" />
                                    <button className={STYLE.sendButton}>
                                        <div className={STYLE.sendButtonText}>TRIMITE</div>
                                    </button>
                                </div>
                            </div>
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