import React from "react"
import ReactDOM from "react-dom/client"



const root = ReactDOM.createRoot(document.getElementById("root"))


const child = React.createElement("div", {}, 
    [
        React.createElement("h1", {}, "Let's Learn React"),
        React.createElement("h2", {}, "Prep de la")
    ]
)


root.render(child)