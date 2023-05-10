import React from "react"
import styles from "./Information.module.sass"

export interface InformationProps {
    date: string
    lastEntry: string
    object: number
    activeObject: number
    review: number
}

export const Information = (props: InformationProps) => {
	return (
		<div className={styles.main}>
			<div className={styles.main__block}>
				<span className={styles.main__block__text}>На сервисе с </span>
				<span className={styles.main__block__props}>{props.date}</span>
			</div>
			<div className={styles.main__block}>
				<span className={styles.main__block__text}>Последний вход</span>
				<span className={styles.main__block__props}>{props.lastEntry}</span>
			</div>
			<div className={styles.main__block}>
				<span className={styles.main__block__text}>Объекты </span>
				<span className={styles.main__block__props}>{props.object}</span>
			</div>
			<div className={styles.main__block}>
				<span className={styles.main__block__text}>Активные объекты</span>
				<span className={styles.main__block__props}>{props.activeObject}</span>
			</div>
			<div className={styles.main__block}>
				<span className={styles.main__block__text}>Отзывы</span>
				<span className={styles.main__block__props}>{props.review}</span>
			</div>
		</div>
	)
}