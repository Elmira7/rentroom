import React from "react"
import {Route, Routes} from "react-router-dom"
import {LayoutAuthorized} from "./LayoutAuthorized"
import {Monitoring} from "./pages/Monitoring/Monitoring"
import {Appeals} from "./pages/Appeals/Appeals"
import {News} from "./pages/News/News"
import {LayoutNoAuthorized} from "./LayoutNoauthorized"
import {Main} from "./pages/Main/Main"
import {Account} from "./pages/Account/Account"
import {ReviewsList} from "./pages/Account/component/reviews/ReviewsList"
import {InformationList} from "./pages/Account/component/Information/InformationList"
import {MyPremisesList} from "./pages/Monitoring/component/MyPremises/MyPremisesList"
import {LeasedPremisesList} from "./pages/Monitoring/component/LeasedPremises/LeasedPremisesList"
import {Search} from "./pages/Search/Search"

export const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<LayoutNoAuthorized/>}>
					<Route path='/Main' element={<Main/>}></Route>
				</Route>

				<Route path="/authorized" element={<LayoutAuthorized/>}>
					<Route path='/authorized/Monitoring' element={<Monitoring/>}>
						<Route path="/authorized/Monitoring/MyPremises" element={<MyPremisesList/>}></Route>
						<Route path="/authorized/Monitoring/LeasedPremises" element={<LeasedPremisesList/>}></Route>
					</Route>
					<Route path='/authorized/Appeals' element={<Appeals/>}></Route>
					<Route path='/authorized/News' element={<News/>}></Route>
					<Route path='/authorized/Search' element={<Search/>}></Route>
					<Route path='/authorized/Account' element={<Account/>}>
						<Route path='/authorized/Account/Information' element={<InformationList/>}></Route>
						<Route path='/authorized/Account/Reviews' element={<ReviewsList/>}></Route>
					</Route>
				</Route>
			</Routes>

		</div>
	)
}

