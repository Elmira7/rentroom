import React from "react"
import styles from "./Filter.module.sass"
import {Checkbox} from "../../../../component/Checkbox/Checkbox"

export const Filter = () => {
	return (
		<div className={styles.main}>
			<span className={styles.main__name}>Объект</span>
			<div>
				<select className={styles.select}>
					<option>Объект #1</option>
					<option>Объект #2</option>
					<option>Помещение</option>
					<option>Павильон</option>
				</select>
			</div>
			<div className={styles.main__block}>
				<Checkbox name={"решен"}/>
				<Checkbox name={"на рассмотрении"}/>
			</div>

		</div>
	)
}