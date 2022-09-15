import React, { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchContext = React.createContext()
export function useSearch() {
    return useContext(SearchContext)
}


export function SearchProvider({ children }) {

    const [searchParams, setSearchParams] = useSearchParams()

    const searchTerm = searchParams.get('filter') || ''

    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false)

    const [showCloseBtn, setShowCloseBtn] = useState(false)

    function handleSearch(ref) {
        const filter = ref.current.value.trim()
        if (filter) {
            setSearchParams({ filter })
        } else {
            setSearchParams({})
        }
        if (filter.trim().length !== 0) {
            navigate(`/search?filter=${filter.trim()}`)
        }
    }

    function deleteTerm(ref) {
        ref.current.value = ""
        setShowCloseBtn(false)

    }

    function CheckTheTruethness() {
        setIsOpen(!isOpen)
    }

    function deleteSearchText(ref) {
        if (ref.current.value !== "") {
            setShowCloseBtn(true)
        } else {
            setShowCloseBtn(false)
        }
    }

    const value = {
        deleteTerm,
        CheckTheTruethness,
        handleSearch,
        deleteSearchText,
        searchTerm,
        showCloseBtn,
        isOpen
    }


    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}