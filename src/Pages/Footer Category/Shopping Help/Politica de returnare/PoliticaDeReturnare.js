import React from "react";
import { Link } from "react-router-dom"
import STYLE from "./PoliticaDeReturnare.module.css"
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";

export function PoliticaDeReturnare() {

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>Politica de returnare</div>
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
                                <Link to={FooterCardComponents[12].path}>
                                    <div className={STYLE.selectedCategory}>
                                        Politica de returnare
                                    </div>
                                </Link>
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
                        <div>Politica de returnare</div>
                        <div className={STYLE.rowOne}>



                            <div className={STYLE.rowOneTitlesContent}>
                                <div>
                                    Conform OUG 34/2014, florile constituie produse care sunt susceptibile a se deteriora sau a expira rapid și sunt exceptate de la dreptul de retragere.
                                </div>
                                <div>
                                    Jucăriile sau vazele și alte produse neperisabile comercializate de Floris Digital se pot returna după următoarea procedură:
                                </div>
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                Procedura de denuntare si retur:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                1. Puteti returna numai produsele care nu sunt perisabile si/sau alimentare. In consecinta, florile si dulciurile nu se pot returna, jucariile, vazele si cosurile, da.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                2. Returnarea se face prin trimiterea produselor la adresa: Bucuresti, sector 1, Soseaua Pipera, nr. 4, etaj 2, prin orice curier doriti.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                3. Transportul coletului de retur va fi platit de catre <Link className={STYLE.linkRef} to="/"> www.floris.ro</Link>.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                4. In colet se vor afla toate documentele primite initial, precum si o adresa scrisa, semnata de persoana care a initiat si platit comanda, care notifica denuntarea contractului si solicita returnarea sumei platite, indicand contul si banca unde se vor returna banii.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                5. Coletul trebuie trimis la sediul Floris.ro in maxim 14 zile calendaristice din momentul primirii comenzii.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                6. Suma platita va fi rambursata integral in 14 de zile calendaristice de la primirea notificarii de retragere.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                7. In urma intrării în vigoare a OUG 34/2014, consumatorii au dreptul de a renunța la cumpărare în termen de 14 zile calendaristice de la data intrării în posesia fizică a produsului. Clientul trebuie sa ne anunte prin mail, posta, telefon, SMS, verbal etc.
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