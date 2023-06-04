import React from "react"
import styles from "./Login.module.sass"
import {LoginForm} from "./LoginForm"


export const Login = () => {
	return (
		<div className={styles.main}>
			<div className={styles.main__text}>
				<div className={styles.main__text__article}>
                    Присоединяйтесь прямо сейчас
				</div>
				<div className={styles.main__text__content}>
                    Удобный доступ к объектам и инструментам для работы
				</div>
			</div>
			<div className={styles.main__form}>
				<LoginForm/>
			</div>

		</div>
	)
}