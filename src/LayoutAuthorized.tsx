import React from "react"
import "./App.css"
import {Header} from "./component/Header/Header"
import {Footer} from "./component/Footer/Footer"
import {Outlet} from "react-router-dom"
import styles from "./styles/styles.module.sass"

export const LayoutAuthorized = () => {
	return (
		<div className={styles.layout}>
			<Header/>
			<main><Outlet/></main>
			<Footer/>

		</div>

	)
}