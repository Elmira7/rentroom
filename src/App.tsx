import React from "react"
import {Route, Routes} from "react-router-dom"
import {LayoutAuthorized} from "./LayoutAuthorized"
import {Monitoring} from "./pages/Monitoring/Monitoring"
import {Appeals} from "./pages/Appeals/Appeals"
import {News} from "./pages/News/News"
import {Main} from "./pages/Main/Main"
import {Account} from "./pages/Account/Account"
import {ReviewsList} from "./pages/Account/component/reviews/ReviewsList"
import {InformationList} from "./pages/Account/component/Information/InformationList"
import {MyPremisesList} from "./pages/Monitoring/component/MyPremises/MyPremisesList"
import {LeasedPremisesList} from "./pages/Monitoring/component/LeasedPremises/LeasedPremisesList"
import {Search} from "./pages/Search/Search"
import {NotMyAppealList} from "./pages/Appeals/component/NotMyAppeals/NotMyAppealList"
import {MyAppealList} from "./pages/Appeals/component/MyAppeals/MyAppealList"
import {Edit} from "./pages/Account/component/edit/Edit"
import {Add} from "./pages/Monitoring/component/Add/Add"
import {Info} from "./pages/Monitoring/component/info/Info"

export const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Main/>}></Route>

				<Route path="/authorized" element={<LayoutAuthorized/>}>
					<Route path='/authorized/Monitoring' element={<Monitoring/>}>
						<Route path="/authorized/Monitoring/MyPremises" element={<MyPremisesList/>}></Route>
						<Route path="/authorized/Monitoring/LeasedPremises" element={<LeasedPremisesList/>}>
						</Route>
						<Route path="/authorized/Monitoring/Add" element={<Add/>}></Route>
						<Route path="/authorized/Monitoring/LeasedPremises/:id" element={<Info/>}></Route>
					</Route>
					<Route path='/authorized/Appeals' element={<Appeals/>}>
						<Route path='/authorized/Appeals' element={<NotMyAppealList/>}></Route>
						<Route path='/authorized/Appeals/My' element={<MyAppealList/>}></Route>
					</Route>
					<Route path='/authorized/News' element={<News/>}></Route>
					<Route path='/authorized/Search' element={<Search/>}></Route>
					<Route path='/authorized/Account' element={<Account/>}>
						<Route path='/authorized/Account/Information' element={<InformationList/>}></Route>
						<Route path='/authorized/Account/Reviews' element={<ReviewsList/>}></Route>
						<Route path='/authorized/Account/Edit' element={<Edit/>}></Route>
					</Route>
				</Route>
			</Routes>

		</div>
	)
}

