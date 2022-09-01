import React from "react";
import { Link } from "react-router-dom"
import STYLE from "./AvantajeleClientilor.module.css"
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";

export function AvantajeleClientilor() {

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>Avantajele clientilor</div>
                        <div className={STYLE.categoryContainer}>
                            <div className={STYLE.categoryTitle}>Despre Floris</div>
                            <div className={STYLE.category}>
                                <Link to={FooterCardComponents[0].path}>Despre noi</Link>
                                <Link to={FooterCardComponents[1].path}>
                                    <div className={STYLE.selectedCategory}>
                                        Avantajele clientilor
                                    </div>
                                </Link>
                                <Link to={FooterCardComponents[2].path}>Confidentialitate</Link>
                                <Link to={FooterCardComponents[3].path}>Termeni si conditii</Link>
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
                                <Link to={FooterCardComponents[16].path}>Fii partener Floris</Link>
                            </div>
                        </div>
                    </div>

                    <div className={STYLE.columnTwo}>
                        <div>Avantajele Clientilor</div>
                        <div className={STYLE.rowOne}>
                            <div>
                                De ce sa comanzi de la Floris?
                            </div>
                            <div>
                                Noi, echipa Floris, am reusit de-a lungul anilor sa multumim un numar foarte mare de clienti datorita seriozitatii cu care am tratat fiecare comanda, avand grija ca prin intermediul buchetelor de flori livrate sa oferim clipe frumoase atat destinatarului cat si expeditorului.
                            </div>
                            <div>
                                Astfel, clientii Floris se bucura de urmatoarele avantaje:
                            </div>
                            <div><strong>1. Numeroase modalitati de plata </strong>- card de credit/debit/Paypal, prin OP sau Statiile de Plata SelfPay si terminalele Qiwi;</div>
                            <div><strong>2. Flori de calitate superioara </strong>- avand parteneriate cu cei mai importanti furnizori locali si internationali, suntem mereu aprovizionati cu flori proaspete si de calitate;</div>
                            <div><strong>3. Suport tehnic pentru orice comanda </strong>- iti stam la dispozitie pentru orice nelamurire sau pentru a-ti oferi detaliile suplimentare de care ai nevoie in efectuarea comenzii. Iti putem oferi informatiile necesare la telefon, prin email sau pe Facebook</div>
                            <div><strong>4. Transport gratuit </strong>prin curieri proprii in peste 100 de orase din Romania; (Transportul este gratuit doar in localitatile cu livrare locala. In alte localitati, pretul transportului pentru livrarea florilor este de 1.3 lei/km - se calculeaza distanta dus-intors - fata de cea mai apropiata localitate in care avem livrare locala);</div>
                            <div><strong>5. Acoperire nationala cu livrare </strong>in maximum 2 ore de la preluarea si confirmarea comenzii;</div>
                            <div><strong>6. Felicitare cadou pentru fiecare buchet/comanda </strong>- pe felicitare imprimam mesajul dorit de tine;</div>
                            <div><strong>7. Program de loialitate </strong>pentru clientii fideli: Floris Club ofera reduceri de pana la 20% la fiecare comanda, colectii exclusive, prioritate in preluarea apelurilor acces la evenimentele Floris, vouchere de reducere in Florariile Floris.</div>
                            <div><strong>8. Designeri florali profesionisti </strong>- beneficiati de buchete si aranjamente florale deosebite;</div>
                            <div><strong>9. Numeroase colectii de buchete </strong>- pentru a fi la curent cu toate promotiile si colectiile de buchete oferite de Floris.ro;</div>
                            <div><strong>10. Newsletter periodic </strong>de flori potrivite oricarei ocazii;</div>
                            <div><strong>11. Asiguram 100% anonimatul </strong>identitatii tale - cu ajutorul nostru poti impresiona placut pe oricine; Floris garanteaza confidentialitatea clientilor sai.</div>
                            <div>La Floris vei gasi mereu o echipa dedicata care iti va oferi sfaturile de care ai nevoie, atat in efectuarea unei comenzi, cat si in alegerea unui buchet de flori potrivit oricarei ocazii.</div>
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