import React from "react"
import {Information} from "./Information"

const date = "2023-05-07"
const lastEntry = "2023-05-07"
const object = 3
const activeObject = 2
const review = 12
export const InformationList = () => {
	return (
		<>
			<Information date={date} lastEntry={lastEntry} object={object} activeObject={activeObject} review={review}/>
		</>
	)

}