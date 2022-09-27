import React, { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchContext = React.createContext()
export function useSearch() {
    return useContext(SearchContext)
}


export function SearchProvider({ children }) {

    const [searchParams, setSearchParams] = useSearchParams()

    const [isRender, setIsRender] = useState(false)

    const [progress, setProgress] = React.useState(0)

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

    function setLoadingProgress100() {
        setProgress(100)
    }
    function setLoadingProgress0() {
        setProgress(10)
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

    function trueRender() {
        setIsRender(true)
    }

    function falseRender() {
        setIsRender(false)
    }

    const value = {
        deleteTerm,
        CheckTheTruethness,
        handleSearch,
        deleteSearchText,
        searchTerm,
        showCloseBtn,
        isOpen,
        trueRender,
        falseRender,
        isRender,

        setLoadingProgress100,
        setLoadingProgress0,
        progress
    }


    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}