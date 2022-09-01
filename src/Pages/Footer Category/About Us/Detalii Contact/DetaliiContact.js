import React from "react";
import { Link } from "react-router-dom"
import STYLE from "./DetaliiContact.module.css"
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";

export function DetaliiContact() {

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>Detalii Contact</div>
                        <div className={STYLE.categoryContainer}>
                            <div className={STYLE.categoryTitle}>Despre Floris</div>
                            <div className={STYLE.category}>
                                <Link to={FooterCardComponents[0].path}>Despre noi</Link>
                                <Link to={FooterCardComponents[1].path}>Avantajele clientilor</Link>
                                <Link to={FooterCardComponents[2].path}>Confidentialitate</Link>
                                <Link to={FooterCardComponents[3].path}>Termeni si Conditii</Link>
                                <Link to={FooterCardComponents[4].path}>
                                    <div className={STYLE.selectedCategory}>
                                        Detalii Contact
                                    </div>
                                </Link>
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
                                <Link to={FooterCardComponents[16].path}>Fii partener Floris</Link>
                            </div>
                        </div>
                    </div>

                    <div className={STYLE.columnTwo}>
                        <div>Detalii Contact</div>
                        <div className={STYLE.rowOne}>



                            <div className={STYLE.rowOneTitlesContent}>
                                Echipa Floris este alaturi de tine din 2010 pentru a indeplini impreuna o misiune comuna: aceea de a livra buchete spectaculoase, care sa aduca bucurie destinatarilor, care sa genereze emotii frumoase si sa creeze o experienta memorabila.
                            </div>



                            <div className={STYLE.rowOneTitles}>
                                Program de functionare:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Luni - Vineri: 08.00 - 22.00 (livrari intre 09.00 - 22.00)
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Sambata - Duminica: 08.00 - 18.00 (livrari intre 09.00 - 18.00)
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                Inregistrare comenzi, anulare si modificari comenzi:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                E-mail: <a className={STYLE.linkRef} href="mailto:comenzi@floris.ro">comenzi@floris.ro</a>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Telefon: *9090 (numar apelabil din orice retea mobila la tariful intern al retelei)
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Mobil: +40 767 06 1115 (numar apelabil din orice retea fixa la tariful intern al retelei)
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Informatii generale: <a className={STYLE.linkRef} href="mailto:comenzi@floris.ro">office@floris.ro</a>
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                Reclamatii & sesizari:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                In cazul unor situatii legate de comanda dumneavoastra ne puteti contacta la adresa de e-mail: <a className={STYLE.linkRef} href="mailto:comenzi@floris.ro">reclamatii@floris.ro</a>. Timpul de raspuns este de 72 de ore.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                Retele de socializare:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Facebook: <a className={STYLE.linkRef} href="https://www.facebook.com/">Floris pe Facebook</a>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                YouTube: <a className={STYLE.linkRef} href="https://www.youtube.com/">Floris pe YouTube</a>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Instagram: <a className={STYLE.linkRef} href="https://www.instagram.com/">Floris pe Instagram</a>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Floris.ro este administrata de S.C. FLORIS DIGITAL S.R.L., cu sediul in Bucuresti, sector 4, Drumul Jilavei, nr. 70, etaj 1.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <div>Cod postal: 062462 Romania.</div>
                                <div>Capital social: 25000 lei</div>
                                <div>Cod unic de inregistrare: RO00000000</div>
                                <div>Numar de ordine in registrul comertului: J00/00000/2022</div>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <div>
                                    Conturi IBAN deschise la ING BANK:
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- RO00INGB0000000000000000 - LEI
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- RO00INGB0000000000000000 - EUR
                                </div>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <div>S.C. FLORIS DIGITAL S.R.L. este operator de date cu caracter personal - numar infochiosk: 100000000000.</div>
                                <div>Floris este marca inregistrata cu numarul 101010 in conformitate cu art. 28 din Legea 84/1998.</div>
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