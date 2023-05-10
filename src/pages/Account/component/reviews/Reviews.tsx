import React from "react"
import styles from "./Reviews.module.sass"

export interface ReviewsProps {
    img: string
    name: string
    review: string
}

export const Reviews = (props: ReviewsProps) => {
	return (
		<div className={styles.main}>
			<div>
				<img className={styles.main__img} alt={"avatar"} src={props.img}/>
			</div>
			<div className={styles.main__text}>
				<div className={styles.main__text__name}>{props.name}</div>
				<span className={styles.main__text__review}>{props.review}</span>
			</div>
		</div>
	)
}