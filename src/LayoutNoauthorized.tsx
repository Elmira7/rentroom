import React from "react"
import "./App.css"
import {Footer} from "./component/Footer/Footer"
import {Outlet} from "react-router-dom"
import styles from "./styles/styles.module.sass"
import {HeaderNoAuthorized} from "./component/Header/HeaderNoAuthorized/HeaderNoAuthorized"

export const LayoutNoAuthorized = () => {
	return (
		<div className={styles.layout}>
			<HeaderNoAuthorized/>
			<main><Outlet/></main>
			<Footer/>

		</div>

	)
}