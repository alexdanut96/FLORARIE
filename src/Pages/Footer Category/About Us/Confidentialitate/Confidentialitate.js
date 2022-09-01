import React from "react";
import { Link } from "react-router-dom"
import STYLE from "./Confidentialitate.module.css"
import { FooterCardComponents } from "../../Footer Card Components/FooterCardComponents";
import { FreeDelivery } from "../../../../components/HomePage/FreeDelivery/FreeDelivery";

export function Confidentialitate() {

    return (
        <div className={STYLE.area}>
            <div className={STYLE.container}>
                <div className={STYLE.content}>
                    <div className={STYLE.columnOne}>
                        <div className={STYLE.title}>Confidentialitate</div>
                        <div className={STYLE.categoryContainer}>
                            <div className={STYLE.categoryTitle}>Despre Floris</div>
                            <div className={STYLE.category}>
                                <Link to={FooterCardComponents[0].path}>Despre noi</Link>
                                <Link to={FooterCardComponents[1].path}>Avantajele clientilor</Link>
                                <Link to={FooterCardComponents[2].path}>
                                    <div className={STYLE.selectedCategory}>
                                        Confidentialitate
                                    </div>
                                </Link>
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
                        <div>Confidentialitate</div>
                        <div className={STYLE.rowOne}>
                            <div className={STYLE.rowOneTitles}>
                                POLITICA PRIVIND PROTECȚIA DATELOR CU CARACTER PERSONAL - DPP
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Noua lege a Uniunii Europene referitoare la protecția datelor cu caracter personal, GDPR (“General Data Protection Regulation”) a intrat în vigoare pe 25 Mai 2016, dar va începe să-și producă efectele începând cu 25 Mai 2018. Această lege reprezintă cea mai mare schimbare în domeniul protecției datelor cu caracter personal din ultimii 20 de ani și are obiective care trec mult peste simpla protecție a spațiului privat.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Protecția datelor dumneavoastră cu caracter personal este importantă pentru noi, prin urmare, acordăm o atenție deosebită protejării vieții private a vizitatorilor care accesează site-ul www.floris.ro, în conformitate cu Regulamentul (UE) 2016/679 al Parlamentului European și al Consiliului din data de 27 aprilie 2016 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și libera circulație a acestor date (denumit în continuare “GDPR”).
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Vă rugăm să acordați o atenție deosebită lecturării următoarei Politici (denumită în continuare “DPP”) pentru a înțelege modul în care vor fi tratate informațiile dumneavoastră ("date personale”).
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                DPP explică practicile online ale FLORIS, referitoare la aplicarea prevederilor GDPR, precum și drepturile de care beneficiați cu privire la modul în care informațiile dumneavoastră sunt utilizate prin intermediul site-ului FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Prelucrarea datelor cu caracter personal efectuată de FLORIS se va realiza întotdeauna în conformitate cu prevederile GDPR, precum și cu reglementările privind protecția datelor cu caracter personal, specifice fiecărei țări în care FLORIS operează.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Prin DPP, FLORIS dorește să informeze vizitatorii cu privire la natura datelor cu caracter personal pe care le colectăm și le procesăm, precum și cu privire la scopurile prelucrării. În plus, vizitatorii site-ului sunt informați prin intermediul DPP și cu privire la drepturile de care beneficiază.
                            </div>
                            <div className={STYLE.rowOneTitles}>
                                CINE SUNTEM?
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Suntem S.C. FLORIS DIGITAL S.R.L., cu sediul in Bucuresti, sector 1, soseaua Pipera, nr 4, etaj 2, nr. de inregistrare in Registrul Comertului J40/15890/2019, cod unic de inregistrare RO41927820, reprezentata prin Administrator, Arsene Alexandra Florina. Avem ca domeniu principal de activitate, comerţ cu amănuntul prin intermediul caselor de comenzi sau prin Internet conform CAEN 4791.
                            </div>
                            <div className={STYLE.rowOneTitles}>
                                CE SUNT DATELE CU CARACTER PERSONAL?
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                “Date personale” înseamnă orice informație sau informații care vă pot identifica direct (de exemplu numele dumneavoastră) sau indirect (de exemplu, prin intermediul datelor pseudonime, cum ar fi un număr de identificare unic). Aceasta înseamnă că datele personale includ lucruri precum adresa de e-mail, domiciliuL, telefonul mobil, numele de utilizator, fotografiile de profil, preferințele personale și obiceiurile de cumpărături, conținutul generat de utilizatori, informațiile financiare și informațiile privind situația financiară. Acesta ar putea include și identificatori numerici unici, cum ar fi adresa IP a computerului dumneavoastră sau adresa MAC a dispozitivului dumneavoastră mobil, precum și modulele cookie.
                            </div>
                            <div className={STYLE.rowOneTitles}>
                                CE ÎNSEAMNĂ PRELUCRAREA DATELOR CU CARACTER PERSONAL?
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                “Prelucrarea” înseamnă orice operațiune sau set de operațiuni efectuate asupra datelor cu caracter personal sau asupra seturilor de date cu caracter personal, cu sau fără utilizarea de mijloace automatizate, cum ar fi colectarea, înregistrarea, organizarea, structurarea, stocarea, adaptarea sau modificarea, extragerea, consultarea, utilizarea, divulgarea prin transmitere, diseminarea sau punerea la dispoziție în orice alt mod, alinierea sau combinarea, restricționarea, ștergerea sau distrugerea.
                            </div>
                            <div className={STYLE.rowOneTitles}>
                                OPERATOR DE DATE CU CARACTER PERSONAL
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Operatorul de date cu caracter personal (denumit în continuare “operatorul”) este FLORIS DIGITAL S.R.L. (FLORIS).
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                RESPONSABILUL CU PROTECȚIA DATELOR (DPO)
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS, în calitate de operator, a desemnat-o pe doamna Mădălina Oprea, în calitate de Responsabil cu Protecția Datelor (denumit în continuare “DPO”), având obligația de a verifica respectarea prevederilor GDPR în operațiunile de prelucrare de date efectuate de către operator și de a reprezenta operatorul în relația cu persoanele vizate și cu Autoritatea de supraveghere.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Persoanele vizate au posibilitatea de a se adresa în orice moment, în mod direct, DPO cu privire la orice aspecte legate de prezentul DPP, utilizând datele de contact de mai jos:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Nume DPO: Burcea Alexandru-Danut
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                E-mail DPO: dpo@floris.ro
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Tel. DPO: 0767061115
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Adresă de corespondență DPO: București, sector 4, Drumul Jilavei nr. 70
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                CE DATE PRELUCRĂM
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <Link className={STYLE.linkRef} to="/">www.floris.ro</Link> va colecta informaţii sau date care permit identificarea persoanelor fizice (nume, adresă, număr de telefon, adresa de poştă electronică). Acestea sunt necesare pentru a avea posibilitatea de a încasa de către procesatorii de plăti valoarea comenzilor şi de a vă livra produsele comandate. De asemenea, www.floris.ro va colecta şi adresa Ip ca date de trafic.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                PRINCIPII PRIVIND PRELUCRAREA DATELOR
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS se obligă să respecte principiile de protecție a datelor cu caracter personal (denumite în continuare „Principiile”) prevăzute de GDPR, pentru a se asigura că toate datele sunt:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Prelucrate în mod corect, legal și transparent;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Colectate în scopuri specificate, explicite și legitime;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Adecvate, relevante și limitate în raport cu scopurile pentru care sunt prelucrate;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Corecte și actualizate;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Păstrate într-o formă care nu permite identificarea persoanelor vizate mai mult timp decât este necesar în raport de scopul prelucrării;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Procesate în conformitate cu drepturile persoanei vizate, într-un mod care să asigure o securitate adecvată a prelucrării, astfel încât datele să fie integre, confidențiale și disponibile.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                TEMEIUL ȘI SCOPURILE PRELUCRĂRII DATELOR CU CARACTER PERSONAL
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                În scopul încheierii și executării contractelor - Conform art. 6 alin. 1 lit. b) din GDPR, pot fi prelucrate date personale în scopul încheierii sau executării contractului. Pentru a putea să vă oferim produsele noastre, este nevoie să prelucrăm date cu caracter personal care vă aparțin.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                În scopul îndeplinirii unor obligații legale - Conform art. 6 alin. 1 lit. c) din GDPR, pot fi prelucrate date personale în scopul îndeplinirii unor obligații legale. Solicităm o serie de date personale, inclusiv, în anumite situații, codul numeric personal, în scopul de a ne îndeplini obligațiile impuse de către autoritățile fiscale în legătură cu facturarea și raportările către autoritățile fiscale.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                În scop de marketing - Conform art. 6 alin. 1 lit. a) din GDPR, pot fi prelucrate date personale dacă persoana vizată și-a dat consimțământul pentru prelucrarea datelor sale cu caracter personal pentru unul sau mai multe scopuri specifice.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                NESWSLETTER
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dacă v-ați abonat în secțiunea de Newsletter FLORIS, datele dumneavoastră cu caracter personal vor fi utilizate cu scopul exclusiv de a vă transmite informări cu conținut de marketing, despre produsele şi serviciile FLORIS despre oferte și/sau promoții, știri, viitoare campanii, invitații la diverse evenimente desfășurate de către FLORIS într-o anumită perioadă.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Datele dumneavoastră cu caracter personal urmează a fi șterse de îndată, atunci când anulați abonamentul din secțiunea de Newsletter a FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Vă puteți dezabona în orice moment prin intermediul link-ului atașat Newsletter-ului primit sau printr-o solicitare scrisă adresată Responsabilului cu protecția datelor al FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS își rezervă dreptul de a selecționa persoanele cărora le va trimite newslettere și/sau alerte cât si dreptul de a elimina din baza sa de date orice Membru sau Client care și-a exprimat anterior consimțământul de a primi newslettere și/sau alerte, fără nici un angajament ulterior din partea FLORIS, sau a vreunei notificări prealabile a acestuia.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                PROCESAREA FORMULARULUI DE CONTACT
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS va folosi informațiile pe care le furnizați în secțiunea corespunzătoare de contact, existentă pe site, exclusiv cu scopul de a procesa solicitarea dumneavoastră.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Prin furnizarea oricăror date cu caracter personal prin intermediul site-ului www.floris.ro, înțelegeți și sunteți de acord că datele dumneavoastră vor fi prelucrate în conformitate cu prevederile DPP a FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Vă rugăm să aveți în vedere faptul că pentru a putea procesa solicitările dumneavoastră transmise în secțiunea de contact a site-ului, este posibil ca, în anumite circumstanțe, să avem obligația de a divulga datele dumneavoastră, partenerilor cu care FLORIS colaborează și/sau altor terți furnizori de servicii ai FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Cu toate acestea, FLORIS a adoptat măsuri tehnice și organizatorice adecvate pentru a asigura securitatea transferului de date, precum și prelucrarea în conformitate cu cerințele GDPR a datelor dumneavoastră de către entitățile menționate anterior.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Datele dumneavoastră cu caracter personal pot fi transmise către alte entități terțe doar pe baza consimțământului dumneavoastră expres, cu excepția situațiilor în care există o obligație legală pentru FLORIS de a proceda în acest mod.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS se obligă să nu prelucreze datele cu caracter personal furnizate în alt scop decât acela pentru care au fost transmise, cu excepția situațiilor în care există consimțământul dumneavoastră expres pentru a le utiliza și în alte scopuri.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                DIVULGAREA DATELOR CU CARACTER PERSONAL CĂTRE TERȚI
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Datele cu caracter personal prelucrate prin intermediul site-ului www.floris.ro vor putea fi divulgate și/sau transferate către terți doar în situația în care există consimțământul dumneavoastră expres pentru a proceda în acest sens, cu excepția situațiilor în care există o obligație legală/contractuală pentru FLORIS de a proceda în acest mod.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Vă rugăm să aveți în vedere faptul că este posibil ca, în anumite circumstanțe, să avem obligația de a divulga datele dumneavoastră cu caracter personal, partenerilor cu care FLORIS colaborează și/sau altor terți furnizori de servicii ai FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Terţii care au acces la date sunt: companiile de livrare, procesatorii de plăti, serviciile de e-mail marketing.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                PRELUCRAREA DATELOR DE CĂTRE TERȚI, ALTE SITE-URI ȘI SPONSORI
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Site-ul <Link className={STYLE.linkRef} to="/">www.floris.ro</Link> poate conține, la un moment dat, link-uri de acces către alte site-uri ale căror politici de prelucrare a datelor pot fi diferite de cele ale FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Vă rugăm să aveți în vedere și să consultați politicile privind protecția datelor cu caracter personal ale celorlalte site-uri, FLORIS neasumându-și responsabilitatea cu privire la informațiile trimise sau colectate de aceste terțe părți.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                PRELUCRARE AUTOMATĂ DE DATE. COOKIE
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Site-ul <Link className={STYLE.linkRef} to="/">www.floris.ro</Link> folosește identificatori de tip Cookie. Cookie-urile folosite de floris.ro (proprii sau de la terti) includ: Google Analytics, Facebook Login, Remarketing, zopim, trusted, globessl, pinterest, clicktale, profitshare, facebook, plusone, google experiments, twitter, adwords, retargeting. În acest sens puteți consulta Politica noastră de Cookie, disponibilă pe site, și vă puteți exercita dreptul de a dezactiva Cookies, astfel cum este mai jos precizat.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                PERIOADA STOCĂRII DATELOR
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS poate păstra datele prelucrate pentru diferite perioade de timp, apreciate ca fiind rezonabile, în conformitate cu scopurile indicate anterior. Păstrăm datele dumneavoastră numai pentru perioada necesară pentru atingerea scopului pentru care deținem datele, pentru a satisface nevoile dumneavoastră sau pentru a ne îndeplini obligațiile impuse de lege.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Pentru a ști cât timp pot fi păstrate datele dumneavoastră, folosim următoarele criterii:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Atunci când achiziționați produse și servicii, păstrăm datele dumneavoastră personale pe durata relației noastre contractuale;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                În cazul în care participați la o ofertă promoțională, păstrăm datele dumneavoastră personale pe durata ofertei promoționale;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                În cazul în care ne contactați pentru o întrebare, păstrăm datele dumneavoastră personale pe durata necesară procesării întrebărilor dvs., dar nu mai mult de 5 ani de la ultima corespondență trimisă;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                În cazul în care creați un cont, păstrăm datele dumneavoastră personale până când solicitați să le ștergem sau după o perioadă de inactivitate (fără o interacțiune activă cu mărcile noastre) definite în conformitate cu reglementările și îndrumările locale. În acest sens, menționăm că datele prelucrate pentru acest scop vor fi șterse la 5 ani după ultima interacțiune cu utilizatorul contului (ca de exemplu, login in contul dumneavoastră);
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                În cazul în care v-ați oferit consimțământul pentru marketing, păstrăm datele dumneavoastră personale până când vă dezabonați sau solicitați să le ștergem sau după o perioadă de inactivitate (fără o interacțiune activă cu mărcile noastre) definite în conformitate cu reglementările și îndrumările locale. În acest sens, menționăm că datele stocate în bazele noastre de date pentru scopul comunicărilor de marketing direct sunt șterse din evidențele acestor baze de date la 5 ani de ultima interacțiune cu dumneavoastră;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                În cazul în care modulele cookie sunt stocate pe computer, le păstrăm atâta timp cât este necesar pentru ca acestea să își atingă scopurile (de exemplu, pe durata unei sesiuni pentru cookie-urile de coș de cumpărături sau cookie-urile pentru ID-uri de sesiune) și pentru o perioadă definită în conformitate cu reglementările și îndrumările locale. În acest sens, menționăm că datele prelucrate prin modulele cookies folosite pentru a furniza publicitate comportamentală online, pentru a ne personaliza serviciile pentru dumneavoastră și pentru a permite distribuirea conținutului nostru pe site-uri de socializare (butoane de distribuire destinate afișării site-ului), vor fi păstrate pentru o perioadă de maxim 5 ani de la colectarea acestora, în baza consimțământului dumneavoastră.
                            </div>



                            <div className={STYLE.rowOneTitles}>
                                DREPTURILE PERSOANELOR VIZATE
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                În conformitate cu GDPR, aveți o serie de drepturi cu privire la datele personale pe care FLORIS le prelucrează:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de acces la datele prelucrare - Aveți dreptul de a accesa datele personale pe care le deținem. Prima furnizare de informații se va face fără a percepe niciun fel de taxa. Daca veți mai avea nevoie de copii ale informațiilor deja furnizate, este posibil să percepem o taxă rezonabilă ținând cont de costurile administrative de furnizare a informațiilor. Solicitările vădit neîntemeiate, excesive sau repetate pot să nu primească un răspuns.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul la rectificarea datelor - Aveți dreptul să cereți ca Datele dumneavoastră să fie rectificate dacă sunt inexacte sau învechite și/sau să le completați dacă acestea sunt incomplete. Dacă aveți un cont, poate fi mai ușor să vă corectați propriile date prin intermediul funcției "Contul meu”.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul la ștergerea datelor (“dreptul de a fi uitat”) - În unele cazuri, aveți dreptul de a obține ștergerea sau distrugerea Datelor dumneavoastră. Acesta nu este un drept absolut, deoarece uneori s-ar putea să fim forțați să păstrăm Datele dumneavoastră din motive legale sau juridice.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul la restricționarea prelucrării - Aveți dreptul să solicitați restricționarea procesării Datelor dumneavoastră. Acest lucru înseamnă că prelucrarea Datelor dumneavoastră este limitată, astfel încât să putem păstra Datele, dar să nu le utilizăm sau să le procesăm. Acest drept se aplică în circumstanțe specifice prevăzute de Regulamentul general privind protecția datelor, și anume:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Exactitatea Datelor este contestată de persoana vizată (adică de dumneavoastră), pentru o perioadă care permite operatorului (adică FLORIS) să verifice corectitudinea Datelor;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Prelucrarea este ilegală și persoana vizată (adică dumneavoastră) se opune ștergerii Datelor și solicită restricția de utilizare a acestora;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Operatorul (de exemplu, FLORIS) nu mai are nevoie de Date pentru prelucrare, dar acestea sunt solicitate de persoana vizată (adică de dumneavoastră) pentru stabilirea, exercitarea sau apărarea unor pretenții legale;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Persoana vizată (adică dumneavoastră) a ridicat obiecții procesării bazată pe motive legitime din partea operatorului (în acest caz FLORIS) în temeiul verificării dacă motivele legitime ale operatorului (FLORIS) depășesc pe cele ale persoanei vizate (adică dumneavoastră).
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul la portabilitatea datelor - Aveți dreptul să mutați, să copiați sau să transferați datele care vă interesează din baza noastră de date într-o alta. Acest lucru se aplică numai datelor pe care le-ați furnizat, atunci când procesarea se bazează pe consimțământul dumneavoastră sau pe baza unui contract și este implementată prin mijloace automate.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de opoziție - Vă puteți opune în orice moment prelucrării datelor dumneavoastră atunci când o astfel de prelucrare se bazează pe un interes legitim.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de a retrage consimțământul în orice moment - Vă puteți retrage consimțământul în ceea ce privește prelucrarea datelor dumneavoastră atunci când o astfel de procesare se bazează pe consimțământ. Retragerea consimțământului nu afectează legalitatea prelucrării pe baza consimțământului înainte de retragerea acestuia.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de a depune o plângere la autoritatea de supraveghere competentă - Aveți dreptul să depuneți o plângere în fața autorității de protecție a datelor din țara dumneavoastră de reședință sau de domiciliu pentru a contesta practicile de protecție a datelor oferite de FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de a vă opune prelucrării datelor dumneavoastră în scopuri de marketing direct - Vă puteți dezabona sau renunța la comunicarea noastră de marketing direct în orice moment. Este mai ușor să faceți acest lucru dând clic pe linkul “dezabonare” în orice e-mail sau comunicare pe care vi le trimitem.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de a vă opune prelucrării datelor dumneavoastră de către noi atunci când desfășurăm acțiuni în interes public sau în interesele legitime proprii sau ale unui terț - Vă puteți opune în orice moment prelucrării datelor dumneavoastră atunci când o astfel de prelucrare se bazează pe un interes legitim.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de a dezactiva Cookies - aveți dreptul să dezactivați modulele cookie. Setările din browser-ele de Internet sunt de obicei programate în mod implicit pentru a accepta modulele cookie, dar puteți să le reglați ușor modificând setările browser ului. Multe module cookie sunt utilizate pentru a spori gradul de utilizare sau funcționalitate a site-urilor web / aplicațiilor; prin urmare, dezactivarea modulelor cookie vă poate împiedica să utilizați anumite părți ale site-urilor sau aplicațiilor noastre, așa cum este detaliat în tabelul Cookie relevant. Dacă doriți să restricționați sau să blocați toate cookie-urile stabilite de site-urile web / aplicațiile noastre (care vă pot împiedica să utilizați anumite părți ale site-ului) sau orice alte site-uri / aplicații, puteți face acest lucru prin setările browserului. Funcția Ajutor din browserul dumneavoastră vă va spune cum. Pentru mai multe informații, consultați următoarele linkuri:
                                <a className={STYLE.linkRef} href="http://www.aboutcookies.org/"> http://www.aboutcookies.org/</a>;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Vă puteți exercita oricare dintre aceste drepturi în ceea ce privește datele personale pe care FLORIS le prelucrează prin adresarea unei simple cereri către DPO-ul FLORIS. Într-o astfel de situație este foarte posibil să solicităm o dovadă a identității dumneavoastră.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                SOLICITĂRI JURIDICE
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Accesăm, păstrăm și oferim informațiile dumneavoastră autorităților de reglementare, factorilor de aplicare a legii sau altor entități:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Ca răspuns la o solicitare de natură juridică, atunci când considerăm, cu bună-credință, că legea ne impune acest lucru. De asemenea, este posibil să răspundem la solicitări de natură juridică atunci când considerăm, cu bună-credință, că răspunsul impus de legile din jurisdicția respectivă afectează utilizatorii din acea jurisdicție și este conform cu standardele recunoscute la nivel internațional.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Atunci când considerăm, cu bună credință, că este necesar pentru: a detecta, a preveni și a răspunde la acte de fraudă, utilizarea neautorizată a oricărui material care ne aparține, încălcări ale condițiilor sau politicilor noastre sau alte activități dăunătoare sau ilegale, pentru a ne proteja pe noi (inclusiv drepturile, bunurile sau materialele noastre), pe dumneavoastră și pe alții, inclusiv în cadrul investigațiilor sau al anchetelor autorităților de reglementare sau pentru a preveni decesul sau vătămarea corporală iminentă. De exemplu, dacă este relevant, furnizăm informații către și primim informații de la terți parteneri despre fiabilitatea contului dumneavoastră, pentru a preveni frauda, abuzul și alte activități dăunătoare în cadrul și în afara materialelor noastre.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Informațiile pe care le primim despre dumneavoastră pot fi accesate și stocate o perioadă mai lungă de timp atunci când fac obiectul unei solicitări de natură juridică sau unei obligații legale, al unei anchete guvernamentale, sau al unor investigații privind posibile încălcări ale condițiilor sau politicilor noastre, sau în alte cazuri pentru a preveni prejudiciile.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                RELAȚIILE CU ALȚI OPERATORI
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                În funcție de context, s-ar putea să ne găsim în situația necesității absolute de a oferi informații la un nivel mai înalt, atât global, cât și intern sau extern, partenerilor noștri și celor cu care facem transfer de date cu respectarea Regulamentului mai sus amintit, în virtutea asigurării oferirii unor servicii cât mai profesionale cu putință. Informațiile controlate de FLORIS ar putea fi transferate, transmise sau stocate și prelucrate în UE sau în alte țări decât țara în care locuiți, în scopurile descrise în această politică. Aceste transferuri de date sunt necesare pentru a putea furniza servicii la cel mai înalt nivel, precum și a continua să vă furnizăm materialele noastre la cel mai bun nivel profesional. Utilizăm clauze contractuale standard aprobate de Comisia Europeană și ne bazăm pe deciziile privind caracterul adecvat emise de Comisia Europeană cu privire la anumite țări, după caz, în ceea ce privește transferurile de date din SEE către Statele Unite și către alte țări.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                SECURITATEA PRELUCRĂRII
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS a adoptat măsuri tehnice și organizatorice de prelucrare a datelor, actualizate în conformitate cu cerințele GDPR, cu scopul de a proteja datele dumneavoastră cu caracter personal împotriva oricăror acțiuni de acces neautorizat, utilizare necorespunzătoare sau divulgare, modificare neautorizată, distrugere sau pierdere accidentală. Toți angajații și colaboratorii FLORIS, precum și orice terțe părți care acționează în numele și pe seama FLORIS sunt obligați să respecte confidențialitatea informațiilor dumneavoastră și cerințele GDPR, în conformitate cu prevederile prezentei Politici.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                EXONERARE DE RĂSPUNDERE
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Site-ul www.floris.ro poate conține legături către alte site-uri și/sau alte pagini web care nu sunt proprietatea FLORIS. FLORIS nu își asumă nicio responsabilitate cu privire la conținutul acestor site-uri și, prin urmare, nu va putea fi ținută răspunzătoare pentru conținutul, publicitatea, bunurile, serviciile, software-ul, informațiile sau alte materiale disponibile pe sau prin intermediul acestor site-uri. FLORIS nu va fi responsabilă de pierderea datelor cu caracter personal, de orice efecte negative asupra datelor personale ale vizitatorilor sau de alte daune morale și/ sau patrimoniale cauzate de accesul la respectivele site-uri.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                ACTUALIZAREA POLITICII DE PROTECȚIE ȘI PRELUCRARE A DATELOR CU CARACTER PERSONAL
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Vă rugăm să aveți în vedere faptul că prezenta Politică poate face obiectul unor modificări periodice de conținut, prin actualizarea site-ului www.floris.ro.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Cum vă vom anunța despre modificările aduse acestei Politici?
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Vă vom trimite o notificare înainte de a aduce orice modificări acestei Politici și vă vom oferi posibilitatea să consultați DPP revizuit înainte de a alege să continuați să utilizați materialele noastre.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Vă rugăm să nu continuați să utilizați site-ul www.floris.ro dacă nu sunteți de acord cu astfel de modificări. De asemenea, vă recomandăm să verificați această pagină pentru orice actualizare.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Termenii DPP se interpretează în conformitate cu legislația aplicabilă.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                CONTACT
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dacă aveți întrebări sau preocupări cu privire la modul în care tratăm și folosim datele dumneavoastră cu caracter personal sau doriți să vă exercitați oricare dintre drepturile dumneavoastră, vă rugăm să ne contactați accesând datele de contact ale DPO-ului nostru.
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