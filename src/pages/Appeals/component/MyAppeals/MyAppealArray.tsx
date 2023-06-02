import React from "react"
import {MyAppeal, MyAppealProps} from "./MyAppeal"

interface MyAppealArrayProps {
    NotMyAppeal: Array<MyAppealProps>
}

export const MyAppealArray = (props: MyAppealArrayProps) => {
	return (
		<div>
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