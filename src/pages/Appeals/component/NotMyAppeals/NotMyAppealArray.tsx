import React from "react"
import {NotMyAppeal, NotMyAppealProps} from "./NotMyAppeal"
import styles from "../MyAppeals/MyAppeals.module.sass"

interface NotMyAppealArrayProps {
    NotMyAppeal: Array<NotMyAppealProps>
}

export const NotMyAppealArray = (props: NotMyAppealArrayProps) => {
	return (
		<div className={styles.array}>
			{props.NotMyAppeal.map((props: NotMyAppealProps, index: number) =>
				<NotMyAppeal
					key={index}
					img={props.img}
					name={props.name}
					theme={props.theme}
					message={props.message}
					status={props.status}/>
			)}
		</div>
	)

}