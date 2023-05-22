import React from "react"
import styles from "./MyPremises.module.sass"

export interface MyPremisesProps {
    img: string
    name: string
    status: string
    indebtedness: string
    counter: string
    requests: number

}

export const MyPremises = (props: MyPremisesProps) => {
	return (
		<div className={styles.block}>
			<div>
				<img className={styles.img} src={props.img} alt={"фото объекта"}/>
			</div>

			<div className={styles.block__text}>
				<div className={styles.block__text__line}>
					<div className={styles.block__text__line__name}>{props.name}</div>
					<div className={styles.block__text__line__status}>{props.status}</div>
				</div>

				<div className={styles.block__text__line}>
					<div className={styles.block__text__line__t}>задолжность:</div>
					<div className={styles.block__text__line__props}>{props.indebtedness}</div>
				</div>

				<div className={styles.block__text__line}>
					<div className={styles.block__text__line__t}>счетчики</div>
					<div className={styles.block__text__line__props}>{props.counter}</div>
				</div>

				<div className={styles.block__text__line}>
					<div className={styles.block__text__line__t}>запросов:</div>
					<div className={styles.block__text__line__props}>{props.requests}</div>
				</div>

			</div>

		</div>
	)
}