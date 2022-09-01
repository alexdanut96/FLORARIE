import React from "react";
import { Link } from "react-router-dom"
import STYLE from "./CumPlatesc.module.css"
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";

export function CumPlatesc() {

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>Cum platesc</div>
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
                                <Link to={FooterCardComponents[9].path}>
                                    <div className={STYLE.selectedCategory}>
                                        Cum platesc
                                    </div>
                                </Link>
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
                        <div>Cum platesc</div>
                        <div className={STYLE.rowOne}>



                            <div className={STYLE.rowOneTitles}>
                                Comanda ta va fi livrata imediat dupa confirmarea platii
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                La Floris, facem totul pentru ca intreaga experienta sa fie de exceptie si fiecare client si beneficiar al buchetelor noastre sa se bucure, in urma gestului de a oferi flori.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Si pentru ca experienta nu ar fi completa daca ne-am concentra doar pe livrarea in conditii perfecte a buchetelor, avem grija ca si intregul proces de comanda sa fie simplu si eficient, iar plata sa se desfasoare rapid, in conditii de siguranta.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Buchetele create de designerii Floris pot fi platite prin modalitatea de plata preferata de clientul nostru, care poate alege una dintre cele 9 variante disponibile.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                1.Cu cardul de credit/debit
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Platile sunt procesate in conditii de maxima securitate.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                2. Prin transfer bancar/ordin de plata sau prin depunere de numerar
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                In conturile deschise la ING BANK, pe numele S.C. FLORIS DIGITAL S.R.L. Conturi IBAN:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <div>RO00INGB0000000000000000 - LEI</div>
                                <div>RO00INGB0000000000000000 - EUR</div>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                cod SWIFT: INGBROBUXXX
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dupa depunere, ne poti trimite OP-ul sau chitanta pe e-mail, la adresa:
                                <a className={STYLE.linkRef} href="mailto:omenzi@floris.ro"> comenzi@floris.ro</a>. Comanda ta va fi prelucrata dupa confirmarea incasarii platii.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                3. Paypal
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Plata online prin Paypal se desfasoara in conditii de siguranta maxima. In cadrul sistemului Paypal vei introduce datele cardului o singura data, acestea fiind inregistrate si securizate perfect pe serverul Paypal.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                4. Plata prin iTransfer (Banca Transilvania)
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Pentru a efectua plata, poti utiliza serviciul de transfer de bani prin Internet Banking, al Bancii Transilvania, exact asa cum faci in cazul unui transfer de bani obisnuit. Dupa autentificarea in sistemul de Internet Banking, plata se va efectua instant, in conditii de siguranta maxima, utilizand sistemul de Internet Banking cunoscut.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                5. Plata prin iTransfer (BCR)
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Pentru a efectua plata, poti utiliza serviciul de transfer de bani prin Internet Banking, al BCR, exact asa cum faci in cazul unui transfer de bani obisnuit. Dupa autentificarea in sistemul de Internet Banking, plata se va efectua instant, in conditii de siguranta maxima, utilizand sistemul de Internet Banking cunoscut.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                6. Plata in rate online cu card Star BT
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Pentru a finaliza comanda, poti efectua plata in rate, cu 0% dobanda, folosind cardul de credit de la Banca Transilvania.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                7. Plata in rate online cu card BRD Finance
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Poti efectua plata in rate, cu 0% dobanda, folosind cardul de credit BRD Finance.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                8. Plata in rate online cu Card Avantaj
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Floris iti ofera posibilitatea de a plati in rate, cu 0% dobanda, orice comanda efectuata pe site.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                9. Plata in rate online cu card Alpha Bank Finance
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Poti efectua plata in rate, cu 0% dobanda, folosind cardul de credit Alpha Bank Finance.
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