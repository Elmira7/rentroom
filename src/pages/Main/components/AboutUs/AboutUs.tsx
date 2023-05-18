import React from "react"
import styles from "./AboutUs.module.sass"
import laptop from "../../../../images/img.png"

export const AboutUs = () => {
	return (
		<div className={styles.main}>
			<div className={styles.main__text}>
				<div className={styles.main__text__first}>Все под контролем</div>
				<span className={styles.main__text__second}>Удобный доступ к объектам и инструментам для работы</span>
			</div>
			<div>
				<img className={styles.img} alt={"laptop"} src={laptop}/>
			</div>
		</div>
	)
}