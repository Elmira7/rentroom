import React from "react"
import "./App.css"
import {Route, Routes} from "react-router-dom"
import {LayoutAuthorized} from "./LayoutAuthorized"
import {Monitoring} from "./pages/Monitoring/Monitoring"
import {Appeals} from "./pages/Appeals/Appeals"
import {News} from "./pages/News/News"
import {Analytics} from "./pages/Analytics/Analytics"
import {LayoutNoAuthorized} from "./LayoutNoauthorized"
import {Main} from "./pages/Main/Main"
import {Account} from "./pages/Account/Account"
import {ReviewsList} from "./pages/Account/component/reviews/ReviewsList"
import {InformationList} from "./pages/Account/component/Information/InformationList"

export const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<LayoutNoAuthorized/>}>
					<Route path='/Main' element={<Main/>}></Route>
				</Route>

				<Route path="/authorized" element={<LayoutAuthorized/>}>
					<Route path='/authorized/Monitoring' element={<Monitoring/>}></Route>
					<Route path='/authorized/Appeals' element={<Appeals/>}></Route>
					<Route path='/authorized/News' element={<News/>}></Route>
					<Route path='/authorized/Analytics' element={<Analytics/>}></Route>
					<Route path='/authorized/Account' element={<Account/>}>
						<Route path='/authorized/Account/Information' element={<InformationList/>}></Route>
						<Route path='/authorized/Account/Reviews' element={<ReviewsList/>}></Route>
					</Route>
				</Route>
			</Routes>

		</div>
	)
}

