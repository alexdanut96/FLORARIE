import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import ScrollToTop from "./components/Scroll To Top/ScrollToTop"
import { SearchProvider } from "./components/Header/Context/SearchContext"
import { AuthProvider } from "./components/Header/Context/AuthContext"


createRoot(document.getElementById("root")).render(
    <Router>
        <ScrollToTop />
        <div id="absolute-background"></div>
        <SearchProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </SearchProvider>
    </Router>
)
