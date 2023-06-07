import React from "react"
import {ReviewsArray} from "./ReviewsArray"

const reviewType = [
	{
		img: "/images/avatar.svg",
		name: "Имя",
		review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "
	},
	{
		img: "/images/avatar.svg",
		name: "Имя",
		review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "
	},
	{
		img: "/images/avatar.svg",
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