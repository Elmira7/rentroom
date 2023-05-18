import React from "react"
import img from "../../../../images/partners/img_2.png"
import styles from "./Partners.module.sass"

export const Partners = () => {
	return (
		<div className={styles.main}>
			<div className={styles.main__text}>Партнеры сервиса</div>
			<div className={styles.main__img}>
				{/*todo разделить их*/}
				<img className={styles.img} src={img} alt={"partners"}/>
			</div>
		</div>
	)
}