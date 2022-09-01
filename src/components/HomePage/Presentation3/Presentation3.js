import React from "react"
import { Link } from "react-router-dom"
import STYLE from "./Presentation3.module.css"
import { buchete_flori_column3 } from "../../../Pages/Product Category/Buchete Flori/Buchete_flori_items"

export function Presentation3() {

    return (
        <Link to={buchete_flori_column3[5].path} style={{ textDecoration: "none" }}>
            <div className={STYLE.container}>
                <div className={STYLE.imageBackground}>
                    <div className={STYLE.imageBgContent}>
                        <div className={STYLE.title}>Cele mai iubite flori</div>
                        <div className={STYLE.text}>Vezi cele mai cumparate buchete de sezon</div>
                        <div><button className={STYLE.orderButton}>COMANDA</button></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}