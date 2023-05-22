import React from "react"
import {NavLink} from "react-router-dom"
import styles from "./Nav.module.sass"
import cn from "classnames"

export const Nav = () => {
	return (
		<nav className={styles.nav}>
			<NavLink to="/authorized/Monitoring/MyPremises"
				className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>Мои объекты</NavLink>
			<NavLink to="/authorized/Monitoring/LeasedPremises"
				className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>Арендуемые
                помещения</NavLink>
		</nav>
	)
}