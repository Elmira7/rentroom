import React from "react"
import {MyPremisesArray} from "./MyPremisesArray"
import img1 from "../../../../images/MyPremises/img.png"
import img2 from "../../../../images/MyPremises/img_1.png"
import img3 from "../../../../images/MyPremises/img_2.png"
import img4 from "../../../../images/MyPremises/img_3.png"

const MyPremisesType = [
	{
		img: img1,
		name: "Объект #1",
		status: "активен",
		indebtedness: "нет",
		counter: "опаздание",
		requests: 2
	},
	{
		img: img2,
		name: "Объект #1",
		status: "активен",
		indebtedness: "нет",
		counter: "опаздание",
		requests: 2
	},
	{
		img: img3,
		name: "Объект #1",
		status: "активен",
		indebtedness: "нет",
		counter: "опаздание",
		requests: 2
	},
	{
		img: img4,
		name: "Объект #1",
		status: "активен",
		indebtedness: "нет",
		counter: "опаздание",
		requests: 2
	}
]

export const MyPremisesList = () => {
	return (
		<div>
			<MyPremisesArray MyPremises={MyPremisesType}/>
		</div>
	)
}