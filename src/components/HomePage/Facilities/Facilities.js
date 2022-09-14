import React from "react";
import STYLE from "./Facilities.module.css"

export function Facilities(props) {

    const [isOpen, setIsOpen] = React.useState(false)
    function showContent() {
        setIsOpen(!isOpen)
    }

    return (

        <article className={STYLE.container}>
            <h2 className={STYLE.facility} >
                {props.icon}
                <span
                    className={STYLE.title}
                    onMouseEnter={showContent}
                    onMouseLeave={showContent}>
                    {props.title}
                </span>
            </h2>
            <h3 className={`${isOpen ? STYLE.content : STYLE.contentHidden}`}>
                <div className={STYLE.shape}></div>
                <div>{props.content}</div>
            </h3>
        </article>


    )
}