import React from "react"
import "./App.css"
import {Route, Routes} from "react-router-dom"
import {Layout} from "./Layout"
import {Monitoring} from "./pages/Monitoring/Monitoring"
import {Appeals} from "./pages/Appeals/Appeals"
import {News} from "./pages/News/News"
import {Analytics} from "./pages/Analytics/Analytics"

export const App = () => {
	return (
		<div>
			
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route path='/monitoring' element={<Monitoring/>}></Route>
					<Route path='/Appeals' element={<Appeals/>}></Route>
					<Route path='/News' element={<News/>}></Route>
					<Route path='/Analytics' element={<Analytics/>}></Route>
				</Route>
			</Routes>

		</div>
	)
}

