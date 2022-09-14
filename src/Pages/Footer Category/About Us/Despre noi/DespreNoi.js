import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import STYLE from "./DespreNoi.module.css"
import image from "./image.jpg"
import image2 from "./image2.jpg"
import { ImUserTie } from "react-icons/im"
import { CommentsItems } from "../../../../components/HomePage/Feedback/CommentsItems";
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";

export function DespreNoi() {

    useEffect(() => {

        const itemSlide = document.querySelectorAll(`.${STYLE.allSlides}`)
        const dotUne = document.querySelectorAll(`.${STYLE.dotUne}`)
        const dotTwo = document.querySelectorAll(`.${STYLE.dotTwo}`)
        const dotThree = document.querySelectorAll(`.${STYLE.dotThree}`)
        const dotQuatre = document.querySelectorAll(`.${STYLE.dotQuatre}`)
        const dotFive = document.querySelectorAll(`.${STYLE.dotFive}`)
        const slideWidth = 14.2857
        let x1
        let x2
        let startPoint
        let distance
        let index1 = 1

        dotUne[0].style.backgroundColor = "#559137"
        dotUne[0].style.borderColor = "#559137"

        itemSlide[0].addEventListener('transitionend', () => {
            if (index1 === 6) {
                itemSlide[0].style.transition = 'none'
                index1 = 1
                itemSlide[0].style.transform = `translateX(${-slideWidth}%)`
                currentDot()
            }
            if (index1 === 0) {
                itemSlide[0].style.transition = 'none'
                index1 = 5
                itemSlide[0].style.transform = `translateX(${-(slideWidth * index1)}%)`
                currentDot()
            }
        })

        const moveToNextSlide = () => {
            if (index1 >= 6) return
            index1++
            itemSlide[0].style.transition = '.50s ease'
            itemSlide[0].style.transform = `translateX(${-(slideWidth * index1)}%)`
            currentDot()
        }

        const moveToPreviousSlide = () => {
            if (index1 <= 0) return
            index1--
            itemSlide[0].style.transition = '.50s ease'
            itemSlide[0].style.transform = `translateX(${-(slideWidth * index1)}%)`
            currentDot()
        }

        itemSlide[0].addEventListener("touchstart", dragStart)
        itemSlide[0].addEventListener("touchmove", dragMove)
        itemSlide[0].addEventListener("touchend", dragEnd)

        function dragStart(e) {
            x1 = e.touches[0].clientX
            startPoint = e.touches[0].clientX
            document.onmousemove = dragMove
            document.onmouseup = dragEnd
        }

        function dragMove(e) {
            x2 = x1 - e.touches[0].clientX
            distance = startPoint - e.touches[0].clientX
            x1 = e.touches[0].clientX
            itemSlide[0].style.transition = 'none'
            itemSlide[0].style.left = `${itemSlide[0].offsetLeft - x2}px`
        }

        function dragEnd() {
            if (distance < -44) {
                itemSlide[0].style.left = `${0}px`
                moveToPreviousSlide()
            } else if (distance > 44) {
                itemSlide[0].style.left = `${0}px`
                moveToNextSlide()
            } else {
                itemSlide[0].style.left = `${0}px`
            }
            distance = 0
            document.onmouseup = null
            document.onmousemove = null
        }

        dotUne[0].addEventListener('click', () => {
            index1 = 1
            itemSlide[0].style.transition = '.50s ease'
            itemSlide[0].style.transform = `translateX(${-(slideWidth * index1)}%)`
            currentDot()
        })

        dotTwo[0].addEventListener('click', () => {
            index1 = 2
            itemSlide[0].style.transition = '.50s ease'
            itemSlide[0].style.transform = `translateX(${-(slideWidth * index1)}%)`
            currentDot()
        })

        dotThree[0].addEventListener('click', () => {
            index1 = 3
            itemSlide[0].style.transition = '.50s ease'
            itemSlide[0].style.transform = `translateX(${-(slideWidth * index1)}%)`
            currentDot()
        })

        dotQuatre[0].addEventListener('click', () => {
            index1 = 4
            itemSlide[0].style.transition = '.50s ease-out'
            itemSlide[0].style.transform = `translateX(${-(slideWidth * index1)}%)`
            currentDot()
        })
        dotFive[0].addEventListener('click', () => {
            index1 = 5
            itemSlide[0].style.transition = '.50s ease'
            itemSlide[0].style.transform = `translateX(${-(slideWidth * index1)}%)`
            currentDot()
        })

        function currentDot() {
            if (index1 === 1) {
                dotUne[0].style.backgroundColor = "#559137"
                dotUne[0].style.borderColor = "#559137"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotQuatre[0].style.backgroundColor = "transparent"
                dotQuatre[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
            } else if (index1 === 2) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "#559137"
                dotTwo[0].style.borderColor = "#559137"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotQuatre[0].style.backgroundColor = "transparent"
                dotQuatre[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
            } else if (index1 === 3) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "#559137"
                dotThree[0].style.borderColor = "#559137"
                dotQuatre[0].style.backgroundColor = "transparent"
                dotQuatre[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
            } else if (index1 === 4) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotQuatre[0].style.backgroundColor = "#559137"
                dotQuatre[0].style.borderColor = "#559137"
                dotFive[0].style.backgroundColor = "transparent"
                dotFive[0].style.borderColor = "#aaaa"
            } else if (index1 === 5) {
                dotUne[0].style.backgroundColor = "transparent"
                dotUne[0].style.borderColor = "#aaaa"
                dotTwo[0].style.backgroundColor = "transparent"
                dotTwo[0].style.borderColor = "#aaaa"
                dotThree[0].style.backgroundColor = "transparent"
                dotThree[0].style.borderColor = "#aaaa"
                dotQuatre[0].style.backgroundColor = "transparent"
                dotQuatre[0].style.borderColor = "#aaaa"
                dotFive[0].style.backgroundColor = "#559137"
                dotFive[0].style.borderColor = "#559137"
            }
        }
    }, [])

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>Despre noi</div>
                        <div className={STYLE.categoryContainer}>
                            <div className={STYLE.categoryTitle}>Despre Floris</div>
                            <div className={STYLE.category}>
                                <Link to={FooterCardComponents[0].path}>
                                    <div className={STYLE.selectedCategory}>
                                        Despre noi
                                    </div>
                                </Link>
                                <Link to={FooterCardComponents[1].path}>Avantajele clientilor</Link>
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
                        <div>Despre noi</div>
                        <div className={STYLE.rowOne}>
                            <div>
                                Povestea Floris - O poveste despre flori, oameni si momente speciale
                            </div>
                            <div>
                                Floris este o afacere nascuta din pasiunea pentru flori si dragostea pentru frumos, pe 18 iulie 2010.
                            </div>
                            <div>
                                Cu o evolutie excelenta pe piata, Floris.ro este magazinul online, care ofera clientilor creatii florale unice, cu un design in acord cu tendintele din lumea modei internationale, dar adaptat la cerintele pietei din Romania.
                            </div>
                        </div>
                        <div className={STYLE.rowTwo}>
                            <img className={STYLE.imageOne} src={image} alt="none" />
                        </div>
                        <div className={STYLE.rowThree}>
                            <div className={STYLE.firstHalf}>
                                <div className={STYLE.halfTitle}>Echipa Floris - suntem bucurosi de oameni valorosi!</div>
                                <div className={STYLE.halfContent}>
                                    <div>Floris crede in oameni. Stim ca vom creste doar datorita lor.</div>
                                    <div>Asadar, echipa noastra este una dintre cele mai mari mandrii. Investim in permanenta in oameni. Am adus impreuna specialisti in mai multe domenii, cu pasiuni comune: pentru frumos si flori.</div>
                                    <div>Probabil, echipa fetelor din call-center ar castiga detasat un concurs de comunicare, dar si unul de biologie: cunosc toate florile, dupa specii, soiuri si denumiri in latina.</div>
                                    <div>Echipa de marketing are un task principal: sa stie oricand, orice. E greu sa nu gasesti raspunsul la ei!</div>
                                    <div>De oamenii de la financiar ne este chiar si noua putin frica: sunt capabili sa faca cele mai complicate calcule si previziuni in cateva secunde.</div>
                                    <div>Fara modestie, avem doar un lucru de spus: suntem bucurosi de oameni valorosi!</div>
                                </div>
                            </div>
                            <div className={STYLE.secondHalf}>
                                <div className={STYLE.halfTitle}>Nevoile clientilor sunt extrem de importante, asa ca Floris.ro le ofera acestora multiple avantaje:</div>
                                <div className={STYLE.halfContent}>
                                    <div className={STYLE.arrowSign}>
                                        <div>{">"}</div>
                                        <div>Modalitati de plata rapide si sigure – card de credit/debit/Paypal, dar si plata cu transfer bancar;</div>
                                    </div>
                                    <div className={STYLE.arrowSign}>
                                        <div>{">"}</div>
                                        <div>
                                            Flori mereu proaspete, importate de la producatori recunoscuti;
                                        </div>
                                    </div>
                                    <div className={STYLE.arrowSign}>
                                        <div>{">"}</div>
                                        <div>
                                            Suport tehnic pentru comenzi;
                                        </div>
                                    </div>
                                    <div className={STYLE.arrowSign}>
                                        <div>{">"}</div>
                                        <div>
                                            Transport gratuit prin curieri proprii, in toata tara, in maxim 2-4h;
                                        </div>
                                    </div>
                                    <div className={STYLE.arrowSign}>
                                        <div>{">"}</div>
                                        <div>
                                            Felicitare cadou pentru fiecare buchet, cu mesaj personalizat, trimis de catre clienti;
                                        </div>
                                    </div>
                                    <div className={STYLE.arrowSign}>
                                        <div>{">"}</div>
                                        <div>
                                            Carduri de fidelitate si coduri de reducere pentru clientii fideli;
                                        </div>
                                    </div>
                                    <div className={STYLE.arrowSign}>
                                        <div>{">"}</div>
                                        <div>
                                            Design floral profesionist;
                                        </div>
                                    </div>
                                    <div className={STYLE.arrowSign}>
                                        <div>{">"}</div>
                                        <div>
                                            Newsletter periodic cu toate promotile si colectiile;
                                        </div>
                                    </div>
                                    <div className={STYLE.arrowSign}>
                                        <div>{">"}</div>
                                        <div>
                                            Confidentialitate – asigurarea anonimatului clientilor.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={STYLE.rowFour}>
                            <div className={STYLE.slider}>
                                <div className={STYLE.allSlides}>
                                    <div className={STYLE.itemSlide}>
                                        <div className={STYLE.top}>
                                            <ImUserTie className={STYLE.icon} />
                                            <div className={STYLE.customerName}>{CommentsItems[4].name}</div>
                                        </div>
                                        <div className={STYLE.customerComment}>{CommentsItems[4].comment}</div>
                                    </div>
                                    <div className={STYLE.itemSlide}>
                                        <div className={STYLE.top}>
                                            <ImUserTie className={STYLE.icon} />
                                            <div className={STYLE.customerName}>{CommentsItems[0].name}</div>
                                        </div>
                                        <div className={STYLE.customerComment}>{CommentsItems[0].comment}</div>
                                    </div>
                                    <div className={STYLE.itemSlide}>
                                        <div className={STYLE.top}>
                                            <ImUserTie className={STYLE.icon} />
                                            <div className={STYLE.customerName}>{CommentsItems[1].name}</div>
                                        </div>
                                        <div className={STYLE.customerComment}>{CommentsItems[1].comment}</div>
                                    </div>
                                    <div className={STYLE.itemSlide}>
                                        <div className={STYLE.top}>
                                            <ImUserTie className={STYLE.icon} />
                                            <div className={STYLE.customerName}>{CommentsItems[2].name}</div>
                                        </div>
                                        <div className={STYLE.customerComment}>{CommentsItems[2].comment}</div>
                                    </div>
                                    <div className={STYLE.itemSlide}>
                                        <div className={STYLE.top}>
                                            <ImUserTie className={STYLE.icon} />
                                            <div className={STYLE.customerName}>{CommentsItems[3].name}</div>
                                        </div>
                                        <div className={STYLE.customerComment}>{CommentsItems[3].comment}</div>
                                    </div>
                                    <div className={STYLE.itemSlide}>
                                        <div className={STYLE.top}>
                                            <ImUserTie className={STYLE.icon} />
                                            <div className={STYLE.customerName}>{CommentsItems[4].name}</div>
                                        </div>
                                        <div className={STYLE.customerComment}>{CommentsItems[4].comment}</div>
                                    </div>
                                    <div className={STYLE.itemSlide}>
                                        <div className={STYLE.top}>
                                            <ImUserTie className={STYLE.icon} />
                                            <div className={STYLE.customerName}>{CommentsItems[0].name}</div>
                                        </div>
                                        <div className={STYLE.customerComment}>{CommentsItems[0].comment}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={STYLE.dotsSlider}>
                                <div className={STYLE.dotUne}></div>
                                <div className={STYLE.dotTwo} ></div>
                                <div className={STYLE.dotThree} ></div>
                                <div className={STYLE.dotQuatre} ></div>
                                <div className={STYLE.dotFive} ></div>
                            </div>
                        </div>
                        <img className={STYLE.imageTwo} src={image2} alt="img" />
                        <div className={STYLE.rowFive}>
                            <div className={STYLE.firstHalf}>
                                <div className={STYLE.halfTitle}>Cu ce ne mandrim</div>
                                <div className={STYLE.halfContent}>
                                    <div>Ca o confirmare a faptului ca noi, aici, la Floris, punem pe primul loc interesele clientilor, in 2010, 2013, 2014, 2015, 2016 si 2017 am primit titlul de Floraria Online a Anului, in cadrul Galei Premiilor de e-Commerce iar de doua ori titlul ‘Cea mai buna florarie online si cel mai bun magazin online din Romania’ (2016 si 2017).</div>
                                    <div>Orientarea către digitalizare a făcut din Floris.ro unul dintre cele mai active proiecte online din domeniul floristic, experiența celor care trimit florile fiind
                                        întotdeauna la fel de importantă ca acelor care le primesc.</div>
                                </div>
                            </div>
                            <div className={STYLE.secondHalf}>
                                <div className={STYLE.halfContent}>
                                    <div>Florile mereu proaspete, livrarea rapida, designul original si exceptional sunt cele mai importante caracteristici de care Casa Regala a tinut cont, in decizia de acordare a calitatii de “Furnizor al Casei Regale a Romaniei”. Astfel, toate buchetele si aranjamentele florale folosite de Casa Regala, in cadrul evenimentelor organizate, dar si cu alte diverse ocazii importante din viata Familiei Regale, vor fi de la noi, de la Floris.</div>
                                    <div>Ne asumam responsabilitatea pastrarii profesionalismului, seriozitatii si a standardelor inalte privind calitatea produselor oferite nu doar Casei Regale, ci tuturor clientilor nostri.</div>
                                    <div>In luna mai 2019 Floris a fost floristul oficial al vizitei papale în România.</div>
                                </div>
                            </div>
                        </div>
                        <div className={STYLE.rowSix}>
                            <div className={STYLE.shapes}>
                                <div className={STYLE.circle}></div>
                                <div className={STYLE.square}></div>
                            </div>
                            <div className={STYLE.rowSixContainer}>
                                <div className={STYLE.firstHalf}>
                                    <div className={STYLE.halfTitle}>Date Contact</div>
                                    <div className={STYLE.halfContent}>
                                        <div>Ne poti contacta oricand pe e-mail sau la numerele de telefon afisate mai jos:</div>
                                        <div>
                                            <div className={STYLE.rowSixContent}>E-mail:</div>
                                            <div className={STYLE.mailTo} href="mailto:alexandruburcea1996@gmail.com">
                                                comenzi@floris.ro
                                            </div>
                                        </div>
                                        <div>
                                            <div className={STYLE.rowSixContent}>Telefon:</div>
                                            <div>*9595 (numar apelabil din orice retea mobila la tariful intern al retelei)
                                                *4021 300 9595 (numar apelabil din orice retea fixa la tariful intern al retelei)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={STYLE.secondHalf}>
                                    <div className={STYLE.halfTitle}>Program de lucru</div>
                                    <div className={STYLE.halfContent}>
                                        <div>
                                            <div className={STYLE.rowSixContent}>
                                                Luni - Vineri:
                                                <span style={{ fontWeight: "normal" }}> 08.00 - 22.00</span>
                                            </div>
                                            <div>(livrari intre 09.00 - 22.00)</div>
                                        </div>
                                        <div>
                                            <div className={STYLE.rowSixContent}>
                                                Sambata:
                                                <span style={{ fontWeight: "normal" }}> 08.00 - 22.00</span>
                                            </div>
                                            <div>(livrari intre 08.00 - 22.00)</div>
                                        </div>
                                        <div>
                                            <div className={STYLE.rowSixContent}>
                                                Duminica:
                                                <span style={{ fontWeight: "normal" }}> 08.00 - 18.00</span>
                                            </div>
                                            <div>(livrari intre 09.00 - 18.00)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={STYLE.rowSeven}>

                            <div>
                                Reteaua nationala si internationala
                            </div>
                            <div>
                                In prezent, Floris.ro are parteneri in peste 140 de localitati din intreaga tara, asigurand si livrarea in 24 de ore pentru comenzile internationale.
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