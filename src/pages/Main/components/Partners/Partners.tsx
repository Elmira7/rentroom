import React from "react"
import styles from "./Partners.module.sass"

export const Partners = () => {
	return (
		<div className={styles.main}>
			<div className={styles.main__text}>Партнеры сервиса</div>
			<div className={styles.main__img}>
				{/*todo разделить их*/}
				<img className={styles.img} src={"/images/partners/img_2.png"} alt={"partners"}/>
			</div>
		</div>
	)
}