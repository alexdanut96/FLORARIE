import React from "react";
import { Link } from "react-router-dom"
import STYLE from "./InformatiiDespreLivrare.module.css"
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";

export function InformatiiDespreLivrare() {

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>Informatii despre livrare</div>
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
                                <Link to={FooterCardComponents[11].path}>
                                    <div className={STYLE.selectedCategory}>
                                        Informatii despre livrare
                                    </div>
                                </Link>
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
                        <div>Informatii despre livrare</div>
                        <div className={STYLE.rowOne}>



                            <div className={STYLE.rowOneTitles}>
                                Comandă Online Flori cu Livrare la Domiciliu
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Floria.ro a revolutionat intregul concept de a comanda flori online prin introducerea sistemului de livrare prin curieri proprii, care garanteaza ca buchetele sunt livrate de catre o persoana, florile sunt oferite din mana unei persoana care zambeste si buchetul este pus in valoare din primul moment.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Comanda de flori online prin Floria asigura prospetimea buchetelor care ajung la destinatar, pentru ca livrarea se realizeaza in 2 ore de la comanda, fara ca florile sa fie puse intr-o cutie pana a doua zi.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                De ce as comanda flori online?
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Comanda flori pentru a face ziua mai frumoasa persoanei careia le vei oferi.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Comanda flori online pentru ca este simplu si pentru ca florile sunt livrate rapid, in 2 ore de la comanda, oriunde in tara.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Comanda flori online prin Floria, pentru ca buchetele sunt splendide iar intregul ansamblu pentru livrare asigura o experienta senzoriala uluitoare, la doar 2 ore de la comanda florilor online.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                Comanda flori online oriunde in tara
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Prin Floria, poti comanda flori online care sa fie livrate oriunde in tara, prin intermediul partenerilor nostri, alaturi de care ne asiguram ca buchetul poate ajunge la destinatie in 2 ore de la comanda. Transportul este gratuit in Bucuresti si in alte 130 orase din Romania.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Comanda flori online in Bucuresti prin Floria si vei primi pe mail fotografia buchetului livrat, pentru a gusta din frumusetea lui si din bucuria pe care o va genera.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                Comanda flori online pentru iubita ta
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Daca vrei sa o faci sa zambeasca, vrei sa ii spui ca iti este dor de ea, sa ii ceri iertare sau sa ii faci o declaratie de dragoste, comanda flori online pentru iubita ta si cu siguranta vei obtine un efect pe care nu il vei uita prea curand.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Cand unei femei i se trimit flori prin comanda online, curierul nostru o anunta ca a primit ceva, fara sa ii spuna ce sau de la cine, starnind curiozitatea si interesul. Apoi, ii va oferi buchetul zambind, si ii va ura o zi spectaculoasa, in timp ce ea se va intreba cine este cel care a realizat comanda de flori online. Cand va descoperi, te va suna emotionata si iti va spune cum se simte. De fiecare data cand livram buchetele in urma unei comenzi de flori online, efectul este impresionant.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                Comanda flori online si semneaza Anonim
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Floria iti da posibilitatea sa faci o comanda de flori online fara ca persoana careia ii sunt destinate florile sa afle cine I le-a trimis. Ramai anonim cat timp doresti, chiar si pentru totdeauna, Floria.ro garanteaza ca nu va divulga identitatea clientului, in ciuda insistentelor destinatarelor, care uneori sunt ating cote impresionante.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                Comanda flori online pentru familie
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Comanda flori online cand este ziua mamei tale si nu esti langa ea, cand prietena ta este plecata de ziua numelui, sau vrei sa-i transmiti bunicii tale ca iti este dor de ea.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Comanda flori online pentru orice persoana draga, cu livrare oriunde in tara, pentru a-i insenina ziua printr-o surpriza care o va emotiona pana la lacrimi.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Alege din cele peste 2500 de buchetele create de designerii Floria si disponibile pentru comanda online, combinatia de flori si culori care va uimi si va impresiona intreaga familie.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                In cazul in care livrarea nu se poate finaliza la primul transport, Floria garanteaza un al doilea transport gratuit in aceeasi zi, la adresa mentionata in comanda initiala sau la alta adresa din orasul respectiv. In cazul in care nici a doua livrare nu se finalizeaza cu succes, clientul va achita o taxa de transport de 50 ron daca se opteaza pentru relivrarea aceluiasi buchet in alta zi. Floria nu isi asuma raspunderea pentru prospetimea florilor relivrate, insa clientul poate opta pentru comandarea aceluiasi tip de buchet cu 50% discount, buchet care va fi livrat in orice alta zi.
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