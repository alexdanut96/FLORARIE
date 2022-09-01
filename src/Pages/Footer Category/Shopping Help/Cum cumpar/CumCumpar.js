import React from "react";
import { Link } from "react-router-dom"
import STYLE from "./CumCumpar.module.css"
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";

export function CumCumpar() {

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>Cum cumpar</div>
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
                                <Link to={FooterCardComponents[8].path}>
                                    <div className={STYLE.selectedCategory}>
                                        Cum cumpar
                                    </div>
                                </Link>
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
                        <div>Cum cumpar</div>
                        <div className={STYLE.rowOne}>



                            <div className={STYLE.rowOneTitles}>
                                1. Selecteaza localitatea de livrare
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                In prima pagina, vei vedea semnalate cu verde doua campuri in care poti alege localitatea si data livrarii. Alege, mai intai, localitatea in care doresti sa facem livrarea, apoi data si actioneaza butonul "Vezi florile". Se va genera o lista de buchete de flori si aranjamente disponibile in stoc in localitatea aleasa de tine, in ziua specificata.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                2. Alege produsul preferat
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Din lista de produse generate, alege-l pe cel preferat. Cand dai click, vei fi directionat pe pagina de produs. Aici poti alege tipul de buchet sau arajament (stardard sau premium), poti adauga o felicitare in mod gratuit, completa textul acesteia si adauga un cadou (tort, sampanie, etc). Odata ce personalizat produsul asa cum iti doresti, da click pe Adauga in cos.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                3. Completarea datelor de livrare
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Daca nu ai un cont la noi sau nu esti conectat la contul existent, acum e momentul sa introduci adresa ta de mail in campul desemnat. Apoi vei ajunge intr-o pagina in care trebuie sa completezi datele tale de identificare (necesare pentru plasarea comenzii) si datele de livrare.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                4. Plata si confirmarea comenzii
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Odata completate toate datele necesare, poti trece la plata. Important! Comenzile sunt procesate numai dupa ce plata a fost confirmata. Poti plati online, cu cardul, sau poti alege Transferul bancar ca modalitate de plata. Completeaza datele necesare si actioneaza butonul "Finalizeaza comanda".
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                5. Confirmarea comenzii
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Cand toti pasii de mai sus au fost completati cu succes, vei primi un email care iti confirma inregistrarea comenzii.
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