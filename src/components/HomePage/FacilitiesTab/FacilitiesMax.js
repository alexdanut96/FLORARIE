import React from "react";
import STYLE from "./FacilitiesMax.module.css"
import { FacilitiesItemsTwo } from "../Facilities/FacilitiesItemsTwo";
import { Facilities } from "../Facilities/Facilities";

export function FacilitiesMax() {

    return (

        <div className={STYLE.facilitiesMax}>
            {FacilitiesItemsTwo.map((item, index) => {
                if (index !== FacilitiesItemsTwo.length - 1) {
                    return (
                        < Facilities
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            content={item.content}
                        />
                    )
                }
                return null
            })}
        </div>

    )
}