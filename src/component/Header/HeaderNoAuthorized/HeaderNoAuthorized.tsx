import React from "react"
import {NavLink} from "react-router-dom"
import styles from "../../Header/Header.module.sass"
import cn from "classnames"
import icon from "../../../images/icon.svg"

export const HeaderNoAuthorized = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__icon}>
				<div>
					<img src={icon}/>
				</div>
				<div className={styles.header__icon__text}>RentRoom</div>
			</div>

			<nav>
				<NavLink to="/monitoring"
					className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>О нас </NavLink>
				<NavLink to='/Appeals'
					className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>Сотрудничество</NavLink>
				<NavLink to="/News"
					className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>Преимущества</NavLink>
				<NavLink to="/Analytics"
					className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>Партнеры</NavLink>
			</nav>
		</div>
	)
}