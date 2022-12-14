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
                                POLITICA PRIVIND PROTEC??IA DATELOR CU CARACTER PERSONAL - DPP
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Noua lege a Uniunii Europene referitoare la protec??ia datelor cu caracter personal, GDPR (???General Data Protection Regulation???) a intrat ??n vigoare pe 25 Mai 2016, dar va ??ncepe s??-??i produc?? efectele ??ncep??nd cu 25 Mai 2018. Aceast?? lege reprezint?? cea mai mare schimbare ??n domeniul protec??iei datelor cu caracter personal din ultimii 20 de ani ??i are obiective care trec mult peste simpla protec??ie a spa??iului privat.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Protec??ia datelor dumneavoastr?? cu caracter personal este important?? pentru noi, prin urmare, acord??m o aten??ie deosebit?? protej??rii vie??ii private a vizitatorilor care acceseaz?? site-ul www.floris.ro, ??n conformitate cu Regulamentul (UE) 2016/679 al Parlamentului European ??i al Consiliului din data de 27 aprilie 2016 privind protec??ia persoanelor fizice ??n ceea ce prive??te prelucrarea datelor cu caracter personal ??i libera circula??ie a acestor date (denumit ??n continuare ???GDPR???).
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                V?? rug??m s?? acorda??i o aten??ie deosebit?? lectur??rii urm??toarei Politici (denumit?? ??n continuare ???DPP???) pentru a ??n??elege modul ??n care vor fi tratate informa??iile dumneavoastr?? ("date personale???).
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                DPP explic?? practicile online ale FLORIS, referitoare la aplicarea prevederilor GDPR, precum ??i drepturile de care beneficia??i cu privire la modul ??n care informa??iile dumneavoastr?? sunt utilizate prin intermediul site-ului FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Prelucrarea datelor cu caracter personal efectuat?? de FLORIS se va realiza ??ntotdeauna ??n conformitate cu prevederile GDPR, precum ??i cu reglement??rile privind protec??ia datelor cu caracter personal, specifice fiec??rei ????ri ??n care FLORIS opereaz??.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Prin DPP, FLORIS dore??te s?? informeze vizitatorii cu privire la natura datelor cu caracter personal pe care le colect??m ??i le proces??m, precum ??i cu privire la scopurile prelucr??rii. ??n plus, vizitatorii site-ului sunt informa??i prin intermediul DPP ??i cu privire la drepturile de care beneficiaz??.
                            </div>
                            <div className={STYLE.rowOneTitles}>
                                CINE SUNTEM?
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Suntem S.C. FLORIS DIGITAL S.R.L., cu sediul in Bucuresti, sector 1, soseaua Pipera, nr 4, etaj 2, nr. de inregistrare in Registrul Comertului J40/15890/2019, cod unic de inregistrare RO41927820, reprezentata prin Administrator, Arsene Alexandra Florina. Avem ca domeniu principal de activitate, comer?? cu am??nuntul prin intermediul caselor de comenzi sau prin Internet conform CAEN 4791.
                            </div>
                            <div className={STYLE.rowOneTitles}>
                                CE SUNT DATELE CU CARACTER PERSONAL?
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ???Date personale??? ??nseamn?? orice informa??ie sau informa??ii care v?? pot identifica direct (de exemplu numele dumneavoastr??) sau indirect (de exemplu, prin intermediul datelor pseudonime, cum ar fi un num??r de identificare unic). Aceasta ??nseamn?? c?? datele personale includ lucruri precum adresa de e-mail, domiciliuL, telefonul mobil, numele de utilizator, fotografiile de profil, preferin??ele personale ??i obiceiurile de cump??r??turi, con??inutul generat de utilizatori, informa??iile financiare ??i informa??iile privind situa??ia financiar??. Acesta ar putea include ??i identificatori numerici unici, cum ar fi adresa IP a computerului dumneavoastr?? sau adresa MAC a dispozitivului dumneavoastr?? mobil, precum ??i modulele cookie.
                            </div>
                            <div className={STYLE.rowOneTitles}>
                                CE ??NSEAMN?? PRELUCRAREA DATELOR CU CARACTER PERSONAL?
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ???Prelucrarea??? ??nseamn?? orice opera??iune sau set de opera??iuni efectuate asupra datelor cu caracter personal sau asupra seturilor de date cu caracter personal, cu sau f??r?? utilizarea de mijloace automatizate, cum ar fi colectarea, ??nregistrarea, organizarea, structurarea, stocarea, adaptarea sau modificarea, extragerea, consultarea, utilizarea, divulgarea prin transmitere, diseminarea sau punerea la dispozi??ie ??n orice alt mod, alinierea sau combinarea, restric??ionarea, ??tergerea sau distrugerea.
                            </div>
                            <div className={STYLE.rowOneTitles}>
                                OPERATOR DE DATE CU CARACTER PERSONAL
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Operatorul de date cu caracter personal (denumit ??n continuare ???operatorul???) este FLORIS DIGITAL S.R.L. (FLORIS).
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                RESPONSABILUL CU PROTEC??IA DATELOR (DPO)
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS, ??n calitate de operator, a desemnat-o pe doamna M??d??lina Oprea, ??n calitate de Responsabil cu Protec??ia Datelor (denumit ??n continuare ???DPO???), av??nd obliga??ia de a verifica respectarea prevederilor GDPR ??n opera??iunile de prelucrare de date efectuate de c??tre operator ??i de a reprezenta operatorul ??n rela??ia cu persoanele vizate ??i cu Autoritatea de supraveghere.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Persoanele vizate au posibilitatea de a se adresa ??n orice moment, ??n mod direct, DPO cu privire la orice aspecte legate de prezentul DPP, utiliz??nd datele de contact de mai jos:
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
                                Adres?? de coresponden???? DPO: Bucure??ti, sector 4, Drumul Jilavei nr. 70
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                CE DATE PRELUCR??M
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                <Link className={STYLE.linkRef} to="/">www.floris.ro</Link> va colecta informa??ii sau date care permit identificarea persoanelor fizice (nume, adres??, num??r de telefon, adresa de po??t?? electronic??). Acestea sunt necesare pentru a avea posibilitatea de a ??ncasa de c??tre procesatorii de pl??ti valoarea comenzilor ??i de a v?? livra produsele comandate. De asemenea, www.floris.ro va colecta ??i adresa Ip ca date de trafic.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                PRINCIPII PRIVIND PRELUCRAREA DATELOR
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS se oblig?? s?? respecte principiile de protec??ie a datelor cu caracter personal (denumite ??n continuare ???Principiile???) prev??zute de GDPR, pentru a se asigura c?? toate datele sunt:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Prelucrate ??n mod corect, legal ??i transparent;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Colectate ??n scopuri specificate, explicite ??i legitime;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Adecvate, relevante ??i limitate ??n raport cu scopurile pentru care sunt prelucrate;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Corecte ??i actualizate;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                P??strate ??ntr-o form?? care nu permite identificarea persoanelor vizate mai mult timp dec??t este necesar ??n raport de scopul prelucr??rii;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Procesate ??n conformitate cu drepturile persoanei vizate, ??ntr-un mod care s?? asigure o securitate adecvat?? a prelucr??rii, astfel ??nc??t datele s?? fie integre, confiden??iale ??i disponibile.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                TEMEIUL ??I SCOPURILE PRELUCR??RII DATELOR CU CARACTER PERSONAL
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ??n scopul ??ncheierii ??i execut??rii contractelor - Conform art. 6 alin. 1 lit. b) din GDPR, pot fi prelucrate date personale ??n scopul ??ncheierii sau execut??rii contractului. Pentru a putea s?? v?? oferim produsele noastre, este nevoie s?? prelucr??m date cu caracter personal care v?? apar??in.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ??n scopul ??ndeplinirii unor obliga??ii legale - Conform art. 6 alin. 1 lit. c) din GDPR, pot fi prelucrate date personale ??n scopul ??ndeplinirii unor obliga??ii legale. Solicit??m o serie de date personale, inclusiv, ??n anumite situa??ii, codul numeric personal, ??n scopul de a ne ??ndeplini obliga??iile impuse de c??tre autorit????ile fiscale ??n leg??tur?? cu facturarea ??i raport??rile c??tre autorit????ile fiscale.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ??n scop de marketing - Conform art. 6 alin. 1 lit. a) din GDPR, pot fi prelucrate date personale dac?? persoana vizat?? ??i-a dat consim????m??ntul pentru prelucrarea datelor sale cu caracter personal pentru unul sau mai multe scopuri specifice.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                NESWSLETTER
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dac?? v-a??i abonat ??n sec??iunea de Newsletter FLORIS, datele dumneavoastr?? cu caracter personal vor fi utilizate cu scopul exclusiv de a v?? transmite inform??ri cu con??inut de marketing, despre produsele ??i serviciile FLORIS despre oferte ??i/sau promo??ii, ??tiri, viitoare campanii, invita??ii la diverse evenimente desf????urate de c??tre FLORIS ??ntr-o anumit?? perioad??.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Datele dumneavoastr?? cu caracter personal urmeaz?? a fi ??terse de ??ndat??, atunci c??nd anula??i abonamentul din sec??iunea de Newsletter a FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                V?? pute??i dezabona ??n orice moment prin intermediul link-ului ata??at Newsletter-ului primit sau printr-o solicitare scris?? adresat?? Responsabilului cu protec??ia datelor al FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS ????i rezerv?? dreptul de a selec??iona persoanele c??rora le va trimite newslettere ??i/sau alerte c??t si dreptul de a elimina din baza sa de date orice Membru sau Client care ??i-a exprimat anterior consim????m??ntul de a primi newslettere ??i/sau alerte, f??r?? nici un angajament ulterior din partea FLORIS, sau a vreunei notific??ri prealabile a acestuia.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                PROCESAREA FORMULARULUI DE CONTACT
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS va folosi informa??iile pe care le furniza??i ??n sec??iunea corespunz??toare de contact, existent?? pe site, exclusiv cu scopul de a procesa solicitarea dumneavoastr??.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Prin furnizarea oric??ror date cu caracter personal prin intermediul site-ului www.floris.ro, ??n??elege??i ??i sunte??i de acord c?? datele dumneavoastr?? vor fi prelucrate ??n conformitate cu prevederile DPP a FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                V?? rug??m s?? ave??i ??n vedere faptul c?? pentru a putea procesa solicit??rile dumneavoastr?? transmise ??n sec??iunea de contact a site-ului, este posibil ca, ??n anumite circumstan??e, s?? avem obliga??ia de a divulga datele dumneavoastr??, partenerilor cu care FLORIS colaboreaz?? ??i/sau altor ter??i furnizori de servicii ai FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Cu toate acestea, FLORIS a adoptat m??suri tehnice ??i organizatorice adecvate pentru a asigura securitatea transferului de date, precum ??i prelucrarea ??n conformitate cu cerin??ele GDPR a datelor dumneavoastr?? de c??tre entit????ile men??ionate anterior.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Datele dumneavoastr?? cu caracter personal pot fi transmise c??tre alte entit????i ter??e doar pe baza consim????m??ntului dumneavoastr?? expres, cu excep??ia situa??iilor ??n care exist?? o obliga??ie legal?? pentru FLORIS de a proceda ??n acest mod.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS se oblig?? s?? nu prelucreze datele cu caracter personal furnizate ??n alt scop dec??t acela pentru care au fost transmise, cu excep??ia situa??iilor ??n care exist?? consim????m??ntul dumneavoastr?? expres pentru a le utiliza ??i ??n alte scopuri.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                DIVULGAREA DATELOR CU CARACTER PERSONAL C??TRE TER??I
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Datele cu caracter personal prelucrate prin intermediul site-ului www.floris.ro vor putea fi divulgate ??i/sau transferate c??tre ter??i doar ??n situa??ia ??n care exist?? consim????m??ntul dumneavoastr?? expres pentru a proceda ??n acest sens, cu excep??ia situa??iilor ??n care exist?? o obliga??ie legal??/contractual?? pentru FLORIS de a proceda ??n acest mod.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                V?? rug??m s?? ave??i ??n vedere faptul c?? este posibil ca, ??n anumite circumstan??e, s?? avem obliga??ia de a divulga datele dumneavoastr?? cu caracter personal, partenerilor cu care FLORIS colaboreaz?? ??i/sau altor ter??i furnizori de servicii ai FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Ter??ii care au acces la date sunt: companiile de livrare, procesatorii de pl??ti, serviciile de e-mail marketing.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                PRELUCRAREA DATELOR DE C??TRE TER??I, ALTE SITE-URI ??I SPONSORI
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Site-ul <Link className={STYLE.linkRef} to="/">www.floris.ro</Link> poate con??ine, la un moment dat, link-uri de acces c??tre alte site-uri ale c??ror politici de prelucrare a datelor pot fi diferite de cele ale FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                V?? rug??m s?? ave??i ??n vedere ??i s?? consulta??i politicile privind protec??ia datelor cu caracter personal ale celorlalte site-uri, FLORIS neasum??ndu-??i responsabilitatea cu privire la informa??iile trimise sau colectate de aceste ter??e p??r??i.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                PRELUCRARE AUTOMAT?? DE DATE. COOKIE
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Site-ul <Link className={STYLE.linkRef} to="/">www.floris.ro</Link> folose??te identificatori de tip Cookie. Cookie-urile folosite de floris.ro (proprii sau de la terti) includ: Google Analytics, Facebook Login, Remarketing, zopim, trusted, globessl, pinterest, clicktale, profitshare, facebook, plusone, google experiments, twitter, adwords, retargeting. ??n acest sens pute??i consulta Politica noastr?? de Cookie, disponibil?? pe site, ??i v?? pute??i exercita dreptul de a dezactiva Cookies, astfel cum este mai jos precizat.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                PERIOADA STOC??RII DATELOR
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS poate p??stra datele prelucrate pentru diferite perioade de timp, apreciate ca fiind rezonabile, ??n conformitate cu scopurile indicate anterior. P??str??m datele dumneavoastr?? numai pentru perioada necesar?? pentru atingerea scopului pentru care de??inem datele, pentru a satisface nevoile dumneavoastr?? sau pentru a ne ??ndeplini obliga??iile impuse de lege.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Pentru a ??ti c??t timp pot fi p??strate datele dumneavoastr??, folosim urm??toarele criterii:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Atunci c??nd achizi??iona??i produse ??i servicii, p??str??m datele dumneavoastr?? personale pe durata rela??iei noastre contractuale;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ??n cazul ??n care participa??i la o ofert?? promo??ional??, p??str??m datele dumneavoastr?? personale pe durata ofertei promo??ionale;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ??n cazul ??n care ne contacta??i pentru o ??ntrebare, p??str??m datele dumneavoastr?? personale pe durata necesar?? proces??rii ??ntreb??rilor dvs., dar nu mai mult de 5 ani de la ultima coresponden???? trimis??;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ??n cazul ??n care crea??i un cont, p??str??m datele dumneavoastr?? personale p??n?? c??nd solicita??i s?? le ??tergem sau dup?? o perioad?? de inactivitate (f??r?? o interac??iune activ?? cu m??rcile noastre) definite ??n conformitate cu reglement??rile ??i ??ndrum??rile locale. ??n acest sens, men??ion??m c?? datele prelucrate pentru acest scop vor fi ??terse la 5 ani dup?? ultima interac??iune cu utilizatorul contului (ca de exemplu, login in contul dumneavoastr??);
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ??n cazul ??n care v-a??i oferit consim????m??ntul pentru marketing, p??str??m datele dumneavoastr?? personale p??n?? c??nd v?? dezabona??i sau solicita??i s?? le ??tergem sau dup?? o perioad?? de inactivitate (f??r?? o interac??iune activ?? cu m??rcile noastre) definite ??n conformitate cu reglement??rile ??i ??ndrum??rile locale. ??n acest sens, men??ion??m c?? datele stocate ??n bazele noastre de date pentru scopul comunic??rilor de marketing direct sunt ??terse din eviden??ele acestor baze de date la 5 ani de ultima interac??iune cu dumneavoastr??;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ??n cazul ??n care modulele cookie sunt stocate pe computer, le p??str??m at??ta timp c??t este necesar pentru ca acestea s?? ????i ating?? scopurile (de exemplu, pe durata unei sesiuni pentru cookie-urile de co?? de cump??r??turi sau cookie-urile pentru ID-uri de sesiune) ??i pentru o perioad?? definit?? ??n conformitate cu reglement??rile ??i ??ndrum??rile locale. ??n acest sens, men??ion??m c?? datele prelucrate prin modulele cookies folosite pentru a furniza publicitate comportamental?? online, pentru a ne personaliza serviciile pentru dumneavoastr?? ??i pentru a permite distribuirea con??inutului nostru pe site-uri de socializare (butoane de distribuire destinate afi????rii site-ului), vor fi p??strate pentru o perioad?? de maxim 5 ani de la colectarea acestora, ??n baza consim????m??ntului dumneavoastr??.
                            </div>



                            <div className={STYLE.rowOneTitles}>
                                DREPTURILE PERSOANELOR VIZATE
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ??n conformitate cu GDPR, ave??i o serie de drepturi cu privire la datele personale pe care FLORIS le prelucreaz??:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de acces la datele prelucrare - Ave??i dreptul de a accesa datele personale pe care le de??inem. Prima furnizare de informa??ii se va face f??r?? a percepe niciun fel de taxa. Daca ve??i mai avea nevoie de copii ale informa??iilor deja furnizate, este posibil s?? percepem o tax?? rezonabil?? ??in??nd cont de costurile administrative de furnizare a informa??iilor. Solicit??rile v??dit ne??ntemeiate, excesive sau repetate pot s?? nu primeasc?? un r??spuns.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul la rectificarea datelor - Ave??i dreptul s?? cere??i ca Datele dumneavoastr?? s?? fie rectificate dac?? sunt inexacte sau ??nvechite ??i/sau s?? le completa??i dac?? acestea sunt incomplete. Dac?? ave??i un cont, poate fi mai u??or s?? v?? corecta??i propriile date prin intermediul func??iei "Contul meu???.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul la ??tergerea datelor (???dreptul de a fi uitat???) - ??n unele cazuri, ave??i dreptul de a ob??ine ??tergerea sau distrugerea Datelor dumneavoastr??. Acesta nu este un drept absolut, deoarece uneori s-ar putea s?? fim for??a??i s?? p??str??m Datele dumneavoastr?? din motive legale sau juridice.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul la restric??ionarea prelucr??rii - Ave??i dreptul s?? solicita??i restric??ionarea proces??rii Datelor dumneavoastr??. Acest lucru ??nseamn?? c?? prelucrarea Datelor dumneavoastr?? este limitat??, astfel ??nc??t s?? putem p??stra Datele, dar s?? nu le utiliz??m sau s?? le proces??m. Acest drept se aplic?? ??n circumstan??e specifice prev??zute de Regulamentul general privind protec??ia datelor, ??i anume:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Exactitatea Datelor este contestat?? de persoana vizat?? (adic?? de dumneavoastr??), pentru o perioad?? care permite operatorului (adic?? FLORIS) s?? verifice corectitudinea Datelor;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Prelucrarea este ilegal?? ??i persoana vizat?? (adic?? dumneavoastr??) se opune ??tergerii Datelor ??i solicit?? restric??ia de utilizare a acestora;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Operatorul (de exemplu, FLORIS) nu mai are nevoie de Date pentru prelucrare, dar acestea sunt solicitate de persoana vizat?? (adic?? de dumneavoastr??) pentru stabilirea, exercitarea sau ap??rarea unor preten??ii legale;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Persoana vizat?? (adic?? dumneavoastr??) a ridicat obiec??ii proces??rii bazat?? pe motive legitime din partea operatorului (??n acest caz FLORIS) ??n temeiul verific??rii dac?? motivele legitime ale operatorului (FLORIS) dep????esc pe cele ale persoanei vizate (adic?? dumneavoastr??).
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul la portabilitatea datelor - Ave??i dreptul s?? muta??i, s?? copia??i sau s?? transfera??i datele care v?? intereseaz?? din baza noastr?? de date ??ntr-o alta. Acest lucru se aplic?? numai datelor pe care le-a??i furnizat, atunci c??nd procesarea se bazeaz?? pe consim????m??ntul dumneavoastr?? sau pe baza unui contract ??i este implementat?? prin mijloace automate.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de opozi??ie - V?? pute??i opune ??n orice moment prelucr??rii datelor dumneavoastr?? atunci c??nd o astfel de prelucrare se bazeaz?? pe un interes legitim.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de a retrage consim????m??ntul ??n orice moment - V?? pute??i retrage consim????m??ntul ??n ceea ce prive??te prelucrarea datelor dumneavoastr?? atunci c??nd o astfel de procesare se bazeaz?? pe consim????m??nt. Retragerea consim????m??ntului nu afecteaz?? legalitatea prelucr??rii pe baza consim????m??ntului ??nainte de retragerea acestuia.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de a depune o pl??ngere la autoritatea de supraveghere competent?? - Ave??i dreptul s?? depune??i o pl??ngere ??n fa??a autorit????ii de protec??ie a datelor din ??ara dumneavoastr?? de re??edin???? sau de domiciliu pentru a contesta practicile de protec??ie a datelor oferite de FLORIS.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de a v?? opune prelucr??rii datelor dumneavoastr?? ??n scopuri de marketing direct - V?? pute??i dezabona sau renun??a la comunicarea noastr?? de marketing direct ??n orice moment. Este mai u??or s?? face??i acest lucru d??nd clic pe linkul ???dezabonare??? ??n orice e-mail sau comunicare pe care vi le trimitem.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de a v?? opune prelucr??rii datelor dumneavoastr?? de c??tre noi atunci c??nd desf????ur??m ac??iuni ??n interes public sau ??n interesele legitime proprii sau ale unui ter?? - V?? pute??i opune ??n orice moment prelucr??rii datelor dumneavoastr?? atunci c??nd o astfel de prelucrare se bazeaz?? pe un interes legitim.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dreptul de a dezactiva Cookies - ave??i dreptul s?? dezactiva??i modulele cookie. Set??rile din browser-ele de Internet sunt de obicei programate ??n mod implicit pentru a accepta modulele cookie, dar pute??i s?? le regla??i u??or modific??nd set??rile browser ului. Multe module cookie sunt utilizate pentru a spori gradul de utilizare sau func??ionalitate a site-urilor web / aplica??iilor; prin urmare, dezactivarea modulelor cookie v?? poate ??mpiedica s?? utiliza??i anumite p??r??i ale site-urilor sau aplica??iilor noastre, a??a cum este detaliat ??n tabelul Cookie relevant. Dac?? dori??i s?? restric??iona??i sau s?? bloca??i toate cookie-urile stabilite de site-urile web / aplica??iile noastre (care v?? pot ??mpiedica s?? utiliza??i anumite p??r??i ale site-ului) sau orice alte site-uri / aplica??ii, pute??i face acest lucru prin set??rile browserului. Func??ia Ajutor din browserul dumneavoastr?? v?? va spune cum. Pentru mai multe informa??ii, consulta??i urm??toarele linkuri:
                                <a className={STYLE.linkRef} href="http://www.aboutcookies.org/"> http://www.aboutcookies.org/</a>;
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                V?? pute??i exercita oricare dintre aceste drepturi ??n ceea ce prive??te datele personale pe care FLORIS le prelucreaz?? prin adresarea unei simple cereri c??tre DPO-ul FLORIS. ??ntr-o astfel de situa??ie este foarte posibil s?? solicit??m o dovad?? a identit????ii dumneavoastr??.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                SOLICIT??RI JURIDICE
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Acces??m, p??str??m ??i oferim informa??iile dumneavoastr?? autorit????ilor de reglementare, factorilor de aplicare a legii sau altor entit????i:
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Ca r??spuns la o solicitare de natur?? juridic??, atunci c??nd consider??m, cu bun??-credin????, c?? legea ne impune acest lucru. De asemenea, este posibil s?? r??spundem la solicit??ri de natur?? juridic?? atunci c??nd consider??m, cu bun??-credin????, c?? r??spunsul impus de legile din jurisdic??ia respectiv?? afecteaz?? utilizatorii din acea jurisdic??ie ??i este conform cu standardele recunoscute la nivel interna??ional.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Atunci c??nd consider??m, cu bun?? credin????, c?? este necesar pentru: a detecta, a preveni ??i a r??spunde la acte de fraud??, utilizarea neautorizat?? a oric??rui material care ne apar??ine, ??nc??lc??ri ale condi??iilor sau politicilor noastre sau alte activit????i d??un??toare sau ilegale, pentru a ne proteja pe noi (inclusiv drepturile, bunurile sau materialele noastre), pe dumneavoastr?? ??i pe al??ii, inclusiv ??n cadrul investiga??iilor sau al anchetelor autorit????ilor de reglementare sau pentru a preveni decesul sau v??t??marea corporal?? iminent??. De exemplu, dac?? este relevant, furniz??m informa??ii c??tre ??i primim informa??ii de la ter??i parteneri despre fiabilitatea contului dumneavoastr??, pentru a preveni frauda, abuzul ??i alte activit????i d??un??toare ??n cadrul ??i ??n afara materialelor noastre.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Informa??iile pe care le primim despre dumneavoastr?? pot fi accesate ??i stocate o perioad?? mai lung?? de timp atunci c??nd fac obiectul unei solicit??ri de natur?? juridic?? sau unei obliga??ii legale, al unei anchete guvernamentale, sau al unor investiga??ii privind posibile ??nc??lc??ri ale condi??iilor sau politicilor noastre, sau ??n alte cazuri pentru a preveni prejudiciile.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                RELA??IILE CU AL??I OPERATORI
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                ??n func??ie de context, s-ar putea s?? ne g??sim ??n situa??ia necesit????ii absolute de a oferi informa??ii la un nivel mai ??nalt, at??t global, c??t ??i intern sau extern, partenerilor no??tri ??i celor cu care facem transfer de date cu respectarea Regulamentului mai sus amintit, ??n virtutea asigur??rii oferirii unor servicii c??t mai profesionale cu putin????. Informa??iile controlate de FLORIS ar putea fi transferate, transmise sau stocate ??i prelucrate ??n UE sau ??n alte ????ri dec??t ??ara ??n care locui??i, ??n scopurile descrise ??n aceast?? politic??. Aceste transferuri de date sunt necesare pentru a putea furniza servicii la cel mai ??nalt nivel, precum ??i a continua s?? v?? furniz??m materialele noastre la cel mai bun nivel profesional. Utiliz??m clauze contractuale standard aprobate de Comisia European?? ??i ne baz??m pe deciziile privind caracterul adecvat emise de Comisia European?? cu privire la anumite ????ri, dup?? caz, ??n ceea ce prive??te transferurile de date din SEE c??tre Statele Unite ??i c??tre alte ????ri.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                SECURITATEA PRELUCR??RII
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                FLORIS a adoptat m??suri tehnice ??i organizatorice de prelucrare a datelor, actualizate ??n conformitate cu cerin??ele GDPR, cu scopul de a proteja datele dumneavoastr?? cu caracter personal ??mpotriva oric??ror ac??iuni de acces neautorizat, utilizare necorespunz??toare sau divulgare, modificare neautorizat??, distrugere sau pierdere accidental??. To??i angaja??ii ??i colaboratorii FLORIS, precum ??i orice ter??e p??r??i care ac??ioneaz?? ??n numele ??i pe seama FLORIS sunt obliga??i s?? respecte confiden??ialitatea informa??iilor dumneavoastr?? ??i cerin??ele GDPR, ??n conformitate cu prevederile prezentei Politici.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                EXONERARE DE R??SPUNDERE
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Site-ul www.floris.ro poate con??ine leg??turi c??tre alte site-uri ??i/sau alte pagini web care nu sunt proprietatea FLORIS. FLORIS nu ????i asum?? nicio responsabilitate cu privire la con??inutul acestor site-uri ??i, prin urmare, nu va putea fi ??inut?? r??spunz??toare pentru con??inutul, publicitatea, bunurile, serviciile, software-ul, informa??iile sau alte materiale disponibile pe sau prin intermediul acestor site-uri. FLORIS nu va fi responsabil?? de pierderea datelor cu caracter personal, de orice efecte negative asupra datelor personale ale vizitatorilor sau de alte daune morale ??i/ sau patrimoniale cauzate de accesul la respectivele site-uri.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                ACTUALIZAREA POLITICII DE PROTEC??IE ??I PRELUCRARE A DATELOR CU CARACTER PERSONAL
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                V?? rug??m s?? ave??i ??n vedere faptul c?? prezenta Politic?? poate face obiectul unor modific??ri periodice de con??inut, prin actualizarea site-ului www.floris.ro.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Cum v?? vom anun??a despre modific??rile aduse acestei Politici?
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                V?? vom trimite o notificare ??nainte de a aduce orice modific??ri acestei Politici ??i v?? vom oferi posibilitatea s?? consulta??i DPP revizuit ??nainte de a alege s?? continua??i s?? utiliza??i materialele noastre.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                V?? rug??m s?? nu continua??i s?? utiliza??i site-ul www.floris.ro dac?? nu sunte??i de acord cu astfel de modific??ri. De asemenea, v?? recomand??m s?? verifica??i aceast?? pagin?? pentru orice actualizare.
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Termenii DPP se interpreteaz?? ??n conformitate cu legisla??ia aplicabil??.
                            </div>


                            <div className={STYLE.rowOneTitles}>
                                CONTACT
                            </div>
                            <div className={STYLE.rowOneTitlesContent}>
                                Dac?? ave??i ??ntreb??ri sau preocup??ri cu privire la modul ??n care trat??m ??i folosim datele dumneavoastr?? cu caracter personal sau dori??i s?? v?? exercita??i oricare dintre drepturile dumneavoastr??, v?? rug??m s?? ne contacta??i acces??nd datele de contact ale DPO-ului nostru.
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