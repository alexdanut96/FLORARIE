import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const InputTermContext = React.createContext()
const TermButtonContext = React.createContext()
const GetTermContext = React.createContext()
const InputText = React.createContext()
const ClickButton = React.createContext()
const DeleteTerm = React.createContext()
const CheckIsTrue = React.createContext()
const IsTrueValue = React.createContext()
// const windowWidthCheck = React.createContext()


export function useSendTerm() {
    return useContext(GetTermContext)
}

export function useInputTerm() {
    return useContext(InputTermContext)
}

export function useButtonTerm() {
    return useContext(TermButtonContext)
}

export function useInputText() {
    return useContext(InputText)
}

export function useClickButton() {
    return useContext(ClickButton)
}

export function useDeleteTerm() {
    return useContext(DeleteTerm)
}

export function useCheckIsTrue() {
    return useContext(CheckIsTrue)
}

export function useIsTrueValue() {
    return useContext(IsTrueValue)
}

// export function useWindowWidthCheck() {
//     return useContext(windowWidthCheck)
// }

export function StateContext({ children }) {

    const [inputTerm, setInputTerm] = React.useState("")
    const [buttonTerm, setButtonTerm] = React.useState("")
    const [isOpen, setIsOpen] = React.useState(false)
    // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const navigate = useNavigate()
    const path = "/search/" + inputTerm

    function getTerm(event) {
        setInputTerm(event.target.value)
    }

    function showButton(event) {
        if (event.key === 'Enter') {
            if (inputTerm) {
                setButtonTerm(inputTerm)
                navigate(path)
            }
        }
    }

    function clickButton() {
        setButtonTerm(inputTerm)
    }

    function deleteTerm() {
        setInputTerm("")
    }

    function CheckTheTruethness() {
        setIsOpen(!isOpen)
    }



    return (
        <InputTermContext.Provider value={buttonTerm}>
            <TermButtonContext.Provider value={showButton}>
                <GetTermContext.Provider value={getTerm}>
                    <InputText.Provider value={inputTerm}>
                        <ClickButton.Provider value={clickButton}>
                            <DeleteTerm.Provider value={deleteTerm}>
                                <CheckIsTrue.Provider value={CheckTheTruethness}>
                                    <IsTrueValue.Provider value={isOpen}>
                                        {/* <windowWidthCheck.Provider value={checkWindowWidth}> */}
                                        {children}
                                        {/* </windowWidthCheck.Provider> */}
                                    </IsTrueValue.Provider>
                                </CheckIsTrue.Provider>
                            </DeleteTerm.Provider>
                        </ClickButton.Provider>
                    </InputText.Provider>
                </GetTermContext.Provider>
            </TermButtonContext.Provider>
        </InputTermContext.Provider>
    )
}