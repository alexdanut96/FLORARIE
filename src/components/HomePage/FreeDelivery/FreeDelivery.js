import React from "react";
import STYLE from "./FreeDelivery.module.css"

export function FreeDelivery() {
    return (
        <div className={STYLE.container}>
            <div className={STYLE.content}>
                <div className={STYLE.title}>Orașe în care livrăm gratuit</div>
                <div><button className={STYLE.button}>VEZI LISTA</button></div>
            </div>
        </div>
    )
}