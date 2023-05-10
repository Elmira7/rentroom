import React from "react"
import styles from "./Profile.module.sass"
import img from "../../../../images/avatar.svg"

export const Profile = () => {
	return (
		<div className={styles.main}>
			<div className={styles.main__img}>
				<img className={styles.img} src={img} alt={"фото профиля"}/>
			</div>
			<div className={styles.main__name}>Алексей Петрович</div>
			<div className={styles.main__phone}>+7 (917) 888 88 88</div>
			<div className={styles.main__mail}>ivanov@gmail.com</div>
			<button className={styles.main__button}>Редактировать</button>
		</div>
	)

}