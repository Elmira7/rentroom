import React from "react"
import ReactDOM from "react-dom/client"
import "./index.sass"
import {App} from "./App"
import {BrowserRouter} from "react-router-dom"
import "./styles/reset.sass"
import {YMaps} from "@pbe/react-yandex-maps"


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
)


root.render(
	<BrowserRouter>
		<YMaps query={{apikey: "7d4163bf-88bd-493d-a4b1-3b0a3ec98898"}}>
			<App/>
		</YMaps>
	</BrowserRouter>
)
