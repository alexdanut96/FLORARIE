import React from "react"
import STYLE from "./Collapsible.module.css"
import { IoIosArrowForward } from "react-icons/io"

export function Collapsible(props) {
    const [isOpen, setIsOpen] = React.useState(false)
    const parentRef = React.useRef()

    return (
        <div className={STYLE.collapsible}>
            <div className={STYLE.toggle} onClick={() => setIsOpen(!isOpen)}>
                <button>{props.label}</button>
                <IoIosArrowForward className={isOpen ? STYLE.open : STYLE.close} />
            </div>
            <div className={STYLE.contentParent}
                ref={parentRef}
                style={isOpen ? { height: parentRef.current.scrollHeight + "px" } : { height: "0px" }}>
                <div className={STYLE.contentChildren}>{props.children}</div>
            </div>
        </div>
    )
}
