import React from "react";
import { Link } from "react-router-dom"
import STYLE from "./TermeniSiConditii.module.css"
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";

export function TermeniSiConditii() {

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>Termeni si Conditii</div>
                        <div className={STYLE.categoryContainer}>
                            <div className={STYLE.categoryTitle}>Despre Floris</div>
                            <div className={STYLE.category}>
                                <Link to={FooterCardComponents[0].path}>Despre noi</Link>
                                <Link to={FooterCardComponents[1].path}>Avantajele clientilor</Link>
                                <Link to={FooterCardComponents[2].path}>Confidentialitate</Link>
                                <Link to={FooterCardComponents[3].path}>
                                    <div className={STYLE.selectedCategory}>
                                        Termeni si Conditii
                                    </div>
                                </Link>
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
                        <div>Termeni si Conditii</div>
                        <div className={STYLE.rowOne}>



                            <div className={STYLE.rowOneTitles}>
                                I. Identificare comerciantului online
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Serviciul
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> este oferit de S.C. FLORIS DIGITAL S.R.L.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Date de contact :
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <a className={STYLE.linkRef} href="mailto:comenzi@floris.ro">comenzi@floris.ro</a>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                *9090 (retele mobile - tarif normal) sau 021 300 300
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Bulevardul Primaverii, nr. 29, Cladirea Columna, etaj 1, camera 3, sector 1, Bucuresti.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                CUI RO00000000
                                <div>J00/00000/2022</div>
                            </div>



                            <div className={STYLE.rowOneTitles}>
                                II. Despre <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> este un serviciu de comert electronic / comert online / prin internet. Achizitia produselor se face pe baza comenzilor primite pe site sau prin telefon.
                            </div>



                            <div className={STYLE.rowOneTitles}>
                                III. Proprietatea Intelectuala
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Continutul si designul
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>, precum si orice alt material avand legatura cu acesta trimis de dvs. prin e-mail sau furnizat de dvs. prin orice alta modalitate (de exemplu: articole, design, descriere produse si orice alte materiale) apartin Societatii si/sau colaboratorilor sai - acolo unde acest lucru este specificat in mod expres (drept de autor) si sunt protejate de legislatia privind proprietatea intelectuala. Nu puteti utiliza, reproduce sau permite numanui sa utilizeze sau sa reproduca materialele
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> fara a detine o permisiune scrisa, prealabila din partea Societatii.
                                Este permisa crearea limitata, irevocabila si neexclusiva a hiperlink-urilor catre pagina de index a
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>, atata timp cat aceasta actiune nu prezinta serviciul
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> intr-o lumina falsa, inselatoare, derogatorie sau ofensiva.
                                Pentru orice probleme legate de proprietatea intelectuala va rugam sa ne contactati pe adresa de e-mail
                                <a className={STYLE.linkRef} href="mailto:comenzi@floris.ro"> dpo@floris.ro.</a>.
                            </div>



                            <div className={STYLE.rowOneTitles}>
                                IV. Inregistrarea ca utilizator
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Site-ul
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> poate fi accesat in mod gratuit, iar simpla navigare in paginile acestuia nu este conditionata de inregistrarea ca utilizator (crearea unui cont pe site). Pentru a beneficia insa de anumite servicii oferite de site, precum achizitionarea produselor oferite de acesta, primirea newsletter-ului
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>, trimiterea sms-urilor informative sau verificarea situatiei unor comenzi proprii, va trebui sa va inregistrati ca utilizator (sa va creati cont de utilizator pe site). Inregistrarea ca utilizator presupune acceptarea Termenilor si conditiilor de utlizare a
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> si a Politicii de confidentialitate a acestuia. Aceste reglementari constituie baza contractuala a raporturilor dintre utilizatori si Societate.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Intrucat prevederile Termenilor si conditiilor de utilizare pot fi modificate, va rugam sa le cititi periodic. In conditiile in care nu veti mai fi de acord cu prevederile acestora, va rugam sa nu mai accesati/folositi serviciile
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>. Daca folositi acest site sunteti responsabili cu privire la pastrarea confidentialitatii datelor de acces in contul dvs. de utilizator, creat pe site si sunteti de acord sa va asumati responsabilitatea pentru toate activitatile efectuate in contul dvs. de utilizator.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Site-ul
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> nu vinde produse minorilor sub 18 (optsprezece) ani.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> isi rezerva dreptul de a inchide conturi de utilizatori, de a modifica sau elimina texte, imagini, hyperlinkuri sau de a refuza vanzarea de produse la propria sa discretie.
                            </div>



                            <div className={STYLE.rowOneTitles}>
                                V. Datele personale / Politica de confidentialitate
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Mai multe informatii despre politica de confidentialitate Floris - aici.
                            </div>



                            <div className={STYLE.rowOneTitles}>
                                VI. Procedura de cumparare
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Pentru a cumpara si intra in posesia produselor oferite spre vanzare pe
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> este necesara parcurgerea urmatoarelor etape:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Identificarea si alegerea produselor
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Inregistrarea dvs. ca utilizator al
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Efectuarea platii produselor
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Plata se efectueaza online sau prin transfer bancar/ordin de plata, in conditiile reglementate la capitolul VII, iar costul final va contine pretul produsului comandat cu TVA inclus, si, daca este cazul, pretul livrarii.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Prin lansarea unei comenzi electronice sau telefonice pe
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> sunteti de acord cu forma de comunicare (telefonica sau prin e-mail) prin care site-ul isi deruleaza operatiunile.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Pentru ca livrarea sa se efectueze in cele mai bune conditii, atunci cand completati datele beneficiarului asigurati-va ca acestea sunt complete si corecte. In cazul in care nu ne puteti furniza adresa completa sau numele complet, va rugam sa ne anuntati telefonic sau prin email. Nu ne asumam raspunderea pentru livrarile intarziate cauzate de lipsa datelor complete.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Conform noilor reglementari legal, ORDIN nr. 3769 din 23 decembrie 2015, incepand cu 01.10.2016 toate facturile trebuie sa contina toate datele de identificare, astfel clientul este obligat sa completeze toate campurile obligatorii din pagina de comanda avand optiunea sa bifeze daca doreste ca datele de livrare sa fie preluate ca date de facturare.
                            </div>



                            <div className={STYLE.rowOneTitles}>
                                VII. Cum cumpar
                            </div>



                            <div className={STYLE.rowOneTitles}>
                                VII.1. Preturile
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Cu exceptia cazurilor in care este prevazut altfel, preturile produselor afisate pe
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> reprezinta preturile finale de cumparare si includ TVA (taxa pe valoare adaugata de 19%, valabila in Romania). Preturile finale de cumparare pot fi preturi sugerate de catre producatori sau furnizori sau pot fi estimate in functie de preturile standard practicabile la nivelul industriei produsului comercializat. Preturile finale de cumparare pot sa nu reprezinte cele mai competitive preturi de pe un anumit segment de produse sau pentru o anumita perioada.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                VII.2. Reduceri aplicate produselor
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Reducerile primite prin intermediul voucherelor sunt aplicabile doar produselor florale (buchete de flori si aranjamente florale). Acestea nu se mai pot aplica dulciurilor, sampaniilor, jucariilor, accesoriilor (vaze, cosuri, ambalaje), donatiilor si taxei de transport. De asemenea, reducerile nu mai sunt aplicabile si produselor care detin livrare internationala. Voucherele de reducere nu se cumuleaza cu reducerile deja existente in site. Promotiile din site suprascriu discount-urile oferite prin programul de fidelizare.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                VII.3. Modalitati de plata
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Pentru efectuarea platii produselor comandate, puteti alege dintre urmatoarele metode de plata: online cu cardul, transfer bancar/ordin de plata sau prin SMS. Daca ati ales ca metoda de plata transferul bancar/ ordin de plata, urmatoarea fereastra va multumeste pentru comanda plasata si va ofera informatiile relevante pentru comanda si plata. Aceste informatii le veti primi si prin e-mail, sub forma unei facturi.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                VIII. Recenzii, comentarii, comunicari si alte tipuri de continut
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Utilizatorii pot posta recenzii, comentarii sau alte tipuri de continut; pot trimite sugestii, idei, pot pune intrebari, pot propune articole sau alte tipuri de materiale, atata timp cat continutul acestora:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Nu este ilegal, obscen, amenintator, defaimator, nu incalca dreptul la intimitate sau legea cu privire la protejarea proprietatii intelectuale;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Nu contine virusi informatici, comunicari comerciale, politice, care instiga la ura sau intoleranta pe motive etnice, religioase, rasiale, de orientare sexuala, mesaje colective sau alte forme de “spam”.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                In vederea postarii de recenzii, comentarii, comunicari si alte tipuri de continut, nu puteti folosi adrese de e-mail sau identitati false.
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> isi rezerva dreptul, dar nu are obligatia de a elimina sau edita toate tipurile de continut postate de catre utilizatori si nu are obligatia de a revedea periodic acest continut. Odata cu postarea de recenzii, comentarii, comunicari si alte tipuri de continut pe
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>, transmiteti (in afara cazurilor in care Societatea indica altfel), drepturile de proprietate intelectuala, in mod neexclusiv, perpetuu, irevocabil, asupra materialelor postate. Societatea are dreptul de a modifica, reproduce, transmite, adapta, publica, distribui materialele postate de catre utilizatori, prin orice mijloc de comunicare, din orice tara. Prin postarea de recenzii, comentarii, comunicari si alte tipuri de continut pe
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>, cedati dreptul Societatii de a folosi numele dvs. in relatie cu materialele postate; garantati ca detineti sau controlati intr-o alta forma dreptul de proprietate intelectuala asupra materialelor pe care le postati, ca materialele postate nu violeaza niciuna din conditiile de postare ale recenziilor, comentariilor, comunicarilor si alte forme de continut din partea utilizatorilor, ale
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> are dreptul, dar nu obligatia de a monitoriza, edita sau sterge orice tip de continut sau activitati ale utilizatorilor pe site.
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> nu este responsabil si nu isi asuma responsabilitatea pentru niciunul dintre materialele postate de catre alte terte parti pe site.
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> are dreptul de a nu publica toate comentariile si articolele propuse de catre utilizatori.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                IX. Forta majora
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>, afiliatii sau/si in general furnizorii de produse sau servicii catre
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> nu pot fi facuti responsabili pentru nicio intarziere sau eroare rezultand direct sau indirect in cauze care nu depinde de vointa
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>. Aceasta exonerare include, dar nu se limiteaza la: erorile de functionare a echipamentului tehnic de la
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>, lipsa functionarii conexiunii la internet, lipsa functionarii conexiunilor de telefon, virusii informatici, accesul neautorizat in sistemele
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>, erorile de operare, precum si cazurile de forta majora stipulate de legislatia in vigoare.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                X. Publicitatea
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> poate afisa in paginile sale reclame la produsele din oferta sa, precum si la produse ori servicii apartinand tertilor. Prin utilizarea
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> si prin acceptarea Termenilor si conditiilor de utilizare si a Politicii de confidentialitate, va exprimati in mod direct acceptul de a fi destinatarul acestor comunicari cu caracter comercial.
                            </div>



                            <div className={STYLE.rowOneTitles}>
                                XI. Reclamatii privind incalcarea legii referitoare la protejarea proprietatii intelectuale
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> respecta dreptul la propietatea intelectuala a tertilor. Daca ati observat ca site-ul contine informatii care incalca dreptul acestora la proprietate intelectuala, va rugam sa ne trimiteti o instiintare la adresa de e-mail: comenzi@floris.ro sau sa ne contactati la numerele de telefon afisate la capitolul Despre noi din prezentul contract.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                XII. Legislatia aplicabila
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Serviciile oferite de societate prin intermediul
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> sunt guvernate de dispozitiile legilor romane, cu precadere la Legea 365/2002 privind comertul electronic, Ordonanta de Urgenta 34/2014 privind protectia consumatorilor la incheierea si executarea contractelor la distanta.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Termenii si conditiile
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> se supun legislatiei romane. In caz de litigiu, se va incerca mai intai o rezolvare pe cale amiabila, in termen de 30 de zile lucratoare de la inregistrarea reclamatiei la sediul S.C. FLORIS DIGITAL S.R.L. In cazul in care nu se poate ajunge la o intelegere in termenul precizat anterior, litigiile dintre Parti se vor supune rezolvarii instantelor judecatoresti competente de pe raza municipiului Bucuresti.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                XIII. Prezentarea ofertei
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                S.C. FLORIS DIGITAL S.R.L. isi rezerva dreptul de a opera oricand, orice modificari asupra preturilor si datelor tehnice prezente pe site-ul
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>, fara o instiintare prealabila. Datele tehnice prezente pe site-ul
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> au caracter informativ si nu reprezinta o obligatie contractuala. Anumite fotografii de pe site-ul
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> sunt cu titlu de prezentare si pot exista diferente intre acestea si produs.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                XIV. Sfaturi pentru ingrijirea plantelor
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Pentru a avea grija in mod corespunzator de florile pe care tocmai le-ai primit trebuie sa respecti urmatoarele instructiuni.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Daca ai primit un buchet de flori:
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pune florile, cat mai curand, intr-o vaza suficient de mare;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- schimba apa zilnic (imediat ce devine tulbure, trebuie improspatata);
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pastreaza florile intr-un loc cat mai racoros si mai putin insorit;
                                </div>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Daca ai primit un aranjament de flori, impreuna cu burete (numit oasis):
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ai grija ca buretele sa ramana umed tot timpul (florile absorb apa din el);
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- evita mutarea aranjamentului;
                                </div>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Pastreaza aranjamentul intr-un loc cat mai racoros si mai putin insorit.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Alaturi de buchetul pe care tocmai l-ai primit, ai atasat un pliculet cu conservant, care te va ajuta sa prelungesti viata florilor si sa le mentii cat mai frumoase. Inainte de adaugarea conservantului trebuie sa respecti urmatorii pasi:
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- dizolva continutul pliculetului in jumatate de litru de apa curata;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- taie cozile florilor in diagonala, cu aproximativ 2 cm.;
                                </div>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ATENTIE! Conservantul se poate utiliza doar pentru florile taiate, la o singura schimbare a apei.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Iti recomandam sa pastrezi florile la o temperatura cat mai scazuta, sa le feresti de curent si de socuri fizice (mutat, lovit etc.) sau termice (treceri de la cald la frig).
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Cititi mai multe despre ingrijirea plantelor aici .
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                XV.Dreptul de retur
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Conform OUG 34/2014, florile constituie produse care sunt susceptibile a se deteriora sau a expira rapid și sunt exceptate de la dreptul de retragere.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Jucăriile sau vazele și alte produse neperisabile comercializate de Floris Digital se pot returna după următoarea procedură:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Procedura de denuntare si retur:
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Puteti returna numai produsele care nu sunt perisabile si/sau alimentare. In consecinta, florile si dulciurile nu se pot returna, jucariile, vazele si cosurile, da.
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Returnarea se face prin trimiterea produselor la adresa: Bucuresti, sector 1, Soseaua Pipera, nr. 4, prin orice curier doriti.
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Transportul coletului de retur va fi platit de catre
                                    <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link>.
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- In colet se vor afla toate documentele primite initial, precum si o adresa scrisa, semnata de persoana care a initiat si platit comanda, care notifica denuntarea contractului si solicita returnarea sumei platite, indicand contul si banca unde se vor returna banii.
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Coletul trebuie trimis la sediul floris.ro in maxim 14 zile calendaristice din momentul primirii comenzii.
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Suma platita va fi rambursata integral in 14 de zile calendaristicede la primirea integrala a coletului de retur si scrisorii de denuntare (daca cele doua vin separat, cele 14 de zile calendaristice trec de la ultima care a fost primita).
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- În urma intrării în vigoare a OUG 34/2014, consumatorii au dreptul de a renunța la cumpărare în termen de 14 zile calendaristice de la data intrării în posesia fizică a produsului.
                                </div>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                În acest sens, am creat un model de formular de retragere, pe care vi-l oferim aici: formular retragere
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                XVI. Garantia de conformitate
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Raspunderea
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> pentru lipsa conformitatii produselor comercializate este angajata daca lipsa de conformitate apare intr-un termen de 2 zile de la livrarea produselor.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS Digital SRL are obligația de a livra produse care sunt în conformitate cu contractul de vânzare-cumpărare, indiferent de forma în care se încheie, verbal sau scris.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Se consideră că un produs este în conformitate cu contractul de vânzare-cumpărare dacă sunt îndeplinite cumulativ următoarele condiții:
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a) produsul corespunde descrierii făcute de vânzător și are aceleași calități ca și produsele pe care vânzătorul le-a prezentat ca mostră sau model;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) produsul corespunde oricărui scop specificat solicitat de către consumator, scop făcut cunoscut vânzătorului și acceptat de acesta la încheierea contractului de vânzare-cumpărare.
                                </div>
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Produsele comercializate pe site-ul
                                <Link className={STYLE.linkRef} to="/" > www.floris.ro</Link> beneficiaza de garanție în baza Ordonanței nr. 21/1992, Legea 449/2003 și O.G. 174/2008, dacă acestea nu constituie produse perisabile: flori, plante, produse alimentare. Floris oferă însă garanția prospețimii florilor timp de 7 zile, dacă acestea sunt păstrate și îngrijite conform etichetei care însoțește buchetul.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Toate Bunurile comercializate de catre Floris beneficiaza de conditii de garantie conforme legislatiei in vigoare si politicilor comerciale. Bunurile sunt noi si provin din surse autorizate de fiecare producator in parte.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Floris acordă o atentie deosebita produselor si serviciilor oferite si garanteaza pentru calitatea acestora. Clientii Floris vor avea tot suportul necesar în cazul dorintei de returnare a unui produs.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                De asemenea, floris.ro respecta criteriile de preselectie GPeC.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
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