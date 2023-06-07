import React from "react"
import {LeasedPremisesArray} from "./LeasedPremisesArray"

export const LeasedPremiseType = [
	{
		id: 1,
		img: "/images/LeasedPremises/img.png",
		name: "Объект #1"
	},
	{
		id: 2,
		img: "/images/LeasedPremises/img_1.png",
		name: "Баумана"
	},
	{
		id: 3,
		img: "/images/LeasedPremises/img_2.png",
		name: "ЖК Яркий"
	},
	{
		id: 4,
		img: "/images/LeasedPremises/img_2.png",
		name: "Объект #1"
	},
	{
		id: 5,
		img: "/images/LeasedPremises/img_1.png",
		name: "Объект #2"
	},
	{
		id: 6,
		img: "/images/LeasedPremises/img.png",
		name: "Объект #3"
	}

]

export const LeasedPremisesList = () => {
	return (
		<div>
			<LeasedPremisesArray LeasedPremise={LeasedPremiseType}/>
		</div>
	)
}