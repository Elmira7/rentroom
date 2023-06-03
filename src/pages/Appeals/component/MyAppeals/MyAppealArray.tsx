import React from "react"
import {MyAppeal, MyAppealProps} from "./MyAppeal"
import styles from "./MyAppeals.module.sass"

interface MyAppealArrayProps {
    NotMyAppeal: Array<MyAppealProps>
}

export const MyAppealArray = (props: MyAppealArrayProps) => {
	return (
		<div className={styles.array}>
			{props.NotMyAppeal.map((props: MyAppealProps, index: number) =>
				<MyAppeal
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