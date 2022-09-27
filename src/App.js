import React from "react"
import "../src/style.css"
import { Top } from "./components/Top/Top"
import { HomePage } from "./components/Content/HomePage"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Navbar } from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
// import { Route, Routes } from "react-router-loading"
import { Navigate } from "react-router-dom"
import { navBarItems } from "./navbar-components/NavBarItems"
import { AranjamenteFlorale } from "./Pages/Product Category/Aranjamente Florale/AranjamenteFlorale"
// import { BucheteFlori } from "./Pages/Product Category/Buchete Flori/BucheteFlori"
import BucheteFlori from "./Pages/Product Category/Buchete Flori/BucheteFlori"
import { OcaziiSiEvenimente } from "./Pages/Product Category/Ocazii si Evenimente/OcaziiSiEvenimente"
import { Cadouri } from "./Pages/Product Category/Cadouri/Cadouri"
import { Error404 } from "./Pages/Product Category/ERROR Page/Error404"
import { buchete_flori_column1, buchete_flori_column2, buchete_flori_column3 } from "./Pages/Product Category/Buchete Flori/Buchete_flori_items"
import { BucheteDeOrhidee } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de orhidee/BucheteDeOrhidee"
import { BucheteDeTrandafiri } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de trandafiri/BucheteDeTrandafiri"
import { BucheteDeLalele } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de lalele/BucheteDeLalele"
import { BucheteDeMinirosa } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de minirosa/BucheteDeMinirosa"
import { BucheteDeCrizanteme } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de crizanteme/BucheteDeCrizanteme"
import { BucheteDeGaroafe } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de garoafe/BucheteDeGaroafe"
import { BucheteCuHortensie } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete cu hortensie/BucheteCuHortensie"
import { BucheteDeGerbera } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de gerbera/BucheteDeGerbera"
import { BucheteDeCriniImperiali } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de crini imperiali/BucheteDeCriniImperiali"
import { BucheteDeCriniAsiatici } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de crini asiatici/BucheteDeCriniAsiatici"
import { BucheteDeIris } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de iris/BucheteDeIris"
import { BucheteDeAlstromeria } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de alstromeria/BucheteDeAlstromeria"
import { BucheteDeCale } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de cale/BucheteDeCale"
import { BucheteDeMireasa } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete mireasa/BucheteDeMireasa"
import { BucheteDeLisianthus } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete de lisianthus/BucheteDeLisianthus"
import { FloriDePrimavara } from "./Pages/Product Category/Buchete Flori/Sub Category/Flori de primavara/FloriDePrimavara"
import { FloriDeVara } from "./Pages/Product Category/Buchete Flori/Sub Category/Flori de vara/FloriDeVara"
import { FloriDeIarna } from "./Pages/Product Category/Buchete Flori/Sub Category/Flori de iarna/FloriDeIarna"
import { BucheteAmbalateInCutie } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete ambalate in cutie/BucheteAmbalateInCutie"
import { BucheteCuBujori } from "./Pages/Product Category/Buchete Flori/Sub Category/Buchete cu bujori/BucheteCuBujori"
import { aranjamente_florale } from "./Pages/Product Category/Aranjamente Florale/Aranjamente-florale_items"
import { FloriInCutie } from "./Pages/Product Category/Aranjamente Florale/Sub Category/Flori in cutie/FloriInCutie"
import { CosuriCuFlori } from "./Pages/Product Category/Aranjamente Florale/Sub Category/Cosuri cu flori/CosuriCuFlori"
import { AranjamenteCorporate } from "./Pages/Product Category/Aranjamente Florale/Sub Category/Aranjamente corporate/AranjamenteCorporate"
import { Plante } from "./Pages/Product Category/Aranjamente Florale/Sub Category/Plante/Plante"
import { TrandafiriCriogenati } from "./Pages/Product Category/Aranjamente Florale/Sub Category/Trandafiri criogenati/TrandafiriCriogenati"
import { CoroniteFlori } from "./Pages/Product Category/Aranjamente Florale/Sub Category/Coronite flori/CoroniteFlori"
import { InimiFlorale } from "./Pages/Product Category/Aranjamente Florale/Sub Category/Inimi florale/InimiFlorale"
import { ocazii_si_evenimente_column1, ocazii_si_evenimente_column2, ocazii_si_evenimente_column3 } from "./Pages/Product Category/Ocazii si Evenimente/Ocazii_si_evenimente_items"
import { FloriOnomastica } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Onomastica/FloriOnomastica"
import { BucheteLaMultiAni } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Buchete La Multi Ani/BucheteLaMultiAni"
import { OcaziiSpeciale } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Ocazii speciale/OcaziiSpeciale"
import { CoroaneFunerare } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Coroane funerare/CoroaneFunerare"
import { FloriPentruNunta } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori pentru nunta/FloriPentruNunta"
import { FloriHalloween } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Halloween/FloriHalloween"
import { FloriSfantulAndrei } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Sfantul Andrei/FloriSfantulAndrei"
import { FloriSfantulStefan } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Sfantul Stefan/FloriSfantulStefan"
import { FloriConstantinSiElena } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Constantin si Elena/FloriConstantinSiElena"
import { FloriSfantulNicolae } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Sfantul Nicolae/FloriSfantulNicolae"
import { FloriSfantulIoan } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Sfantul Ioan/FloriSfantulIoan"
import { FloriSfantaMaria } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Sfanta Maria/FloriSfantaMaria"
import { FloriSfantulGheorghe } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Sfantul Gheorghe/FloriSfantulGheorghe"
import { FloriSfantulAlexandru } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Sfantul Alexandru/FloriSfantulAlexandru"
import { FloriSfantaAna } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Sfanta Ana/FloriSfantaAna"
import { FloriSfantulDumitru } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Sfantul Dumitru/FloriSfantulDumitru"
import { FloriFlorii } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Florii/FloriFlorii"
import { SfintiiMihailSiGavril } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Sfintii Mihail si Gavril/SfintiiMihailSiGavril"
import { FloriOptMartie } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori 8 Martie/FloriOptMartie"
import { FloriUnuMartie } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori 1 Martie/FloriUnuMartie"
import { FloriValentinesDay } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori Valentines Day/FloriValentinesDay"
import { AranjamenteSiBraziDeCraciun } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Aranjamente & Brazi de Craciun/AranjamenteSiBraziDeCraciun"
import { FloriDeDragobete } from "./Pages/Product Category/Ocazii si Evenimente/Sub Category/Flori de Dragobete/FloriDeDragobete"
import { cadouri } from "./Pages/Product Category/Cadouri/Cadouri_items"
import { CadouriSpeciale } from "./Pages/Product Category/Cadouri/Sub Category/Cadouri Speciale/CadouriSpeciale"
import { Parfumuri } from "./Pages/Product Category/Cadouri/Sub Category/Parfumuri/Parfumuri"
import { Dulciuri } from "./Pages/Product Category/Cadouri/Sub Category/Dulciuri/Dulciuri"
import { Sampanie } from "./Pages/Product Category/Cadouri/Sub Category/Sampanie/Sampanie"
import { JucariiSiCadouri } from "./Pages/Product Category/Cadouri/Sub Category/Jucarii & Cadouri/JucariiSiCadouri"
import { CosuriVazeSiAccesorii } from "./Pages/Product Category/Cadouri/Sub Category/Cosuri, Vaze & Accesorii/CosuriVazeSiAccesorii"
import { promo } from "./Pages/Product Category/Oferte si Promotii/Promo_items"
import { OfertsiPromotii } from "./Pages/Product Category/Oferte si Promotii/Sub Category/Promotii/OfertesiPromotii"
import { Abonamente } from "./Pages/Product Category/Oferte si Promotii/Sub Category/Abonamente/Abonamente"
import ProductPage from "./Pages/Product Category/ProductPage"
import { FooterCardComponents } from "./Pages/Footer Category/Footer Card Components/FooterCardComponents"
import { DespreNoi } from "./Pages/Footer Category/About Us/Despre noi/DespreNoi"
import { AvantajeleClientilor } from "./Pages/Footer Category/About Us/Avantajele clientilor/AvantajeleClientilor"
import { Confidentialitate } from "./Pages/Footer Category/About Us/Confidentialitate/Confidentialitate"
import { TermeniSiConditii } from "./Pages/Footer Category/About Us/Termeni si Conditii/TermeniSiConditii"
import { DetaliiContact } from "./Pages/Footer Category/About Us/Detalii Contact/DetaliiContact"
import { CreeazaCont } from "./Pages/Footer Category/Your Account/Creeaza Cont/CreeazaCont"
import { ProgramDeFidelitate } from "./Pages/Footer Category/Your Account/Program de fidelitate/ProgramDeFidelitate"
import { CumCumpar } from "./Pages/Footer Category/Shopping Help/Cum cumpar/CumCumpar"
import { AmUitatParola } from "./Pages/Footer Category/Your Account/Am uitat parola/AmUitatParola"
import { CumPlatesc } from "./Pages/Footer Category/Shopping Help/Cum platesc/CumPlatesc"
import { FlorariileFloris } from "./Pages/Footer Category/Shopping Help/Florariile Floris/FlorariileFloris"
import { InformatiiDespreLivrare } from "./Pages/Footer Category/Shopping Help/Informatii despre livrare/InformatiiDespreLivrare"
import { PoliticaDeReturnare } from "./Pages/Footer Category/Shopping Help/Politica de returnare/PoliticaDeReturnare"
import { FAQ } from "./Pages/Footer Category/Helpful Links/F.A.Q/FAQ"
import { FiiPartener } from "./Pages/Footer Category/Helpful Links/Fii partener Floris/FiiPartener"
import { SearchBar } from "./components/Header/Search Bar/SearchBar"
import { AddToCartContext } from "./components/Header/Context/AddToCartContext"
import { ShoppingCartProvider } from "./components/Header/Context/ShoppingCartContext"
import { SidebarRight } from "./components/Sidebar/SidebarRight"
import { SidebarLeft } from "./components/Sidebar/SidebarLeft"
import items from "./data/Items.json"
import { useAuth } from "./components/Header/Context/AuthContext"
import { UserProfile } from "./Pages/Profile/User Profile/UserProfile"
import { UserProfileEdit } from "./Pages/Profile/User Profile/UserProfileEdit"
import { Orders } from "./Pages/Profile/User Orders/Orders"
import { PaymentCards } from "./Pages/Profile/User Cards/UserCards"
import { NotificationSettings } from "./Pages/Profile/User Notifications Settings/UserNotificationSettings"
import { Calendar } from "./Pages/Profile/User Calendar/UserCalendar"
import { Authentication } from "./Pages/Profile/User Authentication/UserAuthentication"
import { Club } from "./Pages/Profile/User Club/UserClub"
import { UserCompanies } from "./Pages/Profile/User My Companies/UserCompanies"
import { Wishlist } from "./Pages/Profile/User Wishlist/UserWishlist"
import { UserAddress } from "./Pages/Profile/User Addresses/UserAddresses"
import { UserAddressesEdit } from "./Pages/Profile/User Addresses/UserAddressesEdit"
import { UserAccountContext } from "./components/Header/Context/UserAccountContext"
import { useSearch } from "./components/Header/Context/SearchContext"
// import TopBarProgress from "react-topbar-progress-indicator"
// import LoadingPage from "./components/Content/LoadingPage"
// import LoadingBar from "react-top-loading-bar"


export function App() {

    const { userEmail } = useAuth()
    const { searchTerm } = useSearch()

    return (
        <div className="container">

            <ShoppingCartProvider>
                <AddToCartContext>
                    <UserAccountContext>
                        <Top />
                        <SidebarRight />
                        <SidebarLeft />
                        <Header />
                        <Navbar />
                        <Routes >
                            <Route path="/" element={<HomePage />}></Route>
                            {/*-------------> Buchete Flori <-------------*/}
                            <Route path={navBarItems[0].path} element={<BucheteFlori />}></Route>

                            {/*-------------> Buchete Flori -> SubCategory <-------------*/}
                            <Route path={buchete_flori_column1[0].path} element={<BucheteDeOrhidee />}></Route>
                            <Route path={buchete_flori_column1[1].path} element={<BucheteDeTrandafiri />} ></Route>
                            <Route path={buchete_flori_column1[2].path} element={<BucheteDeLalele />}></Route>
                            <Route path={buchete_flori_column1[3].path} element={<BucheteDeMinirosa />}></Route>
                            <Route path={buchete_flori_column1[4].path} element={<BucheteDeCrizanteme />}></Route>
                            <Route path={buchete_flori_column1[5].path} element={<BucheteDeGaroafe />}></Route>
                            <Route path={buchete_flori_column1[6].path} element={<BucheteCuHortensie />}></Route>
                            <Route path={buchete_flori_column2[0].path} element={<BucheteDeGerbera />}></Route>
                            <Route path={buchete_flori_column2[1].path} element={<BucheteDeCriniImperiali />}></Route>
                            <Route path={buchete_flori_column2[2].path} element={<BucheteDeCriniAsiatici />}></Route>
                            <Route path={buchete_flori_column2[3].path} element={<BucheteDeIris />}></Route>
                            <Route path={buchete_flori_column2[4].path} element={<BucheteDeAlstromeria />}></Route>
                            <Route path={buchete_flori_column2[5].path} element={<BucheteDeCale />}></Route>
                            <Route path={buchete_flori_column2[6].path} element={<BucheteDeMireasa />}></Route>
                            <Route path={buchete_flori_column3[0].path} element={<BucheteDeLisianthus />}></Route>
                            <Route path={buchete_flori_column3[1].path} element={<FloriDePrimavara />}></Route>
                            <Route path={buchete_flori_column3[2].path} element={<FloriDeVara />}></Route>
                            <Route path={buchete_flori_column3[3].path} element={<FloriDeIarna />}></Route>
                            <Route path={buchete_flori_column3[4].path} element={<BucheteAmbalateInCutie />}></Route>
                            <Route path={buchete_flori_column3[5].path} element={<BucheteCuBujori />}></Route>

                            {/*-------------> Aranjamente Florale <-------------*/}
                            <Route path={navBarItems[1].path} element={<AranjamenteFlorale />}></Route>
                            {/*-------------> Aranjamente Florale -> SubCategory <-------------*/}
                            <Route path={aranjamente_florale[0].path} element={<FloriInCutie />}></Route>
                            <Route path={aranjamente_florale[1].path} element={<CosuriCuFlori />}></Route>
                            <Route path={aranjamente_florale[2].path} element={<AranjamenteCorporate />}></Route>
                            <Route path={aranjamente_florale[3].path} element={<Plante />}></Route>
                            <Route path={aranjamente_florale[4].path} element={<TrandafiriCriogenati />}></Route>
                            <Route path={aranjamente_florale[5].path} element={<CoroniteFlori />}></Route>
                            <Route path={aranjamente_florale[6].path} element={<InimiFlorale />}></Route>

                            {/*-------------> Ocazii si evenimente <-------------*/}
                            <Route path={navBarItems[2].path} element={<OcaziiSiEvenimente />}></Route>
                            {/*-------------> Ocazii si evenimente -> SubCategory <-------------*/}
                            <Route path={ocazii_si_evenimente_column1[0].path} element={<FloriOnomastica />}></Route>
                            <Route path={ocazii_si_evenimente_column1[1].path} element={<BucheteLaMultiAni />}></Route>
                            <Route path={ocazii_si_evenimente_column1[2].path} element={<OcaziiSpeciale />}></Route>
                            <Route path={ocazii_si_evenimente_column1[3].path} element={<CoroaneFunerare />}></Route>
                            <Route path={ocazii_si_evenimente_column1[4].path} element={<FloriPentruNunta />}></Route>
                            <Route path={ocazii_si_evenimente_column1[5].path} element={<FloriHalloween />}></Route>
                            <Route path={ocazii_si_evenimente_column1[6].path} element={<FloriSfantulAndrei />}></Route>
                            <Route path={ocazii_si_evenimente_column1[7].path} element={<FloriSfantulStefan />}></Route>
                            <Route path={ocazii_si_evenimente_column2[0].path} element={<FloriConstantinSiElena />}></Route>
                            <Route path={ocazii_si_evenimente_column2[1].path} element={<FloriSfantulNicolae />}></Route>
                            <Route path={ocazii_si_evenimente_column2[2].path} element={<FloriSfantulIoan />}></Route>
                            <Route path={ocazii_si_evenimente_column2[3].path} element={<FloriSfantaMaria />}></Route>
                            <Route path={ocazii_si_evenimente_column2[4].path} element={<FloriSfantulGheorghe />}></Route>
                            <Route path={ocazii_si_evenimente_column2[5].path} element={<FloriSfantulAlexandru />}></Route>
                            <Route path={ocazii_si_evenimente_column2[6].path} element={<FloriSfantaAna />}></Route>
                            <Route path={ocazii_si_evenimente_column2[7].path} element={<FloriSfantulDumitru />}></Route>
                            <Route path={ocazii_si_evenimente_column3[0].path} element={<FloriFlorii />}></Route>
                            <Route path={ocazii_si_evenimente_column3[1].path} element={<SfintiiMihailSiGavril />}></Route>
                            <Route path={ocazii_si_evenimente_column3[2].path} element={<FloriOptMartie />}></Route>
                            <Route path={ocazii_si_evenimente_column3[3].path} element={<FloriUnuMartie />}></Route>
                            <Route path={ocazii_si_evenimente_column3[4].path} element={<FloriValentinesDay />}></Route>
                            <Route path={ocazii_si_evenimente_column3[5].path} element={<AranjamenteSiBraziDeCraciun />}></Route>
                            <Route path={ocazii_si_evenimente_column3[6].path} element={<FloriDeDragobete />}></Route>

                            {/*-------------> Cadouri <-------------*/}
                            <Route path={navBarItems[3].path} element={<Cadouri />}></Route>
                            {/*-------------> Cadouri -> SubCategory <-------------*/}
                            <Route path={cadouri[0].path} element={<CadouriSpeciale />}></Route>
                            <Route path={cadouri[1].path} element={<Parfumuri />}></Route>
                            <Route path={cadouri[2].path} element={<Dulciuri />}></Route>
                            <Route path={cadouri[3].path} element={<Sampanie />}></Route>
                            <Route path={cadouri[4].path} element={<JucariiSiCadouri />}></Route>
                            <Route path={cadouri[5].path} element={<CosuriVazeSiAccesorii />}></Route>

                            {/*-------------> Oferte si Promotii <-------------*/}
                            <Route path={promo[0].path} element={<OfertsiPromotii />}></Route>
                            <Route path={promo[1].path} element={<Abonamente />}></Route>
                            <Route path={promo[2].path} element={<FloriDeVara />}></Route>
                            <Route path={promo[3].path} element={<CoroaneFunerare />}></Route>

                            <Route path="*" element={<Error404 />}></Route>

                            {/*-------------> Footer Category <-------------*/}
                            <Route path={FooterCardComponents[0].path} element={<DespreNoi />}></Route>
                            <Route path={FooterCardComponents[1].path} element={<AvantajeleClientilor />}></Route>
                            <Route path={FooterCardComponents[2].path} element={<Confidentialitate />}></Route>
                            <Route path={FooterCardComponents[3].path} element={<TermeniSiConditii />}></Route>
                            <Route path={FooterCardComponents[4].path} element={<DetaliiContact />}></Route>
                            <Route
                                path={FooterCardComponents[5].path} element={!userEmail ? <CreeazaCont /> : <Navigate replace to="/" />}>
                            </Route>
                            <Route path={FooterCardComponents[6].path} element={<ProgramDeFidelitate />}></Route>
                            <Route path={FooterCardComponents[5].path} element={<AmUitatParola />}></Route>
                            <Route path={FooterCardComponents[8].path} element={<CumCumpar />}></Route>
                            <Route path={FooterCardComponents[9].path} element={<CumPlatesc />}></Route>
                            <Route path={FooterCardComponents[10].path} element={<FlorariileFloris />}></Route>
                            <Route path={FooterCardComponents[11].path} element={<InformatiiDespreLivrare />}></Route>
                            <Route path={FooterCardComponents[12].path} element={<PoliticaDeReturnare />}></Route>
                            <Route path={FooterCardComponents[13].path} element={<FAQ />}></Route>
                            <Route path={FooterCardComponents[16].path} element={<FiiPartener />}></Route>

                            <Route
                                path="/account" element={<Navigate replace to="/account/profile" />}>
                            </Route>
                            <Route
                                path="/account/profile" element={userEmail ? <UserProfile /> : <Navigate replace to={FooterCardComponents[5].path} />}>
                            </Route>
                            <Route
                                path="/account/profile/edit" element={userEmail ? <UserProfileEdit /> : <Navigate replace to={FooterCardComponents[5].path} />}>
                            </Route>
                            <Route
                                path="/account/addresses" element={userEmail ? <UserAddress /> : <Navigate replace to={FooterCardComponents[5].path} />}>
                            </Route>
                            <Route
                                path="/account/addresses/edit" element={userEmail ? <UserAddressesEdit /> : <Navigate replace to={FooterCardComponents[5].path} />}>
                            </Route>
                            <Route
                                path="/account/orders" element={userEmail ? <Orders /> : <Navigate replace to={FooterCardComponents[5].path} />}>
                            </Route>
                            <Route
                                path="/account/cards" element={userEmail ? <PaymentCards /> : <Navigate replace to={FooterCardComponents[5].path} />}>
                            </Route>
                            <Route
                                path="/account/notification-settings" element={userEmail ? <NotificationSettings /> : <Navigate replace to={FooterCardComponents[5].path} />}>
                            </Route>
                            <Route
                                path="/account/calendar" element={userEmail ? <Calendar /> : <Navigate replace to={FooterCardComponents[5].path} />}>
                            </Route>
                            <Route
                                path="/account/authentication" element={userEmail ? <Authentication /> : <Navigate replace to={FooterCardComponents[5].path} />}>
                            </Route>
                            <Route
                                path="/account/Club" element={userEmail ? <Club /> : <Navigate replace to={FooterCardComponents[5].path} />}>
                            </Route>
                            <Route
                                path="/account/my-companies" element={userEmail ? <UserCompanies /> : <Navigate replace to={FooterCardComponents[5].path} />}>
                            </Route>
                            <Route
                                path="/account/wishlist" element={userEmail ? <Wishlist /> : <Navigate replace to={FooterCardComponents[5].path} />}>
                            </Route>


                            {/*-------------> Search Bar Category <-------------*/}
                            <Route path="/search" element={searchTerm ? <SearchBar /> : <Error404 />}></Route>


                            {items.map(item => (
                                <Route key={item.id} path={item.path} element={<ProductPage  {...item} />}></Route>
                            ))}



                        </Routes>
                        <Footer />
                    </UserAccountContext>
                </AddToCartContext>
            </ShoppingCartProvider>

        </div >
    )
}