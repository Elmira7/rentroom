import React, {useState} from "react"
import styles from "./Profile.module.sass"
import img from "../../../../images/avatar.svg"
import {Modal} from "../../../../component/Modal"

export const Profile = () => {
	const [visible, setVisible] = useState(false)
	return (
		<div className={styles.main}>
			<div className={styles.main__img}>
				<img className={styles.img} src={img} alt={"фото профиля"}/>
			</div>
			<div className={styles.main__name}>Алексей Петрович</div>
			<div className={styles.main__phone}>+7 (917) 888 88 88</div>
			<div className={styles.main__mail}>ivanov@gmail.com</div>
			{/*<Modal visible={visible} onClose={() => setVisible(false)}/>*/}
			<button className={styles.main__button}>Редактировать</button>
		</div>
	)

}