import React from "react";
import { buchete_flori_column1, buchete_flori_column2, buchete_flori_column3 } from "../Pages/Product Category/Buchete Flori/Buchete_flori_items";
import { aranjamente_florale } from "../Pages/Product Category/Aranjamente Florale/Aranjamente-florale_items"
import { ocazii_si_evenimente_column1, ocazii_si_evenimente_column2, ocazii_si_evenimente_column3 } from "../Pages/Product Category/Ocazii si Evenimente/Ocazii_si_evenimente_items"
import { cadouri } from "../Pages/Product Category/Cadouri/Cadouri_items"
import { Link } from "react-router-dom";
import "./Dropdown.css"
import { promo } from "../Pages/Product Category/Oferte si Promotii/Promo_items"

function Promo() {
    return (
        promo.map(item => {
            return (
                <Link className={item.cName} key={item.id} to={item.path}>{item.name}</Link>
            )
        })
    )
}

export function SubmenuBucheteFlori() {
    function loop(i, column) {
        let className = `submenu-column${String(i)}`
        return (
            <div className={className}>
                {column.map(item => {
                    return (
                        <div
                            key={item.id}
                            className={item.cName}
                        >
                            <Link
                                className="submenu-category"
                                to={item.path}
                            >{item.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className="submenu">
            <div className="submenu-promo">{Promo()}</div>
            {loop(1, buchete_flori_column1)}
            {loop(2, buchete_flori_column2)}
            {loop(3, buchete_flori_column3)}
            <div className="submenu-image">
                <div >
                </div>
                <Link to="/Buchete-flori" className="background-link">
                    <div className="backgroundImageOne">
                        <div className="title">Buchete de flori</div>
                        <div className="collection-link">Vezi colectia</div>
                    </div>
                </Link>
            </div>
        </div>

    )
}



export function SubmenuAranjamenteFlorale() {
    function loop(i, column) {
        let className = `submenu-column${String(i)}`
        return (
            <div className={className}>
                {column.map(item => {
                    return (
                        <div
                            key={item.id}
                            className={item.cName}
                        >
                            <Link
                                className="submenu-category"
                                to={item.path}
                            >{item.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className="submenu">
            <div className="submenu-promo" >{Promo()}</div>
            {loop(2, aranjamente_florale)}
            <div className="submenu-image">
                <div >
                </div>
                <Link to="/Aranjamente-florale" className="background-link">
                    <div className="backgroundImageTwo">
                        <div className="title">Aranjamente florale</div>
                        <div className="collection-link">Vezi colectia</div>
                    </div>
                </Link>
            </div>
        </div>

    )
}


export function SubmenuOcaziiSiEvenimente() {
    function loop(i, column) {
        let className = `submenu-column${String(i)}`
        return (
            <div className={className}>
                {column.map(item => {
                    return (
                        <div
                            key={item.id}
                            className={item.cName}
                        >
                            <Link
                                className="submenu-category"
                                to={item.path}
                            >{item.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className="submenu">
            <div className="submenu-promo">{Promo()}</div>
            {loop(1, ocazii_si_evenimente_column1)}
            {loop(2, ocazii_si_evenimente_column2)}
            {loop(3, ocazii_si_evenimente_column3)}
            <div className="submenu-image">
                <div >
                </div>
                <Link to="/Aranjamente-florale/Flori-in-cutie" className="background-link">
                    <div className="backgroundImageThree">
                        <div className="title">Cutii cu flori</div>
                        <div className="collection-link">Vezi colectia</div>
                    </div>
                </Link>
            </div>
        </div>

    )
}


export function SubmenuCadouri() {
    function loop(i, column) {
        let className = `submenu-column${String(i)}`
        return (
            <div className={className}>
                {column.map(item => {
                    return (
                        <div
                            key={item.id}
                            className={item.cName}
                        >
                            <Link
                                className="submenu-category"
                                to={item.path}
                            >{item.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className="submenu">
            <div className="submenu-promo">{Promo()}</div>
            {loop(2, cadouri)}
            <div className="submenu-image">
                <div >
                </div>
                <Link to="/Aranjamente-florale/Inimi-Florale" className="background-link">
                    <div className="backgroundImageFour">
                        <div className="title">Inimi florale</div>
                        <div className="collection-link">Vezi colectia</div>
                    </div>
                </Link>
            </div>
        </div>

    )
}








