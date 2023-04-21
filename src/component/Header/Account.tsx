import React from "react"
import avatar from "../../images/avatar.svg"
import styles from "./Header.module.sass"

export const Account = () => {
	return (
		<div className={styles.header__account}>
			<div className={styles.header__account__img}>
				<img src={avatar}/>
			</div>
			<div className={styles.header__account__name}>
                Алексей
			</div>
		</div>
	)
}