import React from "react"
import styles from "./LeasedPremises.module.sass"
import {NavLink} from "react-router-dom"

export interface LeasedPremisesProps {
    id: number
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
				<NavLink to={`/authorized/Monitoring/LeasedPremises/${props.id}`}
					className={styles.main__but}>Перейти</NavLink>
			</div>
		</div>
	)
}