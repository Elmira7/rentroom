import React from "react"
import {Checkbox} from "../../../../component/Checkbox/Checkbox"
import styles from "./filter.module.sass"

export const Filter = () => {
	return (
		<div className={styles.main}>
			<div className={styles.main__name}>Объект</div>
			<div>
				<select className={styles.select}>
					<option>Все</option>
					<option>Объект 1</option>
					<option>Объект 2</option>
					<option>Объект 3</option>
				</select>
			</div>
			<div className={styles.check}>
				<Checkbox name={"только новые"}/>
			</div>
		</div>
	)
}