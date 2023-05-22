import React from "react"
import styles from "./Monitoring.module.sass"
import {Filter} from "./component/filter/Filter"
import {Outlet} from "react-router-dom"
import {Nav} from "./component/Nav/Nav"

export const Monitoring = () => {
	return (
		<div className={styles.main}>
			<div>
				<div className={styles.stick}>
					<Filter/>
				</div>
			</div>

			<div className={styles.main__block}>
				<Nav/>
				<Outlet/>
			</div>
		</div>
	)
}