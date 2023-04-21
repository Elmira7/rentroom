import React from "react"
import {NavLink} from "react-router-dom"
import styles from "../Header/Header.module.sass"
import cn from "classnames"
import {Account} from "./Account"
import icon from "../../images/icon.svg"

export const Header = () => {
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
					className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>Мониторинг</NavLink>
				<NavLink to='/Appeals'
					className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>Обращения</NavLink>
				<NavLink to="/News"
					className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>Новости</NavLink>
				<NavLink to="/Analytics"
					className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>Аналитика</NavLink>
			</nav>
			<Account/>
		</div>
	)
}