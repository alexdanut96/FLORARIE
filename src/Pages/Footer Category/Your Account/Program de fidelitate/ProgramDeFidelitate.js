import React from "react";
import { Link } from "react-router-dom"
import STYLE from "./ProgramDeFidelitate.module.css"
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";
import image from "./image.jpg"
import checkImage from "./check.jpg"
import gold from "./gold.jpg"
import silver from "./silver.jpg"
import bronze from "./bronze.jpg"
import { FaCheck } from "react-icons/fa"

export function ProgramDeFidelitate() {

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>Program de fidelitate</div>
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
                                <Link to={FooterCardComponents[6].path}>
                                    <div className={STYLE.selectedCategory}>
                                        Program de fidelitate
                                    </div>
                                </Link>
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
                                <Link to={FooterCardComponents[16].path}>Fii artener Floris</Link>
                            </div>
                        </div>
                    </div>

                    <div className={STYLE.columnTwo}>
                        <div>Program de fidelitate</div>

                        <div className={STYLE.rowOne}>
                            <div className={STYLE.rightHalf}>
                                <img className={STYLE.image} src={image} alt="img" />
                            </div>
                            <div className={STYLE.leftHalf}>
                                <div className={STYLE.leftHalfTitle}>
                                    Ce este programul de fidelizare?
                                </div>
                                <div className={STYLE.leftHalfContent}>
                                    Am lansat programul nostru de fidelizare, Floris Club, in martie 2014 pentru ca dorim sa ii rasplatim la randul nostru pe acei clienti care au simtit de cele mai multe ori bucuria de a darui flori. Prin intermediul Floris Club, clientii Floris se pot bucura de 3 statuturi diferite: client <strong>SILVER</strong>, client <strong>GOLD</strong> si client <strong>PLATINUM</strong>.
                                </div>
                            </div>
                        </div>

                        <div className={STYLE.rowTwo}>

                            <div className={STYLE.rowTwoContent}>
                                <div className={STYLE.rowTwoRightHalf}>
                                    <div className={STYLE.rowTwoTitle}>
                                        Cum intru in programul de fidelizare?
                                    </div>
                                    <div className={STYLE.list}>
                                        <div>
                                            1.&nbsp;&nbsp;&nbsp;Va
                                            <Link className={STYLE.linkRef} to={FooterCardComponents[5].path}> creati un cont </Link>
                                            pe site-ul nostru.
                                        </div>
                                        <div>
                                            2.&nbsp;&nbsp;&nbsp;Completati corect si complet datele obligatorii si cele optionale din cont: nume, prenume, telefon mobil, adresa, judet, localitate, apelativ, data nasterii.
                                        </div>
                                        <div>
                                            3.&nbsp;&nbsp;&nbsp;Plasati cel putin o comanda, pentru a atinge valoarea necesara acordarii primului statut de client fidel.
                                        </div>
                                    </div>

                                </div>
                                <div className={STYLE.rowTwoLefttHalf}>
                                    <div className={STYLE.rowTwoTitle}>
                                        Odata ce ati aderat la programul nostru de fidelizare, veti beneficia de urmatoare avantaje:
                                    </div>
                                    <div className={STYLE.rowTwoLefttHalfContent} >
                                        <img className={STYLE.checkImage} src={checkImage} alt="img" />
                                        <div>Reduceri la orice comanda</div>
                                    </div>
                                    <div className={STYLE.rowTwoLefttHalfContent} >
                                        <img className={STYLE.checkImage} src={checkImage} alt="img" />
                                        <div>Vouchere discount pentru prieteni</div>
                                    </div>
                                    <div className={STYLE.rowTwoLefttHalfContent} >
                                        <img className={STYLE.checkImage} src={checkImage} alt="img" />
                                        <div>Colectii de produse exclusive</div>
                                    </div>
                                    <div className={STYLE.rowTwoLefttHalfContent} >
                                        <img className={STYLE.checkImage} src={checkImage} alt="img" />
                                        <div>Acces la evenimentele Floris</div>
                                    </div>
                                    <div className={STYLE.rowTwoLefttHalfContent} >
                                        <img className={STYLE.checkImage} src={checkImage} alt="img" />
                                        <div>Reduceri in Florariile Floris</div>
                                    </div>
                                    <div className={STYLE.rowTwoLefttHalfContent} >
                                        <img className={STYLE.checkImage} src={checkImage} alt="img" />
                                        <div>Prioritate in preluarea apelurilor</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={STYLE.rowThree}>
                            <div className={STYLE.rowThreeTitle}>
                                Fiecare statut se acorda in functie de valoarea totala a comenzilor plasate si finalizate in ultimul an. Astfel:
                            </div>
                            <div className={STYLE.rowThreeContainer}>

                                <div className={STYLE.rowThreeContent}>
                                    <div className={STYLE.rowThreeTop}>
                                        <div className={STYLE.medalIconContainer}>
                                            <img className={STYLE.medalIcom} src={gold} alt="img" />
                                        </div>
                                        <div className={STYLE.rowThreeTopTitle}>Client GOLD</div>
                                        <div>
                                            Trebuie sa aveti comenzi finalizate de minimum 1500 lei in ultimul an;
                                        </div>
                                    </div>
                                    <div className={STYLE.rowThreeMiddle}>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>-20% reducere*</div>
                                        </div>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>-10% in florariile Floris</div>
                                        </div>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>colectie exclusiva</div>
                                        </div>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>vouchere pentru prieteni*</div>
                                        </div>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>linie dedicata de suport</div>
                                        </div>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>acces la evenimente Floris</div>
                                        </div>
                                    </div>
                                    <div className={STYLE.rowThreeBottom}>
                                        <div className={STYLE.rowThreeBottomLines} >
                                            *sunt exceptate de la aceasta regula produsele deja aflate la promotie
                                        </div>
                                        <div className={STYLE.rowThreeBottomLines} >
                                            **10% x 5 / an
                                        </div>
                                    </div>
                                </div>

                                <div className={STYLE.rowThreeContent}>
                                    <div className={STYLE.rowThreeTop}>
                                        <div className={STYLE.medalIconContainer}>
                                            <img className={STYLE.medalIcom} src={silver} alt="img" />
                                        </div>
                                        <div className={STYLE.rowThreeTopTitle}>Client SILVER</div>
                                        <div>
                                            Trebuie sa aveti comenzi finalizate de minimum 500 lei in ultimul an;
                                        </div>
                                    </div>
                                    <div className={STYLE.rowThreeMiddle}>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>-15% reducere*</div>
                                        </div>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>-7% in florariile Floris</div>
                                        </div>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>colectie exclusiva</div>
                                        </div>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>vouchere pentru prieteni*</div>
                                        </div>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>linie dedicata de suport</div>
                                        </div>
                                    </div>
                                    <div className={STYLE.rowThreeBottom}>
                                        <div className={STYLE.rowThreeBottomLines} >
                                            *sunt exceptate de la aceasta regula produsele deja aflate la promotie
                                        </div>
                                        <div className={STYLE.rowThreeBottomLines} >
                                            **10% x 5 / an
                                        </div>
                                    </div>
                                </div>
                                <div className={STYLE.rowThreeContent}>
                                    <div className={STYLE.rowThreeTop}>
                                        <div className={STYLE.medalIconContainer}>
                                            <img className={STYLE.medalIcom} src={bronze} alt="img" />
                                        </div>
                                        <div className={STYLE.rowThreeTopTitle}>Client BRONZE</div>
                                        <div>
                                            Trebuie sa aveti comenzi finalizate de minimum 3000 lei in ultimul an;
                                        </div>
                                    </div>
                                    <div className={STYLE.rowThreeMiddle}>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>-10% reducere*</div>
                                        </div>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>colectie exclusiva</div>
                                        </div>
                                        <div className={STYLE.rowThreeMiddleLines}>
                                            <div><FaCheck /></div>
                                            <div>vouchere pentru prieteni*</div>
                                        </div>
                                    </div>
                                    <div className={STYLE.rowThreeBottom}>
                                        <div className={STYLE.rowThreeBottomLines} >
                                            *sunt exceptate de la aceasta regula produsele deja aflate la promotie
                                        </div>
                                        <div className={STYLE.rowThreeBottomLines} >
                                            **10% x 5 / an
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={STYLE.rowFour}>
                            <div className={STYLE.rowFourTitle}>
                                Conditii generale si detalii
                            </div>
                            <div className={STYLE.rowFourContent} >
                                <div className={STYLE.rowFourContentLine}>
                                    <div><FaCheck /></div>
                                    <div>
                                        Pentru a putea participa la acest program, trebuie sa aveti cont de client inregistrat pe site-ul nostru, cu o adresa valida de e-mail.
                                    </div>
                                </div>
                            </div>
                            <div className={STYLE.rowFourContent} >
                                <div className={STYLE.rowFourContentLine}>
                                    <div><FaCheck /></div>
                                    <div>
                                        Fidelizarea contului dumneavoastra de client se va face automat in momentul in care toate datele vor fi completate.
                                    </div>
                                </div>
                            </div>
                            <div className={STYLE.rowFourContent} >
                                <div className={STYLE.rowFourContentLine}>
                                    <div><FaCheck /></div>
                                    <div>
                                        Beneficiile statutului de client Silver/Gold/Platinum la Floris nu sunt transmisibile
                                    </div>
                                </div>
                            </div>
                            <div className={STYLE.rowFourContent} >
                                <div className={STYLE.rowFourContentLine}>
                                    <div><FaCheck /></div>
                                    <div>
                                        Statutul de client Silver/Gold/Platinum se acorda pentru un an, din momentul in care au fost indeplinite conditiile necesare (a fost atins pragul valoric necesar fiecarui statut)
                                    </div>
                                </div>
                            </div>
                            <div className={STYLE.rowFourBottom}>
                                <div>
                                    Floris digital isi rezerva dreptul de a modifica regulamentul si modul de acordare al reducerilor, fara o avertizare prealabila.
                                </div>
                                <div>
                                    Ultima actualizare: 06.11.2020
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