import React from "react";
import { navBarItems } from "../../navbar-components/NavBarItems"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { SubmenuBucheteFlori, SubmenuAranjamenteFlorale, SubmenuOcaziiSiEvenimente, SubmenuCadouri } from "../../navbar-components/Dropdown";

export function Navbar() {
    const [dropdown1, setDropdown1] = React.useState(false)
    const [dropdown2, setDropdown2] = React.useState(false)
    const [dropdown3, setDropdown3] = React.useState(false)
    const [dropdown4, setDropdown4] = React.useState(false)
    return (
        <div className="navbar">
            <div className="nav-items">
                {navBarItems.map(item => {
                    if (item.name === "Buchete flori") {
                        return (
                            <div
                                key={item.id}
                                className={item.cName}
                                onMouseEnter={() => setDropdown1(true)}
                                onMouseLeave={() => setDropdown1(false)}
                                onClick={() => setDropdown1(false)}>
                                <Link
                                    to={item.path}
                                    style={{ textDecoration: "none", color: "black" }}
                                >{item.name}
                                </Link>
                                {dropdown1 && <SubmenuBucheteFlori />}
                            </div>
                        )
                    }
                    if (item.name === "Aranjamente florale") {
                        return (
                            <div
                                key={item.id}
                                className={item.cName}
                                onMouseEnter={() => setDropdown2(true)}
                                onMouseLeave={() => setDropdown2(false)}
                                onClick={() => setDropdown2(false)}>
                                <Link
                                    to={item.path}
                                    style={{ textDecoration: "none", color: "black" }}
                                >{item.name}
                                </Link>
                                {dropdown2 && <SubmenuAranjamenteFlorale />}
                            </div>
                        )
                    }
                    if (item.name === "Ocazii si evenimente") {
                        return (
                            <div
                                key={item.id}
                                className={item.cName}
                                onMouseEnter={() => setDropdown3(true)}
                                onMouseLeave={() => setDropdown3(false)}
                                onClick={() => setDropdown3(false)}>
                                <Link
                                    to={item.path}
                                    style={{ textDecoration: "none", color: "black" }}
                                >{item.name}
                                </Link>
                                {dropdown3 && <SubmenuOcaziiSiEvenimente />}
                            </div>
                        )
                    }
                    if (item.name === "Cadouri") {
                        return (
                            <div
                                key={item.id}
                                className={item.cName}
                                onMouseEnter={() => setDropdown4(true)}
                                onMouseLeave={() => setDropdown4(false)}
                                onClick={() => setDropdown4(false)}>
                                <Link
                                    to={item.path}
                                    style={{ textDecoration: "none", color: "black" }}
                                >{item.name}
                                </Link>
                                {dropdown4 && <SubmenuCadouri />}
                            </div>
                        )
                    }
                    return (
                        <div key={item.id} className={item.cName}>
                            <Link
                                to={item.path}
                                style={{ textDecoration: "none", color: "black" }}
                            >{item.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}