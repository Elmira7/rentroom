import React from "react"
import {NavLink} from "react-router-dom"
import cn from "classnames"
import styles from "./Nav.module.sass"

export const Nav = () => {
	return (
		<nav className={styles.nav}>
			<NavLink to='/authorized/Account/Information'
				className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>Информация</NavLink>
			<NavLink to='/authorized/Account/Reviews'
				className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>Отзывы</NavLink>

		</nav>
	)
}