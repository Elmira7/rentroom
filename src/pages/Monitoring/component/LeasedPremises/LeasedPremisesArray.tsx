import React from "react"
import {LeasedPremises, LeasedPremisesProps} from "./LeasedPremises"
import styles from "./LeasedPremises.module.sass"

interface LeasedPremisesArrayProps {
    LeasedPremise: Array<LeasedPremisesProps>
}


export const LeasedPremisesArray = (props: LeasedPremisesArrayProps) => {
	return (
		<div className={styles.marginDo}>
			{props.LeasedPremise.map((props: LeasedPremisesProps, index: number) =>
				<LeasedPremises
					key={index}
					img={props.img}
					name={props.name}
				/>
			)}
		</div>
	)
}