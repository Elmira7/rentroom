import React, {useState} from "react"
import {NavLink, Outlet} from "react-router-dom"
import {Filter} from "./component/Filter/Filter"
import styles from "./Appeals.module.sass"

export const Appeals = () => {
	const [isActive, setIsActive] = useState(false)
	const handleClick = () => {
		setIsActive(!isActive)
	}
	return (
		<div className={styles.main}>
			<div className={styles.filter}>
				<Filter/>
				<NavLink className={styles.filter__but} to={isActive ? "/authorized/Appeals/My" : "/authorized/Appeals"}
					onClick={handleClick}>{isActive ? "Отправленные" : "Полученные"}</NavLink>
			</div>
			<main>
				<Outlet/>
			</main>
		</div>
	)
}