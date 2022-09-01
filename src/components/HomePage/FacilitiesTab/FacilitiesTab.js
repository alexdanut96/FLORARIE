import React from "react";
import { Facilities } from "../Facilities/Facilities";
import { FacilitiesItems } from "../Facilities/FacilitiesItems";
import STYLE from "./FacilitiesTab.module.css"

export function FacilitiesTab() {


    return (
        <div className={STYLE.container}>

            < Facilities
                icon={FacilitiesItems[1].icon}
                title={FacilitiesItems[1].title}
                content={FacilitiesItems[1].content}
            />
            < Facilities
                icon={FacilitiesItems[2].icon}
                title={FacilitiesItems[2].title}
                content={FacilitiesItems[2].content}
            />
            < Facilities
                icon={FacilitiesItems[4].icon}
                title={FacilitiesItems[4].title}
                content={FacilitiesItems[4].content}
            />
            < Facilities
                icon={FacilitiesItems[5].icon}
                title={FacilitiesItems[5].title}
                content={FacilitiesItems[5].content}
            />
            < Facilities
                icon={FacilitiesItems[3].icon}
                title={FacilitiesItems[3].title}
                content={FacilitiesItems[3].content}
            />
        </div>

    )
}
