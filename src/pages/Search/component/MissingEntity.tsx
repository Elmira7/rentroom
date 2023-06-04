import React from "react"
import styles from "./missing.module.sass"
import {Link} from "react-router-dom"

const features = {
	"district": "Район",
	"description": "Описание",
	"owner": "Разместил"
}


export const MissingEntity = ({image, info}: any) => {
	return (
		<div className={styles.entity}>
			<div className={styles.entity__photo} style={{backgroundImage: `url(${image})`}}/>
			<div className={styles.entity__info}>
				<div className={styles.entity__info__header}>
					<div className={styles.entity__info__header__name}>Собака</div>
					<div className={styles.entity__info__header__status}>активен</div>
				</div>
				<div className={styles.entity__info__body}>
					{Object.keys(features).map((feature) => {
						// eslint-disable-next-line react/jsx-key
						return (<div className={styles.entity__info__body__line}>
							<div className={styles.entity__info__body__line__value}>загрузка с сервера</div>
						</div>)
					})}
				</div>
			</div>
		</div>
	)
}