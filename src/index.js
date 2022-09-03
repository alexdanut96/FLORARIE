import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import ScrollToTop from "./components/Scroll To Top/ScrollToTop"
import { StateContext } from "./components/Header/Context/StateContext"
import { AuthProvider } from "./components/Header/Context/AuthContext"


createRoot(document.getElementById("root")).render(
    <Router>
        <ScrollToTop />
        <div id="absolute-background"></div>
        <StateContext>
            <AuthProvider>
                <App />
            </AuthProvider>
        </StateContext>
    </Router>
)
