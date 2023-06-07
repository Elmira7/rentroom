import React from "react"
import {MyPremisesArray} from "./MyPremisesArray"

const MyPremisesType = [
	{
		img: "/images/MyPremises/img.png",
		name: "Объект #1",
		status: "активен",
		indebtedness: "нет",
		counter: "опаздание",
		requests: 2
	},
	{
		img: "/images/MyPremises/img_1.png",
		name: "Объект #1",
		status: "активен",
		indebtedness: "нет",
		counter: "опаздание",
		requests: 2
	},
	{
		img: "/images/MyPremises/img_2.png",
		name: "Объект #1",
		status: "активен",
		indebtedness: "нет",
		counter: "опаздание",
		requests: 2
	},
	{
		img: "/images/MyPremises/img_3.png",
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