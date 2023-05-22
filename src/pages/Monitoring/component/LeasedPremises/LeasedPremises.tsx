import React from "react"
import styles from "./LeasedPremises.module.sass"

export interface LeasedPremisesProps {
    img: string
    name: string
}

export const LeasedPremises = (props: LeasedPremisesProps) => {
	return (
		<div className={styles.main}>
			<div>
				<img className={styles.img} src={props.img} alt={"фото объекта"}/>
			</div>
			<div className={styles.main__name}>{props.name}</div>
			<div>
				<button type="button" className={styles.main__but}>Перейти</button>
			</div>
		</div>
	)
}