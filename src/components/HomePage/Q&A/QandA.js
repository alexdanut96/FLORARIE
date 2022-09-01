import React, { useState } from "react";
import STYLE from "./QandA.module.css"
import { QandAitems } from "./QandAitems"

export function QandA() {

    const [isOpenOne, setIsOpenOne] = useState(false)
    const [isOpenTwo, setIsOpenTwo] = useState(false)
    const [isOpenThree, setIsOpenThree] = useState(false)
    const [isOpenFour, setIsOpenFour] = useState(false)

    function changeStateOne() {
        setIsOpenOne(!isOpenOne)
    }
    function changeStateTwo() {
        setIsOpenTwo(!isOpenTwo)
    }
    function changeStateThree() {
        setIsOpenThree(!isOpenThree)
    }
    function changeStateFour() {
        setIsOpenFour(!isOpenFour)
    }


    // useEffect(() => {

    //     const answerOne = document.querySelectorAll(`.${STYLE.answerOne}`)
    //     // const answerTwo = document.querySelectorAll(`.${STYLE.answerTwo}`)
    //     // const answerThree = document.querySelectorAll(`.${STYLE.answerThree}`)
    //     // const answerFour = document.querySelectorAll(`.${STYLE.answerFour}`)
    //     const questionOne = document.querySelectorAll(`.${STYLE.questionOne}`)
    //     // const questionTwo = document.querySelectorAll(`.${STYLE.questionTwo}`)
    //     // const questionThree = document.querySelectorAll(`.${STYLE.questionThree}`)
    //     // const questionFour = document.querySelectorAll(`.${STYLE.questionFour}`)

    //     questionOne[0].addEventListener("click", () => {
    //         setIsOpenOne(!isOpenOne)
    //         console.log(isOpenOne)
    //         answerOne[0].style.display = isOpenOne ? "flex" : "none"
    //     })

    //     return () => questionOne[0].removeEventListener





    // })

    return (
        <div className={STYLE.container}>
            <div className={STYLE.title}>Florarie online - Intrevari frecvente</div>
            <div className={STYLE.contentOne}>
                <div className={STYLE.questionOne} onClick={() => changeStateOne()}>
                    {QandAitems[0].question}
                    <div className={STYLE.plusIcon} style={{ display: isOpenOne ? "none" : "flex" }}>+</div>
                    <div className={STYLE.minusIcon} style={{ display: !isOpenOne ? "none" : "flex" }}>-</div>
                </div>
                <div className={STYLE.answerOne} style={{ display: isOpenOne ? "flex" : "none" }}>
                    <div>{QandAitems[0].answer}<a href="/" rel="noreferrer">&nbsp;AICI</a></div>
                </div>
            </div>
            <div className={STYLE.contentTwo}>
                <div className={STYLE.questionTwo} onClick={() => changeStateTwo()}>
                    {QandAitems[1].question}
                    <div className={STYLE.plusIcon} style={{ display: isOpenTwo ? "none" : "flex" }}>+</div>
                    <div className={STYLE.minusIcon} style={{ display: !isOpenTwo ? "none" : "flex" }}>-</div>
                </div>
                <div className={STYLE.answerTwo} style={{ display: isOpenTwo ? "flex" : "none" }}>
                    <div>{QandAitems[1].answer[0].row1}<a href="/" rel="noreferrer">&nbsp;Livrare Internationala</a></div>
                    <div>{QandAitems[1].answer[0].row2}</div>
                </div>
            </div>
            <div className={STYLE.contentThree}>
                <div className={STYLE.questionThree} onClick={() => changeStateThree()}>
                    {QandAitems[2].question}
                    <div className={STYLE.plusIcon} style={{ display: isOpenThree ? "none" : "flex" }}>+</div>
                    <div className={STYLE.minusIcon} style={{ display: !isOpenThree ? "none" : "flex" }}>-</div>
                </div>
                <div className={STYLE.answerThree} style={{ display: isOpenThree ? "flex" : "none" }}>
                    <div>{QandAitems[2].answer}<a href="/" rel="noreferrer">&nbsp;buchete de flori in cutie</a></div>
                </div>
            </div>
            <div className={STYLE.contentFour}>
                <div className={STYLE.questionFour} onClick={() => changeStateFour()}>
                    {QandAitems[3].question}
                    <div className={STYLE.plusIcon} style={{ display: isOpenFour ? "none" : "flex" }}>+</div>
                    <div className={STYLE.minusIcon} style={{ display: !isOpenFour ? "none" : "flex" }}>-</div>
                </div>
                <div className={STYLE.answerFour} style={{ display: isOpenFour ? "flex" : "none" }}>
                    <div>{QandAitems[3].answer[0].row1}</div>
                    <div>{QandAitems[3].answer[0].row2}</div>
                </div>
            </div>
        </div>
    )
}