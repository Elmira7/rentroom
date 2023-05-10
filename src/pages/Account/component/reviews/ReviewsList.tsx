import React from "react"
import {ReviewsArray} from "./ReviewsArray"
import img from "../../../../images/avatar.svg"

const reviewType = [
	{
		img: img,
		name: "Имя",
		review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "
	},
	{
		img: img,
		name: "Имя",
		review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "
	},
	{
		img: img,
		name: "Имя",
		review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "
	}
]
export const ReviewsList = () => {
	return (
		<div>
			<ReviewsArray review={reviewType}/>
		</div>
	)
}