import React from "react"
import {NotMyAppeal, NotMyAppealProps} from "./NotMyAppeal"

interface NotMyAppealArrayProps {
    NotMyAppeal: Array<NotMyAppealProps>
}

export const NotMyAppealArray = (props: NotMyAppealArrayProps) => {
	return (
		<div>
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