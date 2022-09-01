import React from "react";
import { Link } from "react-router-dom"
import STYLE from "./FAQ.module.css"
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";

export function FAQ() {

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>F.A.Q.</div>
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
                                <Link to={FooterCardComponents[13].path}>
                                    <div className={STYLE.selectedCategory}>
                                        F.A.Q.
                                    </div>
                                </Link>
                                <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO?ref=footer_4_5">Solutionarea online a litigiilor</a>
                                <a href="https://anpc.ro/">A.N.P.C.</a>
                                <Link to={FooterCardComponents[16].path}>Fii partener Floris</Link>
                            </div>
                        </div>
                    </div>

                    <div className={STYLE.columnTwo}>
                        <div>F.A.Q.</div>
                        <div className={STYLE.rowOne}>



                            <div className={STYLE.rowOneTitles}>
                                1. Pot veni la sediul Floria pentru a plati comanda in numerar?


                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <strong>R: </strong>Plata produselor comandate de pe site-ul www.floria.ro se poate face doar online prin una dintre modalitatile de plata puse la dispozitie de Floria. Vezi mai multe detalii despre modalitatile de plata pe Floria.ro AICI.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                2. Pot ridica buchetul comandat de la sediu Floria?

                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <strong>R: </strong>Livrarea comenzilor de pe www.floria.ro se face doar prin curieri proprii si doar dupa ce s-a facut dovada platii.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                3. Puteti livra buchete si in strainatate?

                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <strong>R: </strong>Da, Floria livreaza flori si international in 24 ore dupa ce s-a facut dovada platii.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                4. Puteti livra si in comunele/satele care nu se afla in lista localitatilor afisate pe site?

                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <strong>R: </strong>Putem livra buchete oriunde in tara. In provincie, pretul transportului pentru livrarea florilor este de 1.3 lei/km (se calculeaza distanta dus-intors). Distanta se calculeaza fata de cea mai apropiata localitate in care avem livrare locala. In localitatile cu livrare locala (in numar de 140), transportul este gratuit.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                5. Ce inseamna cand un produs este disponibil doar la comanda?

                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <strong>R: </strong>Atunci cand un produs are in descriere „disponibil la comanda” inseamna ca florile respective nu sunt in stoc in perioada respectiva. Puteti lansa insa comanda si noi vom incerca sa le procuram sau vom cauta impreuna cea mai buna alternativa.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                6. In cat timp de la plasarea comenzii ajunge aceasta la destinatie?

                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <strong>R: </strong>Termenul mediu de livrare in Bucuresti si alte peste 140 de orase este de 2 ore de la confirmarea in sistem a platii comenzii.
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