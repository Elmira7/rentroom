import React from "react"
import {Outlet} from "react-router-dom"
import {Filter} from "./component/Filter/Filter"
import styles from "./Appeals.module.sass"

export const Appeals = () => {
	return (
		<div className={styles.main}>
			<Filter/>
			<Outlet/>
		</div>
	)
}