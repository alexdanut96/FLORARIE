import React, { useContext, useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";


const UserAccount = React.createContext()

export function useUserAccount() {
    return useContext(UserAccount)
}

export function UserAccountContext({ children }) {

    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [streetError, setStreetError] = useState("")
    const [streetNumberError, setStreetNumberError] = useState("")
    const [receiverPhoneNumberError, setReceiverPhoneNumberError] = useState("")
    const [receiverError, setReceiverError] = useState("")

    const [demo, setDemo] = useLocalStorage("accountDemo",
        {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            gender: "",
            birthday: "",
            country: "",
            city: "",
            sector: "",
            street: "",
            streetNumber: "",
            receiverPhoneNumber: "",
            receiver: ""
        }
    )


    const [editFormData, setEditFormData] = useLocalStorage("accountInfo",
        {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            gender: "",
            birthday: "",
            country: "",
            city: "",
            sector: "",
            street: "",
            streetNumber: "",
            receiverPhoneNumber: "",
            receiver: ""
        }
    )


    function removeAddress() {
        setDemo(prevState => {
            return (
                {
                    ...prevState,
                    country: "",
                    city: "",
                    sector: "",
                    street: "",
                    streetNumber: "",
                    receiverPhoneNumber: "",
                    receiver: ""
                }
            )
        })

        setEditFormData(prevState => {
            return (
                {
                    ...prevState,
                    country: "",
                    city: "",
                    sector: "",
                    street: "",
                    streetNumber: "",
                    receiverPhoneNumber: "",
                    receiver: ""
                }
            )
        })
    }

    function getUserData(prop1, prop2) {
        setEditFormData(prevState => ({
            ...prevState,
            [prop1]: prop2
        }))
    }

    function setDemoData() {
        setDemo(editFormData)
    }

    function setFormData() {
        setEditFormData(demo)
    }

    function setFnameError() {
        setFirstNameError("Acest camp este obligatoriu")
    }

    function setLnameError() {
        setLastNameError("Acest camp este obligatoriu")
    }
    function showStreetError() {
        setStreetError("Acest camp este obligatoriu")
    }
    function showStreetNumberError() {
        setStreetNumberError("Acest camp este obligatoriu")
    }
    function showReceiverPhoneNumberError() {
        setReceiverPhoneNumberError("Acest camp este obligatoriu")
    }
    function showReceiverError() {
        setReceiverError("Acest camp este obligatoriu")
    }

    function removeFnameError() {
        setFirstNameError("")
    }

    function removeLnameError() {
        setLastNameError("")
    }

    function removeStreetError() {
        setStreetError("")
    }

    function removeStreetNumberError() {
        setStreetNumberError("")
    }

    function removeReceiverPhoneNumberError() {
        setReceiverPhoneNumberError("")
    }

    function removeReceiverError() {
        setReceiverError("")
    }


    return (

        <UserAccount.Provider value={{
            setDemoData,
            setFormData,
            getUserData,
            setFnameError,
            setLnameError,
            removeFnameError,
            removeLnameError,
            showStreetError,
            showStreetNumberError,
            showReceiverPhoneNumberError,
            showReceiverError,
            removeStreetError,
            removeStreetNumberError,
            removeReceiverPhoneNumberError,
            removeReceiverError,
            removeAddress,
            demo,
            editFormData,
            lastNameError,
            firstNameError,
            streetError,
            streetNumberError,
            receiverPhoneNumberError,
            receiverError,
        }}>
            {children}
        </UserAccount.Provider>

    )
}