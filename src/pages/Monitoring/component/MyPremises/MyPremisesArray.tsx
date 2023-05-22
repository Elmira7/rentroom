import React from "react"
import {MyPremises, MyPremisesProps} from "./MyPremises"

interface MyPremisesArrayProps {
	MyPremises: Array<MyPremisesProps>
}

export const MyPremisesArray = (props: MyPremisesArrayProps) => {
	return (
		<div>
			{props.MyPremises.map((props: MyPremisesProps, index: number) =>
				<MyPremises
					key={index}
					img={props.img}
					name={props.name}
					status={props.status}
					indebtedness={props.indebtedness}
					counter={props.counter}
					requests={props.requests}
				/>
			)}
		</div>
	)
}