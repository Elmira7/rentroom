import React from "react"
import styles from "../MyAppeals/MyAppeals.module.sass"
import cn from "classnames"

export interface NotMyAppealProps {
    img: string
    name: string
    theme: string
    message: string
    status: string

}


export const NotMyAppeal = (props: NotMyAppealProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__images}>
				<img className={styles.img} alt={"фото пользователя"} src={props.img}/>
			</div>
			<div className={styles.card__content}>
				<div className={styles.card__content__heading}>
					<span className={styles.card__content__heading__name}>{props.name}</span>
					<span
						className={cn(styles.card__content__heading__status, props.status === "решен" ? styles.resolved : styles.unresolved)}>{props.status}</span>
					<button type={"button"}
						className={styles.card__content__heading__but}>{props.status === "решен" ? "Удалить" : "Решить"}</button>
				</div>
				<div className={styles.card__content__text}>
					<div className={styles.theme}>
						<div className={styles.card__content__text__grey}>Тема</div>
						<div className={styles.card__content__text__grey

						}>Сообщение
						</div>
					</div>

					<div className={styles.props}>
						<div className={styles.card__content__text__grey}>{props.theme}</div>
						<div className={styles.card__content__text__grey}>{props.message}</div>
					</div>
				</div>
			</div>
		</div>
	)

}