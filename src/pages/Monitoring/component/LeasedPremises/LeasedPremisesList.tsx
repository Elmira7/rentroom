import React from "react"
import {LeasedPremisesArray} from "./LeasedPremisesArray"
import img1 from "../../../../images/LeasedPremises/img.png"
import img2 from "../../../../images/LeasedPremises/img_1.png"
import img3 from "../../../../images/LeasedPremises/img_2.png"

const LeasedPremiseType = [
	{
		img: img1,
		name: "Объект #1"
	},
	{
		img: img2,
		name: "Баумана"
	},
	{
		img: img3,
		name: "ЖК Яркий"
	},
	{
		img: img3,
		name: "Объект #1"
	},
	{
		img: img2,
		name: "Объект #2"
	},
	{
		img: img1,
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