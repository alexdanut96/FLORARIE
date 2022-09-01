import React from "react";
import { Link } from "react-router-dom"
import STYLE from "./FlorariileFloris.module.css"
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";

export function FlorariileFloris() {

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>Florariile Floris</div>
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
                                <Link to={FooterCardComponents[10].path}>
                                    <div className={STYLE.selectedCategory}>
                                        Florariile Floris
                                    </div>
                                </Link>
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
                        <div>Florariile Floris</div>
                        <div className={STYLE.rowOne}>



                            <div className={STYLE.rowOneTitles}>
                                Comandă Online Flori de Livrare Flori National cu Livrare la Domiciliu
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Trimite flori in cu Floris. Daca vrei sa-ti surprinzi persoana iubita cu un buchet de flori sau sa ii faci o surpriza mamei, surorii sau unei prietene. Alege un buchet de flori de la Floris. La noi poti alege dintr-o gama diversificata de buchete de flori cu livrare GRATUITA in peste 100 de orase! Livrari flori la domiciliu in prin reteaua proprie de curieri. Poti oferi un cadou perfect, cu flori livrate la timp in si in toata tara, intr-o stare perfecta.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Florile proaspete vor fi livrate in in maxim 2 ore de la confirmarea platii. Pe langa gama variata de produse pe care o punem la dispozitie, la Floris vei gasi mereu flori potrivite fiecarui sezon, pentru ca avem colectii dedicate. Suntem pe primul loc in topul celor mai cautate florarii online din tara. Fiecare comanda este livrata alaturi de o felicitare prin care poti transmite gandurile tale. De asemenea, ai posibilitatea de a personaliza cadoul floral: poti alege dimensiune standard sau premium, poti adauga un cadou, un tort sau o cutie de bomboane, la comanda finala. Alege Floris!
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