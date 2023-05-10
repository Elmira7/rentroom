import React from "react"
import {Reviews, ReviewsProps} from "./Reviews"

interface ReviewsArrayProps {
    review: Array<ReviewsProps>
}

export const ReviewsArray = (props: ReviewsArrayProps) => {
	return (
		<div>
			{props.review.map((review: ReviewsProps, index: number) =>
				<Reviews key={index}
					img={review.img}
					name={review.name}
					review={review.review}/>
			)}
		</div>
	)

}