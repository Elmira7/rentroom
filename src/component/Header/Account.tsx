import React from "react"
import styles from "./Header.module.sass"
import {NavLink} from "react-router-dom"

export const Account = () => {
	return (
		<div className={styles.header__account}>
			<div className={styles.header__account__img}>
				<img alt={"avatar"} src={"/images/avatar.svg"}/>
			</div>
			<div className={styles.header__account__name}>
				<NavLink to='/authorized/Account/Information'>Алексей</NavLink>
			</div>
		</div>
	)
}