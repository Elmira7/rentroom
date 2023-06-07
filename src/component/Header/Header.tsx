import React from "react"
import {NavLink} from "react-router-dom"
import styles from "../Header/Header.module.sass"
import cn from "classnames"
import {Account} from "./Account"

const cx = cn.bind(styles)

export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__icon}>
				<div>
					<img alt={"icon"} src={"/images/icon.svg"}/>
				</div>
				<div className={styles.header__icon__text}>RentRoom</div>
			</div>

			<nav>
				<NavLink to="/authorized/monitoring/MyPremises"
					className={({isActive}) => cx(styles.text,
						{activeLink: isActive})}>Мониторинг</NavLink>
				<NavLink to='/authorized/Appeals'
					className={({isActive}) => cx(styles.text,
						{activeLink: isActive})}>Обращения</NavLink>
				<NavLink to="/authorized/News"
					className={({isActive}) => cx(styles.text,
						{activeLink: isActive})}>Новости</NavLink>
				<NavLink to="/authorized/Search"
					className={({isActive}) => cx(styles.text,
						{activeLink: isActive})}>Поиск</NavLink>
			</nav>
			<Account/>
		</div>
	)
}