import React from "react"
import styles from "./NewsComponent.module.sass"

interface Owner {
    id: string
    name: string
}

interface MissingInfo {
    id: number
    city: string
    info: string
    image: string
}

interface Notification {
    id: string
    img: string
    title: string
    owner: Owner
    message: string
    date: string
    time: string
    missing: MissingInfo
    sum: string
}

export interface Props {
    notification: Notification;
}

export const NewsComponent: React.FC<Props> = ({notification}) => {
	return (
		<div className={styles.notification}>
			<div className={styles.notification__image}>
				<img className={styles.img} alt={"фото пользователя"} src={notification.img}/>
			</div>
			<div className={styles.notification__info}>
				<div className={styles.notification__info__left}>
					<div className={styles.notification__info__left__header}>
						{notification.missing.info}
					</div>
					<div className={styles.notification__info__left__action}>
						{notification.message}
					</div>
				</div>
				<div className={styles.notification__info__center}>
					{notification.sum}

				</div>
				<div className={styles.notification__info__right}>
					<div className={styles.notification__info__right__name}>
						{notification.owner.name}
					</div>
					<div className={styles.notification__info__right__time}>
						{notification.time}
					</div>
				</div>
			</div>
		</div>
	)
}